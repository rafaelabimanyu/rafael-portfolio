"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Footer from "@/components/Footer";

/* ── All Projects Data (static, language-independent fields) ───── */
const ALL_PROJECTS = [
  {
    id: "e-aspirasi",
    title: "E-Aspirasi",
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    accent: "#06b6d4",
    accentDim: "rgba(6, 182, 212, 0.08)",
    github: "#",
  },
  {
    id: "library-maura",
    title: "Net-Library",
    tags: ["Laravel", "PHP", "Blade", "JavaScript", "MySQL"],
    accent: "#a855f7",
    accentDim: "rgba(168, 85, 247, 0.08)",
    github: "#",
  },
  {
    id: "bookspace",
    title: "BookSpace",
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    accent: "#34d399",
    accentDim: "rgba(52, 211, 153, 0.08)",
    github: "#",
  },
  {
    id: "eventhub",
    title: "EventHub",
    tags: ["Next.js", "Prisma", "Midtrans", "MySQL"],
    accent: "#ec4899",
    accentDim: "rgba(236, 72, 153, 0.08)",
    github: "#",
  },
  {
    id: "kasir-razqha",
    title: "Kasir Razqha",
    tags: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL"],
    accent: "#f59e0b",
    accentDim: "rgba(245, 158, 11, 0.08)",
    github: "#",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    accent: "#06b6d4",
    accentDim: "rgba(6, 182, 212, 0.08)",
    github: "#",
  },
];

/* ── Icons ─────────────────────────────────────────────────────── */
function ArrowLeftIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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

function ArrowIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ── Project Grid Card ─────────────────────────────────────────── */
function ProjectGridCard({ project, localItem, texts }) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/60"
      style={{ transition: "box-shadow 0.5s, border-color 0.3s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${project.accent}15, 0 0 60px ${project.accent}06`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Mockup top area */}
      <div
        className="relative flex aspect-[16/9] items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${project.accentDim}, transparent 60%), linear-gradient(225deg, rgba(168,85,247,0.03), transparent 60%)`,
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${project.accent}40 1px, transparent 1px), linear-gradient(90deg, ${project.accent}40 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative text-center">
          <p
            className="font-heading text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: project.accent }}
          >
            {project.title}
          </p>
          <p className="mt-1 text-[10px] tracking-widest text-zinc-600 uppercase">
            {texts.previewSoon}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Subtitle */}
        <p
          className="mb-1 text-[10px] font-semibold tracking-widest uppercase"
          style={{ color: project.accent }}
        >
          {localItem?.subtitle || project.title}
        </p>

        {/* Title */}
        <h3 className="mb-2 font-heading text-lg font-bold text-[#f4f4f5]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500">
          {localItem?.description || ""}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] tracking-wide text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          style={{
            background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`,
          }}
        >
          <GitHubIcon className="h-3.5 w-3.5" />
          {texts.viewOnGithub}
          <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

/* ================================================================
   ALL PROJECTS PAGE
   ================================================================ */
export default function ProjectsPage() {
  const { t } = useLanguage();
  const texts = t("projects");
  const items = texts.items || [];

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative px-6 pt-28 pb-24 lg:px-16 lg:pt-36 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* ── Back Button ──────────────────────────────────── */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2 text-sm text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:text-[#f4f4f5]"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {texts.backToHome}
          </Link>

          {/* ── Page Header ──────────────────────────────────── */}
          <div className="mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs tracking-widest text-zinc-500 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
              {texts.allProjectsLabel}
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-[#f4f4f5] sm:text-5xl lg:text-6xl">
              {texts.allProjectsTitle}{" "}
              <span className="gradient-text">
                {texts.allProjectsTitleGradient}
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">
              {texts.allProjectsSubtitle}
            </p>
          </div>

          {/* ── Projects Grid ────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_PROJECTS.map((project) => {
              const localItem = items.find((i) => i.id === project.id);
              return (
                <ProjectGridCard
                  key={project.id}
                  project={project}
                  localItem={localItem}
                  texts={texts}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
