"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";
import type { ShaderFlowProps } from "./shader-flow";

const ShaderFlow = dynamic(
  () => import("./shader-flow").then((m) => m.ShaderFlow),
  { ssr: false }
);

export function ShaderFlowLazy(props: ShaderFlowProps): ReactNode {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop =
      window.innerWidth >= 768 &&
      window.matchMedia("(any-pointer: fine)").matches;
    if (prefersReducedMotion || !isDesktop) return;

    const timer = window.setTimeout(() => setEnabled(true), 250);
    return () => window.clearTimeout(timer);
  }, []);

  if (!enabled) return null;
  return <ShaderFlow {...props} />;
}
