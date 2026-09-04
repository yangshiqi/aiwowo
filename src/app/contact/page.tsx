import type { Metadata } from "next";
import Link from "next/link";
import { Bullets, PageShell, Section } from "@/components/agent-pages/prose";
import { NOT_A_FIT, WHEN_TO_USE } from "@/lib/agent-content";
import { CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `联系我们 | ${SITE_NAME}`,
  description:
    "艾窝窝OPC社区的联系方式与入驻流程：邮箱 AIWOWO@agent.qq.com、电话 13701202210，地址北京市朝阳区，运营主体北京恒瑞永嘉资产管理有限公司。",
  alternates: { canonical: "/contact", types: { "text/markdown": "/contact.md" } },
  openGraph: {
    title: `联系我们 | ${SITE_NAME}`,
    description: "入驻咨询、企业合作、培训采购与媒体联络的对接方式。",
    url: "/contact",
    type: "website",
  },
};

const STEPS = [
  "通过邮件、电话或首页表单说明需求（公司阶段、业务方向、期望入驻时间）。",
  "社区回访确认资质与政策适配，说明可申领的补贴与所需材料。",
  "注册或迁址办理，同步申领Token券、算力券等资源包。",
  "入驻空间，接入社群活动、培训与蹲窝儿平台。",
];

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="联系 · Contact"
      title={`联系${SITE_NAME}`}
      lede="入驻咨询、企业合作、培训采购与媒体联络，都可以直接找到我们。"
    >
      <Section heading="联系方式">
        <dl className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.5px] text-gray-5 uppercase">邮箱</dt>
            <dd>
              <a className="underline underline-offset-2" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.5px] text-gray-5 uppercase">电话</dt>
            <dd>
              <a className="underline underline-offset-2" href={`tel:${CONTACT.phoneDisplay}`}>
                {CONTACT.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.5px] text-gray-5 uppercase">地址</dt>
            <dd>
              {CONTACT.city}
              {CONTACT.district}
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.5px] text-gray-5 uppercase">运营主体</dt>
            <dd>{CONTACT.legalEntity}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[12px] tracking-[0.5px] text-gray-5 uppercase">工作时间</dt>
            <dd>周一至周五 9:30–18:30（北京时间，UTC+8）</dd>
          </div>
        </dl>
        <p className="text-hushed">
          也可以在{" "}
          <Link className="underline underline-offset-2" href="/#contact">
            首页表单
          </Link>{" "}
          留言，我们会在收到后尽快回复。
        </p>
      </Section>

      <Section heading="我们能接哪些需求">
        <Bullets items={WHEN_TO_USE} />
      </Section>

      <Section heading="入驻流程">
        <ol className="flex list-decimal flex-col gap-2 pl-5 marker:text-[#0040a8]">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>

      <Section heading="不适用的请求">
        <Bullets items={NOT_A_FIT} />
      </Section>
    </PageShell>
  );
}
