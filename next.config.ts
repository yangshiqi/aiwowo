import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 不设 output:"standalone" —— Vercel 的 Next 构建器不兼容它(追踪文件被挪进
  // .next/standalone,构建器在 .next/ 根下找 next-server.js.nft.json 失败),
  // 而本仓库也没有自托管/Docker 用到它。
};

export default nextConfig;
