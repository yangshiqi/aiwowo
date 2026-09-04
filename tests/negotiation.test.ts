import { describe, expect, it } from "vitest";
import { MARKDOWN_CONTENT_TYPE, negotiateFormat, parseAccept, prefersMarkdown } from "@/lib/negotiation";

describe("parseAccept", () => {
  it("解析类型与 q 值", () => {
    expect(parseAccept("text/markdown;q=0.9, text/html;q=0.8")).toEqual([
      { type: "text", subtype: "markdown", q: 0.9 },
      { type: "text", subtype: "html", q: 0.8 },
    ]);
  });

  it("缺省 q 值按 1 处理，并忽略其他参数", () => {
    expect(parseAccept("text/html;level=1")).toEqual([{ type: "text", subtype: "html", q: 1 }]);
  });

  it("q 值超出范围时钳制到 [0,1]", () => {
    expect(parseAccept("text/html;q=5")[0].q).toBe(1);
    expect(parseAccept("text/html;q=-2")[0].q).toBe(0);
  });

  it("非法 q 值视为 0", () => {
    expect(parseAccept("text/html;q=abc")[0].q).toBe(0);
  });
});

describe("negotiateFormat", () => {
  it("显式请求 markdown 时返回 markdown", () => {
    expect(negotiateFormat("text/markdown")).toBe("markdown");
    expect(negotiateFormat("text/markdown, text/html;q=0.5")).toBe("markdown");
    expect(negotiateFormat("text/html;q=0.5, text/markdown;q=0.9")).toBe("markdown");
  });

  it("markdown 与 html 同权重时优先 markdown（显式声明视为意图）", () => {
    expect(negotiateFormat("text/html, text/markdown")).toBe("markdown");
  });

  it("html 权重更高时返回 html", () => {
    expect(negotiateFormat("text/html, text/markdown;q=0.4")).toBe("html");
  });

  it("markdown 的 q=0 表示明确拒绝", () => {
    expect(negotiateFormat("text/markdown;q=0, text/html")).toBe("html");
  });

  it("浏览器默认 Accept 返回 html", () => {
    expect(
      negotiateFormat("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,*/*;q=0.8"),
    ).toBe("html");
  });

  it("curl 的 */* 与缺省 Accept 返回 html", () => {
    expect(negotiateFormat("*/*")).toBe("html");
    expect(negotiateFormat(null)).toBe("html");
    expect(negotiateFormat("")).toBe("html");
  });

  it("通配不算显式声明 markdown", () => {
    expect(negotiateFormat("text/*")).toBe("html");
  });

  it("两者都不可接受时返回 unacceptable", () => {
    expect(negotiateFormat("application/json")).toBe("unacceptable");
    expect(negotiateFormat("text/html;q=0, text/markdown;q=0")).toBe("unacceptable");
  });

  it("prefersMarkdown 是 negotiateFormat 的便捷封装", () => {
    expect(prefersMarkdown("text/markdown")).toBe(true);
    expect(prefersMarkdown("text/html")).toBe(false);
  });
});

describe("MARKDOWN_CONTENT_TYPE", () => {
  it("符合 acceptmarkdown.com 要求的 charset", () => {
    expect(MARKDOWN_CONTENT_TYPE).toBe("text/markdown; charset=utf-8");
  });
});
