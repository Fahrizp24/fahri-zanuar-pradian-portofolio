import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
