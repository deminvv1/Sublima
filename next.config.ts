import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "cookie", key: "locale", value: "en" }],
        destination: "/en",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "header", key: "accept-language", value: ".*\\ben\\b.*" }],
        destination: "/en",
        permanent: false,
      },
      {
        source: "/",
        destination: "/ru",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
