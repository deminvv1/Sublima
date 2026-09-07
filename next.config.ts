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
        // only match when English is the *primary* (first-listed) language —
        // a Russian browser's header often still lists "en" further down
        // (e.g. "ru-RU,ru;q=0.9,en-US;q=0.8"), which an unanchored match
        // would wrongly treat as an English-speaking visitor
        has: [{ type: "header", key: "accept-language", value: "^en\\b.*" }],
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
