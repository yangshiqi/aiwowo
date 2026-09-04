/**
 * 站点级常量:名称、规范域名、联系方式、资源路径。
 * 供 metadata、JSON-LD、llms.txt、sitemap、MCP 服务卡片和子页面共用,保证对外信息一处维护。
 */

export const SITE_NAME = "艾窝窝OPC社区";
export const SITE_NAME_EN = "AI WOWO OPC Community";
export const SITE_TAGLINE = "给每个AI的梦想一个窝";
export const SITE_DESCRIPTION =
  "孵化中外OPC（一人公司），以AI赋能企业服务生态，让超级个体从这里起飞。北京市OPC认证社区，16年企业服务沉淀，2000+服务企业。";

/** 内容最近一次实质更新的日期(sitemap lastmod、隐私政策生效日等)。 */
export const CONTENT_UPDATED = "2026-09-04";

/**
 * 规范域名。优先读环境变量,便于绑定自定义域名后无需改代码;
 * 其次用 Vercel 注入的生产域名;最后回退到当前的 vercel.app 域名。
 */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (fromVercel) return `https://${fromVercel}`.replace(/\/+$/, "");
  return "https://aiwowo-website.vercel.app";
}

export const SITE_URL = resolveSiteUrl();

/** 把站内路径拼成绝对 URL(sitemap、canonical、JSON-LD 需要绝对地址)。 */
export function absoluteUrl(path = "/"): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const ASSET_BASE = "/sites/router-com-92408672/root-8a5edab2";

export const CONTACT = {
  email: "AIWOWO@agent.qq.com",
  /** 展示用号码 */
  phoneDisplay: "13701202210",
  /** E.164,用于 tel: 链接与结构化数据 */
  phoneE164: "+8613701202210",
  district: "朝阳区",
  city: "北京市",
  countryCode: "CN",
  legalEntity: "北京恒瑞永嘉资产管理有限公司",
  github: "https://github.com/yangshiqi",
} as const;

export const CERTIFICATIONS = [
  { name: "OPC认证社区", by: "北京市经信局认定" },
  { name: "国际化认证", by: "服务中外企业" },
  { name: "数字经济认证", by: "市级数字转型能力" },
  { name: "腾讯云生态伙伴", by: "WorkBuddy二级代理" },
] as const;

export const KEY_FACTS = [
  { value: "2000+", label: "服务企业" },
  { value: "20000㎡", label: "运营面积" },
  { value: "16年", label: "企业服务沉淀" },
] as const;

/** 站点内可供代理直接读取的机器可读资源。 */
export const AGENT_RESOURCES = {
  llms: "/llms.txt",
  llmsFull: "/llms-full.txt",
  sitemap: "/sitemap.xml",
  robots: "/robots.txt",
  mcpEndpoint: "/api/mcp",
  mcpServerCard: "/.well-known/mcp/server-card.json",
  ogImage: `${ASSET_BASE}/seo/og-image.png`,
  logo: `${ASSET_BASE}/seo/apple-icon.png`,
} as const;
