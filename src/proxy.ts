/**
 * Markdown 内容协商(acceptmarkdown.com)。
 *
 * - `Accept: text/markdown` 请求已知页面 → 改写到对应的 `.md` 路由。
 * - 未知路径且要 Markdown → 直接返回 404 + Markdown 指路正文。
 * - Accept 既不接受 html 也不接受 markdown → 406。
 * - 其余情况放行,但把 `Accept` 追加进 `Vary`,避免 CDN 把 HTML 变体
 *   回给要 Markdown 的代理(反之亦然)。
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { negotiateFormat } from "@/lib/negotiation";
import { buildNotFoundMarkdown } from "@/lib/agent-content";
import { markdownResponse, notAcceptableResponse } from "@/lib/markdown-response";

/** 页面路径 → Markdown 变体路径。 */
const MARKDOWN_VARIANTS: Record<string, string> = {
  "/": "/index.md",
  "/about": "/about.md",
  "/contact": "/contact.md",
  "/agents": "/agents.md",
  "/privacy": "/privacy.md",
};

/** 这些前缀本身就是机器可读资源或静态资产,不参与 HTML/Markdown 协商。 */
function isExempt(pathname: string): boolean {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/.well-known/") ||
    pathname.startsWith("/sites/") ||
    pathname.endsWith(".md") ||
    pathname.endsWith(".txt") ||
    pathname.endsWith(".xml") ||
    pathname.includes(".")
  );
}

/** 追加 Vary 值,保留 Next 自己写入的 RSC 相关条目。 */
function appendVary(response: NextResponse, value: string): NextResponse {
  const existing = response.headers.get("Vary");
  const parts = existing
    ? existing
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean)
    : [];
  for (const token of value.split(",").map((part) => part.trim())) {
    if (!parts.some((part) => part.toLowerCase() === token.toLowerCase())) parts.push(token);
  }
  response.headers.set("Vary", parts.join(", "));
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isExempt(pathname)) return NextResponse.next();

  // RSC 导航请求由 Next 内部处理,不做协商,避免与客户端路由冲突。
  if (request.headers.get("rsc") === "1") return NextResponse.next();

  const format = negotiateFormat(request.headers.get("accept"));

  if (format === "unacceptable") return notAcceptableResponse();

  if (format === "markdown") {
    const variant = MARKDOWN_VARIANTS[pathname];
    if (variant) {
      return appendVary(
        NextResponse.rewrite(new URL(variant, request.url)),
        "Accept, Accept-Encoding",
      );
    }
    return markdownResponse(buildNotFoundMarkdown(pathname), { status: 404 });
  }

  return appendVary(NextResponse.next(), "Accept, Accept-Encoding");
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
