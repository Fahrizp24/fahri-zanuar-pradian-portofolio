"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "id" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (id: string) => string;
};

const COPY: Record<string, Record<Language, string>> = {
  hello: { id: "Halo, saya Fahri Zanuar Pradian", en: "Hey, I’m Fahri Zanuar Pradian" },
  heroTitle: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
  heroTitle2: { id: "& AI Engineer", en: "& AI Engineer" },
  heroDescription: { id: "Mahasiswa Teknik Informatika yang membangun aplikasi web, sistem IoT, dan solusi AI / Computer Vision yang praktis.", en: "Informatics Engineering student building web apps, IoT systems, and practical AI / Computer Vision solutions." },
  contact: { id: "Hubungi saya", en: "Contact me" },
  viewWork: { id: "Lihat proyek", en: "View my work" },
  projects: { id: "Proyek", en: "Projects" },
  about: { id: "Tentang", en: "About" },
  home: { id: "Beranda", en: "Home" },
  projectHeadline: { id: "Proyek saya", en: "My projects" },
  projectIntro: { id: "Kumpulan proyek web, IoT, AI, dan Computer Vision yang pernah saya bangun.", en: "A selection of web, IoT, AI, and Computer Vision projects I have built." },
  aboutTitle: { id: "Tentang saya", en: "About me" },
  aboutP1: { id: "Mahasiswa Teknik Informatika yang berminat dalam automasi sistem dan AI. Berpengalaman dalam membangun Aplikasi web full-stack, sistem IoT, dan solusi AI/Computer Vision untuk masalah nyata.", en: "An Informatics Engineering student that interested in automation systems and A. Experienced in building full-stack web apps, IoT systems, and AI/Computer Vision solutions for real problems." },
  aboutP2: { id: "Saya menggunakan Next.js, PHP, ESP32, Python, Computer Vision, Flutter, JavaScript, dan Nodejs.", en: "I work with Laravel, Next.js, PHP, ESP32, Python, Computer Vision, Flutter, JavaScript, and Nodejs." },
  aboutP3: { id: "Saya berpengalaman sebagai AI Engineer (Internship) di Timedoor dan terus belajar dengan membangun produk yang bermanfaat.", en: "I have experience as an AI Engineer (Internship) at Timedoor and keep learning by building useful products." },
  education: { id: "Pendidikan", en: "Education" },
  experience: { id: "Pengalaman", en: "Experience" },
  skills: { id: "Keahlian", en: "Skills" },
  stack: { id: "Teknologi", en: "Stack" },
  collaboration: { id: "Mari berkolaborasi", en: "Let’s collaborate" },
  collaborationText: { id: "Terbuka untuk proyek web, AI, Computer Vision, IoT, dan kolaborasi teknologi.", en: "Open to web, AI, Computer Vision, IoT, and technology collaborations." },
  openWeb: { id: "Buka aplikasi", en: "Open web app" },
  viewProject: { id: "Lihat proyek", en: "View project" },
  openColab: { id: "Buka Colab", en: "Open Colab" },
  projectCatatDongTitle: { id: "CatatDong", en: "CatatDong" },
  projectCatatDongDesc: { id: "Aplikasi pencatat pengeluaran harian dengan kalkulator jatah jajan bulanan.", en: "A daily expense tracker with a monthly spending allowance calculator." },
  projectWordTitle: { id: "AI Word ke Google Form", en: "AI Word to Google Form Converter" },
  projectWordDesc: { id: "Mengubah dokumen Word/DOCX menjadi Google Form secara otomatis dengan Gemini AI.", en: "Automatically turns Word/DOCX documents into Google Forms with Gemini AI." },
  projectSafeTitle: { id: "SafeBand", en: "SafeBand" },
  projectSafeDesc: { id: "Teknologi wearable untuk membantu meningkatkan keamanan dan respons pengguna.", en: "Wearable technology designed to improve user safety and response." },
  projectFixitTitle: { id: "Sistem Pelaporan dan Perbaikan Fasilitas Kampus", en: "Campus Facility Reporting and Maintenance System" },
  projectFixitDesc: { id: "Platform pelaporan fasilitas dengan pengelolaan status perbaikan yang terstruktur.", en: "A facility reporting platform with structured maintenance status tracking." },
  projectSafeFormTitle: { id: "SafeForm — Gateway Anti-Kecurangan Google Form", en: "SafeForm — Google Form Anti-Cheating Gateway" },
  projectSafeFormDesc: { id: "Membungkus Google Form biasa menjadi ujian terawasi: layar penuh wajib, deteksi perpindahan tab, dan telemetry pelanggaran ke panel admin.", en: "Wraps a plain Google Form into a supervised exam: mandatory fullscreen, tab-switch detection, and violation telemetry streamed to an admin panel." },
  projectPrestasiTitle: { id: "Sistem Pencatatan Prestasi Mahasiswa JTI Polinema", en: "JTI Polinema Student Achievement Management System" },
  projectPrestasiDesc: { id: "Sistem pencatatan dan manajemen prestasi mahasiswa Jurusan Teknologi Informasi Polinema.", en: "A system for recording and managing student achievements at Polinema’s Information Technology Department." },
  projectVisionTitle: { id: "Computer Vision: Deteksi Kendaraan", en: "Computer Vision: Vehicle Detection" },
  projectVisionDesc: { id: "Computer Vision untuk mendeteksi kendaraan pada gambar.", en: "Computer Vision for detecting vehicles in images." },
  projectEmotionTitle: { id: "Emotion AI: Deteksi Ekspresi Wajah Real-Time", en: "Emotion AI: Real-Time Facial Expression Detection" },
  projectEmotionDesc: { id: "Sistem AI untuk mendeteksi dan mengklasifikasikan ekspresi wajah secara real-time.", en: "An AI system for real-time facial expression detection and classification." },
  projectPlayItPlusTitle: { id: "PlayItPlus (VeriScribe) — Asisten Dokumentasi Klinis AI", en: "PlayItPlus (VeriScribe) — AI Clinical Documentation Assistant" },
  projectPlayItPlusDesc: { id: "Konsultasi ditranskrip dengan speech-to-text, data pribadi dideidentifikasi, lalu LLM menyusun draf catatan SOAP untuk diverifikasi dokter beserta ringkasan untuk pasien.", en: "Consultations are transcribed with speech-to-text, personal data is de-identified, and an LLM drafts a SOAP note for the doctor to verify, plus a plain-language summary for the patient." },
  projectSiklusPanganTitle: { id: "SiklusPangan", en: "SiklusPangan" },
  projectSiklusPanganDesc: { id: "Platform zero organic waste: Gemini VLM menilai kondisi makanan dari foto untuk mengarahkan surplus yang masih layak ke penerima dan yang sudah basi ke pengolahan.", en: "A zero organic waste platform: a Gemini VLM assesses food condition from photos, routing edible surplus to recipients and spoiled food to processing." },
  projectHermesTitle: { id: "Hermes Chatbot with RAG", en: "Hermes Chatbot with RAG" },
  projectHermesDesc: { id: "Chatbot RAG open source: unggah PDF, dokumen dipecah dan di-embed ke FAISS, lalu dijawab LLM dengan fallback berlapis.", en: "An open-source RAG chatbot: upload a PDF, documents are chunked and embedded into FAISS, and an LLM answers with layered fallbacks." },
  filterAll: { id: "Semua", en: "All" },
  filterLlm: { id: "AI & LLM", en: "AI & LLM" },
  filterWeb: { id: "Web", en: "Web" },
  filterCv: { id: "Computer Vision", en: "Computer Vision" },
  filterIot: { id: "IoT", en: "IoT" },
  showMore: { id: "Lihat lainnya", en: "Show more" },
  educationTitle: { id: "Pendidikan", en: "Education" },
  experienceTitle: { id: "Pengalaman", en: "Experience" },
  skillsTitle: { id: "Keahlian", en: "What I do" },
  internBoth: { id: "Magang/Intern", en: "Magang/Intern" },
  intern: { id: "Magang", en: "Internship" },
  competitionProject: { id: "Proyek Kompetisi", en: "Competition Project" },
  competition: { id: "Kompetisi", en: "Competition" },
  pantauRole: { id: "Fullstack Developer & Penulis", en: "Fullstack Developer & Writer" },
  pantauPeriod: { id: "Juli 2025 – Sekarang", en: "July 2025 – Present" },
  present: { id: "Sekarang", en: "Present" },
  informatics: { id: "D4 Teknik Informatika", en: "D4 Informatics Engineering" },
  showLess: { id: "Tampilkan lebih sedikit", en: "Show less" },
  certificates: { id: "Sertifikat", en: "Certificates" },
  certificateHeadline: { id: "Sertifikat & penghargaan", en: "Certificates & awards" },
  certificateIntro: { id: "Dokumen kredensial dan penghargaan. Setiap item terbuka di tab baru.", en: "Credential documents and awards. Each item opens in a new tab." },
  certificatesTitle: { id: "Sertifikat", en: "Certificates" },
  awardsTitle: { id: "Penghargaan", en: "Awards" },
  openCertificate: { id: "Buka dokumen", en: "Open document" },
  certificatePending: { id: "Dokumen menyusul", en: "Document pending" },
  certBnspTitle: { id: "Junior Web Developer", en: "Junior Web Developer" },
  certAiIgnitionTitle: { id: "AI Ignition Training — 30 JP", en: "AI Ignition Training — 30 training hours" },
  certGensiTitle: { id: "GENsi — 7 Days Challenge: Literasi Digital & AI", en: "GENsi — 7 Days Challenge: Digital Literacy & AI" },
  certDqlabIntroTitle: { id: "Introduction to Data Science with Python", en: "Introduction to Data Science with Python" },
  certDqlabPandas1Title: { id: "Data Manipulation with Pandas — Part 1", en: "Data Manipulation with Pandas — Part 1" },
  certDqlabPandas2Title: { id: "Data Manipulation with Pandas — Part 2", en: "Data Manipulation with Pandas — Part 2" },
  certBaturWinnerTitle: { id: "Juara II — Batur Geopark Literacy Competition", en: "Second Place — Batur Geopark Literacy Competition" },
  projectTagline: { id: "Dari eksperimen yang menyenangkan sampai sistem yang dipikirkan dengan serius, inilah karya yang bangga pernah saya selesaikan.", en: "From playful experiments to thoughtful systems, a look at the work I’m proud to have shipped." },
  builtWith: { id: "Dibangun dengan Next.js", en: "Built with Next.js" },
  skipToContent: { id: "Lewati ke konten utama", en: "Skip to main content" },
  showEmail: { id: "Tampilkan email", en: "Show email" },
  copyEmail: { id: "Salin", en: "Copy" },
  emailCopied: { id: "Email tersalin", en: "Email copied" },
  seeProjects: { id: "Lihat proyek", en: "See projects" },
  resetStack: { id: "Atur ulang tumpukan", en: "Reset stack" },
  certBaturParticipationTitle: { id: "Penghargaan Peran Serta — Batur Geopark Literacy Competition", en: "Certificate of Participation — Batur Geopark Literacy Competition" },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }): ReactNode {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "id" || saved === "en") setLanguageState(saved);
  }, []);
  const setLanguage = (next: Language): void => {
    setLanguageState(next);
    window.localStorage.setItem("portfolio-language", next);
  };
  const t = (id: string): string => COPY[id]?.[language] ?? id;
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}

export function LanguageToggle(): ReactNode {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="fixed top-[4.25rem] right-4 z-50 flex items-center gap-1 sm:top-6 sm:right-6" aria-label="Language">
      {(["id", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={language === item}
          onClick={() => setLanguage(item)}
          className={`focus-ring h-8 min-w-8 rounded-full px-2 text-[11px] font-semibold uppercase tracking-tight transition-colors ${language === item ? "bg-foreground text-background" : "bg-background text-foreground/50 ring-1 ring-foreground/8 hover:text-foreground"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
