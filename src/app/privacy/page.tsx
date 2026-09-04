import type { Metadata } from "next";
import { PageShell, Section } from "@/components/agent-pages/prose";
import { CONTACT, CONTENT_UPDATED, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `隐私政策 | ${SITE_NAME}`,
  description:
    "艾窝窝OPC社区的隐私政策：咨询表单收集哪些信息、如何使用与保存、第三方服务范围、Cookie 使用以及你的查阅与删除权利。",
  alternates: { canonical: "/privacy", types: { "text/markdown": "/privacy.md" } },
  openGraph: {
    title: `隐私政策 | ${SITE_NAME}`,
    description: "表单信息的收集、使用、保留与联系方式。",
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="隐私 · Privacy"
      title="隐私政策"
      lede={`${SITE_NAME}（运营主体：${CONTACT.legalEntity}）如何收集、使用和保护你在本站提交的信息。生效日期：${CONTENT_UPDATED}。`}
    >
      <Section heading="我们收集什么">
        <p>
          本站是单页营销站点，只有一个咨询表单。你主动填写并提交时，我们收集：姓名、公司／组织（选填）、邮箱、电话（选填）、咨询方向与留言内容。
        </p>
        <p>我们不使用第三方广告追踪脚本，不建立跨站用户画像，也不向第三方出售个人信息。</p>
      </Section>

      <Section heading="我们如何使用">
        <p>
          收集到的信息仅用于：回复你的咨询、评估入驻或合作适配、以及在你同意的前提下告知政策申报窗口等社区通知。我们不会将这些信息用于与你咨询无关的营销。
        </p>
      </Section>

      <Section heading="存储与保留">
        <p>
          咨询信息由{CONTACT.legalEntity}
          在中国境内保存，保留期限为完成沟通后的两年，或直至你要求删除。我们按内部权限控制访问范围，仅限对接你需求的同事可见。
        </p>
      </Section>

      <Section heading="第三方服务">
        <p>
          站点托管在 Vercel，其服务器日志会记录访问IP、时间与
          User-Agent，用于运行与安全审计。中文字体由 Google Fonts
          提供。除此之外，本站不嵌入第三方统计或社交追踪代码。
        </p>
      </Section>

      <Section heading="Cookie">
        <p>
          本站不设置用于追踪的 Cookie。浏览器本地存储仅在你使用页面交互功能时保存界面偏好，数据留在你的浏览器内，不会上传。
        </p>
      </Section>

      <Section heading="你的权利">
        <p>
          你可以随时要求查阅、更正或删除我们持有的关于你的信息，也可以撤回联系授权。请发邮件至{" "}
          <a className="underline underline-offset-2" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>{" "}
          或致电{" "}
          <a className="underline underline-offset-2" href={`tel:${CONTACT.phoneDisplay}`}>
            {CONTACT.phoneDisplay}
          </a>
          ，我们会在15个工作日内答复。
        </p>
      </Section>

      <Section heading="未成年人">
        <p>本站服务面向企业与创业者，不面向14岁以下未成年人，也不会主动收集其信息。</p>
      </Section>

      <Section heading="政策更新">
        <p>
          政策如有变更，会更新本页并调整页首的生效日期。重大变更会通过邮件告知已联系过我们的用户。
        </p>
      </Section>
    </PageShell>
  );
}
