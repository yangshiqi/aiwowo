/**
 * Accept 头内容协商(RFC 9110 §12.5.1),用于 acceptmarkdown.com 约定:
 * 代理带 `Accept: text/markdown` 请求页面时返回 Markdown,否则返回 HTML。
 *
 * 规则:
 * - 没有 Accept 头 → html(所有类型都可接受)。
 * - 对 text/markdown 与 text/html 分别取“最具体匹配”的 q 值:
 *   精确类型 > text/* > *​/*;未匹配则 q = 0。
 * - text/markdown 被显式列出且 q > 0、且 q ≥ text/html 的 q → markdown。
 * - 否则只要 text/html(含通配)q > 0 → html。
 * - 两者都不可接受 → unacceptable(调用方回 406)。
 */

export type NegotiatedFormat = "markdown" | "html" | "unacceptable";

interface MediaRange {
  type: string;
  subtype: string;
  q: number;
}

export const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";

export function parseAccept(accept: string): MediaRange[] {
  return accept
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [range, ...params] = part.split(";").map((segment) => segment.trim());
      const [type = "*", subtype = "*"] = range.toLowerCase().split("/");
      let q = 1;
      for (const param of params) {
        const [key, value] = param.split("=").map((segment) => segment.trim());
        if (key?.toLowerCase() === "q" && value !== undefined) {
          const parsed = Number.parseFloat(value);
          q = Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), 1) : 0;
        }
      }
      return { type, subtype, q };
    });
}

/** 取某个具体类型在 Accept 列表中“最具体匹配”的 q 值;显式列出时 explicit=true。 */
function qualityFor(ranges: MediaRange[], type: string, subtype: string): { q: number; explicit: boolean } {
  let best: { specificity: number; q: number } | null = null;
  for (const range of ranges) {
    let specificity: number;
    if (range.type === type && range.subtype === subtype) specificity = 3;
    else if (range.type === type && range.subtype === "*") specificity = 2;
    else if (range.type === "*" && range.subtype === "*") specificity = 1;
    else continue;
    if (!best || specificity > best.specificity) best = { specificity, q: range.q };
  }
  if (!best) return { q: 0, explicit: false };
  return { q: best.q, explicit: best.specificity === 3 };
}

export function negotiateFormat(accept: string | null | undefined): NegotiatedFormat {
  if (!accept || accept.trim() === "") return "html";
  const ranges = parseAccept(accept);
  if (ranges.length === 0) return "html";
  const markdown = qualityFor(ranges, "text", "markdown");
  const html = qualityFor(ranges, "text", "html");
  if (markdown.explicit && markdown.q > 0 && markdown.q >= html.q) return "markdown";
  if (html.q > 0) return "html";
  return "unacceptable";
}

/** 代理是否明确要 Markdown(便于路由/中间件做一次判断)。 */
export function prefersMarkdown(accept: string | null | undefined): boolean {
  return negotiateFormat(accept) === "markdown";
}
