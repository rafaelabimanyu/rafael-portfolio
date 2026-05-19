"use client";

import { createContext, useContext, useState, useCallback } from "react";

/* ================================================================
   LANGUAGE DICTIONARY — ID / EN
   ================================================================ */
const DICT = {
  /* ── Navbar ──────────────────────────────────────────────────── */
  navbar: {
    en: {
      home: "Home",
      about: "About",
      techStack: "Tech Stack",
      projects: "Projects",
      contact: "Contact",
    },
    id: {
      home: "Beranda",
      about: "Tentang",
      techStack: "Teknologi",
      projects: "Projek",
      contact: "Kontak",
    },
  },

  /* ── Hero ────────────────────────────────────────────────────── */
  hero: {
    en: {
      badge: "Available for Projects",
      tagline:
        "Building robust, scalable, and modern web solutions with a focus on",
      taglineHighlight1: "clean code",
      taglineAnd: "and",
      taglineHighlight2: "performance",
      viewProjects: "View Projects",
      myGithub: "My GitHub",
      typingTexts: [
        "Full-Stack Web Developer",
        "UI / UX Enthusiast",
        "Clean Code Advocate",
      ],
      stats: [
        { value: "30+", label: "Projects Completed" },
        { value: "340+", label: "Total Commits" },
        { value: "2+", label: "Years of Experience" },
      ],
    },
    id: {
      badge: "Tersedia untuk Projek",
      tagline:
        "Membangun solusi web yang tangguh, skalabel, dan modern dengan fokus pada",
      taglineHighlight1: "kode bersih",
      taglineAnd: "dan",
      taglineHighlight2: "performa",
      viewProjects: "Lihat Projek",
      myGithub: "GitHub Saya",
      typingTexts: [
        "Full-Stack Web Developer",
        "Penggiat UI / UX",
        "Advokat Clean Code",
      ],
      stats: [
        { value: "30+", label: "Projek Selesai" },
        { value: "340+", label: "Total Commit" },
        { value: "2+", label: "Tahun Pengalaman" },
      ],
    },
  },

  /* ── About & Achievements ────────────────────────────────────── */
  about: {
    en: {
      label: "Get to know me",
      title: "About",
      titleGradient: "& Achievements",
      subtitle:
        "A glimpse into who I am, what drives me, and the milestones that define my journey.",
      aboutMeTitle: "About Me",
      aboutMeP1:
        "I'm Rafael Abimanyu, a Full-Stack Web Developer passionate about crafting digital experiences that are both powerful under the hood and elegant on the surface. I specialize in building robust web architectures that scale gracefully, from backend APIs and database design to pixel-perfect frontend interfaces.",
      aboutMeP2:
        "My development philosophy revolves around Clean Code practices and Modular File Structures — ensuring that every project I deliver is maintainable, well-documented, and built to evolve. I believe great software is the result of disciplined engineering meets creative thinking.",
      perfTitle: "Performance First",
      perfDesc:
        "Every project is engineered for speed, optimization, and scalability — because great UX starts with great performance.",
      perfMetric: "/ Lighthouse Goal",
      achieveBadge: "★ National Achievement",
      achieveTitle: "2ND PLACE",
      achieveTitleHighlight: "NATIONAL",
      achieveDesc:
        "Awarded 2nd Place at the National Website Optimization Competition organized by Jagoan Hosting in Surabaya — competing against top talent from across Indonesia, demonstrating expertise in web performance, Core Web Vitals optimization, and modern best practices.",
      industryTitle: "Industry Standards",
      industryDesc:
        "Every system I build adheres to enterprise-level standards, ensuring global readiness and strict access governance.",
      i18nTitle: "Localization (i18n)",
      i18nSub: "ID / EN multi-language",
      rbacTitle: "RBAC",
      rbacSub: "Role-Based Access Control",
      builtTitle: "Built to Last",
      builtDesc:
        "Every line of code follows strict conventions — from modular architecture to automated testing and CI/CD pipelines. Code isn't just written — it's engineered.",
    },
    id: {
      label: "Kenali saya",
      title: "Tentang",
      titleGradient: "& Prestasi",
      subtitle:
        "Sekilas tentang siapa saya, apa yang mendorong saya, dan pencapaian yang mendefinisikan perjalanan saya.",
      aboutMeTitle: "Tentang Saya",
      aboutMeP1:
        "Saya Rafael Abimanyu, seorang Full-Stack Web Developer yang bersemangat dalam menciptakan pengalaman digital yang tangguh secara teknis dan elegan secara visual. Saya mengkhususkan diri dalam membangun arsitektur web yang kokoh dan skalabel, mulai dari API backend dan desain database hingga antarmuka frontend yang presisi.",
      aboutMeP2:
        "Filosofi pengembangan saya berpusat pada praktik Clean Code dan Struktur File Modular — memastikan setiap proyek yang saya serahkan dapat dipelihara, terdokumentasi dengan baik, dan siap untuk berkembang. Saya percaya perangkat lunak hebat adalah hasil dari rekayasa disiplin yang bertemu dengan pemikiran kreatif.",
      perfTitle: "Performa Utama",
      perfDesc:
        "Setiap proyek dirancang untuk kecepatan, optimisasi, dan skalabilitas — karena UX yang hebat dimulai dari performa yang hebat.",
      perfMetric: "/ Target Lighthouse",
      achieveBadge: "★ Prestasi Nasional",
      achieveTitle: "JUARA 2",
      achieveTitleHighlight: "NASIONAL",
      achieveDesc:
        "Meraih Juara 2 pada Kompetisi Optimasi Website Tingkat Nasional yang diselenggarakan oleh Jagoan Hosting di Surabaya — bersaing dengan talenta terbaik dari seluruh Indonesia, mendemonstrasikan keahlian dalam performa web, optimasi Core Web Vitals, dan praktik terbaik modern.",
      industryTitle: "Standar Industri",
      industryDesc:
        "Setiap sistem yang saya bangun menerapkan standar tingkat enterprise, memastikan kesiapan global dan tata kelola akses yang ketat.",
      i18nTitle: "Lokalisasi (i18n)",
      i18nSub: "ID / EN multi-bahasa",
      rbacTitle: "RBAC",
      rbacSub: "Kontrol Akses Berbasis Peran",
      builtTitle: "Dibangun untuk Bertahan",
      builtDesc:
        "Setiap baris kode mengikuti konvensi ketat — dari arsitektur modular hingga pengujian otomatis dan pipeline CI/CD. Kode bukan hanya ditulis — melainkan direkayasa.",
    },
  },

  /* ── Tech Stack ──────────────────────────────────────────────── */
  techStack: {
    en: {
      label: "Technical Proficiency",
      title: "Tech",
      titleGradient: "Stack",
      subtitle:
        "The core technologies I use daily to build modern, performant, and scalable web applications.",
    },
    id: {
      label: "Kemampuan Teknis",
      title: "Tech",
      titleGradient: "Stack",
      subtitle:
        "Teknologi inti yang saya gunakan setiap hari untuk membangun aplikasi web modern, berkinerja tinggi, dan skalabel.",
    },
  },

  /* ── Projects ────────────────────────────────────────────────── */
  projects: {
    en: {
      label: "Featured Work",
      title: "Project",
      titleGradient: "Showcase",
      subtitle:
        "A curated selection of projects that showcase my expertise in building modern, full-stack web applications.",
      viewOnGithub: "View on GitHub",
      liveDemo: "Live Demo",
      viewAll: "View All Projects",
      previewSoon: "Preview Coming Soon",
      backToHome: "Back to Home",
      allProjectsTitle: "All",
      allProjectsTitleGradient: "Projects",
      allProjectsSubtitle:
        "A complete collection of projects I've built — from complex admin systems to interactive public portals.",
      allProjectsLabel: "Complete Portfolio",
      items: [
        {
          id: "rooterin-invoice",
          subtitle: "SaaS Invoice & Billing Platform",
          description:
            "A professional SaaS-based invoice and billing management web application designed for business efficiency, featuring real-time payment status tracking and optimized database architecture.",
        },
        {
          id: "politeknik-prestasi-prima",
          subtitle: "Academic Management Portal",
          description:
            "An interactive, responsive institutional information and academic management portal platform designed with a modular structure to securely separate data access privileges.",
        },
        {
          id: "bookspace",
          subtitle: "Digital Library Platform",
          description:
            "A premium digital library platform with advanced search, book cataloguing, and reading management. Built with a clean, modern interface and full CRUD operations for administrators.",
        },
        {
          id: "eventhub",
          subtitle: "Event Management System",
          description:
            "A comprehensive event management platform with ticketing, payment gateway integration via Midtrans, and QR-based check-in validation for administrators.",
        },
        {
          id: "kasir-razqha",
          subtitle: "Point of Sale System",
          description:
            "A complete POS system for a Padang restaurant featuring real-time cart management, stock tracking, staff management, and invoice generation with a premium dark-themed UI.",
        },
        {
          id: "taskflow",
          subtitle: "Project Management Tool",
          description:
            "A Kanban-style project management tool with drag-and-drop task organization, deadline tracking, team collaboration, and real-time status updates.",
        },
      ],
    },
    id: {
      label: "Karya Unggulan",
      title: "Galeri",
      titleGradient: "Projek",
      subtitle:
        "Koleksi pilihan proyek yang menunjukkan keahlian saya dalam membangun aplikasi web full-stack yang modern.",
      viewOnGithub: "Lihat di GitHub",
      liveDemo: "Demo Langsung",
      viewAll: "Lihat Semua Projek",
      previewSoon: "Pratinjau Segera Hadir",
      backToHome: "Kembali ke Beranda",
      allProjectsTitle: "Semua",
      allProjectsTitleGradient: "Projek",
      allProjectsSubtitle:
        "Koleksi lengkap proyek yang telah saya bangun — dari sistem admin kompleks hingga portal publik interaktif.",
      allProjectsLabel: "Portofolio Lengkap",
      items: [
        {
          id: "rooterin-invoice",
          subtitle: "Platform Invoice & Penagihan SaaS",
          description:
            "Aplikasi web manajemen invoice dan penagihan profesional berbasis SaaS yang dirancang untuk efisiensi bisnis, dilengkapi pelacakan status pembayaran yang real-time dan arsitektur database yang optimal.",
        },
        {
          id: "politeknik-prestasi-prima",
          subtitle: "Portal Manajemen Akademik",
          description:
            "Platform portal informasi dan manajemen akademik institusi yang interaktif, responsif, dan dirancang dengan struktur modular untuk memisahkan hak akses data secara aman.",
        },
        {
          id: "bookspace",
          subtitle: "Platform Perpustakaan Digital",
          description:
            "Platform perpustakaan digital premium dengan pencarian lanjutan, katalogisasi buku, dan manajemen bacaan. Dibangun dengan antarmuka modern dan operasi CRUD lengkap untuk administrator.",
        },
        {
          id: "eventhub",
          subtitle: "Sistem Manajemen Acara",
          description:
            "Platform manajemen acara komprehensif dengan pemesanan tiket, integrasi gerbang pembayaran via Midtrans, dan validasi check-in berbasis QR untuk administrator.",
        },
        {
          id: "kasir-razqha",
          subtitle: "Sistem Point of Sale",
          description:
            "Sistem POS lengkap untuk rumah makan Padang dengan manajemen keranjang real-time, pelacakan stok, manajemen staf, dan pembuatan invoice dengan UI bertema gelap premium.",
        },
        {
          id: "taskflow",
          subtitle: "Alat Manajemen Proyek",
          description:
            "Alat manajemen proyek bergaya Kanban dengan organisasi tugas drag-and-drop, pelacakan deadline, kolaborasi tim, dan pembaruan status secara real-time.",
        },
      ],
    },
  },

  /* ── Contact ─────────────────────────────────────────────────── */
  contact: {
    en: {
      label: "Get in Touch",
      title: "Let's",
      titleGradient: "Connect",
      subtitle:
        "Have a project in mind or want to collaborate? I'd love to hear from you.",
      ctaTitle: "Let's work together!",
      ctaDesc:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something meaningful. Whether you need a full-stack web application, a redesign, or a technical consultation — let's make it happen.",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      sentBtn: "Message Sent!",
    },
    id: {
      label: "Hubungi Saya",
      title: "Mari",
      titleGradient: "Terhubung",
      subtitle:
        "Punya proyek atau ingin berkolaborasi? Saya senang mendengar dari Anda.",
      ctaTitle: "Mari bekerja sama!",
      ctaDesc:
        "Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari sesuatu yang bermakna. Baik Anda membutuhkan aplikasi web full-stack, redesain, atau konsultasi teknis — mari kita wujudkan bersama.",
      nameLabel: "Nama Anda",
      namePlaceholder: "John Doe",
      emailLabel: "Alamat Email",
      emailPlaceholder: "john@contoh.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan tentang proyek Anda...",
      sendBtn: "Kirim Pesan",
      sendingBtn: "Mengirim...",
      sentBtn: "Pesan Terkirim!",
    },
  },

  /* ── Footer ──────────────────────────────────────────────────── */
  footer: {
    en: {
      tagline:
        "Building robust, scalable, and modern web solutions with clean code and performance at the core.",
      navigation: "Navigation",
      connect: "Connect",
      available: "Available for hire",
      copyright: "Rafael Abimanyu. All rights reserved.",
      craftedWith: "Crafted with",
      using: "using",
    },
    id: {
      tagline:
        "Membangun solusi web yang tangguh, skalabel, dan modern dengan kode bersih dan performa sebagai inti.",
      navigation: "Navigasi",
      connect: "Hubungi",
      available: "Tersedia untuk disewa",
      copyright: "Rafael Abimanyu. Hak cipta dilindungi.",
      craftedWith: "Dibuat dengan",
      using: "menggunakan",
    },
  },
};

/* ── Context ───────────────────────────────────────────────────── */
const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id");

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  /** Get a section's dictionary for the current language */
  const t = useCallback(
    (section) => {
      return DICT[section]?.[lang] ?? DICT[section]?.en ?? {};
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
