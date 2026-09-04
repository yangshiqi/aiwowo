/**
 * MCP 服务器的标识信息。单独成文件,让 /.well-known 的服务卡片能保持静态,
 * 不必 import 动态的 MCP 路由处理器。
 */
export const MCP_SERVER_NAME = "aiwowo-opc-community";
export const MCP_SERVER_VERSION = "1.0.0";
/** 服务卡片 name 字段要求反向 DNS 风格,含单个斜杠。 */
export const MCP_CARD_NAME = "vercel.app/aiwowo-website";
export const MCP_PROTOCOL_VERSIONS = ["2025-06-18"] as const;
