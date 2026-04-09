import type { NextConfig } from "next";

const repoName = "game-fermentation-lab";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  images: {
    remotePatterns: [],
    unoptimized: true
  }
};

export default nextConfig;
