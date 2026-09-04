// 首页 JSON-LD:Organization（含 contactPoint / address / sameAs / logo）、WebSite、
// Service 列表与 FAQPage。代理与搜索引擎用它做实体识别、资质核验与问答归属。
import { FAQ_ITEMS } from "@/lib/faq";
import { SERVICES } from "@/lib/agent-content";
import {
  AGENT_RESOURCES,
  CONTACT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAME_EN,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const routerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      alternateName: SITE_NAME_EN,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(AGENT_RESOURCES.logo),
      },
      image: absoluteUrl(AGENT_RESOURCES.ogImage),
      email: CONTACT.email,
      telephone: CONTACT.phoneE164,
      sameAs: [CONTACT.github],
      address: {
        "@type": "PostalAddress",
        addressCountry: CONTACT.countryCode,
        addressRegion: CONTACT.city,
        addressLocality: CONTACT.district,
        streetAddress: `${CONTACT.city}${CONTACT.district}`,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          name: "入驻与合作咨询",
          email: CONTACT.email,
          telephone: CONTACT.phoneE164,
          areaServed: "CN",
          availableLanguage: ["zh-CN", "en"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          name: "企业AI培训与服务采购",
          email: CONTACT.email,
          telephone: CONTACT.phoneE164,
          areaServed: "CN",
          availableLanguage: ["zh-CN"],
        },
      ],
      parentOrganization: {
        "@type": "Organization",
        name: CONTACT.legalEntity,
      },
      knowsAbout: [
        "一人公司（OPC）注册",
        "北京市OPC政策补贴",
        "AI任务撮合",
        "企业AI培训",
        "孵化器与联合办公",
        "跨境出海服务",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "从注册孵化到AI落地，全链条赋能——OPC孵化服务、蹲窝儿AI任务撮合、FDE·AI培训体系、企业基础服务。",
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "zh-CN",
    },
    ...SERVICES.map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.summary,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "Country", name: "中国" },
    })),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      inLanguage: "zh-CN",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
} as const;
