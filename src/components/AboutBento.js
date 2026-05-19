"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/* ── Icons (inline SVG) ────────────────────────────────────────── */

function CodeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function RocketIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 4 0 4 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-4 0-4" />
    </svg>
  );
}

function TrophyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22h10c0-2-0.85-3.25-2.03-3.79A1.07 1.07 0 0114 17v-2.34" />
      <path d="M18 2H6v7a6 6 0 1012 0V2z" />
    </svg>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/* ── Intersection Observer Hook ────────────────────────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

/* ── Bento Card Wrapper ────────────────────────────────────────── */
function BentoCard({ children, className = "", delay = 0, golden = false }) {
  const [ref, isInView] = useInView();

  const baseStyles =
    "rounded-2xl sm:rounded-3xl border p-4 sm:p-6 md:p-8 transition-all duration-500 backdrop-blur-md";

  const normalStyles =
    "bg-zinc-900/20 border-zinc-800/60 hover:border-zinc-700/80 hover:bg-zinc-900/30";

  const goldenStyles =
    "bg-zinc-900/30 border-yellow-500/30 hover:border-yellow-500/50 shadow-[0_0_25px_rgba(234,179,8,0.08)] hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]";

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${golden ? goldenStyles : normalStyles} ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, border-color 0.3s, background-color 0.3s, box-shadow 0.3s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Tech Badge ────────────────────────────────────────────────── */
function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs tracking-wide text-zinc-400">
      {children}
    </span>
  );
}

/* ================================================================
   ABOUT & ACHIEVEMENTS — BENTO GRID
   ================================================================ */
export default function AboutBento() {
  const [sectionRef, sectionInView] = useInView();
  const { t } = useLanguage();
  const about = t("about");

  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* ── Section Header ───────────────────────────────────── */}
        <div
          ref={sectionRef}
          className="mb-10 text-center sm:mb-16"
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[10px] tracking-widest text-zinc-500 uppercase backdrop-blur-sm sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
            {about.label}
          </div>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#f4f4f5] sm:text-4xl md:text-5xl">
            {about.title}{" "}
            <span className="gradient-text">{about.titleGradient}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 sm:mt-4 sm:text-base">
            {about.subtitle}
          </p>
        </div>

        {/* ── Bento Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">

          {/* KOTAK 1 — About Me */}
          <BentoCard className="md:col-span-2" delay={0.1}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60">
                <CodeIcon className="h-5 w-5 text-[#06b6d4]" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#f4f4f5]">
                {about.aboutMeTitle}
              </h3>
            </div>

            <p className="mb-3 text-sm leading-relaxed text-zinc-400 sm:mb-4 sm:text-[15px]">
              {about.aboutMeP1}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-zinc-400 sm:mb-6 sm:text-[15px]">
              {about.aboutMeP2}
            </p>

            <div className="flex flex-wrap gap-2">
              <TechBadge>Next.js</TechBadge>
              <TechBadge>React</TechBadge>
              <TechBadge>Laravel</TechBadge>
              <TechBadge>Node.js</TechBadge>
              <TechBadge>MySQL</TechBadge>
              <TechBadge>Prisma</TechBadge>
              <TechBadge>Tailwind CSS</TechBadge>
            </div>
          </BentoCard>

          {/* KOTAK 2 — Performance */}
          <BentoCard delay={0.2}>
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#a855f7]/10 to-[#06b6d4]/10">
                <RocketIcon className="h-7 w-7 text-[#a855f7]" />
              </div>

              <h3 className="mb-2 font-heading text-base font-semibold text-[#f4f4f5]">
                {about.perfTitle}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-500">
                {about.perfDesc}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-heading text-2xl font-bold text-[#06b6d4] text-glow-cyan">
                  100
                </span>
                <span className="text-xs text-zinc-500">{about.perfMetric}</span>
              </div>
            </div>
          </BentoCard>

          {/* KOTAK 3 — GOLDEN BOX: Achievement */}
          <BentoCard className="md:col-span-3" delay={0.3} golden>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-yellow-500/15 to-amber-600/10 blur-md" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-amber-600/5 sm:h-28 sm:w-28">
                  <TrophyIcon className="h-10 w-10 text-yellow-400 sm:h-12 sm:w-12" />
                </div>
              </div>

              <div className="flex flex-col text-center sm:text-left">
                <div className="mb-3 inline-flex self-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold tracking-widest text-yellow-400 uppercase sm:self-start">
                  {about.achieveBadge}
                </div>

                <h3 className="mb-2 font-heading text-2xl font-bold tracking-tight text-yellow-50 sm:text-3xl">
                  {about.achieveTitle}{" "}
                  <span className="text-yellow-400">{about.achieveTitleHighlight}</span>
                </h3>

                <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                  {about.achieveDesc}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                  <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1 text-xs text-yellow-400/80">
                    🏆 Jagoan Hosting
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1 text-xs text-yellow-400/80">
                    📍 Surabaya
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-3 py-1 text-xs text-yellow-400/80">
                    🌐 Web Optimization
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* KOTAK 4 — Industry Standards */}
          <BentoCard delay={0.4}>
            <div className="flex h-full flex-col">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-gradient-to-br from-[#34d399]/10 to-[#06b6d4]/5">
                <ShieldIcon className="h-5 w-5 text-[#34d399]" />
              </div>

              <h3 className="mb-2 font-heading text-base font-semibold text-[#f4f4f5]">
                {about.industryTitle}
              </h3>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-500">
                {about.industryDesc}
              </p>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 rounded-lg border border-zinc-800/60 bg-zinc-900/40 px-3 py-2">
                  <span className="text-sm">🌐</span>
                  <div>
                    <p className="text-xs font-medium text-zinc-300">{about.i18nTitle}</p>
                    <p className="text-[11px] text-zinc-600">{about.i18nSub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg border border-zinc-800/60 bg-zinc-900/40 px-3 py-2">
                  <span className="text-sm">🔐</span>
                  <div>
                    <p className="text-xs font-medium text-zinc-300">{about.rbacTitle}</p>
                    <p className="text-[11px] text-zinc-600">{about.rbacSub}</p>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* KOTAK 5 — Code Quality */}
          <BentoCard className="md:col-span-2" delay={0.5}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800/60 bg-[#0a0a0f] font-mono text-xs sm:min-w-[260px]">
                <div className="flex items-center gap-1.5 border-b border-zinc-800/60 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[11px] text-zinc-600">project.config.js</span>
                </div>
                <div className="px-4 py-3 leading-relaxed">
                  <span className="text-[#a855f7]">const</span>{" "}
                  <span className="text-[#f4f4f5]">stack</span>{" "}
                  <span className="text-zinc-600">=</span>{" "}
                  <span className="text-zinc-500">{"{"}</span>
                  <br />
                  {"  "}
                  <span className="text-[#06b6d4]">clean_code</span>
                  <span className="text-zinc-600">:</span>{" "}
                  <span className="text-[#34d399]">true</span>
                  <span className="text-zinc-600">,</span>
                  <br />
                  {"  "}
                  <span className="text-[#06b6d4]">modular</span>
                  <span className="text-zinc-600">:</span>{" "}
                  <span className="text-[#34d399]">true</span>
                  <span className="text-zinc-600">,</span>
                  <br />
                  {"  "}
                  <span className="text-[#06b6d4]">scalable</span>
                  <span className="text-zinc-600">:</span>{" "}
                  <span className="text-[#34d399]">true</span>
                  <span className="text-zinc-600">,</span>
                  <br />
                  <span className="text-zinc-500">{"}"}</span>
                  <span className="text-zinc-600">;</span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-heading text-base font-semibold text-[#f4f4f5]">
                  {about.builtTitle}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {about.builtDesc}
                </p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
