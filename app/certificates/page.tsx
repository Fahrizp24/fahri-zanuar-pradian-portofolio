"use client";

import { Certificates } from "@/components/certificates/certificates";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/layout/language";

export default function CertificatesPage(): ReactNode {
  const { t } = useLanguage();
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-28 pb-10 sm:px-10 sm:pt-40 sm:pb-12">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            {t("certificateHeadline")}
          </h1>
          <p className="max-w-[33ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
            {t("certificateIntro")}
          </p>
        </FadeIn>
      </section>
      <Certificates />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
