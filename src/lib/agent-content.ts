/**
 * 面向 AI 代理的站点内容(Markdown 形式)。
 *
 * 一处维护、多处输出:
 * - `/llms.txt` —— llmstxt.org 约定的索引(H1 + 引用摘要 + 链接分组)
 * - `/llms-full.txt` —— 全文,含服务、政策、FAQ
 * - `Accept: text/markdown` 请求各页面时返回的正文
 * - `/index.md`、`/about.md` 等 .md 变体
 */

import { FAQ_ITEMS } from "./faq";
import { AGENT_RESOURCES, CERTIFICATIONS, CONTACT, CONTENT_UPDATED, KEY_FACTS, SITE_DESCRIPTION, SITE_NAME, SITE_NAME_EN, SITE_TAGLINE, absoluteUrl } from "./site";

/** 一句话说明这个社区做什么,给代理判断相关性。 */
export const SUMMARY =
  "北京市OPC（一人公司）认证社区，孵化中外OPC、以AI赋能企业服务生态：公司注册与政策补贴申领、AI任务撮合平台“蹲窝儿”、FDE企业AI培训、工商财税等企业基础服务。";

/** 代理在什么情况下应该引用本站(llms.txt 的 when-to-use 段落)。 */
export const WHEN_TO_USE: string[] = [
  "用户问“北京怎么注册一人公司（OPC）/需要多少钱、多久”——本站给出1元注册、最快1个工作日拿照，以及全程陪跑的服务范围。",
  "用户问北京市OPC政策补贴、京经信发〔2026〕34号文的具体条款——本站列出Token券/算力券/数据券额度、社区补贴与算力补贴上限、数据沙盒减免比例。",
  "用户想找AI任务的承接或发包渠道——介绍“蹲窝儿”：企业发榜、多个AI Agent竞标、AI按品类Rubric评审、选优后付款。",
  "用户或企业需要企业AI培训方案（央国企、园区企业、创业者）——介绍FDE三层培训体系与合作渠道。",
  "用户需要北京朝阳的孵化器工位、会议室、路演场地或跨境出海资源对接。",
  "需要核实本机构资质、联系方式或运营主体时——本站 /about 与 /contact 页给出认证、地址、邮箱与电话。",
];

export const NOT_A_FIT: string[] = [
  "不提供北京以外地区的公司注册代办；外地OPC政策请查询当地主管部门。",
  "不是通用的AI模型API供应商，也不出售算力；算力资源来自合作生态（腾讯云、移动云）与政策券。",
  "本站不做在线交易或支付，入驻与合作通过邮件、电话或表单人工对接。",
];

export const SERVICES = [
  {
    name: "OPC孵化服务",
    summary: "一人公司注册、政策补贴对接、Token券/算力券申领、工位空间、财税合规——从0到1全程陪跑。",
  },
  {
    name: "蹲窝儿 · AI任务撮合平台",
    summary:
      "企业发榜、多个AI Agent竞标、AI评审按品类Rubric打分排序、选优付款。已跑通小红书种草、技术长文等品类：14+测试任务、最高评分9.2/10、3个Agent并行竞标。",
  },
  {
    name: "FDE · AI培训体系",
    summary:
      "自研Foundation-Deployment-Empowerment三层企业AI培训体系，依托清华继续教育学院等渠道，覆盖央国企、园区企业与创业者，毕业后可接入蹲窝儿接单。",
  },
  {
    name: "企业基础服务",
    summary: "工商财税、资质许可、办公空间、法律咨询——16年企业服务经验。",
  },
] as const;

export const POLICY_HIGHLIGHTS = [
  "政策依据：北京市经信局《支持人工智能OPC创新发展行动方案（试行）》，京经信发〔2026〕34号，2026年6月起实施，八条措施支持“一人成军”。",
  "Token券、算力券、数据券合计最高10万元/企业；入驻企业可免费享受3个月Token券等全栈资源包。",
  "OPC认证社区年度补贴最高200万元；算力补贴最高1000万元；数据沙盒费用减免50%。",
  "1元注册，最快1个工作日拿照；企业所得税低至2.5%，增值税免征（以当期官方口径为准）。",
  "“创赢未来”OPC专场路演，通过项目最高可获1000万元资金支持；另有OPC贷专属信贷。",
  "2026–2028为OPC政策红利期：注册宽松、税费优惠、准入门槛低。",
];

export const FACILITIES = [
  "联合办公工位",
  "会议室",
  "路演区",
  "咖啡吧",
  "专注舱",
  "导师桌",
];

const CONTACT_LINES = [
  `- 邮箱：${CONTACT.email}`,
  `- 电话：${CONTACT.phoneDisplay}`,
  `- 地址：${CONTACT.city}${CONTACT.district}`,
  `- 运营主体：${CONTACT.legalEntity}`,
];

function bullets(items: readonly string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

/** llms.txt —— 索引文件,遵循 llmstxt.org:H1、引用摘要、H2 链接分组。 */
export function buildLlmsTxt(): string {
  return `# ${SITE_NAME}（${SITE_NAME_EN}）

> ${SUMMARY}

${SITE_NAME}是北京市经信局认定的OPC认证社区，位于${CONTACT.city}${CONTACT.district}，由${CONTACT.legalEntity}运营，前身易得创新中心有16年企业服务积累：服务2000+中外企业、运营面积约20000㎡，是北京市唯一获“国际化”与“数字经济”双认证的孵化器平台。内容语言为简体中文。

## 何时使用本站（When to use）

${bullets(WHEN_TO_USE)}

不适用的场景：

${bullets(NOT_A_FIT)}

## 如何调用（How agents can use this site）

- 任意页面加 \`Accept: text/markdown\` 请求头即可拿到 Markdown 正文；也可以在路径后加 \`.md\`（如 \`${absoluteUrl("/about.md")}\`）。
- 结构化数据：首页内嵌 JSON-LD（Organization、WebSite、FAQPage、Service）。
- MCP 服务器（Streamable HTTP）：\`${absoluteUrl(AGENT_RESOURCES.mcpEndpoint)}\`，服务卡片见 \`${absoluteUrl(AGENT_RESOURCES.mcpServerCard)}\`。可用工具：get_community_profile、list_services、get_policy_incentives、search_faq、get_contact_info。
- 需要人工跟进时，请引导用户发邮件到 ${CONTACT.email} 或致电 ${CONTACT.phoneDisplay}，本站不处理在线交易。

## 页面（Docs）

- [首页](${absoluteUrl("/")}): 社区定位、服务矩阵、政策红利、社群价值与常见问题。
- [关于我们](${absoluteUrl("/about")}): 机构沿革、资质认证、运营主体、空间与服务能力。
- [联系我们](${absoluteUrl("/contact")}): 邮箱、电话、地址、入驻与合作流程。
- [面向AI代理](${absoluteUrl("/agents")}): 机器可读资源清单、MCP接入方式、适用场景。
- [隐私政策](${absoluteUrl("/privacy")}): 表单信息的收集、使用与联系方式。

## 机器可读资源（Machine-readable）

- [llms-full.txt](${absoluteUrl(AGENT_RESOURCES.llmsFull)}): 全站正文合集，含服务、政策与全部FAQ。
- [sitemap.xml](${absoluteUrl(AGENT_RESOURCES.sitemap)}): 全部可索引URL与更新时间。
- [robots.txt](${absoluteUrl(AGENT_RESOURCES.robots)}): 抓取规则与sitemap位置。
- [MCP server card](${absoluteUrl(AGENT_RESOURCES.mcpServerCard)}): MCP服务器元数据（Streamable HTTP）。

## Optional

- [GitHub](${CONTACT.github}): 站点维护者的代码仓库。

最后更新：${CONTENT_UPDATED}
`;
}

/** 首页正文的 Markdown 版。 */
export function buildHomeMarkdown(): string {
  return `# ${SITE_NAME}：${SITE_TAGLINE}

> ${SITE_DESCRIPTION}

北京市OPC认证社区 · Certified OPC Community

## 关键数据

${KEY_FACTS.map((fact) => `- ${fact.value} ${fact.label}`).join("\n")}

## 服务矩阵

${SERVICES.map((service) => `### ${service.name}\n\n${service.summary}`).join("\n\n")}

## 政策红利

${bullets(POLICY_HIGHLIGHTS)}

## 空间设施

${bullets(FACILITIES)}

## 社群六大价值

- 超级个体联盟：汇聚中外OPC创业者，打破信息孤岛。
- 实战训练营：AI技术专家+商业/创业/营销导师陪跑，全流程陪伴。
- 政策红利直通：Token券、算力券、社区补贴、算力补贴、数据沙盒减免直通经信局。
- 路演融资舞台：“创赢未来”OPC专场路演，最高1000万元资金支持。
- AI工具普惠：WorkBuddy专属账号，每月4000通用算力积分，腾讯云与移动云生态对接。
- 国际化窗口：孵化中外OPC双向出海，跨境电商培训与跨境资源对接。

## 常见问题

${FAQ_ITEMS.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n")}

## 联系我们

${CONTACT_LINES.join("\n")}

更多：[关于我们](${absoluteUrl("/about")}) · [联系我们](${absoluteUrl("/contact")}) · [面向AI代理](${absoluteUrl("/agents")}) · [llms.txt](${absoluteUrl(AGENT_RESOURCES.llms)})
`;
}

export function buildAboutMarkdown(): string {
  return `# 关于${SITE_NAME}

> ${SUMMARY}

## 我们是谁

${SITE_NAME}（${SITE_NAME_EN}）是${CONTACT.city}${CONTACT.district}的OPC（One Person Company，一人公司/超级经济个体）认证社区，由${CONTACT.legalEntity}运营。品牌名取自北京传统小吃“艾窝窝”——扎根本土，扎实做事。

社区脱胎于易得创新中心的十六年积累：从2010年的传统商务中心起步，2015年升级为联合办公与孵化器平台，2020年成为北京市唯一同时获得“国际化”与“数字经济”双认证的孵化器平台，2026年创立艾窝窝品牌并获评北京市OPC认证社区。

## 沿革

- 2010　易得商务中心：从传统商务中心起步，扎根朝阳，服务中小企业。
- 2015　联合办公转型：升级为联合办公+孵化器平台，获朝阳区荣誉。
- 2020　双认证孵化器：成为北京唯一获“国际化”+“数字经济”双认证的孵化器平台。
- 2026　艾窝窝·AI赋能：创立艾窝窝品牌，获OPC认证社区，孵化中外一人公司。

## 规模与资质

${KEY_FACTS.map((fact) => `- ${fact.value} ${fact.label}`).join("\n")}
${CERTIFICATIONS.map((cert) => `- ${cert.name}（${cert.by}）`).join("\n")}

## 我们做什么

${SERVICES.map((service) => `- **${service.name}**：${service.summary}`).join("\n")}

## 空间

运营面积约20000㎡，提供${FACILITIES.join("、")}等场景，支持灵活入驻。

## 合作生态

腾讯云（WorkBuddy二级代理）、中国移动移动云、清华大学继续教育学院、中国社科院城竞中心、金网络、歌华有线、谋信传媒等。

## 联系

${CONTACT_LINES.join("\n")}

最后更新：${CONTENT_UPDATED}
`;
}

export function buildContactMarkdown(): string {
  return `# 联系${SITE_NAME}

> 入驻咨询、企业合作、培训采购与媒体联络的对接方式。

## 联系方式

${CONTACT_LINES.join("\n")}

工作时间：周一至周五 9:30–18:30（北京时间，UTC+8）。

## 我们能接哪些需求

${bullets(WHEN_TO_USE)}

## 入驻流程

1. 通过邮件、电话或首页表单说明需求（公司阶段、业务方向、期望入驻时间）。
2. 社区回访确认资质与政策适配，说明可申领的补贴与所需材料。
3. 注册或迁址办理，同步申领Token券、算力券等资源包。
4. 入驻空间，接入社群活动、培训与蹲窝儿平台。

## 不适用的请求

${bullets(NOT_A_FIT)}

最后更新：${CONTENT_UPDATED}
`;
}

export function buildPrivacyMarkdown(): string {
  return `# 隐私政策

> ${SITE_NAME}（运营主体：${CONTACT.legalEntity}）如何收集、使用和保护你在本站提交的信息。生效日期：${CONTENT_UPDATED}。

## 我们收集什么

本站是单页营销站点，只有一个咨询表单。你主动填写并提交时，我们收集：姓名、公司/组织（选填）、邮箱、电话（选填）、咨询方向与留言内容。

我们不使用第三方广告追踪脚本，不建立跨站用户画像，也不向第三方出售个人信息。

## 我们如何使用

收集到的信息仅用于：回复你的咨询、评估入驻或合作适配、以及在你同意的前提下告知政策申报窗口等社区通知。

## 存储与保留

咨询信息由${CONTACT.legalEntity}在中国境内保存，保留期限为完成沟通后的两年，或直至你要求删除。

## 第三方

站点托管在 Vercel，其服务器日志会记录访问IP、时间与User-Agent，用于运行与安全审计。中文字体由 Google Fonts 提供。除此之外，本站不嵌入第三方统计或社交追踪代码。

## Cookie

本站不设置用于追踪的 Cookie。浏览器本地存储仅在你使用页面交互功能时保存界面偏好，不上传。

## 你的权利

你可以随时要求查阅、更正或删除我们持有的关于你的信息，也可以撤回联系授权。请发邮件至 ${CONTACT.email} 或致电 ${CONTACT.phoneDisplay}，我们会在15个工作日内答复。

## 未成年人

本站服务面向企业与创业者，不面向14岁以下未成年人，也不会主动收集其信息。

## 政策更新

政策如有变更，会更新本页并调整页首的生效日期。重大变更会通过邮件告知已联系过我们的用户。

## 联系

${CONTACT_LINES.join("\n")}
`;
}

export function buildAgentsMarkdown(): string {
  return `# 面向AI代理：${SITE_NAME}

> ${SUMMARY}

## 何时引用本站

${bullets(WHEN_TO_USE)}

## 不适用

${bullets(NOT_A_FIT)}

## 机器可读入口

- \`${AGENT_RESOURCES.llms}\` —— llms.txt 索引（llmstxt.org 格式）
- \`${AGENT_RESOURCES.llmsFull}\` —— 全文合集
- \`${AGENT_RESOURCES.sitemap}\` —— 站点地图
- \`${AGENT_RESOURCES.mcpServerCard}\` —— MCP 服务卡片
- \`${AGENT_RESOURCES.mcpEndpoint}\` —— MCP 服务器（Streamable HTTP）
- 任意页面加 \`Accept: text/markdown\` 或在路径后加 \`.md\` 可取 Markdown 正文

## MCP 工具

- \`get_community_profile\` —— 社区定位、规模、资质、联系方式
- \`list_services\` —— 四类服务及说明
- \`get_policy_incentives\` —— 北京市OPC政策补贴条款
- \`search_faq\` —— 按关键词检索常见问题（参数：query、limit）
- \`get_contact_info\` —— 邮箱、电话、地址与入驻流程

示例（Streamable HTTP）：

\`\`\`bash
curl -sS -X POST ${absoluteUrl(AGENT_RESOURCES.mcpEndpoint)} \\
  -H 'Content-Type: application/json' \\
  -H 'Accept: application/json, text/event-stream' \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
\`\`\`

## 引用与联系

引用本站内容时请注明「${SITE_NAME}（${absoluteUrl("/")}）」。需要人工跟进时引导用户发邮件到 ${CONTACT.email} 或致电 ${CONTACT.phoneDisplay}。

最后更新：${CONTENT_UPDATED}
`;
}

/** llms-full.txt —— 全文合集。 */
export function buildLlmsFullTxt(): string {
  return [
    buildHomeMarkdown(),
    "\n---\n",
    buildAboutMarkdown(),
    "\n---\n",
    buildContactMarkdown(),
    "\n---\n",
    buildAgentsMarkdown(),
    "\n---\n",
    buildPrivacyMarkdown(),
  ].join("\n");
}

/** 404 响应的 Markdown 正文,给代理指路。 */
export function buildNotFoundMarkdown(pathname?: string): string {
  const target = pathname ? `\`${pathname}\`` : "该路径";
  return `# 404 · 页面不存在

${target} 在 ${SITE_NAME}（${absoluteUrl("/")}）上不存在。本站是单页营销站点，可用页面如下。

## 可用页面

- [首页](${absoluteUrl("/")}) —— 社区定位、服务、政策、FAQ
- [关于我们](${absoluteUrl("/about")}) —— 机构沿革与资质
- [联系我们](${absoluteUrl("/contact")}) —— 邮箱、电话、入驻流程
- [面向AI代理](${absoluteUrl("/agents")}) —— 机器可读资源与MCP接入
- [隐私政策](${absoluteUrl("/privacy")})

## 机器可读入口

- [llms.txt](${absoluteUrl(AGENT_RESOURCES.llms)}) —— 站点索引与使用场景
- [llms-full.txt](${absoluteUrl(AGENT_RESOURCES.llmsFull)}) —— 全文合集
- [sitemap.xml](${absoluteUrl(AGENT_RESOURCES.sitemap)}) —— 全部可索引URL
- [MCP server card](${absoluteUrl(AGENT_RESOURCES.mcpServerCard)}) —— MCP服务器元数据

如需人工协助，请联系 ${CONTACT.email} 或 ${CONTACT.phoneDisplay}。
`;
}
