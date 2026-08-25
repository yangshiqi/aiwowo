// JSON-LD structured data for 艾窝窝OPC社区 (AI WOWO OPC Community)
export const routerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aiwowo.example/#organization",
      name: "艾窝窝OPC社区",
      alternateName: "AI WOWO OPC Community",
      description:
        "孵化中外OPC（一人公司），以AI赋能企业服务生态，让超级个体从这里起飞。北京市OPC认证社区。",
      email: "AIWOWO@agent.qq.com",
      telephone: "+86-13701202210",
      address: {
        "@type": "PostalAddress",
        addressLocality: "北京市朝阳区",
        addressCountry: "CN",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "北京恒瑞永嘉资产管理有限公司",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://aiwowo.example/#website",
      name: "艾窝窝OPC社区",
      description:
        "从注册孵化到AI落地，全链条赋能——OPC孵化服务、蹲窝儿AI任务撮合、FDE·AI培训体系、企业基础服务。",
      publisher: { "@id": "https://aiwowo.example/#organization" },
      inLanguage: "zh-CN",
    },
  ],
} as const;
