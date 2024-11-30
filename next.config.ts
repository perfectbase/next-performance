import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
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
