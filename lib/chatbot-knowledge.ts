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
      "zanuar", "pradian", "ringkasan", "summary",
    ],
    id_text:
      "Kenalan dulu ya, **Fahri Zanuar Pradian** adalah Full-Stack Developer & AI Engineer.\nIa mahasiswa D4 Teknik Informatika di Politeknik Negeri Malang (Polinema) yang fokus membangun solusi yang benar-benar kepakai, bukan sekadar demo:\n1. Aplikasi web full-stack, dari landing page sampai sistem lengkap.\n2. Sistem IoT berbasis ESP32 untuk masalah di lapangan.\n3. Solusi AI dan Computer Vision yang praktis untuk kebutuhan nyata.\nPengalamannya antara lain AI Engineer (Internship) di Timedoor dan Fullstack Developer & Penulis di Pantau Jatim. Ia berbasis di Indonesia dan terbiasa bekerja remote untuk klien dari mana saja. Mau tahu lebih dalam? Cek halaman About situs ini, atau tanya aku soal proyek dan keahliannya.",
    en_text:
      "Let me introduce him, **Fahri Zanuar Pradian** is a Full-Stack Developer & AI Engineer.\nHe is a D4 Informatics Engineering student at Politeknik Negeri Malang (Polinema) who focuses on building solutions that are actually useful, not just demos:\n1. Full-stack web apps, from landing pages to complete systems.\n2. ESP32-based IoT systems for real-world problems.\n3. Practical AI and Computer Vision solutions for real needs.\nHis experience includes AI Engineer (Internship) at Timedoor and Fullstack Developer & Writer at Pantau Jatim. He is based in Indonesia and works remotely with clients anywhere. Want to go deeper? Check the About page on this site, or ask me about his projects and skills.",
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
    id: "web-service",
    keywords: [
      "website", "web app", "aplikasi web", "landing page", "company profile",
      "situs", "web development", "bikin web", "buat website", "web company",
      "sistem informasi", "dashboard", "admin panel", "api",
    ],
    id_text:
      "Soal website dan aplikasi web, Fahri mengerjakan ujung ke ujung, dari tampilan sampai database:\n1. Landing page dan company profile yang cepat dan rapi di HP maupun desktop.\n2. Aplikasi web custom, misalnya sistem pencatatan, dashboard admin, dan portal internal.\n3. Integrasi API dan layanan pihak ketiga, termasuk API AI seperti Gemini, OpenAI, dan Claude.\nStack yang dipakai: Next.js / React / TypeScript untuk web modern, atau Laravel / PHP untuk sistem berbasis server, dengan database seperti Supabase / PostgreSQL dan MySQL. Contoh nyatanya ada di halaman Projects, termasuk sistem untuk kampus dan media. Punya kebutuhan web tertentu? Ceritakan lewat email atau LinkedIn.",
    en_text:
      "For websites and web apps, Fahri works end to end, from the interface down to the database:\n1. Landing pages and company profiles that are fast and tidy on mobile and desktop.\n2. Custom web applications, such as record systems, admin dashboards, and internal portals.\n3. API and third-party integrations, including AI APIs such as Gemini, OpenAI, and Claude.\nHis stack: Next.js / React / TypeScript for modern web, or Laravel / PHP for server-based systems, with databases such as Supabase / PostgreSQL and MySQL. Real examples are on the Projects page, including systems for a campus and a media outlet. Have a specific web need? Tell him by email or LinkedIn.",
  },
  {
    id: "chatbot-service",
    keywords: [
      "chatbot", "chat bot", "bot", "faq bot", "lead", "whatsapp bot",
      "customer support bot", "support bot",
    ],
    id_text:
      "Bisa, Fahri membangun chatbot AI untuk bisnis, dan chatbot di halaman ini adalah contoh langsung hasil karyanya.\nJenis yang bisa dibuat:\n1. Bot FAQ yang menjawab pertanyaan berulang dari info bisnis kamu.\n2. Bot customer support yang membantu menjawab pelanggan lebih cepat.\n3. Bot penangkap leads yang mengumpulkan minat calon pelanggan.\n4. Bot untuk WhatsApp atau website, menjawab dari basis pengetahuan bisnismu sendiri.\nBedanya, jawabannya digrounded dari informasi bisnis klien sendiri, bukan jawaban generik, jadi tetap akurat dan sesuai konteks, dan ada guardrails supaya bot tidak menjawab di luar topik. Chatbot ini sendiri dibangun dengan Next.js dan Gemini, dengan mode lokal sebagai cadangan. Tertarik bikin untuk bisnismu? Hubungi Fahri lewat email atau LinkedIn.",
    en_text:
      "Yes, Fahri builds AI chatbots for businesses, and the chatbot on this page is a live example of his work.\nWhat he can build:\n1. FAQ bots that answer repeated questions from your business information.\n2. Customer support bots that help answer customers faster.\n3. Lead-capture bots that collect interest from potential customers.\n4. Bots for WhatsApp or a website, answering from your own business knowledge base.\nThe difference is that answers are grounded in the client's own business information, not generic replies, so they stay accurate and in context, with guardrails so the bot does not wander off topic. This chatbot itself is built with Next.js and Gemini, with a local mode as backup. Interested in one for your business? Reach Fahri by email or LinkedIn.",
  },
  {
    id: "automation-service",
    keywords: [
      "otomasi", "automation", "n8n", "make", "zapier", "workflow", "alur kerja",
      "integrasi", "integration", "api", "crm", "email automation",
    ],
    id_text:
      "Fahri mengerjakan otomasi alur kerja supaya pekerjaan berulang bisa jalan sendiri.\nTools yang dipakai: n8n, Make, dan Zapier, dihubungkan ke API LLM seperti OpenAI, Claude, atau Gemini.\nContoh yang bisa dibuat:\n1. Kualifikasi leads otomatis, lalu hasilnya masuk ke CRM atau spreadsheet.\n2. Klasifikasi dan routing email atau tiket support ke orang yang tepat.\n3. Pemrosesan dokumen otomatis, dari membaca isi sampai merangkumnya.\n4. Notifikasi dan laporan berkala yang terkirim sendiri lewat cronjob.\nKeahlian otomatisasi sistem dan cronjob juga tercantum di halaman About situs ini. Kalau ada proses manual yang tiap hari menghabiskan waktu, ceritakan ke Fahri, nanti dicarikan alur otomasinya.",
    en_text:
      "Fahri builds workflow automations so repetitive work can run on its own.\nTools he uses: n8n, Make, and Zapier, connected to LLM APIs such as OpenAI, Claude, or Gemini.\nExamples of what he can build:\n1. Automatic lead qualification, with results flowing into a CRM or spreadsheet.\n2. Email or support ticket classification and routing to the right person.\n3. Automatic document processing, from reading the content to summarizing it.\n4. Scheduled notifications and reports that send themselves via cronjobs.\nSystem automation and cronjob work are also listed on this site's About page. If a manual process eats your time every day, tell Fahri about it and he can map out an automation flow.",
  },
  {
    id: "rag-service",
    keywords: [
      "rag", "rag service", "rag chatbot", "retrieval", "dokumen", "document",
      "knowledge base", "pengetahuan", "pdf", "vector", "embedding",
      "tanya jawab dokumen", "document q&a",
    ],
    id_text:
      "Fahri membangun asisten pengetahuan berbasis RAG (Retrieval-Augmented Generation), cocok kalau kamu punya banyak dokumen tapi sulit dicari jawabannya.\nCara kerjanya:\n1. Dokumen milikmu, misalnya PDF, kebijakan, manual, SOP, atau wiki internal, dijadikan basis pengetahuan.\n2. Sistem menjawab pertanyaan hanya dari dokumen itu, lengkap dengan rujukan sumbernya.\n3. Kalau informasinya tidak ada di dokumen, sistem menolak menjawab daripada mengarang.\n4. Cocok untuk helpdesk internal, tanya jawab produk, dan pencarian arsip.\n'RAG Chatbot' dan 'RAG & AI Research' tercantum sebagai keahlian Fahri di situs ini, dan chatbot halaman ini sendiri bekerja dengan prinsip grounding yang sama. Punya dokumen yang mau dibuat bisa ditanya-tanya? Hubungi Fahri lewat email atau LinkedIn.",
    en_text:
      "Fahri builds RAG (Retrieval-Augmented Generation) knowledge assistants, a good fit if you have lots of documents but answers are hard to find in them.\nHow it works:\n1. Your documents, such as PDFs, policies, manuals, SOPs, or an internal wiki, become the knowledge base.\n2. The system answers questions only from those documents, with source references.\n3. If the information is not in the documents, the system refuses to answer instead of making things up.\n4. A good fit for internal helpdesks, product Q&A, and archive search.\n'RAG Chatbot' and 'RAG & AI Research' are listed among his skills on this site, and this page's chatbot itself works on the same grounding principle. Have documents you want to make queryable? Reach Fahri by email or LinkedIn.",
  },
  {
    id: "projects",
    keywords: [
      "proyek", "project", "projects", "portfolio", "portofolio", "pernah bikin",
      "karya", "work", "built", "aplikasi apa",
    ],
    id_text:
      "Ini beberapa proyek Fahri, campur web, AI, dan IoT:\n1. AI Word to Google Form Converter, mengubah DOCX menjadi Google Form otomatis dengan Gemini AI (Next.js).\n2. PlayItPlus (VeriScribe), asisten dokumentasi klinis AI dengan speech-to-text dan LLM (proyek lomba PLAY IT Hackathon DeepTech 2026).\n3. SiklusPangan, platform zero organic waste dengan Gemini VLM yang menilai kondisi makanan dari foto (Next.js, Supabase).\n4. Hermes Chatbot with RAG, chatbot dokumen open source (FastAPI, LlamaIndex, FAISS).\n5. SafeBand, teknologi wearable IoT untuk keamanan pengguna (ESP32).\n6. SafeForm, gateway anti-kecurangan Google Form dengan fullscreen lock dan deteksi pelanggaran real-time.\n7. Sistem Pencatatan Prestasi Mahasiswa JTI Polinema (Laravel).\n8. Sistem Pelaporan dan Perbaikan Fasilitas Kampus (Laravel).\n9. CatatDong, aplikasi pencatat pengeluaran (Next.js).\n10. Computer Vision: Vehicle Detection, deteksi kendaraan dengan Python dan YOLOv8.\n11. Emotion AI, deteksi ekspresi wajah real-time dengan TensorFlow dan CNN.\nDetail tiap proyek ada di halaman Projects situs ini, silakan cek langsung di sana. Kamu juga bisa tanya aku soal proyek tertentu, sebutkan saja namanya.",
    en_text:
      "Here are some of Fahri's projects, a mix of web, AI, and IoT:\n1. AI Word to Google Form Converter, which turns DOCX files into Google Forms automatically with Gemini AI (Next.js).\n2. PlayItPlus (VeriScribe), an AI clinical documentation assistant using speech-to-text and an LLM (a PLAY IT Hackathon DeepTech 2026 competition project).\n3. SiklusPangan, a zero organic waste platform with a Gemini VLM that assesses food condition from photos (Next.js, Supabase).\n4. Hermes Chatbot with RAG, an open-source document chatbot (FastAPI, LlamaIndex, FAISS).\n5. SafeBand, IoT wearable technology for user safety (ESP32).\n6. SafeForm, a Google Form anti-cheating gateway with fullscreen lock and real-time violation detection.\n7. JTI Polinema Student Achievement Management System (Laravel).\n8. Campus Facility Reporting and Maintenance System (Laravel).\n9. CatatDong, an expense tracker app (Next.js).\n10. Computer Vision: Vehicle Detection, using Python and YOLOv8.\n11. Emotion AI, real-time facial expression detection with TensorFlow and CNN.\nDetails for each project are on this site's Projects page, feel free to check them there. You can also ask me about a specific project, just name it.",
  },
  {
    id: "project-form-converter",
    keywords: [
      "form converter", "word to google form", "docx", "google form converter",
      "converter", "ubah word", "ai word",
    ],
    id_text:
      "AI Word to Google Form Converter adalah tool buatan Fahri (Next.js) yang mengubah dokumen Word (DOCX) menjadi Google Form secara otomatis dengan bantuan Gemini AI.\nMasalah yang diselesaikan: membuat soal atau formulir di Google Form satu per satu itu lama dan melelahkan. Dengan tool ini, dokumen yang sudah rapi tinggal diunggah, lalu pertanyaan-pertanyaannya dibaca AI dan dibangun menjadi form.\nCocok untuk guru, dosen, dan admin yang rutin membuat kuis atau ujian dari dokumen Word. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "The AI Word to Google Form Converter is a tool Fahri built (Next.js) that turns a Word document (DOCX) into a Google Form automatically with the help of Gemini AI.\nThe problem it solves: building quiz or form questions in Google Forms one by one is slow and tiring. With this tool, you upload a tidy document and the AI reads the questions and builds the form for you.\nA good fit for teachers, lecturers, and admins who regularly make quizzes or exams from Word documents. Details are on this site's Projects page.",
  },
  {
    id: "project-safeband",
    keywords: ["safeband", "safe band", "wearable", "gelang", "keamanan pengguna", "safety device"],
    id_text:
      "SafeBand adalah proyek IoT Fahri: teknologi wearable berbasis ESP32 yang dirancang untuk keamanan pengguna.\nPerangkat wearable dipilih supaya selalu melekat di badan dan bisa dipakai dalam aktivitas harian, sementara ESP32 menjadi otaknya sebagai mikrokontroler yang terhubung.\nProyek ini contoh sisi IoT dan embedded dari keahlian Fahri, di luar web dan AI. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "SafeBand is Fahri's IoT project: ESP32-based wearable technology designed for user safety.\nA wearable format is chosen so the device stays on the body and can be used in daily activities, with an ESP32 as its connected microcontroller brain.\nThis project shows the IoT and embedded side of Fahri's skills, beyond web and AI. Details are on this site's Projects page.",
  },
  {
    id: "project-safeform",
    keywords: ["safeform", "safe form", "anti kecurangan", "anti-cheating", "anti cheating", "ujian online", "exam gateway"],
    id_text:
      "SafeForm adalah gateway anti-kecurangan untuk Google Form buatan Fahri, dirancang untuk ujian online yang lebih jujur.\nCara kerjanya:\n1. Peserta mengerjakan lewat SafeForm yang mengunci tampilan fullscreen selama ujian.\n2. Sistem mendeteksi pelanggaran secara real-time, misalnya keluar dari mode fullscreen.\n3. Pengawas mendapat sinyal pelanggaran saat itu juga, bukan setelah ujian selesai.\nCocok untuk sekolah dan kampus yang mengadakan ujian berbasis Google Form. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "SafeForm is Fahri's anti-cheating gateway for Google Forms, designed to make online exams fairer.\nHow it works:\n1. Participants take the exam through SafeForm, which locks the display in fullscreen during the test.\n2. The system detects violations in real time, such as leaving fullscreen mode.\n3. Proctors get a violation signal right away, not after the exam ends.\nA good fit for schools and campuses running Google Form based exams. Details are on this site's Projects page.",
  },
  {
    id: "project-jti-prestasi",
    keywords: ["prestasi", "achievement", "jti", "pencatatan prestasi", "sistem prestasi", "mahasiswa jti"],
    id_text:
      "Sistem Pencatatan Prestasi Mahasiswa JTI Polinema adalah aplikasi web berbasis Laravel yang Fahri bangun untuk jurusannya.\nFungsinya mencatat dan mengelola prestasi mahasiswa Jurusan Teknologi Informasi (JTI) Politeknik Negeri Malang, supaya data prestasi tidak lagi tercecer di berkas terpisah dan mudah direkap saat dibutuhkan.\nIni contoh proyek sistem informasi kampus yang ia kerjakan dengan Laravel. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "The JTI Polinema Student Achievement Management System is a Laravel web app Fahri built for his own department.\nIt records and manages student achievements for the Information Technology Department (JTI) at Politeknik Negeri Malang, so achievement data no longer sits scattered across separate files and can be recapped whenever needed.\nIt is an example of his campus information system work with Laravel. Details are on this site's Projects page.",
  },
  {
    id: "project-fasilitas-kampus",
    keywords: ["fasilitas kampus", "facility", "pelaporan fasilitas", "perbaikan fasilitas", "maintenance", "laporan kerusakan"],
    id_text:
      "Sistem Pelaporan dan Perbaikan Fasilitas Kampus adalah aplikasi web berbasis Laravel buatan Fahri untuk mengelola kerusakan fasilitas di lingkungan kampus.\nAlurnya: pengguna melaporkan fasilitas yang rusak, laporan tercatat rapi, lalu proses perbaikannya bisa dipantau sampai selesai, jadi tidak ada laporan yang hilang di tengah jalan.\nProyek ini contoh sistem alur kerja (workflow) berbasis web yang ia bangun dengan Laravel. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "The Campus Facility Reporting and Maintenance System is a Laravel web app Fahri built to manage facility problems around a campus.\nThe flow: users report a broken facility, the report is recorded neatly, and the repair process can be tracked until it is done, so no report gets lost along the way.\nThis project is an example of the web-based workflow systems he builds with Laravel. Details are on this site's Projects page.",
  },
  {
    id: "project-catatdong",
    keywords: ["catatdong", "catat dong", "expense tracker", "pencatat pengeluaran", "keuangan pribadi", "money tracker"],
    id_text:
      "CatatDong adalah aplikasi pencatat pengeluaran (expense tracker) berbasis Next.js buatan Fahri.\nFungsinya sederhana dan praktis: mencatat pengeluaran sehari-hari supaya arus uang pribadi terlihat jelas dan bisa dievaluasi, bukan sekadar lewat begitu saja.\nProyek ini menunjukkan sisi produk web modern Fahri dengan Next.js. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "CatatDong is an expense tracker app built by Fahri with Next.js.\nIts job is simple and practical: record daily spending so personal cash flow is visible and can be reviewed, instead of just slipping away.\nThis project shows Fahri's modern web product side with Next.js. Details are on this site's Projects page.",
  },
  {
    id: "project-vehicle-detection",
    keywords: ["vehicle detection", "deteksi kendaraan", "yolo", "yolov8", "deteksi objek", "object detection", "kendaraan"],
    id_text:
      "Computer Vision: Vehicle Detection adalah proyek Fahri di bidang Computer Vision, memakai Python dan YOLOv8 untuk mendeteksi kendaraan.\nSistemnya membaca gambar atau video lalu mengenali dan menandai kendaraan yang terlihat di dalamnya, fondasi yang biasa dipakai untuk pemantauan lalu lintas dan analisis area parkir.\nProyek ini contoh keahlian deteksi objeknya di luar pengembangan web. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "Computer Vision: Vehicle Detection is Fahri's Computer Vision project, using Python and YOLOv8 to detect vehicles.\nThe system reads images or video and recognises and marks the vehicles it sees, the kind of foundation used for traffic monitoring and parking area analysis.\nThis project shows his object detection skills beyond web development. Details are on this site's Projects page.",
  },
  {
    id: "project-emotion-ai",
    keywords: ["emotion ai", "emosi", "ekspresi wajah", "facial expression", "emotion detection", "deteksi emosi", "tensorflow", "cnn"],
    id_text:
      "Emotion AI adalah proyek Fahri yang mendeteksi ekspresi wajah secara real-time memakai TensorFlow dan CNN (Convolutional Neural Network).\nKamera membaca wajah, lalu model mengklasifikasikan ekspresi yang tampil saat itu juga. Teknologi semacam ini dipakai antara lain untuk riset interaksi manusia-komputer dan sistem yang responsif terhadap pengguna.\nProyek ini contoh sisi Machine Learning Fahri di bidang pengolahan citra wajah. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "Emotion AI is Fahri's project that detects facial expressions in real time using TensorFlow and a CNN (Convolutional Neural Network).\nThe camera reads a face and the model classifies the expression it shows right away. This kind of technology is used in human-computer interaction research and user-responsive systems, among other things.\nThis project shows Fahri's Machine Learning side in facial image processing. Details are on this site's Projects page.",
  },
  {
    id: "project-playitplus",
    keywords: ["playitplus", "play it plus", "veriscribe", "dokumentasi klinis", "clinical documentation", "soap", "speech-to-text", "speech to text", "transkrip konsultasi", "rekam medis", "simrs", "catatan dokter"],
    id_text:
      "PlayItPlus (VeriScribe) adalah asisten dokumentasi klinis AI yang Fahri bangun sebagai AI & Software Engineer untuk lomba PLAY IT Hackathon DeepTech 2026.\nAlurnya:\n1. Konsultasi dokter dan pasien direkam, lalu ditranskrip dengan speech-to-text.\n2. Data pribadi pasien dideidentifikasi sebelum diproses.\n3. LLM menyusun draf catatan klinis SOAP berkutipan sumber.\n4. Dokter memeriksa dan mengesahkan draf itu, tidak ada catatan yang lolos tanpa verifikasi dokter.\n5. Dari catatan yang disetujui, dibuat ringkasan berbahasa sederhana untuk pasien.\nSistemnya bekerja ujung ke ujung dan demonya ada di playitplus.vercel.app. Catatan jujur: API key LLM pada demo publik saat ini sedang dicabut karena biaya, jadi demo belum memanggil LLM sungguhan sampai key dipasang lagi. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "PlayItPlus (VeriScribe) is an AI clinical documentation assistant Fahri built as AI & Software Engineer for the PLAY IT Hackathon DeepTech 2026 competition.\nThe flow:\n1. A doctor-patient consultation is recorded and transcribed with speech-to-text.\n2. The patient's personal data is de-identified before processing.\n3. An LLM drafts a SOAP clinical note with source citations.\n4. The doctor reviews and approves the draft; no note passes without doctor verification.\n5. A plain-language summary for the patient is generated from the approved note.\nThe system works end to end and the demo is at playitplus.vercel.app. One honest note: the public demo's LLM API key is currently revoked over cost, so the demo does not call a real LLM until a key is supplied again. Details are on this site's Projects page.",
  },
  {
    id: "project-sikluspangan",
    keywords: ["sikluspangan", "siklus pangan", "food waste", "limbah makanan", "sampah organik", "organic waste", "zero waste", "surplus makanan", "makanan basi", "donasi makanan"],
    id_text:
      "SiklusPangan adalah platform zero organic waste yang Fahri bangun untuk Vibe Code Competition TCC 2026, dengan peran Lead Backend, Data Infrastructure, API & Functional UI Logic.\nCara kerjanya: foto makanan dinilai kondisinya oleh Google Gemini 2.0 Flash VLM (Vision Language Model). Surplus yang masih layak konsumsi diarahkan ke penerima donasi, sedangkan makanan yang sudah basi diarahkan ke pengolahan residu, supaya tidak ada sisa organik yang terbuang percuma.\nStack-nya Next.js 15, TypeScript, dan Supabase. Demonya live di siklus-pangan.vercel.app dan detailnya ada di halaman Projects situs ini.",
    en_text:
      "SiklusPangan is a zero organic waste platform Fahri built for the Vibe Code Competition TCC 2026, in the role of Lead Backend, Data Infrastructure, API & Functional UI Logic.\nHow it works: a photo of food is assessed by a Google Gemini 2.0 Flash VLM (Vision Language Model). Surplus that is still edible is routed to donation recipients, while spoiled food is routed to residue processing, so no organic waste goes to waste.\nThe stack is Next.js 15, TypeScript, and Supabase. The demo is live at siklus-pangan.vercel.app and details are on this site's Projects page.",
  },
  {
    id: "project-hermes",
    keywords: ["hermes", "hermes chatbot", "faiss", "llamaindex", "chatbot pdf", "rag pdf", "dokumen pdf"],
    id_text:
      "Hermes Chatbot with RAG adalah chatbot dokumen open source buatan Fahri (repo publik di GitHub-nya).\nCara kerjanya:\n1. Pengguna mengunggah PDF, isinya dipecah menjadi potongan teks dengan LlamaIndex MarkdownNodeParser.\n2. Potongan teks di-embed dengan FastEmbed (BAAI/bge-small-en-v1.5) dan disimpan di FAISS IndexFlatIP.\n3. Saat ditanya, sistem mengambil 10 potongan paling relevan (top-K 10) dan LLM menjawab berdasarkan isinya.\n4. Kalau LLM tidak tersedia, ada fallback berlapis sampai fallback kata kunci, jadi chatbot tetap menjawab.\nFrontend-nya Next.js 15 dan backend-nya FastAPI. Korpus contoh bawaannya adalah cerita rakyat Madura. Detailnya ada di halaman Projects situs ini.",
    en_text:
      "Hermes Chatbot with RAG is an open-source document chatbot Fahri built (public repo on his GitHub).\nHow it works:\n1. A user uploads a PDF and its content is split into text chunks with the LlamaIndex MarkdownNodeParser.\n2. The chunks are embedded with FastEmbed (BAAI/bge-small-en-v1.5) and stored in a FAISS IndexFlatIP index.\n3. When asked, the system retrieves the 10 most relevant chunks (top-K 10) and the LLM answers from them.\n4. If the LLM is unavailable, layered fallbacks down to a keyword fallback keep the chatbot answering.\nThe frontend is Next.js 15 and the backend is FastAPI. Its bundled sample corpus is a Madurese folktale. Details are on this site's Projects page.",
  },
  {
    id: "skills",
    keywords: [
      "skill", "skills", "keahlian", "skill fahri", "keahlian fahri",
      "bisa apa", "expertise", "kemampuan", "tech stack", "stack",
      "teknologi", "bahasa pemrograman", "tools",
    ],
    id_text:
      "Keahlian Fahri cukup luas, ini peta lengkapnya:\n1. Full-Stack Web Development, dari frontend sampai backend dan database.\n2. AI Engineering, termasuk RAG Chatbot, Machine Learning, dan Computer Vision.\n3. IoT & Embedded berbasis ESP32.\n4. Mobile Development dengan Flutter.\n5. System Automation dan Web Scraping.\nStack utamanya: Next.js, React, TypeScript, Node.js, Laravel / PHP, Python, Supabase, dan Tailwind CSS. Untuk AI ia memakai API Gemini, OpenAI, dan Claude, plus TensorFlow dan YOLOv8 untuk vision. Kombinasi ini yang membuat ia bisa mengerjakan proyek ujung ke ujung, dari tampilan, logika server, sampai fitur AI-nya.",
    en_text:
      "Fahri's skills are quite broad, here is the full map:\n1. Full-Stack Web Development, from frontend to backend and databases.\n2. AI Engineering, including RAG Chatbots, Machine Learning, and Computer Vision.\n3. IoT & Embedded based on ESP32.\n4. Mobile Development with Flutter.\n5. System Automation and Web Scraping.\nHis main stack: Next.js, React, TypeScript, Node.js, Laravel / PHP, Python, Supabase, and Tailwind CSS. For AI he works with the Gemini, OpenAI, and Claude APIs, plus TensorFlow and YOLOv8 for vision. That combination lets him handle projects end to end, from the interface and server logic to the AI features.",
  },
  {
    id: "experience",
    keywords: [
      "pengalaman", "experience", "kerja", "magang", "intern", "timedoor",
      "pantau", "pekerjaan", "worked", "career", "karier",
    ],
    id_text:
      "Pengalaman Fahri sejauh ini:\n1. AI Engineer (Internship) di Timedoor, mengerjakan pekerjaan seputar AI, termasuk tuning prompt dan pengujian chatbot.\n2. Fullstack Developer & Penulis di Pantau Jatim sejak Juli 2025, membangun sisi web sekaligus menulis.\n3. Berbagai proyek web, IoT, dan AI selama kuliah di Polinema, termasuk sistem untuk kebutuhan kampus.\nRincian lengkapnya ada di halaman About situs ini. Kombinasi magang, kerja, dan proyek kuliah ini yang membentuk cara ia membangun solusi yang praktis.",
    en_text:
      "Fahri's experience so far:\n1. AI Engineer (Internship) at Timedoor, working on AI-related tasks, including prompt tuning and chatbot testing.\n2. Fullstack Developer & Writer at Pantau Jatim since July 2025, building the web side as well as writing.\n3. Various web, IoT, and AI projects during his studies at Polinema, including systems for campus needs.\nFull details are on the About page of this site. That mix of internship, work, and study projects shapes how he builds practical solutions.",
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
      "harga", "pricing", "tarif", "biaya", "cost",
      "how much", "bayar", "fee", "budget",
    ],
    id_text:
      `Soal harga, Fahri tidak mempublikasikan tarif tetap di situs ini.\nAlasannya, biaya proyek bergantung pada beberapa hal:\n1. Ruang lingkup dan fitur yang dibutuhkan.\n2. Tingkat kesulitan dan kompleksitasnya.\n3. Durasi pengerjaan yang diminta.\nIa mengerjakan proyek berbasis kesepakatan ruang lingkup, bukan tarif jam yang dipajang. Untuk penawaran harga yang akurat, hubungi langsung Fahri di ${CONTACT.email} atau LinkedIn (linkedin.com/in/fahrizanuarpradian) dengan gambaran kebutuhanmu, nanti ia hitungkan estimasinya dari sana.`,
    en_text:
      `On pricing, Fahri does not publish fixed rates on this site.\nThat is because project cost depends on a few things:\n1. The scope and features you need.\n2. The difficulty and complexity involved.\n3. The timeline you are asking for.\nHe works on a scope-based agreement rather than a posted hourly rate. For an accurate quote, contact Fahri directly at ${CONTACT.email} or on LinkedIn (linkedin.com/in/fahrizanuarpradian) with an outline of what you need, and he will estimate it from there.`,
  },
  {
    id: "process",
    keywords: [
      "proses", "process", "cara kerja sama", "alur", "tahapan", "how it works",
      "how do we start", "mulai", "workflow pengerjaan", "langkah",
      "cara order", "cara pesan jasa", "gimana cara",
    ],
    id_text:
      "Alur kerja sama dengan Fahri umumnya begini:\n1. Kamu ceritakan kebutuhanmu lewat email atau LinkedIn, cukup gambaran kasarnya dulu.\n2. Fahri menanyakan detail yang kurang, lalu memberi estimasi biaya dan waktu dari ruang lingkupnya.\n3. Setelah sepakat, pengerjaan dimulai dan kamu menerima update berkala soal progresnya.\n4. Ada ruang revisi sesuai kesepakatan di awal, supaya hasilnya pas dengan kebutuhan.\n5. Terakhir serah terima hasil beserta penjelasan singkat cara memakainya.\nSemua komunikasi langsung dengan Fahri sendiri, tidak lewat perantara. Siap mulai? Ceritakan kebutuhanmu lewat email atau LinkedIn.",
    en_text:
      "Working with Fahri usually goes like this:\n1. You describe what you need by email or LinkedIn, a rough outline is enough to start.\n2. Fahri asks about any missing details, then gives a cost and time estimate based on the scope.\n3. Once you agree, the build starts and you receive regular progress updates.\n4. There is room for revisions as agreed at the start, so the result fits what you need.\n5. Finally, handover of the finished work with a short explanation of how to use it.\nAll communication is directly with Fahri himself, no middlemen. Ready to start? Tell him what you need by email or LinkedIn.",
  },
  {
    id: "availability",
    keywords: [
      "available", "availability", "ketersediaan", "kapan bisa", "when can he start",
      "mulai kapan", "sedang sibuk", "open project", "terima proyek",
      "slot", "jadwal", "deadline", "tenggat",
    ],
    id_text:
      "Fahri menerima proyek freelance di sela kegiatan kuliah dan magangnya, jadi ketersediaannya berubah mengikuti beban saat itu.\nKarena itu ia tidak memasang status ketersediaan tetap di situs ini. Untuk proyek dengan tenggat tertentu, cara paling pasti adalah bertanya langsung lewat email atau LinkedIn dan sebutkan target waktumu; Fahri akan menjawab sendiri apakah jadwalnya masuk.\nKalau kebutuhanmu fleksibel, biasanya lebih mudah menemukan slot yang cocok.",
    en_text:
      "Fahri takes freelance projects alongside his studies and internship, so his availability changes with his current load.\nThat is why there is no fixed availability status on this site. For a project with a specific deadline, the surest way is to ask directly by email or LinkedIn and mention your target date; Fahri will reply himself whether the schedule works.\nIf your timeline is flexible, a fitting slot is usually easier to find.",
  },
  {
    id: "location",
    keywords: [
      "lokasi", "location", "orang mana", "asal mana", "where is he", "based",
      "remote", "jarak jauh", "timezone", "zona waktu", "bahasa",
      "language", "english", "domisili", "tinggal",
    ],
    id_text:
      "Fahri berbasis di Indonesia dan bekerja remote, jadi ia bisa bekerja sama dengan klien dari kota atau negara mana pun.\nZona waktunya WITA (GMT+8), dan komunikasi proyek bisa dalam Bahasa Indonesia atau Inggris, menyesuaikan kenyamananmu.\nSitus ini sendiri dwibahasa, dan chatbot ini juga menjawab dalam bahasa yang kamu pakai. Untuk urusan yang perlu tatap muka, bicarakan saja langsung dengan Fahri lewat email atau LinkedIn.",
    en_text:
      "Fahri is based in Indonesia and works remotely, so he can collaborate with clients from any city or country.\nHis timezone is WITA (GMT+8), and project communication can be in Indonesian or English, whichever you are comfortable with.\nThis site itself is bilingual, and this chatbot also answers in the language you use. For anything that needs an in-person meeting, just discuss it directly with Fahri by email or LinkedIn.",
  },
  {
    id: "why-hire",
    keywords: [
      "kenapa fahri", "why fahri", "why hire", "kenapa harus", "kelebihan",
      "different", "beda", "unggul", "alasan", "memilih fahri", "strength",
    ],
    id_text:
      "Beberapa alasan memilih Fahri:\n1. Satu orang untuk banyak lapis: web, AI, dan IoT bisa dikerjakan ujung ke ujung tanpa perlu beberapa freelancer berbeda.\n2. Fokusnya solusi praktis yang benar-benar kepakai, bukan demo yang berhenti di tampilan.\n3. Chatbot di halaman ini bukti langsung keahliannya, kamu bisa menilai sendiri cara ia membangun sistem AI yang aman dan terarah.\n4. Komunikasi langsung dengan orang yang mengerjakan, dalam Bahasa Indonesia atau Inggris, tanpa perantara.\nKalau profil itu cocok dengan kebutuhanmu, lanjutkan lewat email atau LinkedIn.",
    en_text:
      "A few reasons to choose Fahri:\n1. One person across layers: web, AI, and IoT can be handled end to end without juggling several different freelancers.\n2. His focus is practical solutions that are actually used, not demos that stop at looking good.\n3. The chatbot on this page is direct proof of his skills, you can judge for yourself how he builds AI systems that are safe and on-topic.\n4. Direct communication with the person doing the work, in Indonesian or English, with no middlemen.\nIf that profile fits what you need, continue by email or LinkedIn.",
  },
  {
    id: "industries",
    keywords: [
      "industri", "industry", "industries", "sektor", "bidang", "domain",
      "pendidikan", "education sector", "umkm", "sme", "startup",
      "bisnis apa", "pernah di bidang",
    ],
    id_text:
      "Dari proyek dan pengalamannya, Fahri paling banyak berkutat di bidang-bidang ini:\n1. Pendidikan: sistem pencatatan prestasi dan fasilitas kampus, gateway anti-kecurangan ujian, dan tool pembuat Google Form untuk guru.\n2. Media digital: pengembangan web dan penulisan di Pantau Jatim.\n3. Bisnis dan layanan pelanggan: chatbot FAQ dan support, penangkap leads, dan otomasi alur kerja.\n4. Keselamatan dan IoT: perangkat wearable berbasis ESP32.\nBidangmu di luar daftar ini? Ceritakan saja kebutuhanmu, banyak solusinya bisa dipindahkan lintas bidang.",
    en_text:
      "From his projects and experience, Fahri has worked mostly in these areas:\n1. Education: student achievement and campus facility systems, an exam anti-cheating gateway, and a Google Form builder tool for teachers.\n2. Digital media: web development and writing at Pantau Jatim.\n3. Business and customer service: FAQ and support chatbots, lead capture, and workflow automation.\n4. Safety and IoT: an ESP32-based wearable device.\nYour field not on this list? Just describe what you need, many of these solutions transfer across fields.",
  },
  {
    id: "faq-misc",
    keywords: [
      "cv", "resume", "nda", "kontrak", "contract", "maintenance",
      "support setelah", "setelah selesai", "booking", "book a call",
      "jadwal meeting", "konsultasi", "consultation", "revisi", "revision",
    ],
    id_text:
      "Beberapa hal yang sering ditanyakan:\n1. CV atau resume: tidak ada file CV yang diunduh di situs ini; ringkasan pengalaman ada di halaman About dan LinkedIn Fahri, dan CV lengkap bisa diminta lewat email.\n2. Konsultasi atau meeting: belum ada kalender booking publik, atur saja lewat email atau LinkedIn, nanti waktunya dicocokkan.\n3. NDA dan kontrak: bisa dibicarakan dan disepakati sebelum proyek dimulai, silakan sampaikan kebutuhanmu di awal.\n4. Dukungan setelah serah terima: ruang revisi dan pendampingan awal bisa dimasukkan dalam kesepakatan awal, jadi tanyakan saat briefing.\nUntuk semuanya, jalur tercepat tetap email Fahri atau LinkedIn.",
    en_text:
      "A few things that are often asked:\n1. CV or resume: there is no downloadable CV file on this site; his experience summary is on the About page and Fahri's LinkedIn, and a full CV can be requested by email.\n2. Consultation or meeting: there is no public booking calendar yet, just arrange it by email or LinkedIn and a time will be matched.\n3. NDA and contract: these can be discussed and agreed before the project starts, just state your needs up front.\n4. Support after handover: revision room and initial guidance can be included in the initial agreement, so ask during the briefing.\nFor all of these, the fastest route is still Fahri's email or LinkedIn.",
  },
  {
    id: "honest-gaps",
    keywords: [
      "gagal", "failed", "kelemahan", "weakness", "tantangan", "challenge",
      "docker", "gcp", "ci/cd", "deployment", "deploy", "production",
      "kekurangan",
    ],
    id_text:
      "Beberapa hal memang tidak dirinci di portofolio ini, dan aku tidak mau mengarang soal itu:\n1. Proyek yang gagal atau tantangan tersulit: tidak dicantumkan, yang tampil di sini adalah proyek yang selesai dan dipublikasikan.\n2. Kelemahan atau area pengembangan: tidak dipublikasikan, itu bahan obrolan langsung saat interview.\n3. Detail infrastruktur seperti Docker, GCP, atau CI/CD: tidak disebutkan secara spesifik di situs ini.\nKalau kamu rekruter dan ingin menggali hal-hal itu, Fahri terbuka membahasnya secara jujur lewat email atau LinkedIn.",
    en_text:
      "A few things are genuinely not detailed in this portfolio, and I will not make them up:\n1. Failed projects or his hardest technical challenge: not listed, what is shown here are finished, published projects.\n2. Weaknesses or growth areas: not published, that is material for a direct interview conversation.\n3. Infrastructure specifics such as Docker, GCP, or CI/CD: not specified on this site.\nIf you are a recruiter and want to explore those, Fahri is open to discussing them honestly by email or LinkedIn.",
  },
  {
    id: "chatbot-tech",
    keywords: [
      "chatbot ini", "this chatbot", "bot ini", "cara kerja", "how does this work",
      "dibangun", "built with", "gemini", "limit", "batas", "guardrail",
    ],
    id_text:
      "Chatbot ini adalah demo langsung buatan Fahri, jadi cara kerjanya begini:\n1. Frontend-nya widget di situs Next.js ini, backend-nya memakai API route.\n2. Otak utamanya model Gemini 3.5 Flash, yang menjawab hanya dari data portofolio ini (grounded), bukan pengetahuan bebas.\n3. Ada guardrails: pertanyaan di luar topik dan upaya manipulasi prompt akan ditolak.\n4. Lima pertanyaan pertama tiap pengunjung dijawab Gemini; setelah itu chat tetap lanjut dalam mode lokal yang menjawab dari basis pengetahuan yang sama.\n5. Mode lokal itulah yang mungkin sedang kamu pakai sekarang, dan setiap jawabannya ditutup ajakan menghubungi Fahri langsung. Jadi chatbot ini sekaligus bukti nyata keahlian Fahri membangun chatbot AI.",
    en_text:
      "This chatbot is a live demo built by Fahri, and here is how it works:\n1. The frontend is a widget on this Next.js site, and the backend uses an API route.\n2. Its main brain is the Gemini 3.5 Flash model, which answers only from this portfolio's data (grounded), not from free-form knowledge.\n3. It has guardrails: off-topic questions and prompt manipulation attempts are refused.\n4. Each visitor's first five questions are answered by Gemini; after that the chat continues in a local mode that answers from the same knowledge base.\n5. That local mode may be what you are using right now, and each of its answers closes with an invitation to contact Fahri directly. So this chatbot doubles as real proof of Fahri's AI chatbot building skills.",
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
 * Order is priority: specific intents (per-project names, contact,
 * pricing, this-chatbot, specific services) must win over generic ones
 * (projects, skills, services, about), because token scoring alone ties
 * on generic words — e.g. "How can I contact Fahri?" used to return the
 * About text, since both sections scored the same on the single token
 * "fahri". Watch out for substring traps when adding phrases: "intern"
 * also matches "internal", and "nda" hides inside "kendaraan".
 */
const INTENT_PHRASES: { id: string; phrases: string[] }[] = [
  {
    id: "industries",
    phrases: [
      "industri", "industry", "industries", "sektor", "sector",
      "bidang apa", "pernah di bidang", "umkm", "startup", "sme",
    ],
  },
  {
    id: "project-form-converter",
    phrases: [
      "form converter", "word to google form", "docx", "google form",
      "ubah word", "converter",
    ],
  },
  {
    id: "project-safeband",
    phrases: [
      "safeband", "safe band", "wearable", "gelang", "alat keamanan",
      "safety device", "keamanan pengguna",
    ],
  },
  {
    id: "project-safeform",
    phrases: [
      "safeform", "safe form", "anti kecurangan", "anti-cheating",
      "anti cheating", "ujian online", "exam gateway",
    ],
  },
  {
    id: "project-jti-prestasi",
    phrases: ["prestasi", "achievement"],
  },
  {
    id: "project-fasilitas-kampus",
    phrases: [
      "fasilitas kampus", "facility reporting", "pelaporan fasilitas",
      "perbaikan fasilitas", "laporan kerusakan", "campus facility",
    ],
  },
  {
    id: "project-catatdong",
    phrases: ["catatdong", "catat dong", "expense tracker", "pencatat pengeluaran"],
  },
  {
    id: "project-vehicle-detection",
    phrases: [
      "vehicle detection", "deteksi kendaraan", "yolo", "deteksi objek",
      "object detection",
    ],
  },
  {
    id: "project-emotion-ai",
    phrases: [
      "emotion ai", "deteksi emosi", "ekspresi wajah",
      "facial expression", "emotion detection",
    ],
  },
  {
    id: "project-playitplus",
    phrases: [
      "playitplus", "play it plus", "veriscribe", "dokumentasi klinis",
      "clinical documentation", "soap note", "catatan soap",
      "speech-to-text", "speech to text",
    ],
  },
  {
    id: "project-sikluspangan",
    phrases: [
      "sikluspangan", "siklus pangan", "food waste", "limbah makanan",
      "organic waste", "zero waste", "surplus makanan", "makanan basi",
    ],
  },
  {
    id: "project-hermes",
    phrases: ["hermes", "faiss", "llamaindex"],
  },
  {
    id: "education",
    phrases: [
      "pendidikan", "education", "kuliah", "universitas", "kampus",
      "polinema", "mahasiswa", "student", "sertifikat",
      "certificate", "pelatihan", "training", "bnsp", "dqlab",
    ],
  },
  {
    id: "location",
    phrases: [
      "lokasi", "location", "where is he", "where are you based",
      "based in", "remote", "jarak jauh", "timezone", "time zone",
      "zona waktu", "bahasa apa", "speak english", "bahasa inggris",
      "in english", "in indonesian", "domisili", "tinggal di",
      "language", "luar negeri", "abroad", "overseas",
      "international", "foreign client", "klien asing",
    ],
  },
  {
    id: "contact",
    phrases: [
      "how can i contact", "how to contact", "contact fahri", "kontak fahri",
      "cara menghubungi", "menghubungi fahri", "hubungi fahri", "hubungi",
      "menghubungi", "get in touch", "reach fahri", "reach out",
      "communicat", "talk to", "speak to", "chat with", "reach you",
      "reach him", "message fahri", "komunikasi", "bicara dengan",
      "ngobrol", "kontak kamu", "menghubungi kamu", "whatsapp number",
      "nomor whatsapp", "no whatsapp", "whatsapp fahri", "nomor hp",
      "no hp", "phone number", "nomor telepon",
      "kontak", "contact",
    ],
  },
  {
    id: "pricing",
    phrases: [
      "how much", "berapa harga", "berapa biaya", "berapa tarif",
      "harga", "pricing", "price for", "price of", "your price",
      "his price", "tarif", "biaya", "budget", "fee", "kisaran", "rate",
      "proposal", "penawaran", "quotation", "quote",
    ],
  },
  {
    id: "honest-gaps",
    phrases: [
      "proyek yang gagal", "proyek gagal", "failed project",
      "tantangan tersulit", "tantangan teknis", "hardest challenge",
      "kelemahan", "weakness", "kekurangan fahri", "docker", "gcp",
      "ci/cd", "kubernetes", "mendeploy", "deployment",
      "deploy ke production",
    ],
  },
  {
    id: "chatbot-tech",
    phrases: [
      "chatbot ini", "this chatbot", "bot ini", "this bot",
      "how does this chatbot", "cara kerja chatbot", "cara kerja bot",
      "dibangun dengan", "built with", "guardrail", "batas pertanyaan",
      "question limit", "mode lokal", "local mode", "kenapa lokal",
      "why local",
    ],
  },
  {
    id: "process",
    phrases: [
      "cara kerja sama", "how do we work", "how does it work with",
      "alur kerja sama", "tahapan", "proses kerja", "working process",
      "how do we start", "cara memulai", "mulai proyek", "start a project",
      "cara order", "cara pesan jasa", "langkah pertama", "first step",
      "prosesnya gimana", "gimana proses", "how is the process",
    ],
  },
  {
    id: "rag-service",
    phrases: ["rag", "retrieval", "dokumen", "document q&a", "knowledge base", "embedding", "vector"],
  },
  {
    id: "automation-service",
    phrases: ["n8n", "zapier", "otomasi", "automation", "workflow", "alur kerja", "cronjob", "integrasi"],
  },
  {
    id: "chatbot-service",
    phrases: ["chatbot", "chat bot", "faq bot", "whatsapp bot", "support bot"],
  },
  {
    id: "availability",
    phrases: [
      "available", "availability", "ketersediaan", "kapan bisa mulai",
      "when can he start", "when can you start", "terima proyek",
      "accepting projects", "sedang sibuk", "is he busy", "deadline",
      "tenggat", "slot", "mulai kapan", "start next", "start in",
      "full time", "full-time", "part time", "part-time",
      "berapa lama pengerjaan", "berapa lama membuat", "berapa lama bikin",
      "how long does it take", "how long will it take", "how long to build",
      "timeline", "durasi", "estimasi waktu",
    ],
  },
  {
    id: "web-service",
    phrases: [
      "website", "web app", "aplikasi web", "landing page",
      "company profile", "bikin web", "buat website", "sistem informasi",
      "dashboard", "web development",
    ],
  },
  {
    id: "faq-misc",
    phrases: [
      "cv", "resume", "curriculum vitae", "tanda tangan nda",
      "sign an nda", "non-disclosure", "non disclosure", "kontrak",
      "contract", "book a call", "booking call", "jadwal meeting",
      "konsultasi", "consultation", "revisi", "revision", "maintenance",
      "setelah selesai", "setelah serah terima", "after handover",
      "support after", "pendampingan",
    ],
  },
  {
    id: "about",
    phrases: [
      "siapa fahri", "who is fahri", "tentang fahri", "about fahri",
      "profil", "profile", "kenalan", "introduce", "background",
      "siapa dia", "who is he", "ceritakan tentang", "tell me about",
      "profil singkat", "rangkum profil", "ringkasan profil",
      "pemilik portofolio", "portfolio owner", "summarize his profile",
      "rangkum", "ringkas",
    ],
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
      "skill", "skil", "keahlian", "expertise", "kemampuan", "tech stack",
      "teknologi apa", "bahasa pemrograman", "react", "typescript",
      "javascript", "laravel", "flutter", "python", "next.js", "nextjs",
      "supabase", "tailwind", "tensorflow", "esp32", "php", "node",
      "mysql", "machine learning", "computer vision", "web scraping",
      "scraping", "iot", "embedded",
    ],
  },
  {
    id: "experience",
    phrases: [
      "magang", "internship", "intern di",
      "timedoor", "pantau jatim", "pantau", "pernah kerja", "worked",
      "karier", "career",
    ],
  },
  {
    id: "why-hire",
    phrases: [
      "kenapa fahri", "why fahri", "why hire", "why should",
      "kenapa harus", "kelebihan fahri", "what makes him different",
      "beda fahri", "alasan memilih", "why choose", "strengths",
      "keunggulan",
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
    id: "services",
    phrases: ["jasa", "service", "layanan", "melayani", "freelance", "offer", "tawarkan"],
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
  // Requests for general services (debugging the visitor's own code,
  // recipes, and the like) are out of scope even when they mention a
  // technology Fahri knows; they must not be routed to a section.
  const OFFTOPIC_REQUESTS = [
    "debug kode", "debug code", "fix my code", "perbaiki kode saya",
    "buatkan resep", "resep nasi", "resep masakan", "recipe for",
  ];
  if (OFFTOPIC_REQUESTS.some((p) => raw.includes(p))) return null;
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
