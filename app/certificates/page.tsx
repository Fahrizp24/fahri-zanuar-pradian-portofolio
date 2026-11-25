import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { CertificatesContent } from "@/components/certificates/certificates-content";
import { getCertificatesSchema, JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = createMetadata({
  title: "Certificates & Awards",
  description:
    "Credentials and awards earned by Fahri Zanuar Pradian, including BNSP Junior Web Developer, AI Ignition by Google.org, GENsi by Indosat & Nokia, DQLab Data Science, and Batur UNESCO Geopark award.",
  path: "/certificates",
  keywords: [
    "Fahri Zanuar Certificates",
    "BNSP Junior Web Developer",
    "AI Ignition Indonesia",
    "DQLab Python Data Science",
    "Batur UNESCO Geopark Competition",
  ],
});

export default function CertificatesPage() {
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
        name: "Certificates",
        item: "https://fahrizanuarpradian.tech/certificates",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, getCertificatesSchema()]} />
      <CertificatesContent />
    </>
  );
}
