"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/layout/language";

const EMAIL = "Fpradian24@gmail.com";

export function ContactButton(): ReactNode {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      } catch {}
      document.body.removeChild(ta);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      aria-label={
        copied
          ? t("emailCopied")
          : open
            ? `${t("copyEmail")} ${EMAIL}`
            : `${t("contact")} — ${t("showEmail")}`
      }
      style={{ borderRadius: 12 }}
      className="focus-ring relative inline-flex h-11 cursor-pointer items-center justify-center bg-foreground px-5 text-sm font-medium text-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      {open ? (
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
            {copied ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
          </span>
          <span className="tabular-nums">{EMAIL}</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{t("contact")}</span>
        </span>
      )}
    </button>
  );
}
