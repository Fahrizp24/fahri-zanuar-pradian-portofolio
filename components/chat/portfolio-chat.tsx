"use client";

import { Linkedin, Mail, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

import { useLanguage } from "@/components/layout/language";
import { CONTACT } from "@/lib/chatbot-knowledge";
import {
  MAX_QUESTIONS_PER_VISITOR,
  limitMessage,
  type Lang,
} from "@/lib/chatbot-guardrails";

const VISITOR_KEY = "fz-chat-visitor";
const COUNT_KEY = "fz-chat-count";

type Msg = { role: "user" | "assistant"; text: string; source?: string };

const UI: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    greeting: string;
    placeholder: string;
    send: string;
    remaining: (n: number) => string;
    chips: string[];
    sourceGemini: string;
    sourceLocal: string;
    email: string;
    linkedin: string;
    openLabel: string;
    closeLabel: string;
    networkError: string;
  }
> = {
  id: {
    title: "Tanya Fahri",
    subtitle: "Chatbot demo, dijawab dari data portofolio ini",
    greeting:
      "Halo! Aku asisten portofolio Fahri. Tanya aku soal layanan, proyek, keahlian, atau pengalaman Fahri. Kamu punya 5 pertanyaan untuk demo ini.",
    placeholder: "Tulis pertanyaanmu...",
    send: "Kirim",
    remaining: (n) => `Sisa pertanyaan: ${n}/${MAX_QUESTIONS_PER_VISITOR}`,
    chips: [
      "Jasa apa saja yang ditawarkan Fahri?",
      "Bisa bikin chatbot atau RAG untuk bisnis saya?",
      "Proyek apa saja yang pernah dibuat?",
      "Bagaimana cara menghubungi Fahri?",
    ],
    sourceGemini: "Gemini AI",
    sourceLocal: "Mode lokal",
    email: "Email Fahri",
    linkedin: "LinkedIn Fahri",
    openLabel: "Buka chatbot portofolio",
    closeLabel: "Tutup chatbot",
    networkError:
      "Maaf, koneksi ke server chatbot gagal. Coba lagi sebentar, atau hubungi Fahri langsung lewat email atau LinkedIn.",
  },
  en: {
    title: "Ask Fahri",
    subtitle: "Demo chatbot, answered from this portfolio's data",
    greeting:
      "Hi! I'm Fahri's portfolio assistant. Ask me about Fahri's services, projects, skills, or experience. You have 5 questions for this demo.",
    placeholder: "Type your question...",
    send: "Send",
    remaining: (n) => `Questions left: ${n}/${MAX_QUESTIONS_PER_VISITOR}`,
    chips: [
      "What services does Fahri offer?",
      "Can he build a chatbot or RAG for my business?",
      "What projects has he built?",
      "How can I contact Fahri?",
    ],
    sourceGemini: "Gemini AI",
    sourceLocal: "Local mode",
    email: "Email Fahri",
    linkedin: "Fahri's LinkedIn",
    openLabel: "Open portfolio chatbot",
    closeLabel: "Close chatbot",
    networkError:
      "Sorry, the chat server could not be reached. Try again in a moment, or contact Fahri directly by email or LinkedIn.",
  },
};

function loadVisitor(): { id: string; count: number } {
  try {
    let id = window.localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `v-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      window.localStorage.setItem(VISITOR_KEY, id);
    }
    const count = Number(window.localStorage.getItem(COUNT_KEY) ?? "0");
    return { id, count: Number.isFinite(count) ? count : 0 };
  } catch {
    return { id: "anonymous", count: 0 };
  }
}

export function PortfolioChat(): ReactNode {
  const { language } = useLanguage();
  const lang: Lang = language === "id" ? "id" : "en";
  const ui = UI[lang];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number>(MAX_QUESTIONS_PER_VISITOR);
  const visitorRef = useRef<string>("anonymous");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { id, count } = loadVisitor();
    visitorRef.current = id;
    setRemaining(Math.max(0, MAX_QUESTIONS_PER_VISITOR - count));
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", text: ui.greeting }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open ]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open, loading]);

  const limitReached = remaining <= 0;

  async function send(text: string): Promise<void> {
    const cleaned = text.trim();
    if (!cleaned || loading || limitReached) return;
    setInput("");
    const history = messages
      .filter((m) => m.text)
      .map((m) => ({
        role: m.role === "user" ? ("user" as const) : ("model" as const),
        text: m.text,
      }));
    setMessages((prev) => [...prev, { role: "user", text: cleaned }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: cleaned,
          visitorId: visitorRef.current,
          lang,
          history,
        }),
      });
      const data: {
        answer?: string;
        source?: string;
        remaining?: number;
        error?: string;
      } = await res.json().catch(() => ({}));
      if (!res.ok || !data.answer) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: ui.networkError },
        ]);
        return;
      }
      const serverRemaining =
        typeof data.remaining === "number" ? data.remaining : remaining - 1;
      const next = Math.max(0, Math.min(remaining - 1, serverRemaining));
      setRemaining(next);
      try {
        window.localStorage.setItem(
          COUNT_KEY,
          String(MAX_QUESTIONS_PER_VISITOR - next),
        );
      } catch {
        // storage unavailable; server-side counter still applies
      }
      const answerMsg: Msg = { role: "assistant", text: data.answer as string };
      if (data.source) answerMsg.source = data.source;
      setMessages((prev) => [...prev, answerMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: ui.networkError },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: FormEvent): void {
    e.preventDefault();
    void send(input);
  }

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label={ui.title}
          className="fixed right-4 bottom-24 z-50 flex h-[min(70vh,560px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-2xl sm:right-6"
        >
          <div className="flex items-start justify-between gap-3 border-b border-foreground/8 px-5 py-4">
            <div>
              <p className="text-[15px] font-semibold tracking-tight text-foreground">
                {ui.title}
              </p>
              <p className="text-[12px] text-foreground/55">{ui.subtitle}</p>
              <p className="mt-1 text-[12px] font-medium text-foreground/70">
                {ui.remaining(remaining)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={ui.closeLabel}
              className="focus-ring inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/10 text-foreground/70 transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-md bg-foreground px-3.5 py-2.5 text-[14px] leading-relaxed text-background"
                      : "max-w-[85%] rounded-2xl rounded-bl-md bg-foreground/5 px-3.5 py-2.5 text-[14px] leading-relaxed text-foreground"
                  }
                >
                  <p>{m.text}</p>
                  {m.role === "assistant" && m.source === "gemini" && (
                    <p className="mt-1 text-[11px] text-foreground/45">{ui.sourceGemini}</p>
                  )}
                  {m.role === "assistant" && m.source === "local" && (
                    <p className="mt-1 text-[11px] text-foreground/45">{ui.sourceLocal}</p>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-foreground/5 px-3.5 py-2.5 text-[14px] text-foreground/55">
                  ...
                </div>
              </div>
            )}
            {messages.length <= 1 && !limitReached && (
              <div className="flex flex-wrap gap-2 pt-1">
                {ui.chips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => void send(chip)}
                    className="focus-ring rounded-full border border-foreground/12 px-3 py-1.5 text-left text-[12.5px] text-foreground/75 transition-colors hover:border-foreground/25 hover:text-foreground"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}
          </div>

          {limitReached ? (
            <div className="border-t border-foreground/8 px-4 py-4">
              <p className="mb-3 text-[13px] leading-relaxed text-foreground/70">
                {limitMessage(lang)}
              </p>
              <div className="flex gap-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-3 py-2 text-[13px] font-medium text-background"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {ui.email}
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-foreground/15 px-3 py-2 text-[13px] font-medium text-foreground"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  {ui.linkedin}
                </a>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-foreground/8 px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={ui.placeholder}
                maxLength={500}
                aria-label={ui.placeholder}
                className="min-w-0 flex-1 rounded-full border border-foreground/12 bg-transparent px-3.5 py-2 text-[14px] text-foreground outline-none placeholder:text-foreground/40 focus:border-foreground/30"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label={ui.send}
                className="focus-ring inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-opacity disabled:opacity-35"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? ui.closeLabel : ui.openLabel}
        className="focus-ring fixed right-4 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-xl transition-transform hover:scale-105 sm:right-6"
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
