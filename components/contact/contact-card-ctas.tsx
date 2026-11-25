"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { useLanguage } from "@/components/layout/language";

import { ContactButton } from "./contact-button";

export function ContactCardCtas(): ReactNode {
  const { t } = useLanguage();
  return (
    <div className="mt-2 flex flex-wrap items-center gap-3">
      <ContactButton />

      <div>
        <Link
          href="/projects"
          prefetch={false}
          className="border border-foreground/5 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-md/2 transition-colors"
        >
          {t("seeProjects")}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
