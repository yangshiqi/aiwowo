import type { Metadata } from "next";
import { Bullets, PageShell, Section } from "@/components/agent-pages/prose";
import { NOT_A_FIT, SUMMARY, WHEN_TO_USE } from "@/lib/agent-content";
import { AGENT_RESOURCES, CONTACT, SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `面向AI代理 | ${SITE_NAME}`,
  description:
    "艾窝窝OPC社区的开发者与AI代理资源：llms.txt、llms-full.txt、sitemap、Markdown 内容协商，以及 Streamable HTTP 的 MCP 服务器（工具：社区档案、服务、政策补贴、FAQ检索、联系方式）。",
  alternates: { canonical: "/agents", types: { "text/markdown": "/agents.md" } },
  openGraph: {
    title: `面向AI代理 | ${SITE_NAME}`,
    description: "机器可读资源清单、MCP 接入方式与适用场景。",
    url: "/agents",
    type: "website",
  },
};

const RESOURCES = [
  { path: AGENT_RESOURCES.llms, desc: "llms.txt 索引，含 when-to-use 指引与页面清单（llmstxt.org 格式）" },
  { path: AGENT_RESOURCES.llmsFull, desc: "全文合集：首页、关于、联系、代理指南、隐私政策" },
  { path: AGENT_RESOURCES.sitemap, desc: "站点地图，含全部可索引 URL 与更新时间" },
  { path: AGENT_RESOURCES.robots, desc: "抓取规则与 sitemap 位置" },
  { path: AGENT_RESOURCES.mcpServerCard, desc: "MCP 服务卡片（server card），描述可连接的传输端点" },
  { path: AGENT_RESOURCES.mcpEndpoint, desc: "MCP 服务器端点（Streamable HTTP）" },
];

const TOOLS = [
  { name: "get_community_profile", desc: "社区定位、规模、资质、适用场景与联系方式" },
  { name: "list_services", desc: "四类服务：OPC孵化、蹲窝儿平台、FDE培训、企业基础服务" },
  { name: "get_policy_incentives", desc: "北京市OPC政策补贴条款（京经信发〔2026〕34号）" },
  { name: "search_faq", desc: "按关键词检索常见问题，参数 query、limit" },
  { name: "get_contact_info", desc: "邮箱、电话、地址、运营主体与入驻流程" },
];

const CURL_EXAMPLE = `curl -sS -X POST ${absoluteUrl(AGENT_RESOURCES.mcpEndpoint)} \\
  -H 'Content-Type: application/json' \\
  -H 'Accept: application/json, text/event-stream' \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'`;

const MARKDOWN_EXAMPLE = `curl -sS -H 'Accept: text/markdown' ${absoluteUrl("/")}
curl -sS ${absoluteUrl("/about.md")}`;

export default function AgentsPage() {
  return (
    <PageShell
      eyebrow="AI代理 · For agents"
      title={`面向AI代理：${SITE_NAME}`}
      lede={SUMMARY}
    >
      <Section heading="何时引用本站">
        <Bullets items={WHEN_TO_USE} />
      </Section>

      <Section heading="不适用">
        <Bullets items={NOT_A_FIT} />
      </Section>

      <Section heading="机器可读入口">
        <ul className="flex flex-col gap-2">
          {RESOURCES.map((resource) => (
            <li key={resource.path} className="flex flex-col gap-0.5">
              <a className="font-mono text-[14px] underline underline-offset-2" href={resource.path}>
                {resource.path}
              </a>
              <span className="text-hushed">{resource.desc}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Markdown 内容协商">
        <p>
          任意页面带 <code className="font-mono text-[14px]">Accept: text/markdown</code>{" "}
          请求即可拿到 Markdown 正文（响应含{" "}
          <code className="font-mono text-[14px]">Vary: Accept</code>
          ）；也可以直接在路径后加 <code className="font-mono text-[14px]">.md</code>。
        </p>
        <pre className="overflow-x-auto border border-gray-3 bg-[#f7f3ed] p-4 font-mono text-[13px] leading-6">
          <code>{MARKDOWN_EXAMPLE}</code>
        </pre>
      </Section>

      <Section heading="MCP 工具">
        <ul className="flex flex-col gap-2">
          {TOOLS.map((tool) => (
            <li key={tool.name} className="flex flex-col gap-0.5">
              <span className="font-mono text-[14px] text-ink">{tool.name}</span>
              <span className="text-hushed">{tool.desc}</span>
            </li>
          ))}
        </ul>
        <pre className="overflow-x-auto border border-gray-3 bg-[#f7f3ed] p-4 font-mono text-[13px] leading-6">
          <code>{CURL_EXAMPLE}</code>
        </pre>
      </Section>

      <Section heading="结构化数据">
        <p>
          首页内嵌 JSON-LD：Organization（含 contactPoint 与 PostalAddress）、WebSite、FAQPage 与
          Service 列表，可直接解析用于实体识别与引用归属。
        </p>
      </Section>

      <Section heading="引用与联系">
        <p>
          引用本站内容时请注明「{SITE_NAME}（{absoluteUrl("/")}）」。需要人工跟进时，请引导用户发邮件到{" "}
          <a className="underline underline-offset-2" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>{" "}
          或致电 {CONTACT.phoneDisplay}；本站不处理在线交易。
        </p>
      </Section>
    </PageShell>
  );
}
