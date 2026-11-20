"use client";

import { Linkedin, Mail, MessageCircle, Send, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

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

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:[^)\s]+\))/g);
  return parts.map((part, i) => {
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = /^\[([^\]]+)\]\((https?:[^)\s]+)\)$/.exec(part);
    if (link)
      return (
        <a
          key={i}
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {link[1]}
        </a>
      );
    return <span key={i}>{part}</span>;
  });
}

/** Minimal rich text for bot answers: paragraphs, numbered/bulleted lists, bold, links. */
function parseBlocks(text: string): Block[] {
  const lines = text
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);
  const blocks: Block[] = [];
  const push = (b: Block): void => {
    const last = blocks[blocks.length - 1];
    if (b.kind === "ol" && last?.kind === "ol") {
      last.items.push(...b.items);
      return;
    }
    if (b.kind === "ul" && last?.kind === "ul") {
      last.items.push(...b.items);
      return;
    }
    blocks.push(b);
  };
  for (const line of lines) {
    const ordered = /^\(?(\d+)[.)]\s+(.*)$/.exec(line);
    if (ordered) {
      push({ kind: "ol", items: [ordered[2] ?? ""] });
      continue;
    }
    const bullet = /^[-•]\s+(.*)$/.exec(line);
    if (bullet) {
      push({ kind: "ul", items: [bullet[1] ?? ""] });
      continue;
    }
    const inline = splitInlineNumbered(line);
    if (inline) {
      if (inline.intro) push({ kind: "p", text: inline.intro });
      push({ kind: "ol", items: inline.items });
      if (inline.tail) push({ kind: "p", text: inline.tail });
      continue;
    }
    push({ kind: "p", text: line });
  }
  return blocks;
}

/**
 * Split one long line such as "… utama: (1) foo; (2) bar; (3) baz."
 * into an intro, numbered items and an optional trailing sentence.
 * Returns null unless at least two sequential numbered markers are found.
 */
function splitInlineNumbered(line: string): {
  intro: string;
  items: string[];
  tail: string;
} | null {
  const markerRe = /\(?(\d+)\)?[.)]\s+/g;
  const markers: { index: number; end: number; num: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = markerRe.exec(line)) !== null) {
    // Only accept markers that start a list item: at the start of the
    // line, or right after ": ", "; " or ". ".
    const before = line.slice(Math.max(0, m.index - 2), m.index);
    if (m.index !== 0 && before !== ": " && before !== "; " && before !== ". ")
      continue;
    markers.push({
      index: m.index,
      end: m.index + m[0].length,
      num: Number(m[1]),
    });
  }
  if (markers.length < 2) return null;
  // Markers must be sequential (1, 2, 3 …) so "version 2.0" style
  // numbers never become a list.
  for (let i = 1; i < markers.length; i += 1) {
    if (markers[i]!.num !== markers[i - 1]!.num + 1) return null;
  }
  const first = markers[0]!;
  const intro = line
    .slice(0, first.index)
    .replace(/[:;\s]+$/, "")
    .trim();
  const items: string[] = [];
  let tail = "";
  markers.forEach((mk, i) => {
    const next = markers[i + 1];
    let segment = line
      .slice(mk.end, next ? next.index : line.length)
      .replace(/[;\s]+$/, "")
      .trim();
    if (!next) {
      // A trailing sentence after the last item, e.g. "… sendiri. Di luar
      // itu …", belongs in its own paragraph, not inside the last item.
      const cut = segment.search(/\.\s+[A-ZÀ-Þ]/);
      if (cut > 0) {
        tail = segment.slice(cut + 2).trim();
        segment = segment.slice(0, cut + 1).trim();
      }
    }
    if (segment) items.push(segment);
  });
  if (items.length < 2) return null;
  return { intro, items, tail };
}

type Block =
  | { kind: "p"; text: string }
  | { kind: "ol"; items: string[] }
  | { kind: "ul"; items: string[] };

function RichText({ text }: { text: string }): ReactNode {
  return (
    <div className="flex flex-col gap-1.5">
      {parseBlocks(text).map((block, i) => {
        if (block.kind === "ol")
          return (
            <ol key={i} className="list-decimal space-y-1.5 pl-5">
              {block.items.map((item, j) => (
                <li key={j} className="pl-1">
                  {renderInline(item)}
                </li>
              ))}
            </ol>
          );
        if (block.kind === "ul")
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5">
              {block.items.map((item, j) => (
                <li key={j} className="pl-1">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        return <p key={i}>{renderInline(block.text)}</p>;
      })}
    </div>
  );
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
  const stickToBottomRef = useRef(true);

  useEffect(() => {
    const { id, count } = loadVisitor();
    visitorRef.current = id;
    setRemaining(Math.max(0, MAX_QUESTIONS_PER_VISITOR - count));
  }, []);

  // Scrolling inside the chatbox must never reach the page behind it:
  // the site uses Lenis smooth scroll, whose wheel/touch listeners sit on
  // `window`. React's onWheel/onTouchMove stopPropagation only stops the
  // React tree, not that native window listener, so the page scrolled
  // instead of the chatbox. A native listener on the scroll container
  // stops propagation before the event reaches `window`.
  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;
    const stop = (e: Event): void => {
      e.stopPropagation();
    };
    el.addEventListener("wheel", stop, { passive: true });
    el.addEventListener("touchmove", stop, { passive: true });
    return () => {
      el.removeEventListener("wheel", stop);
      el.removeEventListener("touchmove", stop);
    };
  }, [open]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", text: ui.greeting }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // If the visitor toggles the site language before asking anything,
  // re-render the greeting in the new language instead of leaving the
  // old one behind. Conversations already in progress are untouched.
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 0) return prev;
      if (prev.some((m) => m.role === "user")) return prev;
      return [{ role: "assistant", text: ui.greeting }];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // Auto-scroll to the newest message only while the visitor is already
  // near the bottom, so scrolling up to re-read an answer is never
  // yanked back down when a new message or the loading state arrives.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !stickToBottomRef.current) return;
    el.scrollTo({ top: el.scrollHeight });
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
    // Keep the typing indicator visible for a minimum moment so even a
    // fast (local) answer feels like the bot paused to think, instead
    // of replying instantly.
    const startedAt = Date.now();
    const MIN_THINK_MS = 950;
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
      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_THINK_MS) {
        await new Promise((resolve) =>
          setTimeout(resolve, MIN_THINK_MS - elapsed),
        );
      }
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
          String(MAX_QUESTIONS_PER_VISITOR - next)
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
          className="border-foreground/10 bg-background fixed inset-x-3 bottom-[5.5rem] z-50 flex h-[min(66dvh,540px)] max-h-[calc(100dvh-7rem)] flex-col overflow-hidden rounded-3xl border shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-24 sm:h-[min(600px,calc(100dvh-10rem))] sm:max-h-none sm:w-[min(430px,calc(100vw-3rem))]"
        >
          <div className="border-foreground/8 flex items-start justify-between gap-3 border-b px-4 py-3 sm:px-5 sm:py-4">
            <div>
              <p className="text-foreground text-[14px] font-semibold tracking-tight sm:text-[15px]">
                {ui.title}
              </p>
              <p className="text-foreground/55 text-[11px] sm:text-[12px]">{ui.subtitle}</p>
              <p className="text-foreground/70 mt-1 text-[11px] font-medium sm:text-[12px]">
                {ui.remaining(remaining)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={ui.closeLabel}
              className="focus-ring border-foreground/10 text-foreground/70 hover:text-foreground inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div
            ref={scrollRef}
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            onScroll={(e) => {
              const el = e.currentTarget;
              stickToBottomRef.current =
                el.scrollHeight - el.scrollTop - el.clientHeight < 80;
            }}
            style={{
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user" ? "flex justify-end" : "flex justify-start"
                }
              >
                <div
                  className={
                    m.role === "user"
                      ? "bg-foreground text-background max-w-[90%] rounded-2xl rounded-br-md px-3.5 py-2.5 text-[14px] leading-relaxed"
                      : "bg-foreground/5 text-foreground max-w-[90%] rounded-2xl rounded-bl-md px-3.5 py-2.5 text-[14px] leading-relaxed"
                  }
                >
                  {m.role === "assistant" ? (
                    <RichText text={m.text} />
                  ) : (
                    <p className="whitespace-pre-wrap">{m.text}</p>
                  )}
                  {m.role === "assistant" && m.source === "gemini" && (
                    <p className="text-foreground/45 mt-1 text-[11px]">
                      {ui.sourceGemini}
                    </p>
                  )}
                  {m.role === "assistant" && m.source === "local" && (
                    <p className="text-foreground/45 mt-1 text-[11px]">
                      {ui.sourceLocal}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div
                  role="status"
                  aria-label={lang === "id" ? "Sedang mengetik" : "Typing"}
                  className="bg-foreground/5 flex items-center gap-1 rounded-2xl rounded-bl-md px-3.5 py-3"
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="bg-foreground/55 h-1.5 w-1.5 animate-bounce rounded-full"
                      style={{ animationDelay: `${i * 180}ms` }}
                    />
                  ))}
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
                    className="focus-ring border-foreground/12 text-foreground/75 hover:border-foreground/25 hover:text-foreground rounded-full border px-2.5 py-1.5 text-left text-[12px] transition-colors sm:px-3 sm:text-[12.5px]"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}
          </div>

          {limitReached ? (
            <div className="border-foreground/8 border-t px-4 py-4">
              <p className="text-foreground/70 mb-3 text-[13px] leading-relaxed">
                {limitMessage(lang)}
              </p>
              <div className="flex gap-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="focus-ring bg-foreground text-background inline-flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {ui.email}
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring border-foreground/15 text-foreground inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-3 py-2 text-[13px] font-medium"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  {ui.linkedin}
                </a>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="border-foreground/8 flex items-center gap-2 border-t px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={ui.placeholder}
                maxLength={500}
                aria-label={ui.placeholder}
                className="border-foreground/12 text-foreground placeholder:text-foreground/40 focus:border-foreground/30 min-w-0 flex-1 rounded-full border bg-transparent px-3.5 py-2 text-[16px] outline-none sm:text-[14px]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label={ui.send}
                className="focus-ring bg-foreground text-background inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-opacity disabled:opacity-35"
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
