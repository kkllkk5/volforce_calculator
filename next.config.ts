import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/volforce-calculator',
  assetPrefix: '/volforce-calculator/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
