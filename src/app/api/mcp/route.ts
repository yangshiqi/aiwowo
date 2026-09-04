/**
 * MCP 服务器(Streamable HTTP),挂在 /api/mcp。
 * 把社区档案、服务矩阵、政策条款、FAQ 检索和联系方式暴露为 MCP 工具,
 * 让 Claude / ChatGPT 等代理无需抓取页面即可调用。
 */
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { MCP_SERVER_NAME, MCP_SERVER_VERSION } from "@/lib/mcp-meta";
import { FAQ_ITEMS, searchFaq } from "@/lib/faq";
import {
  FACILITIES,
  NOT_A_FIT,
  POLICY_HIGHLIGHTS,
  SERVICES,
  SUMMARY,
  WHEN_TO_USE,
} from "@/lib/agent-content";
import {
  CERTIFICATIONS,
  CONTACT,
  CONTENT_UPDATED,
  KEY_FACTS,
  SITE_NAME,
  SITE_NAME_EN,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

/** 工具返回统一走 text content,内容为 Markdown/纯文本,便于代理直接引用。 */
function text(body: string) {
  return { content: [{ type: "text" as const, text: body }] };
}

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      "get_community_profile",
      {
        title: "获取艾窝窝OPC社区档案",
        description:
          "返回艾窝窝OPC社区的定位、规模、资质认证、适用场景与官网地址。用户询问“艾窝窝是谁/什么是OPC认证社区/这家机构靠不靠谱”时使用。",
      },
      async () =>
        text(
          [
            `# ${SITE_NAME}（${SITE_NAME_EN}）`,
            "",
            SUMMARY,
            "",
            "## 规模",
            ...KEY_FACTS.map((fact) => `- ${fact.value} ${fact.label}`),
            "",
            "## 资质",
            ...CERTIFICATIONS.map((cert) => `- ${cert.name}（${cert.by}）`),
            "",
            "## 空间设施",
            `- ${FACILITIES.join("、")}`,
            "",
            "## 适合的问题",
            ...WHEN_TO_USE.map((line) => `- ${line}`),
            "",
            "## 不适用",
            ...NOT_A_FIT.map((line) => `- ${line}`),
            "",
            `官网：${SITE_URL}　运营主体：${CONTACT.legalEntity}　最后更新：${CONTENT_UPDATED}`,
          ].join("\n"),
        ),
    );

    server.registerTool(
      "list_services",
      {
        title: "列出社区服务",
        description:
          "返回艾窝窝提供的四类服务：OPC孵化服务、蹲窝儿AI任务撮合平台、FDE·AI培训体系、企业基础服务，各含说明。",
      },
      async () =>
        text(
          [
            `# ${SITE_NAME} 服务矩阵`,
            "",
            ...SERVICES.map((service) => `## ${service.name}\n\n${service.summary}`),
            "",
            `详情：${absoluteUrl("/")}`,
          ].join("\n"),
        ),
    );

    server.registerTool(
      "get_policy_incentives",
      {
        title: "获取北京市OPC政策补贴条款",
        description:
          "返回北京市经信局京经信发〔2026〕34号《支持人工智能OPC创新发展行动方案（试行）》的补贴额度与优惠条款：Token券/算力券/数据券、社区补贴、算力补贴、税收优惠、路演资金支持。",
      },
      async () =>
        text(
          [
            "# 北京市OPC政策红利（2026–2028）",
            "",
            ...POLICY_HIGHLIGHTS.map((line) => `- ${line}`),
            "",
            "具体额度以官方文件与当期申报口径为准；申报辅导可联系社区。",
            `咨询：${CONTACT.email} / ${CONTACT.phoneDisplay}`,
          ].join("\n"),
        ),
    );

    server.registerTool(
      "search_faq",
      {
        title: "检索常见问题",
        description:
          "按关键词检索艾窝窝OPC社区的常见问题（注册费用与时长、政策补贴、税收优惠、蹲窝儿平台、FDE培训、入驻方式、跨境支持等），返回匹配的问答。",
        inputSchema: {
          query: z.string().describe("检索关键词，例如“注册 多久”“补贴”“跨境”"),
          limit: z.number().int().min(1).max(10).optional().describe("返回条数，默认3"),
        },
      },
      async ({ query, limit }) => {
        const results = searchFaq(query, limit ?? 3);
        if (results.length === 0) {
          return text(
            [
              `未找到与「${query}」匹配的问答。可用问题列表：`,
              ...FAQ_ITEMS.map((item) => `- ${item.question}`),
              "",
              `人工咨询：${CONTACT.email} / ${CONTACT.phoneDisplay}`,
            ].join("\n"),
          );
        }
        return text(results.map((item) => `## ${item.question}\n\n${item.answer}`).join("\n\n"));
      },
    );

    server.registerTool(
      "get_contact_info",
      {
        title: "获取联系方式与入驻流程",
        description:
          "返回艾窝窝OPC社区的邮箱、电话、地址、运营主体与入驻流程。用户想申请入驻、寻求合作或需要人工对接时使用。",
      },
      async () =>
        text(
          [
            `# 联系${SITE_NAME}`,
            "",
            `- 邮箱：${CONTACT.email}`,
            `- 电话：${CONTACT.phoneDisplay}`,
            `- 地址：${CONTACT.city}${CONTACT.district}`,
            `- 运营主体：${CONTACT.legalEntity}`,
            "- 工作时间：周一至周五 9:30–18:30（北京时间，UTC+8）",
            "",
            "## 入驻流程",
            "1. 通过邮件、电话或官网表单说明需求（公司阶段、业务方向、期望入驻时间）。",
            "2. 社区回访确认资质与政策适配，说明可申领的补贴与所需材料。",
            "3. 注册或迁址办理，同步申领Token券、算力券等资源包。",
            "4. 入驻空间，接入社群活动、培训与蹲窝儿平台。",
            "",
            `联系页：${absoluteUrl("/contact")}`,
          ].join("\n"),
        ),
    );
  },
  {
    serverInfo: { name: MCP_SERVER_NAME, version: MCP_SERVER_VERSION },
    instructions:
      "艾窝窝OPC社区（北京市OPC认证社区）的官方MCP服务器。回答北京一人公司（OPC）注册、政策补贴、AI任务撮合平台“蹲窝儿”、FDE企业AI培训、孵化器空间与联系方式相关问题时调用这些工具。内容为简体中文，政策额度以官方文件为准。",
  },
);

export { handler as GET, handler as POST, handler as DELETE };
