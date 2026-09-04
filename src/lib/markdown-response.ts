/**
 * 统一构造 Markdown 响应(acceptmarkdown.com 约定)。
 * 关键点:Content-Type 为 text/markdown; charset=utf-8,且必须带 `Vary: Accept`,
 * 否则 CDN 可能把 HTML 变体缓存后返回给要 Markdown 的代理(反之亦然)。
 */
import { MARKDOWN_CONTENT_TYPE } from "./negotiation";

export const MARKDOWN_CACHE_CONTROL =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";

export function markdownResponse(
  body: string,
  { status = 200, canonical }: { status?: number; canonical?: string } = {},
): Response {
  const headers = new Headers({
    "Content-Type": MARKDOWN_CONTENT_TYPE,
    Vary: "Accept, Accept-Encoding",
    "Cache-Control": MARKDOWN_CACHE_CONTROL,
  });
  // 指回该 Markdown 变体自身的地址,便于代理引用稳定 URL。
  if (canonical) headers.set("Content-Location", canonical);
  return new Response(body, { status, headers });
}

/** Accept 无法满足时的 406,附带可用类型说明。 */
export function notAcceptableResponse(): Response {
  return new Response(
    "406 Not Acceptable\n\n本站可提供 text/html 或 text/markdown。请调整 Accept 请求头。\n",
    {
      status: 406,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        Vary: "Accept, Accept-Encoding",
      },
    },
  );
}
