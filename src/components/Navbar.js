"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

/* ── Nav Links ─────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { key: "home", href: "/#hero" },
  { key: "about", href: "/#about" },
  { key: "techStack", href: "/#techstack" },
  { key: "projects", href: "/#projects" },
  { key: "contact", href: "/#contact" },
];

/* ================================================================
   NAVBAR
   ================================================================ */
export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const nav = t("navbar");

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll listener ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/60 bg-[#050505]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">
        {/* ── Logo ───────────────────────────────────────────── */}
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-gradient-to-br from-[#a855f7]/10 to-[#06b6d4]/10 transition-all duration-300 group-hover:border-zinc-700 group-hover:shadow-[0_0_16px_rgba(168,85,247,0.15)]">
            <span className="gradient-text font-heading text-base font-bold">
              R
            </span>
          </div>
          <span className="hidden font-heading text-base font-semibold text-[#f4f4f5] sm:inline">
            Rafael<span className="text-zinc-600">.</span>
          </span>
        </Link>

        {/* ── Desktop Links ──────────────────────────────────── */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-[#f4f4f5]"
            >
              {nav[item.key]}
            </Link>
          ))}
        </div>

        {/* ── Right Side (Lang + CTA) ────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="group relative flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-1 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:border-zinc-700"
            aria-label="Toggle language"
          >
            <span
              className={`relative z-10 rounded-full px-2.5 py-1 transition-all duration-300 ${
                lang === "id"
                  ? "text-[#f4f4f5]"
                  : "text-zinc-500"
              }`}
            >
              ID
            </span>
            <span
              className={`relative z-10 rounded-full px-2.5 py-1 transition-all duration-300 ${
                lang === "en"
                  ? "text-[#f4f4f5]"
                  : "text-zinc-500"
              }`}
            >
              EN
            </span>

            {/* Active indicator pill */}
            <span
              className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#a855f7]/20 to-[#06b6d4]/20 border border-[#a855f7]/30 transition-all duration-300"
              style={{
                left: lang === "id" ? "4px" : "calc(50%)",
              }}
            />
          </button>

          {/* Contact CTA (Desktop) */}
          <Link
            href="/#contact"
            className="hidden rounded-full bg-gradient-to-r from-[#a855f7] to-[#06b6d4] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] md:inline-flex"
          >
            {nav.contact}
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-colors duration-200 hover:text-[#f4f4f5] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────── */}
      <div
        className={`overflow-hidden border-t border-zinc-800/60 bg-[#050505]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm text-zinc-400 transition-colors duration-200 hover:bg-zinc-900/60 hover:text-[#f4f4f5]"
            >
              {nav[item.key]}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
