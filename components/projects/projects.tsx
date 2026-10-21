"use client";

import {
  ArrowRight,
  Bot,
  Compass,
  Layers,
  LineChart,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import { useLanguage } from "@/components/layout/language";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  category: "ai" | "website";
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  imageMaxHeight?: number;
  href: string;
  hrefLabel: string;
};

const PROJECTS: Project[] = [
  {
    id: "word-to-form",
    category: "ai",
    icon: Sparkles,
    iconLabel: "AI Form",
    title: "AI Word to Google Form Converter",
    description: "Mengubah dokumen Word/DOCX menjadi Google Form secara otomatis dengan Gemini AI.",
    meta: "Next.js, React, Gemini AI",
    imageRatio: 16 / 10,
    image: "/images/projects/word-to-form.webp",
    imageAlt: "AI Word to Google Form Converter",
    href: "https://word-to-form-nextjs-app.vercel.app/",
    hrefLabel: "Open web app",
  },
  {
    id: "safeband",
    category: "website",
    icon: Bot,
    iconLabel: "SafeBand",
    title: "SafeBand",
    description: "Proyek teknologi wearable untuk membantu meningkatkan keamanan dan respons pengguna.",
    meta: "IoT, ESP32, Embedded System",
    imageRatio: 16 / 10,
    image: "/images/projects/safeband-mockup.webp",
    imageAlt: "SafeBand project",
    href: "https://github.com/Fahrizp24/safeband-iot-based-bracelet-nextjs",
    hrefLabel: "View project",
  },
  {
    id: "prestasi",
    category: "website",
    icon: LineChart,
    iconLabel: "Prestasi",
    title: "Sistem Pencatatan Prestasi Mahasiswa JTI Polinema",
    description: "Sistem pencatatan dan manajemen prestasi mahasiswa Jurusan Teknologi Informasi Polinema.",
    meta: "Laravel, MySQL, Bootstrap",
    imageRatio: 1536 / 1024,
    image: "/images/projects/sppm-polinema.webp",
    imageAlt: "SPPM Polinema achievement dashboard",
    href: "https://github.com/Fahrizp24/SistemPencatatanPrestasiMahasiswaJTIPolinema",
    hrefLabel: "View project",
  },
  {
    id: "fasilitas",
    category: "website",
    icon: Layers,
    iconLabel: "Campus Facilities",
    title: "Sistem Pelaporan dan Perbaikan Fasilitas Kampus",
    description: "Platform pelaporan fasilitas dengan pengelolaan status perbaikan yang lebih terstruktur.",
    meta: "Laravel, MySQL, Bootstrap",
    imageRatio: 1200 / 644,
    image: "/images/projects/fxit.webp",
    imageAlt: "Campus facilities dashboard",
    href: "https://github.com/Fahrizp24/Sistem-Manajemen-Pelaporan-dan-Perbaikan-Fasilitas-Kampus",
    hrefLabel: "View project",
  },
  {
    id: "catatdong",
    category: "website",
    icon: Layers,
    iconLabel: "Website Project",
    title: "CatatDong",
    description: "Aplikasi pencatat pengeluaran harian dengan kalkulator jatah jajan bulanan.",
    meta: "Next.js, React, Zustand, Tailwind CSS",
    imageRatio: 1440 / 1000,
    image: "/images/projects/CatatDong UI Showcase.png",
    imageAlt: "CatatDong UI showcase",
    href: "https://catat-dong.vercel.app/",
    hrefLabel: "Open web app",
  },
  {
    id: "safeform",
    category: "website",
    icon: ShieldCheck,
    iconLabel: "Exam Security",
    title: "SafeForm — Google Form Anti-Cheating Gateway",
    description: "Gateway pengawasan ujian yang membungkus Google Form dengan fullscreen lock dan deteksi pelanggaran real-time.",
    meta: "Next.js, Cloud Firestore",
    imageRatio: 1887 / 1060,
    image: "/images/projects/google-form-anti-cheating.webp",
    imageAlt: "SafeForm exam supervision gateway",
    href: "https://github.com/Fahrizp24/google-form-anti-cheating",
    hrefLabel: "View project",
  },
  {
    id: "vision-vehicle-detection",
    category: "ai",
    icon: Compass,
    iconLabel: "Computer Vision",
    title: "Computer Vision: Vehicle Detection",
    description: "Computer Vision untuk mendeteksi kendaraan pada gambar.",
    meta: "Python, OpenCV, YOLOv8",
    imageRatio: 16 / 10,
    image: "/images/projects/yolo-car91.webp",
    imageAlt: "Computer vision project",
    href: "https://fahrizp24.github.io/vehicle-classification-yolo/",
    hrefLabel: "View Project",
  },
  {
    id: "emotion-ai",
    category: "ai",
    icon: Wand2,
    iconLabel: "Emotion AI",
    title: "Emotion AI: Deteksi Ekspresi Wajah Real-Time",
    description: "Sistem AI untuk mendeteksi dan mengklasifikasikan ekspresi wajah secara real-time.",
    meta: "Python, TensorFlow, OpenCV, CNN",
    imageRatio: 399 / 409,
    image: "/images/projects/Expression classiication.webp",
    imageAlt: "Emotion AI project",
    imageMaxHeight: 220,
    href: "https://colab.research.google.com/drive/1aj9HNCWHr-vjvSUJwR5JGPpdRTcsOZKr?usp=sharing",
    hrefLabel: "Open Colab",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const { t } = useLanguage();
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-8 text-center sm:pt-14 sm:pb-10">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        {[
          { id: "ai", title: "AI, Machine Learning, & Computer Vision" },
          { id: "website", title: "Website Projects" },
        ].map((group) => {
          const groupItems = items.filter((project) => project.category === group.id);
          return (
            <div key={group.id} className="mb-16 last:mb-0">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {group.title}
              </h2>
              <div className="columns-1 gap-6 md:columns-2 md:gap-7">
                {groupItems.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} t={t} />
                ))}
              </div>
            </div>
          );
        })}

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              {t("viewWork")}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  t,
}: {
  project: Project;
  index: number;
  t: (id: string) => string;
}): ReactNode {
  const Icon = project.icon;
  const copyKey = project.id === "word-to-form" ? "Word" : project.id === "safeband" ? "Safe" : project.id === "fasilitas" ? "Fixit" : project.id === "safeform" ? "SafeForm" : project.id === "prestasi" ? "Prestasi" : project.id === "vision-vehicle-detection" ? "Vision" : project.id === "catatdong" ? "CatatDong" : "Emotion";
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.hrefLabel}: ${t(`project${copyKey}Title`)}`}
        className="project-card block rounded-3xl focus-ring"
      >
        <article className="flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 transition-colors hover:border-foreground/20 sm:p-3.5">
          <header className="flex items-center gap-2.5 px-1 pt-2">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              {project.iconLabel}
            </span>
          </header>

          <div
            className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
            style={{
              aspectRatio: project.imageRatio,
              maxHeight: project.imageMaxHeight,
              marginInline: project.imageMaxHeight ? "auto" : undefined,
            }}
          >
            <div className="project-card__image-inner">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 px-1 pb-1">
            <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
              {t(`project${copyKey}Title`)}
            </h3>
            <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
              {t(`project${copyKey}Desc`)}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 px-1 pb-2">
            <p className="text-[12px] tracking-tight text-foreground/50">
              {project.meta}
            </p>
            <span className="shrink-0 text-[12px] font-medium tracking-tight text-foreground/60">
              {project.hrefLabel === "Open Colab" ? t("openColab") : project.hrefLabel === "Open web app" ? t("openWeb") : t("viewProject")}
            </span>
          </div>
        </article>
      </a>
    </FadeIn>
  );
}
