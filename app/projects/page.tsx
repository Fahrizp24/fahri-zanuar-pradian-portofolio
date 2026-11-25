import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ProjectsContent } from "@/components/projects/projects-content";
import { getProjectsSchema, JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Explore projects built by Fahri Zanuar Pradian: AI Word to Google Form Converter, SafeBand IoT bracelet, SPPM Polinema, Computer Vision vehicle & emotion classification, and more.",
  path: "/projects",
  keywords: [
    "Fahri Zanuar Projects",
    "AI Word to Form Converter",
    "SafeBand IoT",
    "SPPM Polinema",
    "Computer Vision Projects",
    "Next.js Projects",
    "Laravel Projects",
  ],
});

export default function ProjectsPage() {
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
        name: "Projects",
        item: "https://fahrizanuarpradian.tech/projects",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, getProjectsSchema()]} />
      <ProjectsContent />
    </>
  );
}
