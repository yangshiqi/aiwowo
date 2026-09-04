import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Section } from "@/components/agent-pages/prose";
import { AGENT_RESOURCES, CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `页面不存在 | ${SITE_NAME}`,
  description: "该路径不存在。这里列出本站的全部页面与机器可读资源入口。",
  robots: { index: false, follow: true },
  alternates: { types: { "text/markdown": "/404.md" } },
};

const PAGES = [
  { href: "/", label: "首页", desc: "社区定位、服务矩阵、政策红利、常见问题" },
  { href: "/about", label: "关于我们", desc: "机构沿革、资质认证与服务能力" },
  { href: "/contact", label: "联系我们", desc: "邮箱、电话、地址与入驻流程" },
  { href: "/agents", label: "面向AI代理", desc: "机器可读资源清单与 MCP 接入方式" },
  { href: "/privacy", label: "隐私政策", desc: "信息收集、使用与你的权利" },
];

const MACHINE_READABLE = [
  { href: AGENT_RESOURCES.llms, desc: "站点索引与使用场景（llms.txt）" },
  { href: AGENT_RESOURCES.llmsFull, desc: "全文合集（llms-full.txt）" },
  { href: AGENT_RESOURCES.sitemap, desc: "全部可索引 URL（sitemap.xml）" },
  { href: AGENT_RESOURCES.mcpServerCard, desc: "MCP 服务卡片" },
];

/**
 * 404 页面。除了给人看的指路,也给代理列出 sitemap / llms.txt / MCP 入口,
 * 便于它们从错误路径恢复。带 `Accept: text/markdown` 的请求会由 proxy 返回
 * 404 + Markdown 正文。
 */
export default function NotFound() {
  return (
    <PageShell
      eyebrow="404 · Not found"
      title="页面不存在"
      lede={`该路径在${SITE_NAME}上不存在。本站是单页营销站点，下面是全部可用页面与机器可读入口。`}
    >
      <Section heading="可用页面">
        <ul className="flex flex-col gap-2">
          {PAGES.map((page) => (
            <li key={page.href} className="flex flex-col gap-0.5">
              <Link className="underline underline-offset-2" href={page.href}>
                {page.label}
              </Link>
              <span className="text-hushed">{page.desc}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="机器可读入口">
        <ul className="flex flex-col gap-2">
          {MACHINE_READABLE.map((resource) => (
            <li key={resource.href} className="flex flex-col gap-0.5">
              <a className="font-mono text-[14px] underline underline-offset-2" href={resource.href}>
                {resource.href}
              </a>
              <span className="text-hushed">{resource.desc}</span>
            </li>
          ))}
        </ul>
        <p className="text-hushed">
          带 <code className="font-mono text-[14px]">Accept: text/markdown</code>{" "}
          请求任意路径可获得 Markdown 版本，包括本 404 页。
        </p>
      </Section>

      <Section heading="需要人工协助">
        <p>
          发邮件至{" "}
          <a className="underline underline-offset-2" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>{" "}
          或致电{" "}
          <a className="underline underline-offset-2" href={`tel:${CONTACT.phoneDisplay}`}>
            {CONTACT.phoneDisplay}
          </a>
          。
        </p>
      </Section>
    </PageShell>
  );
}
