"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

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
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

/* ── Static Project Data (non-translatable fields) ─────────────── */
const PROJECTS_DATA = [
  {
    id: "e-aspirasi",
    title: "E-Aspirasi",
    tags: [
      { label: "Clean & High-Fidelity UI", color: "#06b6d4" },
      { label: "Public Portal", color: "#a855f7" },
      { label: "Optimized Layout", color: "#34d399" },
    ],
    techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    accent: "#06b6d4",
    accentDim: "rgba(6, 182, 212, 0.08)",
    github: "#",
  },
  {
    id: "library-maura",
    title: "Net-Library",
    tags: [
      { label: "Role-Based Access Control", color: "#a855f7" },
      { label: "Multi-language (ID/EN)", color: "#06b6d4" },
      { label: "Circular Management", color: "#34d399" },
    ],
    techStack: ["Laravel", "PHP", "Blade", "JavaScript", "MySQL"],
    accent: "#a855f7",
    accentDim: "rgba(168, 85, 247, 0.08)",
    github: "#",
  },
];

/* ── Icons ─────────────────────────────────────────────────────── */
function ArrowIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

/* ── UI Primitives ─────────────────────────────────────────────── */
function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs tracking-wide text-zinc-400">
      {children}
    </span>
  );
}

function FeatureTag({ label, color }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
      style={{ color, backgroundColor: `${color}12`, border: `1px solid ${color}25` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

/* ── Project Card ──────────────────────────────────────────────── */
function ProjectCard({ project, index, texts }) {
  const [ref, isInView] = useInView();
  const isEven = index % 2 === 0;

  // Find localized text for this project
  const localItem = (texts.items || []).find((i) => i.id === project.id) || {};

  return (
    <div
      ref={ref}
      className={`group grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
      }}
    >
      {/* Mockup Area */}
      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        <div
          className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-md transition-all duration-500 group-hover:border-zinc-700/60"
          style={{ boxShadow: `0 0 0px ${project.accent}00`, transition: "box-shadow 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.3s" }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 40px ${project.accent}20, 0 0 80px ${project.accent}08`; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0px ${project.accent}00`; }}
        >
          <div className="flex items-center gap-1.5 border-b border-zinc-800/60 bg-zinc-900/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
            <span className="ml-3 flex-1 rounded-md bg-zinc-800/60 px-3 py-1 text-[10px] text-zinc-600">{project.id}.test</span>
          </div>

          <div
            className="relative flex aspect-[16/10] items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.accentDim}, transparent 60%), linear-gradient(225deg, rgba(168,85,247,0.04), transparent 60%)` }}
          >
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(${project.accent}40 1px, transparent 1px), linear-gradient(90deg, ${project.accent}40 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            <div className="relative text-center">
              <p className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: project.accent }}>{project.title}</p>
              <p className="mt-1 text-xs tracking-widest text-zinc-600 uppercase">{texts.previewSoon}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className={`${!isEven ? "lg:order-1 lg:text-right" : ""}`}>
        <p className="mb-2 text-xs font-semibold tracking-widest uppercase" style={{ color: project.accent }}>
          {localItem.subtitle || project.title}
        </p>

        <h3 className="mb-4 font-heading text-3xl font-bold tracking-tight text-[#f4f4f5] sm:text-4xl">
          {project.title}
        </h3>

        <p className="mb-5 text-[15px] leading-relaxed text-zinc-400">
          {localItem.description || ""}
        </p>

        <div className={`mb-5 flex flex-wrap gap-2 ${!isEven ? "lg:justify-end" : ""}`}>
          {project.tags.map((tag) => (
            <FeatureTag key={tag.label} label={tag.label} color={tag.color} />
          ))}
        </div>

        <div className={`mb-6 flex flex-wrap gap-2 ${!isEven ? "lg:justify-end" : ""}`}>
          {project.techStack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${!isEven ? "lg:justify-end" : ""}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)` }}
          >
            <GitHubIcon className="h-4 w-4" />
            {texts.viewOnGithub}
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-400 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200">
            <ExternalIcon className="h-4 w-4" />
            {texts.liveDemo}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   PROJECTS SHOWCASE SECTION
   ================================================================ */
export default function Projects() {
  const [headerRef, headerInView] = useInView();
  const { t } = useLanguage();
  const texts = t("projects");

  return (
    <section id="projects" className="relative px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* ── Section Header ─────────────────────────────────── */}
        <div
          ref={headerRef}
          className="mb-20 text-center"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs tracking-widest text-zinc-500 uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
            {texts.label}
          </div>

          <h2 className="font-heading text-4xl font-bold tracking-tight text-[#f4f4f5] sm:text-5xl">
            {texts.title}{" "}
            <span className="gradient-text">{texts.titleGradient}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
            {texts.subtitle}
          </p>
        </div>

        {/* ── Featured Projects (2 only) ─────────────────────── */}
        <div className="space-y-24 lg:space-y-32">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} texts={texts} />
          ))}
        </div>

        {/* ── View All CTA ────────────────────────────────────── */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="btn-glow group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#06b6d4] px-8 py-3.5 text-sm font-semibold text-white shadow-lg"
          >
            {texts.viewAll}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
