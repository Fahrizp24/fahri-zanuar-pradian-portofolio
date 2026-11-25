import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}): ReactNode {
  return (
    <div
      className={className}
      style={{
        animation: `fade-in-up ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`,
      }}
    >
      {children}
    </div>
  );
}

export function ScaleUnblur({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}): ReactNode {
  return (
    <div
      className={className}
      style={{
        transformOrigin: "center",
        animation: `fade-in-up ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`,
      }}
    >
      {children}
    </div>
  );
}
