"use client";

import type { ReactNode } from "react";

import { useLanguage } from "./language";

export function SkipToContent(): ReactNode {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-to-content">
      {t("skipToContent")}
    </a>
  );
}
