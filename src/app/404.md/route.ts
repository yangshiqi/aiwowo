// /404.md —— 404 指路正文的 Markdown 变体(供代理直接抓取)。
import { buildNotFoundMarkdown } from "@/lib/agent-content";
import { markdownResponse } from "@/lib/markdown-response";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(buildNotFoundMarkdown(), { status: 404, canonical: "/404.md" });
}
