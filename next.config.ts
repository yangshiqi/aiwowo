import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 不设 output:"standalone" —— Vercel 的 Next 构建器不兼容它(追踪文件被挪进
  // .next/standalone,构建器在 .next/ 根下找 next-server.js.nft.json 失败),
  // 而本仓库也没有自托管/Docker 用到它。

  async headers() {
    return [
      {
        // 页面同时有 HTML 与 Markdown 两个变体,缓存必须按 Accept 分桶,
        // 否则 CDN 可能把先落缓存的那个变体回给另一类请求。
        //
        // 注意:App Router 的 HTML 响应里 `Vary` 由 Next 自己写(rsc / next-router-*),
        // 会覆盖这里配置的同名头;真正生效的是 vercel.json 里边缘层那份(含 Next 的
        // 全部 token + Accept)。这里保留一份,让路由处理器与自托管场景也有兜底。
        source: "/:path*",
        headers: [{ key: "Vary", value: "Accept" }],
      },
    ];
  },
};

export default nextConfig;
