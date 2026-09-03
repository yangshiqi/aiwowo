import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 频道已迁至独立站「OPC一人城」;域名上线后改为 301 到新站
  async redirects() {
    return [
      { source: "/spaces", destination: "/", permanent: false },
      { source: "/policies", destination: "/", permanent: false },
    ];
  },
  /* config options here */
  output: "standalone",
};

export default nextConfig;
