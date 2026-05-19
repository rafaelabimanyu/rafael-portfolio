<p align="center">
  <img src="https://img.shields.io/badge/RAFAEL_ABIMANYU-Modern_Portfolio-8B5CF6?style=for-the-badge&labelColor=050505" alt="Rafael Abimanyu Portfolio" />
</p>

<h1 align="center">🚀 RAFAEL ABIMANYU — Modern Portfolio Website</h1>

<p align="center">
  <strong>A premium personal portfolio with "Super Dark Cyberpunk" aesthetics — built for performance, elegance, and global reach.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js_v22-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-Live-34D399?style=flat-square" alt="Status: Live" />
  <img src="https://img.shields.io/badge/responsive-Mobile_First-A855F7?style=flat-square" alt="Mobile First" />
  <img src="https://img.shields.io/badge/localization-ID_|_EN-06B6D4?style=flat-square" alt="Multi-language" />
</p>

---

## 📋 Deskripsi

Website portofolio personal premium dengan estetika **"Super Dark Cyberpunk"** yang dibangun menggunakan **Next.js App Router** dan **Tailwind CSS**. Menampilkan rekam jejak profesional, teknologi yang dikuasai, proyek andalan, serta pencapaian nasional — semuanya dibalut dalam pengalaman visual yang interaktif, responsif, dan mendukung **dua bahasa (Indonesia & English)** secara real-time tanpa reload halaman.

---

## ✨ Fitur Utama

| # | Fitur | Keterangan |
|---|-------|------------|
| 🧭 | **Floating Glassmorphism Navigation** | Navbar sticky dengan efek glass-blur, central logo identity "R", dan hamburger menu responsif untuk mobile. |
| 🌐 | **Multi-language Localization (ID/EN)** | Sistem translasi global menggunakan React Context API — perpindahan bahasa instan di seluruh halaman tanpa reload. |
| ⚡ | **Futuristic Hero Section** | Custom typing animation, neon glow effects, dan 3-card stats dashboard (Projects, Commits, Experience). |
| 🧊 | **Bento Grid Layout** | Apple/Microsoft-style grid untuk ringkasan "About Me", standar industri, dan prestasi nasional dengan efek glassmorphism premium. |
| 🎯 | **Advanced Projects Showcase** | Menampilkan proyek powerful (Rooterin Invoice & Politeknik Prestasi Prima) dengan layout selang-seling responsif dan efek pendaran neon. |
| 📂 | **Dedicated `/projects` Route** | Halaman galeri proyek lanjutan yang modular dengan grid 3 kolom dan navigasi kembali. |
| 📱 | **Mobile-First Responsive Design** | Dioptimalkan secara ketat untuk kenyamanan akses di layar smartphone — zero horizontal scroll, touch-friendly targets ≥44px. |
| 💬 | **Interactive Contact Form** | Formulir kontak dengan validasi, loading state, dan feedback visual (sending → sent animation). |
| 🎨 | **Premium Neon Glow Effects** | Custom CSS utilities untuk efek pendaran cyan, purple, dan emerald pada teks, border, dan tombol. |

---

## 🏆 Pencapaian Nasional

<table>
  <tr>
    <td align="center" width="120">
      <img src="https://img.shields.io/badge/🏆-JUARA_2-EAB308?style=for-the-badge&labelColor=1a1a2e" alt="Juara 2" />
    </td>
    <td>
      <strong>Juara 2 Nasional — Kompetisi Optimasi Website</strong><br/>
      Diselenggarakan oleh <strong>Jagoan Hosting</strong> di Surabaya.<br/>
      Bersaing dengan talenta terbaik dari seluruh Indonesia, mendemonstrasikan keahlian dalam performa web, optimasi Core Web Vitals, dan praktik terbaik modern.<br/><br/>
      <em>Pencapaian ini terintegrasi langsung ke dalam tampilan Bento Grid pada section "About & Achievements" dengan efek golden glow khusus.</em>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack & Tools

### Core Framework

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | v22 | JavaScript Runtime |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) | 19 | UI Library |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) | 16 (App Router) | Fullstack React Framework |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ES6+ | Programming Language |

### Styling & State

| Teknologi | Kegunaan |
|-----------|----------|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-First CSS Framework + Custom Neon Utilities |
| ![React Context](https://img.shields.io/badge/React_Context-61DAFB?style=flat-square&logo=react&logoColor=black) | Global State Management & Localization (ID/EN) |

### Tools & Version Control

| Teknologi | Kegunaan |
|-----------|----------|
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Version Control System |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | Repository Hosting & Collaboration |

---

## 📁 Struktur Folder

```
rafael-portfolio/
├── 📂 src/
│   ├── 📂 app/                     # Next.js App Router
│   │   ├── layout.js               # Root Layout (Fonts, LanguageProvider, Navbar)
│   │   ├── page.js                 # Landing Page (Home)
│   │   ├── globals.css             # Tailwind Config & Custom Neon Utilities
│   │   └── 📂 projects/
│   │       └── page.js             # Dedicated Projects Gallery (/projects)
│   │
│   ├── 📂 components/              # Modular UI Components
│   │   ├── Navbar.js               # Floating Glassmorphism Navigation
│   │   ├── Hero.js                 # Hero Section + Typing Animation + Stats
│   │   ├── AboutBento.js           # Bento Grid (About Me & Achievement)
│   │   ├── TechStack.js            # Tech Stack Cards + Progress Bars
│   │   ├── Projects.js             # Featured Projects Showcase (2 Projects)
│   │   ├── Contact.js              # Contact Form + Social Links
│   │   └── Footer.js               # Footer Navigation & Credits
│   │
│   └── 📂 context/                 # State Management
│       └── LanguageContext.js       # Multi-language Dictionary (ID/EN) + Provider
│
├── 📂 public/                      # Static Assets (Images, Icons)
├── package.json                    # Dependencies & Scripts
├── tailwind.config.js              # Tailwind Configuration
├── next.config.mjs                 # Next.js Configuration
└── README.md                       # 📄 You are here!
```

---

## 🚀 Getting Started

### Prasyarat

Pastikan kamu sudah menginstal:

- **Node.js** v18 atau lebih tinggi (rekomendasi: v22)
- **npm** v9+ atau **yarn**
- **Git** untuk version control

### Langkah Instalasi

```bash
# 1️⃣ Clone repository
git clone https://github.com/rafaelabimanyu/rafael-portfolio.git

# 2️⃣ Masuk ke direktori proyek
cd rafael-portfolio

# 3️⃣ Install dependencies
npm install

# 4️⃣ Jalankan development server
npm run dev
```

### 🌐 Akses di Browser

```
http://localhost:3000
```

> **💡 Tip:** Gunakan Chrome DevTools (F12 → Toggle Device Toolbar) untuk melihat tampilan responsif di berbagai ukuran layar.

---

## 🗺️ Sitemap

| Route | Halaman | Deskripsi |
|-------|---------|-----------|
| `/` | Home | Landing page lengkap: Hero → About → Tech Stack → Projects → Contact → Footer |
| `/projects` | All Projects | Galeri semua proyek dalam grid 3 kolom dengan navigasi kembali ke Home |

---

## 🎨 Design System

### Palet Warna

| Warna | Hex | Kegunaan |
|-------|-----|----------|
| 🖤 Pure Dark | `#050505` | Background utama |
| 🟣 Purple Neon | `#a855f7` | Aksen utama, gradient, glow effect |
| 🔵 Cyan Neon | `#06b6d4` | Aksen sekunder, gradient, progress bar |
| 🟢 Emerald | `#34d399` | Status indicator, aksen tersier |
| 🟡 Golden | `#eab308` | Achievement highlight (Bento Grid) |
| ⚪ Zinc 50 | `#f4f4f5` | Teks utama |

### Tipografi

| Jenis | Font | Kegunaan |
|-------|------|----------|
| **Heading** | Space Grotesk | Judul section, headline — kesan futuristik & tegas |
| **Body** | Plus Jakarta Sans | Paragraf, label — bersih & mudah dibaca |

---

## 📜 Lisensi

Proyek ini dibuat oleh **Rafael Abimanyu** untuk keperluan portofolio personal.

---

<p align="center">
  <strong>Crafted with ❤️ using Next.js & Tailwind CSS</strong><br/>
  <sub>© 2026 Rafael Abimanyu. All rights reserved.</sub>
</p>
