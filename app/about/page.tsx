import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { AboutContent } from "@/components/about/about-content";
import { getProfilePageSchema, JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn more about Fahri Zanuar Pradian, Full-Stack Developer & AI Engineer based in Malang, Indonesia. Education at Polinema, work experience at Timedoor & Pantau Jatim, and technical skills.",
  path: "/about",
  keywords: [
    "About Fahri Zanuar Pradian",
    "Fahri Zanuar Background",
    "Polinema Informatics Engineering",
    "AI Engineer Timedoor",
    "Fullstack Developer Pantau Jatim",
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fahrizanuarpradian.tech",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://fahrizanuarpradian.tech/about",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, getProfilePageSchema()]} />
      <AboutContent />
    </>
  );
}
