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
      "Kenalan dulu ya, **Fahri Zanuar Pradian** adalah Full-Stack Developer & AI Engineer.\nIa mahasiswa D4 Teknik Informatika di Politeknik Negeri Malang (Polinema) yang fokus membangun solusi yang benar-benar kepakai, bukan sekadar demo:\n1. Aplikasi web full-stack, dari landing page sampai sistem lengkap.\n2. Sistem IoT berbasis ESP32 untuk masalah di lapangan.\n3. Solusi AI dan Computer Vision yang praktis untuk kebutuhan nyata.\nPengalamannya antara lain AI Engineer (Internship) di Timedoor dan Fullstack Developer & Penulis di Pantau Jatim. Mau tahu lebih dalam? Cek halaman About situs ini, atau tanya aku soal proyek dan keahliannya.",
    en_text:
      "Let me introduce him, **Fahri Zanuar Pradian** is a Full-Stack Developer & AI Engineer.\nHe is a D4 Informatics Engineering student at Politeknik Negeri Malang (Polinema) who focuses on building solutions that are actually useful, not just demos:\n1. Full-stack web apps, from landing pages to complete systems.\n2. ESP32-based IoT systems for real-world problems.\n3. Practical AI and Computer Vision solutions for real needs.\nHis experience includes AI Engineer (Internship) at Timedoor and Fullstack Developer & Writer at Pantau Jatim. Want to go deeper? Check the About page on this site, or ask me about his projects and skills.",
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
      "Fahri bisa mengerjakan banyak hal di bidang web dan AI, ini gambaran lengkapnya:\n1. Pengembangan web full-stack, dari landing page sampai aplikasi web lengkap (Next.js, Laravel).\n2. Chatbot AI untuk bisnis, misalnya bot FAQ, bot customer support, dan penangkap leads yang menjawab dari info bisnis kamu sendiri.\n3. Otomasi alur kerja memakai n8n / Make / Zapier yang dihubungkan ke API LLM, misalnya kualifikasi leads dan routing email otomatis.\n4. Asisten pengetahuan RAG yang menjawab hanya dari dokumen milikmu, lengkap dengan rujukan sumber.\n5. Computer Vision dan Machine Learning, misalnya deteksi objek dan klasifikasi gambar.\n6. Sistem IoT dan embedded berbasis ESP32.\n7. Aplikasi mobile dengan Flutter.\nKalau kebutuhanmu belum ada di daftar ini, tanyakan saja langsung ke Fahri lewat email atau LinkedIn, siapa tahu tetap bisa dibantu.",
    en_text:
      "Fahri can help with a wide range of web and AI work, here is the full picture:\n1. Full-stack web development, from landing pages to complete web apps (Next.js, Laravel).\n2. AI chatbots for businesses, such as FAQ bots, customer support bots, and lead-capture bots that answer from your own business information.\n3. Workflow automation with n8n / Make / Zapier connected to LLM APIs, for example automatic lead qualification and email routing.\n4. RAG knowledge assistants that answer only from your own documents, with source references.\n5. Computer Vision and Machine Learning, such as object detection and image classification.\n6. IoT and embedded systems based on ESP32.\n7. Mobile apps with Flutter.\nIf what you need is not on this list, just ask Fahri directly by email or LinkedIn, he may still be able to help.",
  },
  {
    id: "chatbot-service",
    keywords: [
      "chatbot", "chat bot", "bot", "faq bot", "lead", "whatsapp bot",
      "customer support bot", "support bot",
    ],
    id_text:
      "Bisa, Fahri membangun chatbot AI untuk bisnis, dan chatbot di halaman ini adalah contoh langsung hasil karyanya.\nJenis yang bisa dibuat:\n1. Bot FAQ yang menjawab pertanyaan berulang dari info bisnis kamu.\n2. Bot customer support yang membantu menjawab pelanggan lebih cepat.\n3. Bot penangkap leads yang mengumpulkan minat calon pelanggan.\nBedanya, jawabannya dilatih dari informasi bisnis klien sendiri, bukan jawaban generik, jadi tetap akurat dan sesuai konteks. Chatbot ini sendiri dibangun dengan Next.js API route dan Gemini, dijaga guardrails, dan dibatasi 5 pertanyaan per pengunjung. Tertarik bikin untuk bisnismu? Hubungi Fahri lewat email atau LinkedIn.",
    en_text:
      "Yes, Fahri builds AI chatbots for businesses, and the chatbot on this page is a live example of his work.\nWhat he can build:\n1. FAQ bots that answer repeated questions from your business information.\n2. Customer support bots that help answer customers faster.\n3. Lead-capture bots that collect interest from potential customers.\nThe difference is that answers are grounded in the client's own business information, not generic replies, so they stay accurate and in context. This chatbot itself is built with a Next.js API route and Gemini, protected by guardrails, and limited to 5 questions per visitor. Interested in one for your business? Reach Fahri by email or LinkedIn.",
  },
  {
    id: "automation-service",
    keywords: [
      "otomasi", "automation", "n8n", "make", "zapier", "workflow", "alur kerja",
      "integrasi", "integration", "api", "crm", "email automation",
    ],
    id_text:
      "Fahri mengerjakan otomasi alur kerja supaya pekerjaan berulang bisa jalan sendiri.\nTools yang dipakai: n8n, Make, dan Zapier, dihubungkan ke API LLM seperti OpenAI, Claude, atau Gemini.\nContoh yang bisa dibuat:\n1. Kualifikasi leads otomatis, lalu hasilnya masuk ke CRM.\n2. Klasifikasi dan routing email atau tiket support ke orang yang tepat.\n3. Pemrosesan dokumen otomatis, dari membaca isi sampai merangkumnya.\nKeahlian otomatisasi sistem dan cronjob juga tercantum di halaman About situs ini. Kalau ada proses manual yang tiap hari menghabiskan waktu, ceritakan ke Fahri, nanti dicarikan alur otomasinya.",
    en_text:
      "Fahri builds workflow automations so repetitive work can run on its own.\nTools he uses: n8n, Make, and Zapier, connected to LLM APIs such as OpenAI, Claude, or Gemini.\nExamples of what he can build:\n1. Automatic lead qualification, with results flowing into a CRM.\n2. Email or support ticket classification and routing to the right person.\n3. Automatic document processing, from reading the content to summarizing it.\nSystem automation and cronjob work are also listed on this site's About page. If a manual process eats your time every day, tell Fahri about it and he can map out an automation flow.",
  },
  {
    id: "rag-service",
    keywords: [
      "rag", "rag service", "rag chatbot", "retrieval", "dokumen", "document",
      "knowledge base", "pengetahuan", "pdf", "vector", "embedding",
      "tanya jawab dokumen", "document q&a",
    ],
    id_text:
      "Fahri membangun asisten pengetahuan berbasis RAG (Retrieval-Augmented Generation), cocok kalau kamu punya banyak dokumen tapi sulit dicari jawabannya.\nCara kerjanya:\n1. Dokumen milikmu, misalnya PDF, kebijakan, manual, atau wiki internal, dijadikan basis pengetahuan.\n2. Sistem menjawab pertanyaan hanya dari dokumen itu, lengkap dengan rujukan sumbernya.\n3. Kalau informasinya tidak ada di dokumen, sistem menolak menjawab daripada mengarang.\n'RAG Chatbot' dan 'RAG & AI Research' tercantum sebagai keahlian Fahri di situs ini, dan chatbot halaman ini sendiri bekerja dengan prinsip grounding yang sama. Punya dokumen yang mau dibuat bisa ditanya-tanya? Hubungi Fahri lewat email atau LinkedIn.",
    en_text:
      "Fahri builds RAG (Retrieval-Augmented Generation) knowledge assistants, a good fit if you have lots of documents but answers are hard to find in them.\nHow it works:\n1. Your documents, such as PDFs, policies, manuals, or an internal wiki, become the knowledge base.\n2. The system answers questions only from those documents, with source references.\n3. If the information is not in the documents, the system refuses to answer instead of making things up.\n'RAG Chatbot' and 'RAG & AI Research' are listed among his skills on this site, and this page's chatbot itself works on the same grounding principle. Have documents you want to make queryable? Reach Fahri by email or LinkedIn.",
  },
  {
    id: "projects",
    keywords: [
      "proyek", "project", "projects", "portfolio", "portofolio", "pernah bikin",
      "karya", "work", "built", "aplikasi apa",
    ],
    id_text:
      "Ini beberapa proyek Fahri, campur web, AI, dan IoT:\n1. AI Word to Google Form Converter, mengubah DOCX menjadi Google Form otomatis dengan Gemini AI (Next.js).\n2. SafeBand, teknologi wearable IoT untuk keamanan pengguna (ESP32).\n3. SafeForm, gateway anti-kecurangan Google Form dengan fullscreen lock dan deteksi pelanggaran real-time.\n4. Sistem Pencatatan Prestasi Mahasiswa JTI Polinema (Laravel).\n5. Sistem Pelaporan dan Perbaikan Fasilitas Kampus (Laravel).\n6. CatatDong, aplikasi pencatat pengeluaran (Next.js).\n7. Computer Vision: Vehicle Detection, deteksi kendaraan dengan Python dan YOLOv8.\n8. Emotion AI, deteksi ekspresi wajah real-time dengan TensorFlow dan CNN.\nDetail tiap proyek ada di halaman Projects situs ini, silakan cek langsung di sana.",
    en_text:
      "Here are some of Fahri's projects, a mix of web, AI, and IoT:\n1. AI Word to Google Form Converter, which turns DOCX files into Google Forms automatically with Gemini AI (Next.js).\n2. SafeBand, IoT wearable technology for user safety (ESP32).\n3. SafeForm, a Google Form anti-cheating gateway with fullscreen lock and real-time violation detection.\n4. JTI Polinema Student Achievement Management System (Laravel).\n5. Campus Facility Reporting and Maintenance System (Laravel).\n6. CatatDong, an expense tracker app (Next.js).\n7. Computer Vision: Vehicle Detection, using Python and YOLOv8.\n8. Emotion AI, real-time facial expression detection with TensorFlow and CNN.\nDetails for each project are on this site's Projects page, feel free to check them there.",
  },
  {
    id: "skills",
    keywords: [
      "skill", "skills", "keahlian", "skill fahri", "keahlian fahri",
      "bisa apa", "expertise", "kemampuan", "tech stack", "stack",
      "teknologi", "bahasa pemrograman", "tools",
    ],
    id_text:
      "Keahlian Fahri cukup luas, ini peta lengkapnya:\n1. Full-Stack Web Development, dari frontend sampai backend dan database.\n2. AI Engineering, termasuk RAG Chatbot, Machine Learning, dan Computer Vision.\n3. IoT & Embedded berbasis ESP32.\n4. Mobile Development dengan Flutter.\n5. System Automation dan Web Scraping.\nStack utamanya: Next.js, React, TypeScript, Node.js, Laravel / PHP, Python, Supabase, dan Tailwind CSS. Kombinasi ini yang membuat ia bisa mengerjakan proyek ujung ke ujung, dari tampilan, logika server, sampai fitur AI-nya.",
    en_text:
      "Fahri's skills are quite broad, here is the full map:\n1. Full-Stack Web Development, from frontend to backend and databases.\n2. AI Engineering, including RAG Chatbots, Machine Learning, and Computer Vision.\n3. IoT & Embedded based on ESP32.\n4. Mobile Development with Flutter.\n5. System Automation and Web Scraping.\nHis main stack: Next.js, React, TypeScript, Node.js, Laravel / PHP, Python, Supabase, and Tailwind CSS. That combination lets him handle projects end to end, from the interface and server logic to the AI features.",
  },
  {
    id: "experience",
    keywords: [
      "pengalaman", "experience", "kerja", "magang", "intern", "timedoor",
      "pantau", "pekerjaan", "worked", "career", "karier",
    ],
    id_text:
      "Pengalaman Fahri sejauh ini:\n1. AI Engineer (Internship) di Timedoor, mengerjakan pekerjaan seputar AI.\n2. Fullstack Developer & Penulis di Pantau Jatim sejak Juli 2025, membangun sisi web sekaligus menulis.\n3. Berbagai proyek web, IoT, dan AI selama kuliah di Polinema, termasuk sistem untuk kebutuhan kampus.\nRincian lengkapnya ada di halaman About situs ini. Kombinasi magang, kerja, dan proyek kuliah ini yang membentuk cara ia membangun solusi yang praktis.",
    en_text:
      "Fahri's experience so far:\n1. AI Engineer (Internship) at Timedoor, working on AI-related tasks.\n2. Fullstack Developer & Writer at Pantau Jatim since July 2025, building the web side as well as writing.\n3. Various web, IoT, and AI projects during his studies at Polinema, including systems for campus needs.\nFull details are on the About page of this site. That mix of internship, work, and study projects shapes how he builds practical solutions.",
  },
  {
    id: "education",
    keywords: [
      "pendidikan", "education", "kuliah", "kuliah di mana", "kuliah dimana",
      "universitas", "kampus", "polinema", "sekolah", "study", "college",
      "student", "mahasiswa",
    ],
    id_text:
      "Latar pendidikan dan pelatihan Fahri:\n1. Mahasiswa D4 Teknik Informatika di Politeknik Negeri Malang (Polinema).\n2. Memegang sertifikat Junior Web Developer dari BNSP.\n3. Mengikuti pelatihan AI, antara lain AI Ignition Training dan program literasi digital & AI GENsi.\n4. Mengikuti kursus Data Science dengan Python di DQLab.\nJadi fondasinya campuran antara kuliah formal, sertifikasi, dan pelatihan praktis di bidang AI dan data.",
    en_text:
      "Fahri's education and training background:\n1. D4 Informatics Engineering student at Politeknik Negeri Malang (Polinema).\n2. Holds a Junior Web Developer certificate from BNSP.\n3. Completed AI training, including AI Ignition Training and the GENsi digital & AI literacy program.\n4. Took Data Science with Python courses at DQLab.\nSo his foundation is a mix of formal study, certification, and practical training in AI and data.",
  },
  {
    id: "contact",
    keywords: [
      "kontak", "contact", "hubungi", "menghubungi", "email", "linkedin",
      "github", "reach", "get in touch", "hire", "hire fahri", "rekrut",
      "cara pesan", "order", "mulai proyek", "start a project",
    ],
    id_text:
      `Tentu, kamu bisa menghubungi Fahri lewat tiga jalur publik ini:\n1. Email: ${CONTACT.email}, cara tercepat untuk membicarakan proyek atau kerja sama.\n2. LinkedIn: linkedin.com/in/fahrizanuarpradian, cocok untuk perkenalan dan obrolan profesional.\n3. GitHub: github.com/Fahrizp24, untuk melihat kode dan proyek-proyeknya.\nKalau mau membicarakan proyek, kirim pesan singkat berisi kebutuhanmu dan gambaran waktunya, nanti Fahri akan membalas sendiri. Silakan pilih jalur yang paling nyaman buatmu.`,
    en_text:
      `Of course, you can reach Fahri through these three public channels:\n1. Email: ${CONTACT.email}, the fastest way to discuss a project or collaboration.\n2. LinkedIn: linkedin.com/in/fahrizanuarpradian, good for introductions and professional conversations.\n3. GitHub: github.com/Fahrizp24, to see his code and projects.\nTo discuss a project, send a short message describing what you need and a rough timeline, and Fahri will reply himself. Just pick whichever channel is most comfortable for you.`,
  },
  {
    id: "pricing",
    keywords: [
      "harga", "price", "pricing", "rate", "tarif", "biaya", "cost", "berapa",
      "how much", "bayar", "fee", "budget",
    ],
    id_text:
      `Soal harga, Fahri tidak mempublikasikan tarif tetap di situs ini.\nAlasannya, biaya proyek bergantung pada beberapa hal:\n1. Ruang lingkup dan fitur yang dibutuhkan.\n2. Tingkat kesulitan dan kompleksitasnya.\n3. Durasi pengerjaan yang diminta.\nUntuk penawaran harga yang akurat, hubungi langsung Fahri di ${CONTACT.email} atau LinkedIn (linkedin.com/in/fahrizanuarpradian) dengan gambaran kebutuhanmu, nanti ia hitungkan estimasinya dari sana.`,
    en_text:
      `On pricing, Fahri does not publish fixed rates on this site.\nThat is because project cost depends on a few things:\n1. The scope and features you need.\n2. The difficulty and complexity involved.\n3. The timeline you are asking for.\nFor an accurate quote, contact Fahri directly at ${CONTACT.email} or on LinkedIn (linkedin.com/in/fahrizanuarpradian) with an outline of what you need, and he will estimate it from there.`,
  },
  {
    id: "chatbot-tech",
    keywords: [
      "chatbot ini", "this chatbot", "bot ini", "cara kerja", "how does this work",
      "dibangun", "built with", "gemini", "limit", "batas", "guardrail",
    ],
    id_text:
      "Chatbot ini adalah demo langsung buatan Fahri, jadi cara kerjanya begini:\n1. Frontend-nya widget di situs Next.js ini, backend-nya memakai API route.\n2. Otak utamanya model Gemini, yang menjawab hanya dari data portofolio ini (grounded), bukan pengetahuan bebas.\n3. Ada guardrails: pertanyaan di luar topik dan upaya manipulasi prompt akan ditolak.\n4. Setiap pengunjung dibatasi 5 pertanyaan untuk demo ini.\n5. Bila Gemini tidak tersedia, ia otomatis beralih ke mode lokal yang menjawab dari basis pengetahuan yang sama, seperti yang mungkin sedang kamu pakai sekarang. Jadi chatbot ini sekaligus bukti nyata keahlian Fahri membangun chatbot AI.",
    en_text:
      "This chatbot is a live demo built by Fahri, and here is how it works:\n1. The frontend is a widget on this Next.js site, and the backend uses an API route.\n2. Its main brain is the Gemini model, which answers only from this portfolio's data (grounded), not from free-form knowledge.\n3. It has guardrails: off-topic questions and prompt manipulation attempts are refused.\n4. Each visitor is limited to 5 questions for this demo.\n5. If Gemini is unavailable, it automatically falls back to a local mode that answers from the same knowledge base, which may be what you are using right now. So this chatbot doubles as real proof of Fahri's AI chatbot building skills.",
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
 * Intent phrases checked on the raw question before token scoring.
 * Order is priority: specific intents (contact, pricing, this-chatbot,
 * RAG, automation) must win over generic ones (about, services), because
 * token scoring alone ties on generic words — e.g. "How can I contact
 * Fahri?" used to return the About text, since both sections scored the
 * same on the single token "fahri".
 */
const INTENT_PHRASES: { id: string; phrases: string[] }[] = [
  {
    id: "contact",
    phrases: [
      "how can i contact", "how to contact", "contact fahri", "kontak fahri",
      "cara menghubungi", "menghubungi fahri", "hubungi fahri", "hubungi",
      "menghubungi", "get in touch", "reach fahri", "reach out",
      "kontak", "contact",
    ],
  },
  {
    id: "pricing",
    phrases: [
      "how much", "berapa harga", "berapa biaya", "berapa tarif",
      "harga", "pricing", "price", "tarif", "biaya", "budget", "fee",
    ],
  },
  {
    id: "chatbot-tech",
    phrases: [
      "chatbot ini", "this chatbot", "bot ini", "this bot",
      "how does this chatbot", "cara kerja chatbot", "cara kerja bot",
      "dibangun dengan", "built with", "guardrail", "batas pertanyaan",
      "question limit",
    ],
  },
  {
    id: "services",
    phrases: [
      "chatbot or rag", "chatbot atau rag", "chatbot or a rag",
      "bisa apa", "bisa ngapain", "melayani apa", "apa yang bisa",
      "apa saja yang bisa", "what can he do", "what can you do",
      "what does he do", "jasa apa", "layanan apa", "service apa",
      "what services", "layanan yang ditawarkan", "jasa yang ditawarkan",
    ],
  },
  {
    id: "rag-service",
    phrases: ["rag", "retrieval", "dokumen", "document q&a", "knowledge base", "embedding", "vector"],
  },
  {
    id: "automation-service",
    phrases: ["n8n", "zapier", "otomasi", "automation", "workflow", "alur kerja", "cronjob"],
  },
  {
    id: "chatbot-service",
    phrases: ["chatbot", "chat bot", "faq bot", "whatsapp bot", "support bot"],
  },
  {
    id: "projects",
    phrases: [
      "proyek", "project", "portfolio", "portofolio", "pernah bikin",
      "pernah dibuat", "karya", "what has he built", "aplikasi apa",
    ],
  },
  {
    id: "skills",
    phrases: [
      "skill", "keahlian", "expertise", "kemampuan", "tech stack",
      "teknologi apa", "bahasa pemrograman",
    ],
  },
  {
    id: "experience",
    phrases: [
      "pengalaman", "experience", "magang", "intern", "timedoor",
      "pantau jatim", "pantau", "pernah kerja", "worked",
    ],
  },
  {
    id: "education",
    phrases: [
      "pendidikan", "education", "kuliah", "universitas", "kampus",
      "polinema", "sekolah", "mahasiswa", "student", "sertifikat",
      "certificate", "pelatihan", "training",
    ],
  },
  {
    id: "services",
    phrases: ["jasa", "service", "layanan", "melayani", "freelance", "offer", "tawarkan"],
  },
  {
    id: "about",
    phrases: [
      "siapa fahri", "who is fahri", "tentang fahri", "about fahri",
      "profil", "profile", "kenalan", "introduce", "background",
      "siapa dia", "who is he",
    ],
  },
];

/**
 * Local retrieval fallback: match intent phrases on the raw question
 * first, then score each knowledge section by keyword and content
 * overlap. Returns the best section when the score clears the
 * threshold, otherwise null (caller must refuse and point the visitor
 * to Fahri).
 */
export function retrieveLocal(
  question: string,
): { section: KnowledgeSection; score: number } | null {
  const raw = question.toLowerCase();
  for (const intent of INTENT_PHRASES) {
    if (intent.phrases.some((p) => raw.includes(p))) {
      const section = KNOWLEDGE.find((s) => s.id === intent.id);
      if (section) return { section, score: 99 };
    }
  }
  const qTokens = new Set(tokenize(question));
  if (qTokens.size === 0) return null;
  // Generic name tokens must not decide a match on their own: almost
  // every section mentions Fahri, so they carry no intent signal.
  const GENERIC = new Set(["fahri", "zanuar", "pradian"]);
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
        const t = kwTokens[0];
        if (t && qTokens.has(t)) {
          score += GENERIC.has(t) ? 1 : 3;
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
      if (GENERIC.has(t)) continue;
      if (bodyTokens.has(t)) bodyHits += 1;
    }
    score += Math.min(bodyHits, 2);
    if (!best || score > best.score) best = { section, score };
  }
  if (!best || best.score < 3) return null;
  return best;
}
