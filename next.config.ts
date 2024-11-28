import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
