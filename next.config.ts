import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React 19 features and better performance
  experimental: {
    // optimizePackageImports for lucide etc in future
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
