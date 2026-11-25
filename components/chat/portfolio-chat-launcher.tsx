"use client";

import { MessageCircle, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";
import { useLanguage } from "@/components/layout/language";

const PortfolioChatPanel = dynamic(
  () => import("./portfolio-chat").then((m) => m.PortfolioChatPanel),
  { ssr: false }
);

const LABELS = {
  id: { open: "Buka chatbot portofolio", close: "Tutup chatbot" },
  en: { open: "Open portfolio chatbot", close: "Close chatbot" },
} as const;

export function PortfolioChatLauncher(): ReactNode {
  const { language } = useLanguage();
  const lang = language === "id" ? "id" : "en";
  const [open, setOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const preload = (): void => {
    void import("./portfolio-chat");
  };

  const toggle = (): void => {
    setHasLoaded(true);
    setOpen((v) => !v);
  };

  return (
    <>
      {hasLoaded && (
        <PortfolioChatPanel open={open} onClose={() => setOpen(false)} />
      )}
      <button
        type="button"
        onClick={toggle}
        onMouseEnter={preload}
        onFocus={preload}
        aria-label={open ? LABELS[lang].close : LABELS[lang].open}
        className="focus-ring bg-foreground text-background fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-105 sm:right-6"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </>
  );
}
