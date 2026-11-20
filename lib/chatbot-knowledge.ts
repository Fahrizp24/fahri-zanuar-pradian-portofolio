/**
 * Grounding data for the portfolio chatbot.
 *
 * Every fact below comes from this portfolio site itself (hero, about,
 * skills, projects and contact sections) or from work Fahri has publicly
 * stated he can do. General capability questions ("bisa apa", "melayani
 * apa", "what can he do") are answered with the full range of what he can
 * do, not framed as freelance services only. The chatbot must answer
 * ONLY from this data. If a question is not covered here, it must say it
 * does not know and point the visitor to Fahri directly.
 */

export const CONTACT = {
  name: "Fahri Zanuar Pradian",
  email: "Fpradian24@gmail.com",
  linkedin: "https://linkedin.com/in/fahrizanuarpradian",
  github: "https://github.com/Fahrizp24",
  site: "https://fahrizanuarpradian.tech",
} as const;

export type KnowledgeSection = {
  id: string;
  keywords: string[];
  id_text: string;
  en_text: string;
};

export const KNOWLEDGE: KnowledgeSection[] = [
  {
    id: "about",
    keywords: [
      "siapa fahri", "who is fahri", "tentang fahri", "about fahri",
      "profil", "profile", "background", "kenalan", "introduce",
      "zanuar", "pradian",
    ],
    id_text:
      "Fahri Zanuar Pradian adalah Full-Stack Developer & AI Engineer. Ia mahasiswa D4 Teknik Informatika di Politeknik Negeri Malang (Polinema) yang membangun aplikasi web, sistem IoT, dan solusi AI / Computer Vision yang praktis untuk masalah nyata.",
    en_text:
      "Fahri Zanuar Pradian is a Full-Stack Developer & AI Engineer. He is a D4 Informatics Engineering student at Politeknik Negeri Malang (Polinema) who builds web apps, IoT systems, and practical AI / Computer Vision solutions for real problems.",
  },
  {
    id: "services",
    keywords: [
      "jasa", "service", "services", "layanan", "melayani", "tawarkan",
      "ditawarkan", "menawarkan", "offer", "offers", "bisa bikin",
      "can you build", "what can he do", "freelance", "kerja sama",
      "collaborate", "kolaborasi", "open to work", "available",
    ],
    id_text:
      "Fahri bisa mengerjakan banyak hal di bidang web dan AI:\n1. Pengembangan web full-stack, dari landing page sampai aplikasi web lengkap (Next.js, Laravel).\n2. Chatbot AI untuk bisnis, misalnya bot FAQ dan penangkap leads yang dilatih dari info pemilik bisnis.\n3. Otomasi alur kerja memakai n8n / Make / Zapier yang dihubungkan ke API LLM.\n4. Asisten pengetahuan RAG yang menjawab dari dokumen milik sendiri.\n5. Computer Vision dan Machine Learning, misalnya deteksi objek dan klasifikasi gambar.\n6. Sistem IoT dan embedded berbasis ESP32.\n7. Aplikasi mobile dengan Flutter.\nKalau kebutuhanmu belum ada di daftar ini, tanyakan saja langsung ke Fahri, siapa tahu tetap bisa dibantu.",
    en_text:
      "Fahri can help with a wide range of web and AI work:\n1. Full-stack web development, from landing pages to complete web apps (Next.js, Laravel).\n2. AI chatbots for businesses, such as FAQ and lead-capture bots trained on the business's own information.\n3. Workflow automation with n8n / Make / Zapier connected to LLM APIs.\n4. RAG knowledge assistants that answer from your own documents.\n5. Computer Vision and Machine Learning, such as object detection and image classification.\n6. IoT and embedded systems based on ESP32.\n7. Mobile apps with Flutter.\nIf what you need is not on this list, just ask Fahri directly, he may still be able to help.",
  },
  {
    id: "chatbot-service",
    keywords: [
      "chatbot", "chat bot", "bot", "faq bot", "lead", "whatsapp bot",
      "customer support bot", "support bot",
    ],
    id_text:
      "Ya, Fahri membangun chatbot AI untuk bisnis: bot FAQ, bot customer support, dan bot penangkap leads yang menjawab dari informasi bisnis klien sendiri, bukan jawaban generik. Chatbot di halaman ini adalah contoh langsung hasil karyanya: dibangun dengan Next.js API route dan Gemini, dijaga guardrails, dan dibatasi 5 pertanyaan per pengunjung.",
    en_text:
      "Yes, Fahri builds AI chatbots for businesses: FAQ bots, customer support bots, and lead-capture bots that answer from the client's own business information, not generic answers. The chatbot on this page is a live example of his work: built with a Next.js API route and Gemini, protected by guardrails, and limited to 5 questions per visitor.",
  },
  {
    id: "automation-service",
    keywords: [
      "otomasi", "automation", "n8n", "make", "zapier", "workflow", "alur kerja",
      "integrasi", "integration", "api", "crm", "email automation",
    ],
    id_text:
      "Fahri mengerjakan otomasi alur kerja dengan n8n, Make, dan Zapier yang dihubungkan ke API LLM (misalnya OpenAI / Claude / Gemini): contohnya kualifikasi leads otomatis ke CRM, klasifikasi dan routing email atau tiket, serta pemrosesan dokumen. Keahlian otomatisasi sistem dan cronjob juga tercantum di halaman About situs ini.",
    en_text:
      "Fahri builds workflow automations with n8n, Make, and Zapier connected to LLM APIs (such as OpenAI / Claude / Gemini): for example automatic lead qualification into a CRM, email or ticket classification and routing, and document processing. System automation and cronjob work are also listed on this site's About page.",
  },
  {
    id: "rag-service",
    keywords: [
      "rag", "rag service", "rag chatbot", "retrieval", "dokumen", "document",
      "knowledge base", "pengetahuan", "pdf", "vector", "embedding",
      "tanya jawab dokumen", "document q&a",
    ],
    id_text:
      "Fahri membangun asisten pengetahuan berbasis RAG (Retrieval-Augmented Generation): sistem yang menjawab pertanyaan hanya dari dokumen milik klien (PDF, kebijakan, manual, wiki internal), lengkap dengan rujukan sumber, dan menolak menjawab bila informasinya tidak ada di dokumen. 'RAG Chatbot' dan 'RAG & AI Research' tercantum sebagai keahliannya di situs ini, dan chatbot halaman ini sendiri bekerja dengan prinsip grounding yang sama.",
    en_text:
      "Fahri builds RAG (Retrieval-Augmented Generation) knowledge assistants: systems that answer questions only from the client's own documents (PDFs, policies, manuals, internal wikis), with source references, and refuse to answer when the information is not in the documents. 'RAG Chatbot' and 'RAG & AI Research' are listed among his skills on this site, and this page's chatbot itself works on the same grounding principle.",
  },
  {
    id: "projects",
    keywords: [
      "proyek", "project", "projects", "portfolio", "portofolio", "pernah bikin",
      "karya", "work", "built", "aplikasi apa",
    ],
    id_text:
      "Beberapa proyek Fahri:\n1. AI Word to Google Form Converter, mengubah DOCX menjadi Google Form otomatis dengan Gemini AI (Next.js).\n2. SafeBand, teknologi wearable IoT untuk keamanan pengguna (ESP32).\n3. SafeForm, gateway anti-kecurangan Google Form dengan fullscreen lock dan deteksi pelanggaran real-time.\n4. Sistem Pencatatan Prestasi Mahasiswa JTI Polinema (Laravel).\n5. Sistem Pelaporan dan Perbaikan Fasilitas Kampus (Laravel).\n6. CatatDong, aplikasi pencatat pengeluaran (Next.js).\n7. Computer Vision: Vehicle Detection (Python, YOLOv8).\n8. Emotion AI, deteksi ekspresi wajah real-time (TensorFlow, CNN).\nDetailnya ada di halaman Projects situs ini.",
    en_text:
      "Some of Fahri's projects:\n1. AI Word to Google Form Converter, which turns DOCX files into Google Forms automatically with Gemini AI (Next.js).\n2. SafeBand, IoT wearable technology for user safety (ESP32).\n3. SafeForm, a Google Form anti-cheating gateway with fullscreen lock and real-time violation detection.\n4. JTI Polinema Student Achievement Management System (Laravel).\n5. Campus Facility Reporting and Maintenance System (Laravel).\n6. CatatDong, an expense tracker app (Next.js).\n7. Computer Vision: Vehicle Detection (Python, YOLOv8).\n8. Emotion AI, real-time facial expression detection (TensorFlow, CNN).\nDetails are on this site's Projects page.",
  },
  {
    id: "skills",
    keywords: [
      "skill", "skills", "keahlian", "skill fahri", "keahlian fahri",
      "bisa apa", "expertise", "kemampuan", "tech stack", "stack",
      "teknologi", "bahasa pemrograman", "tools",
    ],
    id_text:
      "Keahlian Fahri meliputi Full-Stack Web Development, AI Engineering, RAG Chatbot, Machine Learning, Computer Vision, IoT & Embedded (ESP32), Mobile Development (Flutter), Backend & Database, System Automation, dan Web Scraping. Stack utamanya: Next.js, React, TypeScript, Node.js, Laravel / PHP, Python, Supabase, dan Tailwind CSS.",
    en_text:
      "Fahri's skills include Full-Stack Web Development, AI Engineering, RAG Chatbots, Machine Learning, Computer Vision, IoT & Embedded (ESP32), Mobile Development (Flutter), Backend & Databases, System Automation, and Web Scraping. His main stack: Next.js, React, TypeScript, Node.js, Laravel / PHP, Python, Supabase, and Tailwind CSS.",
  },
  {
    id: "experience",
    keywords: [
      "pengalaman", "experience", "kerja", "magang", "intern", "timedoor",
      "pantau", "pekerjaan", "worked", "career", "karier",
    ],
    id_text:
      "Pengalaman Fahri antara lain: AI Engineer (Internship) di Timedoor, dan Fullstack Developer & Penulis di Pantau Jatim sejak Juli 2025. Ia juga mengerjakan berbagai proyek web, IoT, dan AI selama kuliah di Polinema. Rincian lengkapnya ada di halaman About.",
    en_text:
      "Fahri's experience includes: AI Engineer (Internship) at Timedoor, and Fullstack Developer & Writer at Pantau Jatim since July 2025. He has also built various web, IoT, and AI projects during his studies at Polinema. Full details are on the About page.",
  },
  {
    id: "education",
    keywords: [
      "pendidikan", "education", "kuliah", "kuliah di mana", "kuliah dimana",
      "universitas", "kampus", "polinema", "sekolah", "study", "college",
      "student", "mahasiswa",
    ],
    id_text:
      "Fahri adalah mahasiswa D4 Teknik Informatika di Politeknik Negeri Malang (Polinema). Ia juga memegang sertifikat Junior Web Developer (BNSP) dan mengikuti pelatihan AI, antara lain AI Ignition Training dan program literasi digital & AI GENsi, serta kursus Data Science dengan Python di DQLab.",
    en_text:
      "Fahri is a D4 Informatics Engineering student at Politeknik Negeri Malang (Polinema). He also holds a Junior Web Developer certificate (BNSP) and has completed AI training, including AI Ignition Training and the GENsi digital & AI literacy program, plus Data Science with Python courses at DQLab.",
  },
  {
    id: "contact",
    keywords: [
      "kontak", "contact", "hubungi", "menghubungi", "email", "linkedin",
      "github", "reach", "hire", "hire fahri", "rekrut", "cara pesan",
      "order", "mulai proyek", "start a project",
    ],
    id_text:
      `Cara menghubungi Fahri: email ke ${CONTACT.email}, LinkedIn di linkedin.com/in/fahrizanuarpradian, atau GitHub di github.com/Fahrizp24. Untuk membicarakan proyek, cara tercepat adalah email atau LinkedIn dengan menceritakan kebutuhan Anda secara singkat.`,
    en_text:
      `You can reach Fahri by email at ${CONTACT.email}, on LinkedIn at linkedin.com/in/fahrizanuarpradian, or on GitHub at github.com/Fahrizp24. To discuss a project, the fastest way is email or LinkedIn with a short description of what you need.`,
  },
  {
    id: "pricing",
    keywords: [
      "harga", "price", "pricing", "rate", "tarif", "biaya", "cost", "berapa",
      "how much", "bayar", "fee", "budget",
    ],
    id_text:
      `Fahri tidak mempublikasikan tarif tetap di situs ini, karena biaya proyek bergantung pada ruang lingkupnya. Untuk penawaran harga, hubungi langsung Fahri di ${CONTACT.email} atau LinkedIn (linkedin.com/in/fahrizanuarpradian) dengan gambaran kebutuhan Anda.`,
    en_text:
      `Fahri does not publish fixed rates on this site, because project cost depends on scope. For a quote, contact Fahri directly at ${CONTACT.email} or on LinkedIn (linkedin.com/in/fahrizanuarpradian) with an outline of what you need.`,
  },
  {
    id: "chatbot-tech",
    keywords: [
      "chatbot ini", "this chatbot", "bot ini", "cara kerja", "how does this work",
      "dibangun", "built with", "gemini", "limit", "batas", "guardrail",
    ],
    id_text:
      "Chatbot ini dibangun Fahri sebagai demo langsung: frontend widget di situs Next.js ini, backend API route, dan model Gemini sebagai otak utamanya. Ia hanya menjawab dari data portofolio ini (grounded), menolak pertanyaan di luar topik dan upaya manipulasi prompt, dan setiap pengunjung dibatasi 5 pertanyaan. Bila Gemini tidak tersedia, ia otomatis beralih ke mode lokal yang menjawab dari basis pengetahuan yang sama.",
    en_text:
      "Fahri built this chatbot as a live demo: a frontend widget on this Next.js site, a backend API route, and the Gemini model as its main brain. It answers only from this portfolio's data (grounded), refuses off-topic questions and prompt manipulation attempts, and each visitor is limited to 5 questions. If Gemini is unavailable, it automatically falls back to a local mode that answers from the same knowledge base.",
  },
];

/** Plain-text knowledge used as grounding context for the LLM. */
export function knowledgeAsText(): string {
  return KNOWLEDGE.map((s) => `[${s.id}] ${s.en_text} / ${s.id_text}`).join("\n");
}

const STOPWORDS = new Set([
  "yang", "dan", "di", "ke", "dari", "untuk", "dengan", "adalah", "ini", "itu",
  "apa", "apakah", "bagaimana", "gimana", "tolong", "mohon", "saya", "aku",
  "anda", "kamu", "dia", "bisa", "dapat", "ada", "tidak", "ya", "kah",
  "the", "a", "an", "is", "are", "do", "does", "did", "can", "could", "you",
  "your", "his", "he", "what", "how", "which", "who", "please", "me", "about",
  "tell", "show", "give", "any", "have", "has", "with", "for", "from", "of",
  "in", "on", "to", "it", "its", "my", "i",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

/**
 * Local retrieval fallback: score each knowledge section by keyword and
 * content overlap with the question. Returns the best section when the
 * score clears the threshold, otherwise null (caller must refuse and
 * point the visitor to Fahri).
 */
const CAPABILITY_PHRASES = [
  "bisa apa",
  "bisa ngapain",
  "melayani apa",
  "apa yang bisa",
  "apa saja yang bisa",
  "what can he do",
  "what can you do",
  "what does he do",
];

export function retrieveLocal(
  question: string,
): { section: KnowledgeSection; score: number } | null {
  // General "what can he do / melayani apa" questions are capability
  // questions, not specifically about freelance services. Their words
  // are mostly stopwords, so match them on the raw phrase first.
  const raw = question.toLowerCase();
  if (CAPABILITY_PHRASES.some((p) => raw.includes(p))) {
    const services = KNOWLEDGE.find((s) => s.id === "services");
    if (services) return { section: services, score: 99 };
  }
  const qTokens = new Set(tokenize(question));
  if (qTokens.size === 0) return null;
  let best: { section: KnowledgeSection; score: number } | null = null;
  for (const section of KNOWLEDGE) {
    let score = 0;
    // Dedupe matched keywords: phrases that collapse to the same token
    // set after stopword removal (e.g. "who is fahri" and "about fahri"
    // both become just "fahri") must only score once per section.
    const matched = new Set<string>();
    for (const kw of section.keywords) {
      const kwTokens = tokenize(kw);
      if (kwTokens.length === 0) continue;
      const key = kwTokens.join(" ");
      if (matched.has(key)) continue;
      if (kwTokens.length === 1) {
        if (kwTokens[0] && qTokens.has(kwTokens[0])) {
          score += 3;
          matched.add(key);
        }
      } else if (kwTokens.every((t) => qTokens.has(t))) {
        score += 4;
        matched.add(key);
      }
    }
    const bodyTokens = new Set(tokenize(`${section.en_text} ${section.id_text}`));
    let bodyHits = 0;
    for (const t of qTokens) {
      if (bodyTokens.has(t)) bodyHits += 1;
    }
    score += Math.min(bodyHits, 2);
    if (!best || score > best.score) best = { section, score };
  }
  if (!best || best.score < 3) return null;
  return best;
}
