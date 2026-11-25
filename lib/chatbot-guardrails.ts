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

/**
 * Small talk that never needs an AI engine (Zanuar, 2026-11-25):
 * greetings, thanks, goodbyes, "who are you", "what can you do",
 * test pings, and bare acknowledgements get a canned answer and do
 * NOT consume the visitor's AI quota. Matching is deliberately
 * strict: the whole message, normalized, must be short (max 40
 * chars) and match one pattern end to end, so a real question that
 * merely starts with "hi" still goes to the engines.
 */
const SMALLTALK: { pattern: RegExp; id: string; en: string }[] = [
  {
    // Greetings: hi, halo, selamat pagi, assalamualaikum, ...
    pattern:
      /^(hi|hii+|hai|halo|hallo|hello|hei|hey|hei kak|hi kak|hai kak|halo kak|hello kak|hi there|hey there|selamat (pagi|siang|sore|malam)|ass?alamu'?alaikum|permisi|nuwun sewu)( kak| bang| gan| semua| there)?$/,
    id: "Halo! Aku asisten portofolio Fahri. Silakan tanya soal layanan, proyek, keahlian, atau pengalaman Fahri — atau cara menghubunginya.",
    en: "Hello! I am Fahri's portfolio assistant. Feel free to ask about Fahri's services, projects, skills, or experience — or how to contact him.",
  },
  {
    // How are you: apa kabar, how are you, ...
    pattern: /^(apa kabar|gimana kabarnya|bagaimana kabarnya|how are you|how's it going|how do you do)$/,
    id: "Baik, terima kasih! Aku asisten portofolio Fahri — silakan tanya soal layanan, proyek, keahlian, atau pengalaman Fahri.",
    en: "I am doing well, thank you! I am Fahri's portfolio assistant — feel free to ask about his services, projects, skills, or experience.",
  },
  {
    // Thanks: terima kasih, makasih, thanks, ...
    pattern:
      /^(terima kasih|trimakasih|makasih|makasi|trims|thanks|thank you|thx|tq)( banyak)?( kak| bang)?$/,
    id: "Sama-sama! Kalau masih ada yang ingin ditanyakan soal Fahri, silakan — atau hubungi langsung lewat email dan LinkedIn di halaman kontak.",
    en: "You are welcome! If there is anything else you would like to know about Fahri, just ask — or reach him directly via the email and LinkedIn on the contact page.",
  },
  {
    // Goodbyes: bye, dadah, sampai jumpa, ...
    pattern:
      /^(bye|bye bye|dadah|dah|sampai jumpa|see you|goodbye|good bye|selamat tinggal|permisi dulu)$/,
    id: "Sampai jumpa! Kalau nanti butuh info soal Fahri, kembali saja ke sini — atau hubungi langsung lewat email dan LinkedIn.",
    en: "See you! If you need anything about Fahri later, come back here — or reach him directly via email and LinkedIn.",
  },
  {
    // Identity: siapa kamu, who are you, kamu bot?, ...
    pattern:
      /^(siapa kamu|kamu siapa|kamu ini siapa|who are you|kamu bot|kamu robot|kamu ai|apakah kamu (bot|ai|robot|manusia)|are you (a )?(bot|ai|robot|human))(\?)?$/,
    id: "Aku asisten virtual di situs portofolio Fahri Zanuar Pradian. Tugasku menjawab pertanyaan pengunjung soal layanan, proyek, keahlian, dan pengalaman Fahri, berdasarkan data portofolio ini.",
    en: "I am the virtual assistant on Fahri Zanuar Pradian's portfolio site. My job is to answer visitor questions about Fahri's services, projects, skills, and experience, based on this portfolio's data.",
  },
  {
    // Help / menu: bisa apa, bantuan, what can you do, ...
    pattern:
      /^(bantuan|help|menu|bisa apa|kamu bisa apa|bisa tanya apa|what can you do|bisa bantu apa|mulai|start)$/,
    id: "Kamu bisa tanya soal ini:\n1. Layanan dan keahlian Fahri\n2. Proyek yang pernah dikerjakan\n3. Pengalaman dan latar belakang Fahri\n4. Cara menghubungi Fahri\nSilakan pilih salah satu, atau tulis pertanyaanmu sendiri.",
    en: "You can ask about these:\n1. Fahri's services and skills\n2. Projects he has built\n3. Fahri's experience and background\n4. How to contact Fahri\nPick one, or just type your own question.",
  },
  {
    // Test pings: tes, test, ping, p, ...
    pattern: /^(tes|test|testing|cek|ping|p|tes 123|test 123)$/,
    id: "Hadir, chatbot aktif! Silakan tanya soal layanan, proyek, atau keahlian Fahri.",
    en: "Here, the chatbot is active! Feel free to ask about Fahri's services, projects, or skills.",
  },
  {
    // Bare acknowledgements: ok, siap, mantap, ...
    pattern:
      /^(ok|oke|okay|baik|siap|mantap|bagus|keren|noted|mengerti|paham|oh gitu|oh begitu|oh ok)$/,
    id: "Siap! Silakan tanya kalau ada yang ingin kamu ketahui soal Fahri.",
    en: "Got it! Feel free to ask if there is anything you would like to know about Fahri.",
  },
];

export function smalltalkFor(raw: string, lang: Lang): string | null {
  const norm = sanitize(raw)
    .toLowerCase()
    .replace(/[!.,?~]+$/g, "")
    .trim();
  if (!norm || norm.length > 40) return null;
  for (const item of SMALLTALK) {
    if (item.pattern.test(norm)) return lang === "id" ? item.id : item.en;
  }
  return null;
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
  /\b(nik|ktp)\b|nomor induk kependudukan/i,
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
