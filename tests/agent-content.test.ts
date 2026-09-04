import { describe, expect, it } from "vitest";
import {
  NOT_A_FIT,
  SERVICES,
  WHEN_TO_USE,
  buildAboutMarkdown,
  buildAgentsMarkdown,
  buildContactMarkdown,
  buildHomeMarkdown,
  buildLlmsFullTxt,
  buildLlmsTxt,
  buildNotFoundMarkdown,
  buildPrivacyMarkdown,
} from "@/lib/agent-content";
import { FAQ_ITEMS, searchFaq } from "@/lib/faq";
import { AGENT_RESOURCES, CONTACT, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

describe("llms.txt（llmstxt.org 格式）", () => {
  const content = buildLlmsTxt();

  it("首行是 H1", () => {
    expect(content.split("\n")[0]).toMatch(/^# /);
  });

  it("H1 之后是引用块摘要", () => {
    const summaryLine = content.split("\n").find((line) => line.startsWith(">"));
    expect(summaryLine).toBeDefined();
    expect(summaryLine!.length).toBeGreaterThan(20);
  });

  it("包含 when-to-use 指引段落与全部条目", () => {
    expect(content).toContain("何时使用本站");
    for (const line of WHEN_TO_USE) {
      expect(content).toContain(line);
    }
  });

  it("声明不适用场景，避免代理误用", () => {
    for (const line of NOT_A_FIT) {
      expect(content).toContain(line);
    }
  });

  it("链接列表使用 - [名称](URL): 说明 的格式", () => {
    const linkLines = content.split("\n").filter((line) => line.startsWith("- ["));
    expect(linkLines.length).toBeGreaterThanOrEqual(8);
    for (const line of linkLines) {
      expect(line).toMatch(/^- \[[^\]]+\]\(https?:\/\/[^)]+\)(: .+)?$/);
    }
  });

  it("含 Optional 段（次要信息，可跳过）", () => {
    expect(content).toContain("## Optional");
  });

  it("指向机器可读资源与 MCP 端点", () => {
    expect(content).toContain(absoluteUrl(AGENT_RESOURCES.sitemap));
    expect(content).toContain(absoluteUrl(AGENT_RESOURCES.llmsFull));
    expect(content).toContain(absoluteUrl(AGENT_RESOURCES.mcpEndpoint));
    expect(content).toContain(absoluteUrl(AGENT_RESOURCES.mcpServerCard));
  });

  it("所有链接都是绝对地址", () => {
    const urls = [...content.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
    expect(urls.length).toBeGreaterThan(0);
    for (const url of urls) {
      expect(url).toMatch(/^https?:\/\//);
    }
  });
});

describe("页面 Markdown 变体", () => {
  const pages = [
    ["首页", buildHomeMarkdown()],
    ["关于", buildAboutMarkdown()],
    ["联系", buildContactMarkdown()],
    ["代理指南", buildAgentsMarkdown()],
    ["隐私", buildPrivacyMarkdown()],
  ] as const;

  it.each(pages)("%s 有唯一 H1 且正文超过 500 字符", (_name, content) => {
    const h1s = content.split("\n").filter((line) => /^# /.test(line));
    expect(h1s).toHaveLength(1);
    expect(content.length).toBeGreaterThan(500);
  });

  it.each(pages)("%s 的标题层级不跳级", (_name, content) => {
    const levels = content
      .split("\n")
      .filter((line) => /^#{1,6} /.test(line))
      .map((line) => line.match(/^(#+)/)![1].length);
    let previous = 0;
    for (const level of levels) {
      if (previous !== 0) expect(level).toBeLessThanOrEqual(previous + 1);
      previous = level;
    }
  });

  it("首页 Markdown 含全部 FAQ 问答", () => {
    const home = buildHomeMarkdown();
    for (const item of FAQ_ITEMS) {
      expect(home).toContain(item.question);
      expect(home).toContain(item.answer);
    }
  });

  it("首页 Markdown 含全部服务", () => {
    const home = buildHomeMarkdown();
    for (const service of SERVICES) {
      expect(home).toContain(service.name);
    }
  });

  it("隐私政策覆盖收集、使用、保留、Cookie 与权利", () => {
    const privacy = buildPrivacyMarkdown();
    for (const heading of ["我们收集什么", "我们如何使用", "存储与保留", "Cookie", "你的权利"]) {
      expect(privacy).toContain(heading);
    }
  });

  it("联系页含邮箱、电话与运营主体", () => {
    const contact = buildContactMarkdown();
    expect(contact).toContain(CONTACT.email);
    expect(contact).toContain(CONTACT.phoneDisplay);
    expect(contact).toContain(CONTACT.legalEntity);
  });

  it("代理指南列出全部 MCP 工具", () => {
    const agents = buildAgentsMarkdown();
    for (const tool of [
      "get_community_profile",
      "list_services",
      "get_policy_incentives",
      "search_faq",
      "get_contact_info",
    ]) {
      expect(agents).toContain(tool);
    }
  });
});

describe("llms-full.txt", () => {
  it("汇总全部页面正文", () => {
    const full = buildLlmsFullTxt();
    expect(full).toContain(`# ${SITE_NAME}`);
    expect(full).toContain("关于");
    expect(full).toContain("隐私政策");
    expect(full.length).toBeGreaterThan(buildHomeMarkdown().length);
  });
});

describe("404 Markdown", () => {
  it("含标题、站内页面清单与机器可读入口", () => {
    const body = buildNotFoundMarkdown("/nope");
    expect(body).toMatch(/^# 404/);
    expect(body).toContain("/nope");
    expect(body).toContain(absoluteUrl("/"));
    expect(body).toContain(absoluteUrl(AGENT_RESOURCES.sitemap));
    expect(body).toContain(absoluteUrl(AGENT_RESOURCES.llms));
    expect(body.length).toBeGreaterThan(200);
  });

  it("不传路径时也能生成", () => {
    expect(buildNotFoundMarkdown()).toContain("该路径");
  });
});

describe("站点常量", () => {
  it("SITE_URL 无尾斜杠", () => {
    expect(SITE_URL.endsWith("/")).toBe(false);
  });

  it("absoluteUrl 拼接正确且幂等", () => {
    expect(absoluteUrl("/about")).toBe(`${SITE_URL}/about`);
    expect(absoluteUrl("about")).toBe(`${SITE_URL}/about`);
    expect(absoluteUrl("https://example.com/x")).toBe("https://example.com/x");
  });

  it("电话号码是 E.164 格式", () => {
    expect(CONTACT.phoneE164).toMatch(/^\+\d{8,15}$/);
  });
});

describe("searchFaq", () => {
  it("按关键词命中相关问答", () => {
    const results = searchFaq("注册");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((item) => item.question.includes("注册"))).toBe(true);
  });

  it("尊重 limit 参数", () => {
    expect(searchFaq("OPC", 2)).toHaveLength(2);
  });

  it("无命中时返回空数组", () => {
    expect(searchFaq("zzzzzz-不存在的词")).toEqual([]);
  });

  it("空查询返回默认条目", () => {
    expect(searchFaq("").length).toBeGreaterThan(0);
  });
});
