import type { ReactNode } from "react";

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function JsonLd({ data }: JsonLdProps): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL = "https://fahrizanuarpradian.tech";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fahri Zanuar Pradian",
    alternateName: ["Fahri Zanuar", "Fahrizp24"],
    url: SITE_URL,
    image: `${SITE_URL}/images/profile/fahri.webp`,
    email: "mailto:Fpradian24@gmail.com",
    jobTitle: "Full-Stack Developer & AI Engineer",
    description:
      "Full-Stack Web Developer and AI Engineer specializing in Next.js, TypeScript, Python, Computer Vision, and IoT.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "East Java",
      addressCountry: "ID",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Politeknik Negeri Malang",
      alternateName: "Polinema",
    },
    sameAs: [
      "https://github.com/Fahrizp24",
      "https://linkedin.com/in/fahrizanuarpradian",
      "https://instagram.com/fzp._",
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Artificial Intelligence",
      "Computer Vision",
      "Internet of Things (IoT)",
      "Machine Learning",
      "Laravel",
      "ESP32",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fahri Zanuar Pradian Portfolio",
    url: SITE_URL,
    description:
      "Portfolio of Fahri Zanuar Pradian — full-stack web development, IoT, AI, and Computer Vision.",
    inLanguage: ["en", "id"],
    author: {
      "@type": "Person",
      name: "Fahri Zanuar Pradian",
    },
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About Fahri Zanuar Pradian",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Person",
      name: "Fahri Zanuar Pradian",
      url: SITE_URL,
    },
  };
}

export function getProjectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects | Fahri Zanuar Pradian",
    url: `${SITE_URL}/projects`,
    description:
      "Web, IoT, AI, and Computer Vision projects built by Fahri Zanuar Pradian.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AI Word to Google Form Converter",
          url: "https://word-to-form-nextjs-app.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SafeBand",
          url: "https://github.com/Fahrizp24/safeband-iot-based-bracelet-nextjs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "JTI Polinema Student Achievement Management System",
          url: "https://github.com/Fahrizp24/SistemPencatatanPrestasiMahasiswaJTIPolinema",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Campus Facility Reporting and Maintenance System",
          url: "https://github.com/Fahrizp24/Sistem-Manajemen-Pelaporan-dan-Perbaikan-Fasilitas-Kampus",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "CatatDong",
          url: "https://catat-dong.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "SafeForm — Google Form Anti-Cheating Gateway",
          url: "https://github.com/Fahrizp24/google-form-anti-cheating",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Computer Vision: Vehicle Detection",
          url: "https://fahrizp24.github.io/vehicle-classification-yolo/",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Emotion AI: Real-Time Facial Expression Detection",
          url: "https://colab.research.google.com/drive/1aj9HNCWHr-vjvSUJwR5JGPpdRTcsOZKr?usp=sharing",
        },
      ],
    },
  };
}

export function getCertificatesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Certificates & Awards | Fahri Zanuar Pradian",
    url: `${SITE_URL}/certificates`,
    description:
      "Verified credentials and awards earned by Fahri Zanuar Pradian.",
  };
}
