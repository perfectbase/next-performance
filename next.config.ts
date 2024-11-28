import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
  async rewrites() {
    // experimental.staleTimes is a global setting
    // so I deployed it from another branch
    // and this rewrites point to it.
    return process.env.NODE_ENV === "production"
      ? [
          {
            source: "/app/client-cache/:path*",
            destination:
              "https://next-performance-git-client-cache-perfectbases-projects.vercel.app/app/client-cache/:path*",
          },
          {
            source: "/app/client-cache",
            destination:
              "https://next-performance-git-client-cache-perfectbases-projects.vercel.app/app/client-cache",
          },
        ]
      : [];
  },
};

export default nextConfig;
