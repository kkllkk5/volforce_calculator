import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/volforce-calculate',
  assetPrefix: '/volforce-calculate/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
