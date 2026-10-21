"use client";

import {
  Award,
  BrainCircuit,
  Database,
  Medal,
  ShieldCheck,
  Signal,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { useLanguage } from "@/components/layout/language";

type Certificate = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  issuer: string;
  year: string;
  /** Path under /public. Opened in a new tab; never rendered inline. */
  file: string;
  /** Shown next to the link so the reader knows what they are opening. */
  fileKind: "PDF" | "JPEG";
  /** Optional credential number printed on the document. */
  credentialId?: string;
};

/**
 * Documents live in /public/documents/certificates and are linked, not embedded, so the
 * page stays light and each certificate opens as its own tab.
 */
const CERTIFICATES: Certificate[] = [
  {
    id: "bnsp",
    icon: ShieldCheck,
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "—",
    file: "",
    fileKind: "PDF",
  },
  {
    id: "aiIgnition",
    icon: BrainCircuit,
    issuer: "KUMPUL.ID · AVPN · Google.org",
    year: "2026",
    file: "/documents/certificates/Sertifikat-AI Ignition Indonesia.pdf",
    fileKind: "PDF",
  },
  {
    id: "gensi",
    icon: Signal,
    issuer: "Indosat Ooredoo Hutchison · Nokia · Komdigi",
    year: "2026",
    file: "/documents/certificates/Sertifikat-Generasi Terkoneksi (GENsi).pdf",
    fileKind: "PDF",
  },
  {
    id: "dqlabIntro",
    icon: Database,
    issuer: "DQLab",
    year: "2026",
    file: "/documents/certificates/Introduction python Data Science - DQLab.pdf",
    fileKind: "PDF",
    credentialId: "DQLABINTP1SQDRHR",
  },
  {
    id: "dqlabPandas1",
    icon: Database,
    issuer: "DQLab",
    year: "2026",
    file: "/documents/certificates/Data Manipulation with Pandas - Part 1 - DQLab.pdf",
    fileKind: "PDF",
    credentialId: "DQLABINTP1IQUPMQ",
  },
  {
    id: "dqlabPandas2",
    icon: Database,
    issuer: "DQLab",
    year: "2026",
    file: "/documents/certificates/Data Manipulation with Pandas - Part 2 - DQLab.pdf",
    fileKind: "PDF",
    credentialId: "DQLABINTP1ETPEOC",
  },
];

const AWARDS: Certificate[] = [
  {
    id: "baturWinner",
    icon: Medal,
    issuer: "Batur UNESCO Global Geopark",
    year: "2025",
    file: "/documents/certificates/IMG_4145.webp",
    fileKind: "JPEG",
    credentialId: "2025101032",
  },
  {
    id: "baturParticipation",
    icon: Award,
    issuer: "Batur UNESCO Global Geopark",
    year: "2025",
    file: "/documents/certificates/BATUR.webp",
    fileKind: "JPEG",
    credentialId: "2025101084",
  },
];

export function Certificates(): ReactNode {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
      <FadeIn>
        <div className="flex flex-col gap-6">
          <Group title={t("awardsTitle")} items={AWARDS} t={t} />
          <Group title={t("certificatesTitle")} items={CERTIFICATES} t={t} />
        </div>
      </FadeIn>
    </section>
  );
}

function Group({
  title,
  items,
  t,
}: {
  title: string;
  items: Certificate[];
  t: (id: string) => string;
}): ReactNode {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        {title}
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <Row key={item.id} item={item} t={t} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Row({
  item,
  t,
}: {
  item: Certificate;
  t: (id: string) => string;
}): ReactNode {
  const Icon = item.icon;
  const name = t(`cert${capitalise(item.id)}Title`);
  const hasFile = item.file.length > 0;

  const body = (
    <>
      <span className="border-foreground/10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-background">
        <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="text-foreground text-[16px] font-semibold tracking-tight sm:text-[17px]">
          {name}
        </span>
        <span className="text-foreground/65 mt-0.5 text-[13px] tracking-tight sm:text-[14px]">
          {item.issuer}
          <span className="text-foreground/30 mx-2">•</span>
          <span className="text-foreground/55">{item.year}</span>
        </span>
        {item.credentialId ? (
          <span className="text-foreground/40 mt-1 font-mono text-[11px] tracking-tight">
            {item.credentialId}
          </span>
        ) : null}
      </div>
      <span className="ml-auto shrink-0 self-center text-[12px] font-medium tracking-tight text-foreground/60">
        {hasFile ? `${t("openCertificate")}  ` : t("certificatePending")}
      </span>
    </>
  );

  const rowClass =
    "bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-3";

  if (!hasFile) {
    return (
      <li className={rowClass} style={{ minHeight: 72 }}>
        {body}
      </li>
    );
  }

  return (
    <li style={{ minHeight: 72 }}>
      <a
        href={encodeURI(item.file)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t("openCertificate")}: ${name} (${item.fileKind})`}
        className={`focus-ring ${rowClass} h-full transition-colors hover:border-foreground/20`}
      >
        {body}
      </a>
    </li>
  );
}

function capitalise(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
