import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "files.edgestore.dev",
        pathname: "/jzlfvcbfhm181ocy/**",
      },
    ],
  },
};

export default nextConfig;
