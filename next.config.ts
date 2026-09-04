import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 不设 output:"standalone" —— Vercel 的 Next 构建器不兼容它(追踪文件被挪进
  // .next/standalone,构建器在 .next/ 根下找 next-server.js.nft.json 失败),
  // 而本仓库也没有自托管/Docker 用到它。

  async headers() {
    return [
      {
        // 页面同时有 HTML 与 Markdown 两个变体,缓存需按 Accept 分桶。
        //
        // 实测(Next 16 + Vercel):App Router 的函数响应里 `Vary` 由框架自己写
        // (rsc / next-router-*),会覆盖这里和 vercel.json 配置的同名头 —— 其他自定义
        // 头都能落地,唯独 Vary 不行。真正保证正确性的是 proxy.ts:它在缓存之前对每个
        // 请求做一次协商,所以 HTML 变体的 Vary 缺 Accept 不会导致串味。
        // 需要 Vary 的响应(各 .md 路由)在自己的 Response 里显式设置,能够生效。
        source: "/:path*",
        headers: [{ key: "Vary", value: "Accept" }],
      },
    ];
  },
};

export default nextConfig;
