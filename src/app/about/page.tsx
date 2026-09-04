import type { Metadata } from "next";
import Link from "next/link";
import { Bullets, PageShell, Section } from "@/components/agent-pages/prose";
import { FACILITIES, SERVICES, SUMMARY } from "@/lib/agent-content";
import { CERTIFICATIONS, CONTACT, KEY_FACTS, SITE_NAME, SITE_NAME_EN } from "@/lib/site";

export const metadata: Metadata = {
  title: `关于我们 | ${SITE_NAME}`,
  description:
    "艾窝窝OPC社区的机构沿革、资质认证与服务能力：源自易得创新中心16年积累，服务2000+中外企业，运营面积约20000㎡，北京市唯一“国际化”+“数字经济”双认证孵化器平台。",
  alternates: { canonical: "/about", types: { "text/markdown": "/about.md" } },
  openGraph: {
    title: `关于我们 | ${SITE_NAME}`,
    description: "机构沿革、资质认证、运营主体与服务能力。",
    url: "/about",
    type: "website",
  },
};

const MILESTONES = [
  { year: "2010", title: "易得商务中心", text: "从传统商务中心起步，扎根朝阳，服务中小企业。" },
  { year: "2015", title: "联合办公转型", text: "升级为联合办公+孵化器平台，获朝阳区荣誉。" },
  {
    year: "2020",
    title: "双认证孵化器",
    text: "成为北京唯一获“国际化”+“数字经济”双认证的孵化器平台。",
  },
  {
    year: "2026",
    title: "艾窝窝 · AI赋能",
    text: "创立艾窝窝品牌，获北京市OPC认证社区，孵化中外一人公司。",
  },
];

const PARTNERS =
  "腾讯云（WorkBuddy二级代理）、中国移动移动云、清华大学继续教育学院、中国社科院城竞中心、金网络、歌华有线、谋信传媒";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow={`关于 · About ${SITE_NAME_EN}`}
      title={`关于${SITE_NAME}`}
      lede={SUMMARY}
    >
      <Section heading="我们是谁">
        <p>
          {SITE_NAME}（{SITE_NAME_EN}）是{CONTACT.city}
          {CONTACT.district}的OPC（One Person Company，一人公司／超级经济个体）认证社区，由
          {CONTACT.legalEntity}运营。品牌名取自北京传统小吃“艾窝窝”——扎根本土，扎实做事。
        </p>
        <p>
          社区脱胎于易得创新中心的十六年积累：从2010年的传统商务中心起步，2015年升级为联合办公与孵化器平台，2020年成为北京市唯一同时获得“国际化”与“数字经济”双认证的孵化器平台，2026年创立艾窝窝品牌并获评北京市OPC认证社区。我们把大厂的AI能力翻译成中小企业听得懂、用得上的服务，做企业AI落地的“管道”。
        </p>
      </Section>

      <Section heading="沿革">
        <ol className="flex flex-col gap-4">
          {MILESTONES.map((milestone) => (
            <li key={milestone.year} className="flex flex-col gap-1 border-l-2 border-gray-3 pl-4">
              <span className="font-display text-[22px] leading-7 font-bold tracking-[0.02em] text-ink-black">
                {milestone.year}
              </span>
              <span className="text-ink">{milestone.title}</span>
              <span className="text-hushed">{milestone.text}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section heading="规模与资质">
        <Bullets items={KEY_FACTS.map((fact) => `${fact.value} ${fact.label}`)} />
        <Bullets items={CERTIFICATIONS.map((cert) => `${cert.name}（${cert.by}）`)} />
      </Section>

      <Section heading="我们做什么">
        <ul className="flex flex-col gap-3">
          {SERVICES.map((service) => (
            <li key={service.name} className="flex flex-col gap-1">
              <span className="text-ink">{service.name}</span>
              <span className="text-hushed">{service.summary}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="空间">
        <p>
          运营面积约20000㎡，提供{FACILITIES.join("、")}
          等场景，支持灵活入驻。社区常态化举办创业沙龙、AI实战训练营、跨境电商培训、资源对接日与OPC专场路演。
        </p>
      </Section>

      <Section heading="合作生态">
        <p>{PARTNERS}。</p>
      </Section>

      <Section heading="联系">
        <p>
          入驻与合作请发邮件至{" "}
          <a className="underline underline-offset-2" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          ，或致电{" "}
          <a className="underline underline-offset-2" href={`tel:${CONTACT.phoneDisplay}`}>
            {CONTACT.phoneDisplay}
          </a>
          。更多方式见{" "}
          <Link className="underline underline-offset-2" href="/contact">
            联系我们
          </Link>
          。
        </p>
      </Section>
    </PageShell>
  );
}
