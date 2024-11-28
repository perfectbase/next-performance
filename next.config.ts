import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
  async rewrites() {
    return process.env.NODE_ENV === "production"
      ? [
          {
            source: "/app/client-cache/:path*",
            destination: "http://localhost:3000/app/client-cache/:path*",
          },
          {
            source: "/app/client-cache",
            destination: "http://localhost:3000/app/client-cache",
          },
        ]
      : [];
  },
};

export default nextConfig;
