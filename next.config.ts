import type { NextConfig } from "next";

const IMMUTABLE_CACHE = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: IMMUTABLE_CACHE }],
      },
      {
        source: "/brands/:path*",
        headers: [{ key: "Cache-Control", value: IMMUTABLE_CACHE }],
      },
      {
        source: "/documents/:path*",
        headers: [{ key: "Cache-Control", value: IMMUTABLE_CACHE }],
      },
      {
        source: "/(favicon-48x48.png|favicon-96x96.png|favicon-192x192.png|favicon-512x512.png|apple-touch-icon.png|icon.svg|apple-icon.svg|linkedin.svg|x.svg)",
        headers: [{ key: "Cache-Control", value: IMMUTABLE_CACHE }],
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
      {
        source: "/ard.json",
        headers: [
          { key: "Content-Type", value: "application/json; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
      {
        source: "/manifest.json",
        headers: [
          { key: "Content-Type", value: "application/manifest+json; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
