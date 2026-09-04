// /llms-full.txt —— 全站正文合集(首页、关于、联系、代理指南、隐私)。
import { buildLlmsFullTxt } from "@/lib/agent-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
