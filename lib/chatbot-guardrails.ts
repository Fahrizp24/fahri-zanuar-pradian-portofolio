import { CONTACT } from "./chatbot-knowledge";

/**
 * Guardrails for the portfolio chatbot.
 *
 * Rules enforced here and in app/api/chat/route.ts:
 * 1. Each visitor gets MAX_QUESTIONS_PER_VISITOR Gemini-answered
 *    questions. After that the chat continues in local mode (answers
 *    from the knowledge base, each ending with a short contact line)
 *    instead of stopping.
 * 2. The bot answers ONLY from the portfolio knowledge base. Anything
 *    else gets a refusal + reach-out message, never an invented answer.
 * 3. Prompt-injection and jailbreak attempts are refused outright.
 * 4. Requests for private data beyond the public contact details on this
 *    site (home address, phone number, passwords, API keys, etc.) are
 *    refused.
 * 5. Message length and history are capped; control characters stripped.
 */

export const MAX_QUESTIONS_PER_VISITOR = 5;
export const MAX_MESSAGE_CHARS = 500;
export const MAX_HISTORY_TURNS = 4;
export const MAX_ANSWER_CHARS = 1200;

export type Lang = "id" | "en";

export function reachOutMessage(lang: Lang): string {
  return lang === "id"
    ? `Untuk pertanyaan ini, silakan hubungi Fahri langsung ya: email ${CONTACT.email} atau LinkedIn linkedin.com/in/fahrizanuarpradian. Ia akan menjawab sendiri pertanyaanmu.`
    : `For this one, please reach out to Fahri directly: email ${CONTACT.email} or LinkedIn linkedin.com/in/fahrizanuarpradian. He will answer your question himself.`;
}

export function limitMessage(lang: Lang): string {
  return lang === "id"
    ? `Kamu sudah memakai ${MAX_QUESTIONS_PER_VISITOR} pertanyaan, batas maksimum untuk demo chatbot ini. Terima kasih sudah mencoba! Untuk melanjutkan obrolan, hubungi Fahri langsung: email ${CONTACT.email} atau LinkedIn linkedin.com/in/fahrizanuarpradian.`
    : `You have used all ${MAX_QUESTIONS_PER_VISITOR} questions, the maximum for this chatbot demo. Thanks for trying it! To continue the conversation, reach out to Fahri directly: email ${CONTACT.email} or LinkedIn linkedin.com/in/fahrizanuarpradian.`;
}

export function contactCta(lang: Lang): string {
  return lang === "id"
    ? `Mau lanjut ngobrol langsung? Email Fahri di ${CONTACT.email} atau hubungi lewat LinkedIn, dibalas langsung olehnya.`
    : `Want to talk directly? Email Fahri at ${CONTACT.email} or reach him on LinkedIn, he replies himself.`;
}

export function dontKnowMessage(lang: Lang): string {
  return lang === "id"
    ? `Maaf, informasi itu tidak ada di data portofolio yang bisa aku akses, jadi aku tidak bisa menjawabnya tanpa mengarang. ${reachOutMessage(lang)}`
    : `Sorry, that information is not in the portfolio data I can access, so I cannot answer it without making things up. ${reachOutMessage(lang)}`;
}

const INJECTION_PATTERNS: RegExp[] = [
  /ignore (all )?(previous|prior|above|earlier) (instructions|prompts?|rules)/i,
  /disregard (all )?(previous|prior|above|earlier)/i,
  /(reveal|show|print|repeat|tell me) (your |the )?(system prompt|instructions|prompt|rules|guardrails)/i,
  /system prompt/i,
  /(api[- ]?key|access token|password|secret key)/i,
  /jailbreak/i,
  /\bDAN mode\b/i,
  /developer mode/i,
  /pretend (you are|to be)/i,
  /act as (if|though) you/i,
  /bypass (the )?(filter|guardrail|restriction)/i,
  /abaikan (instruksi|aturan|perintah)/i,
  /lupakan (instruksi|aturan|perintah)/i,
  /(tampilkan|bocorkan|berikan) (prompt|instruksi sistem|api key|kata sandi)/i,
];

const PRIVATE_DATA_PATTERNS: RegExp[] = [
  /(home address|alamat rumah|nomor (hp|telepon|whatsapp)|phone number|whatsapp number)/i,
  /(tanggal lahir|date of birth|umur fahri|how old is fahri)/i,
  /(gaji|salary|penghasilan fahri)/i,
  /(password|kata sandi|credential|kredensial)/i,
];

export type GuardrailVerdict =
  | { ok: true }
  | { ok: false; reason: "injection" | "private-data" | "empty" | "too-long" };

export function checkMessage(raw: string): GuardrailVerdict {
  const cleaned = sanitize(raw);
  if (!cleaned) return { ok: false, reason: "empty" };
  if (cleaned.length > MAX_MESSAGE_CHARS) return { ok: false, reason: "too-long" };
  if (INJECTION_PATTERNS.some((p) => p.test(cleaned)))
    return { ok: false, reason: "injection" };
  if (PRIVATE_DATA_PATTERNS.some((p) => p.test(cleaned)))
    return { ok: false, reason: "private-data" };
  return { ok: true };
}

export function refusalFor(reason: "injection" | "private-data", lang: Lang): string {
  if (reason === "private-data") {
    return lang === "id"
      ? `Maaf, aku tidak bisa membagikan data pribadi di luar kontak publik yang ada di situs ini. ${reachOutMessage(lang)}`
      : `Sorry, I cannot share private data beyond the public contact details on this site. ${reachOutMessage(lang)}`;
  }
  return lang === "id"
    ? `Maaf, aku hanya bisa menjawab pertanyaan seputar portofolio, proyek, keahlian, dan layanan Fahri. ${reachOutMessage(lang)}`
    : `Sorry, I can only answer questions about Fahri's portfolio, projects, skills, and services. ${reachOutMessage(lang)}`;
}

/** Strip control characters and collapse whitespace. */
export function sanitize(text: string): string {
  return text
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Output guardrail: if a model answer leaks prompt internals or a
 * credential-shaped string, replace it with a refusal.
 */
export function checkOutput(text: string): boolean {
  if (/system prompt|api[- ]?key\s*[:=]|GEMINI_API_KEY/i.test(text)) return false;
  if (/\bAIza[0-9A-Za-z_-]{20,}\b/.test(text)) return false;
  return true;
}

export function detectLang(text: string, fallback: Lang): Lang {
  const idHints =
    /\b(siapa|apa|bagaimana|gimana|bisa|apakah|yang|dan|dari|untuk|dengan|pernah|proyek|jasa|harga|kontak|hubungi|kuliah|pengalaman|keahlian|tolong|ceritakan|jelaskan)\b/i;
  const enHints =
    /\b(who|what|how|can|does|did|which|tell|show|please|experience|skills|projects|services|price|contact|hire)\b/i;
  if (idHints.test(text)) return "id";
  if (enHints.test(text)) return "en";
  return fallback;
}
