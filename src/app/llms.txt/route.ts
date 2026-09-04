// /llms.txt —— llmstxt.org 约定的站点索引(含 when-to-use 指引)。
import { buildLlmsTxt } from "@/lib/agent-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
