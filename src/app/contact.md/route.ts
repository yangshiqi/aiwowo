// /contact.md —— 页面的 Markdown 变体(llmstxt.org 的 .md 约定)。
import { buildContactMarkdown } from "@/lib/agent-content";
import { markdownResponse } from "@/lib/markdown-response";

export const dynamic = "force-static";

export function GET() {
  return markdownResponse(buildContactMarkdown(), { canonical: "/contact.md" });
}
