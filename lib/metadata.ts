import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://fahrizanuarpradian.tech";

export const siteConfig = {
  name: "Fahri Zanuar Pradian",
  title: "Fahri Zanuar Pradian — Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Fahri Zanuar Pradian — Full-Stack Web Developer and AI Engineer specializing in Next.js, TypeScript, Python, Computer Vision, and IoT.",
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image`,
  creator: "Fahri Zanuar Pradian",
  twitterHandle: "@Fahrizp24",
  github: "https://github.com/Fahrizp24",
  linkedin: "https://linkedin.com/in/fahrizanuarpradian",
  authors: [
    {
      name: "Fahri Zanuar Pradian",
      url: siteUrl,
    },
  ],
  keywords: [
    "Fahri Zanuar Pradian",
    "Fahri Zanuar",
    "Fahrizp24",
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "Computer Vision",
    "IoT Developer",
    "Politeknik Negeri Malang",
    "Polinema",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Python",
    "Machine Learning",
    "ESP32",
    "Portfolio Developer Indonesia",
    "Web Developer Malang",
    "Jasa Pembuatan Website",
  ],
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const ogImage = image ?? siteConfig.ogImage;
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;

  return {
    title,
    description: pageDescription,
    keywords: keywords.length > 0 ? [...keywords, ...siteConfig.keywords] : undefined,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      alternateLocale: ["id_ID"],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
