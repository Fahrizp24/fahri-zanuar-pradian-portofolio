"use client";

import { ReducedMotionProvider } from "@/lib/reduced-motion";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { LanguageProvider } from "@/components/layout/language";
import { WebMcp } from "@/components/seo/web-mcp";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReducedMotionProvider>
        <LanguageProvider>
          <WebMcp />
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </ReducedMotionProvider>
    </ThemeProvider>
  );
}
