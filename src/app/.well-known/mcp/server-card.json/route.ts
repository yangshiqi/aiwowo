/**
 * MCP 服务卡片(/.well-known/mcp/server-card.json)。
 * 字段依据 modelcontextprotocol/experimental-ext-server-card 的 v1 schema:
 * $schema / name(反向DNS) / version / description 必填,remotes 描述可连接的传输端点。
 * 按提案要求开放 CORS,便于浏览器内的代理直接读取。
 */
import { MCP_CARD_NAME, MCP_PROTOCOL_VERSIONS, MCP_SERVER_VERSION } from "@/lib/mcp-meta";
import { AGENT_RESOURCES, ASSET_BASE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

function serverCard() {
  return {
    $schema: "https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json",
    name: MCP_CARD_NAME,
    title: `${SITE_NAME} MCP`,
    description:
      "北京市OPC认证社区艾窝窝的官方MCP服务器：一人公司注册、政策补贴、蹲窝儿AI任务撮合、FDE培训与联系方式。",
    version: MCP_SERVER_VERSION,
    websiteUrl: SITE_URL,
    icons: [
      {
        src: absoluteUrl(`${ASSET_BASE}/seo/apple-icon.png`),
        mimeType: "image/png",
        sizes: ["180x180"],
      },
    ],
    remotes: [
      {
        type: "streamable-http",
        url: absoluteUrl(AGENT_RESOURCES.mcpEndpoint),
        supportedProtocolVersions: [...MCP_PROTOCOL_VERSIONS],
      },
    ],
    _meta: {
      [MCP_CARD_NAME]: {
        documentationUrl: absoluteUrl("/agents"),
        llmsTxt: absoluteUrl(AGENT_RESOURCES.llms),
        language: "zh-CN",
      },
    },
  };
}

export function GET() {
  return Response.json(serverCard(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      ...CORS_HEADERS,
    },
  });
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
