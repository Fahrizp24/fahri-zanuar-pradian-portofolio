import type { ReactNode } from "react";
import { useLanguage } from "@/components/layout/language";

const SKILLS = [
  "System Automation",
  "Web Scraping",
  "Cronjob",
  "RAG Chatbot",
  "Full-Stack Web Development",
  "IoT & Embedded (ESP32)",
  "Machine Learning",
  "Computer Vision",
  "Mobile Development (Flutter)",
  "RAG & AI Research",
  "Backend & Database",
];

export function Skills(): ReactNode {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        {t("skillsTitle")}
      </h3>
      <div className="rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
