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
  // Prevent stale HTML/CSS mismatches after deploys (Hostinger CDN/browser caches).
  // HTML pages must revalidate so they always reference current /_next/static assets.
  async headers() {
    return [
      {
        source: "/research/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        source: "/((?!_next/static|_next/image|images|videos|team|publications|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
