"use client";

import { useState, useEffect } from "react";

/* ── Stat card data ────────────────────────────────────────────── */
const STATS = [
  {
    value: "30+",
    label: "Projects Completed",
    color: "text-[#06b6d4]",
    glowClass: "text-glow-cyan",
    cardClass: "stat-card-cyan",
  },
  {
    value: "340+",
    label: "Total Commits",
    color: "text-[#a855f7]",
    glowClass: "text-glow-purple",
    cardClass: "stat-card-purple",
  },
  {
    value: "2+",
    label: "Years of Experience",
    color: "text-[#34d399]",
    glowClass: "text-glow-emerald",
    cardClass: "stat-card-emerald",
  },
];

/* ── Typing text config ────────────────────────────────────────── */
const TYPING_TEXTS = [
  "Full-Stack Web Developer",
  "UI / UX Enthusiast",
  "Clean Code Advocate",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_BEFORE_DELETE = 2000;
const PAUSE_BEFORE_TYPE = 500;

/* ================================================================
   HERO SECTION
   ================================================================ */
export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* ── Typing Effect ───────────────────────────────────────────── */
  useEffect(() => {
    const currentFullText = TYPING_TEXTS[textIndex];

    let timeout;

    if (!isDeleting && displayText === currentFullText) {
      // Pause, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE);
    } else if (isDeleting && displayText === "") {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      timeout = setTimeout(() => {}, PAUSE_BEFORE_TYPE);
    } else {
      // Type or delete one character
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentFullText.substring(0, displayText.length - 1)
              : currentFullText.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 py-20 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* ════════════════════════════════════════════════════════
            LEFT COLUMN — Text Content
           ════════════════════════════════════════════════════════ */}
        <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          {/* ── Status Badge ─────────────────────────────────── */}
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs tracking-wider text-zinc-400 uppercase backdrop-blur-sm"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34d399]" />
            </span>
            Available for Projects
          </div>

          {/* ── Headline ─────────────────────────────────────── */}
          <h1
            className="animate-fade-in-up font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.25s", lineHeight: 1.05 }}
          >
            <span className="text-[#f4f4f5]">RAFAEL</span>
            <br />
            <span className="gradient-text">ABIMANYU</span>
          </h1>

          {/* ── Typing Sub-headline ──────────────────────────── */}
          <div
            className="animate-fade-in-up flex items-center gap-1 text-lg tracking-widest uppercase text-[#a1a1aa] sm:text-xl"
            style={{ animationDelay: "0.4s" }}
          >
            <span>{displayText}</span>
            <span className="typing-cursor inline-block h-6 w-0" />
          </div>

          {/* ── Tagline ──────────────────────────────────────── */}
          <p
            className="animate-fade-in-up max-w-lg text-base leading-relaxed text-zinc-500 sm:text-lg"
            style={{ animationDelay: "0.55s" }}
          >
            Building robust, scalable, and modern web solutions with a focus on{" "}
            <span className="text-zinc-300">clean code</span> and{" "}
            <span className="text-zinc-300">performance</span>.
          </p>

          {/* ── Stats Grid ───────────────────────────────────── */}
          <div
            className="animate-fade-in-up grid w-full max-w-md grid-cols-3 gap-3 sm:gap-4"
            style={{ animationDelay: "0.7s" }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`stat-card ${stat.cardClass} group flex cursor-default flex-col items-center gap-1 rounded-xl border border-zinc-800 bg-zinc-900/40 px-3 py-4 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-5`}
              >
                <span
                  className={`font-heading text-2xl font-bold sm:text-3xl ${stat.color} ${stat.glowClass}`}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] leading-tight tracking-wider text-zinc-500 uppercase sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* ── CTA Buttons ──────────────────────────────────── */}
          <div
            className="animate-fade-in-up flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.85s" }}
          >
            {/* Primary */}
            <a
              href="#projects"
              className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a855f7] to-[#06b6d4] px-7 py-3 text-sm font-semibold text-white shadow-lg"
            >
              View Projects
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* Secondary */}
            <a
              href="https://github.com/rafaelabimanyu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/50"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              My GitHub
            </a>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            RIGHT COLUMN — Profile Visual
           ════════════════════════════════════════════════════════ */}
        <div className="flex items-center justify-center lg:justify-end">
          <div
            className="animate-scale-in relative"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Outer neon ring */}
            <div className="animate-ring-pulse absolute -inset-3 rounded-full bg-gradient-to-br from-[#a855f7]/20 via-transparent to-[#06b6d4]/20 blur-sm" />

            {/* Profile circle */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-900/60 sm:h-72 sm:w-72 md:h-80 md:w-80">
              {/* Gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 via-transparent to-[#06b6d4]/10" />

              {/* Initials fallback */}
              <div className="flex h-full w-full items-center justify-center">
                <span className="gradient-text font-heading text-6xl font-bold sm:text-7xl">
                  RA
                </span>
              </div>
            </div>

            {/* Decorative floating dots */}
            <div className="absolute -right-2 top-8 h-3 w-3 animate-pulse rounded-full bg-[#06b6d4]/60" />
            <div className="absolute -left-3 bottom-12 h-2 w-2 animate-pulse rounded-full bg-[#a855f7]/60" style={{ animationDelay: "1s" }} />
            <div className="absolute -bottom-1 right-12 h-2.5 w-2.5 animate-pulse rounded-full bg-[#34d399]/50" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
