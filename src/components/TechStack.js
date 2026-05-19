"use client";

import { useEffect, useRef, useState } from "react";
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
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

/* ── Tech Data (icons are language-independent) ────────────────── */
const CATEGORIES = [
  {
    titleKey: "Backend & Database",
    color: "#a855f7",
    techs: [
      { name: "PHP", level: 90, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 01-.43 1.007c-.2.3-.453.543-.756.73l-.68-.187zm4.944-1.424c-.063.327-.133.652-.21.973-.076.321-.192.6-.347.836a1.31 1.31 0 01-.585.537c-.25.126-.6.19-1.053.19h-.81l-.327 1.681h-1.377l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 01-.43 1.007 2.553 2.553 0 01-.756.73l-.058-.008zm.39-1.543h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zm4.905-.693h1.378l-.207 1.064h1.27c.756 0 1.275.134 1.556.403.281.27.367.727.257 1.373l-.423 2.173h-1.408l.397-2.04c.052-.266.03-.463-.067-.59-.097-.128-.31-.191-.64-.191h-1.14l-.55 2.82h-1.377l.954-5.012z" /></svg> },
      { name: "Laravel", detail: "MVC, Migrations", level: 88, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012a.263.263 0 01-.06-.023L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.009.024-.02.038-.027L4.89.086a.376.376 0 01.377 0l4.365 2.518c.013.007.024.018.037.027.013.009.024.017.033.027l.033.045a.32.32 0 01.023.058c.006.011.012.02.015.032.008.032.014.065.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.011.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.01-.015.018-.032.033-.045.012-.01.025-.018.037-.027.013-.009.024-.02.038-.027l4.366-2.516a.376.376 0 01.377 0l4.365 2.516c.015.007.027.018.038.027.013.01.024.017.036.027.016.013.024.03.033.045.008.013.018.02.024.033a.386.386 0 01.023.058c.006.012.012.021.015.032zM23.2 10.527V6.017l-1.58.91-2.178 1.254v4.51l3.76-2.164zm-4.136 7.144V13.16l-2.14 1.225-6.386 3.652v4.56l8.526-4.926zM1.099 3.462v15.15l8.528 4.924v-4.56L5.268 16.4l-.004-.002-.004-.002c-.013-.009-.022-.018-.035-.027-.013-.008-.024-.015-.033-.025l-.002-.004c-.012-.012-.02-.028-.03-.042-.01-.014-.023-.024-.03-.04l-.001-.003a.383.383 0 01-.022-.06c-.007-.015-.01-.033-.014-.05v-.003c-.005-.02-.006-.04-.008-.06V5.626l-2.18-1.253-1.578-.91zm3.787-2.63L1.328 2.972l3.558 2.053 3.558-2.053L4.886.832zM6.718 14.08l2.179-1.257V3.462L7.317 4.37l-2.18 1.257v9.36l1.58-.907zm12.723-8.706l-3.558 2.14 3.558 2.054 3.557-2.054-3.557-2.14zm-.377 4.767l-2.18-1.257-1.578-.908v4.51l2.179 1.254 1.58.91v-4.51zm-8.906 9.08l5.685-3.251 2.844-1.627-3.554-2.052-4.365 2.516-4.228 2.438 3.618 1.975z" /></svg> },
      { name: "MySQL", level: 85, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.47-.49.745-1.024 1.12-1.6 1.12-.13 0-.295-.027-.494-.08v-.46c.083.013.18.02.294.02.332 0 .6-.114.804-.345.247-.28.37-.58.37-.907 0-.147-.048-.396-.143-.747l-1.02-3.57h.94l.716 2.82c.165.638.24 1.078.24 1.326 0 .16-.04.34-.12.544l.003.003c.38-1.174.64-2.36.78-3.57l.88-.052zm11.79 4.72c-.36-.055-.6-.16-.72-.314-.12-.154-.187-.47-.2-.94a3.693 3.693 0 01-.3.347c-.34.313-.733.467-1.173.467-.467 0-.834-.147-1.1-.44-.267-.294-.4-.694-.4-1.2 0-.587.18-1.054.547-1.4.36-.347.854-.52 1.48-.52.2 0 .413.02.64.06V15.4c0-.387-.073-.66-.22-.827-.146-.167-.4-.247-.76-.247a3.72 3.72 0 00-1.2.2l-.1-.5a4.63 4.63 0 011.46-.267c.56 0 .96.134 1.2.4.24.267.36.7.36 1.3v2.38c0 .34.067.56.2.66.133.1.367.16.7.18v.4zm-1.18-2.72c-.22-.04-.44-.06-.66-.06-.387 0-.694.1-.92.3-.227.2-.34.48-.34.84 0 .28.067.5.2.66.133.16.34.24.62.24.26 0 .5-.093.72-.28.22-.186.36-.406.38-.66v-1.04zm-4.98-.14c0 .967-.18 1.694-.54 2.18-.36.487-.887.727-1.58.727-.4 0-.753-.107-1.06-.32a2.08 2.08 0 01-.7-.893c-.16-.387-.24-.87-.24-1.454 0-.96.187-1.694.56-2.2.373-.507.893-.76 1.56-.76.647 0 1.147.26 1.5.78.353.52.5 1.233.5 2.14l.003-.2zm-.94.067c0-.72-.08-1.26-.24-1.62-.16-.36-.42-.54-.78-.54-.373 0-.64.187-.8.56-.16.374-.24.894-.24 1.56 0 .72.08 1.267.24 1.64.16.373.427.56.8.56.347 0 .6-.18.76-.54.16-.36.24-.907.24-1.62h.02z" /></svg> },
    ],
  },
  {
    titleKey: "Frontend",
    color: "#06b6d4",
    techs: [
      { name: "Blade Templates", level: 87, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg> },
      { name: "JavaScript", level: 85, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg> },
      { name: "Tailwind CSS", level: 92, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg> },
    ],
  },
  {
    titleKey: "Tools",
    color: "#34d399",
    techs: [
      { name: "Git", detail: "Version Control", level: 86, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.337-2.075l-2.48-2.48v6.53a1.834 1.834 0 01.496.344 1.838 1.838 0 010 2.6 1.838 1.838 0 01-2.6 0 1.838 1.838 0 010-2.6c.178-.178.387-.316.617-.406v-6.6a1.84 1.84 0 01-.617-.406 1.84 1.84 0 01-.338-2.076L8.1 5.018l-7.647 7.648a1.547 1.547 0 000 2.188l10.48 10.48a1.547 1.547 0 002.186 0l10.427-10.42a1.552 1.552 0 000-2.187" /></svg> },
    ],
  },
];

/* ── Progress Bar Component ────────────────────────────────────── */
function ProgressBar({ level, color, animate }) {
  return (
    <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-zinc-800/80">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: animate ? `${level}%` : "0%",
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          boxShadow: animate ? `0 0 8px ${color}66` : "none",
        }}
      />
    </div>
  );
}

/* ── Tech Card ─────────────────────────────────────────────────── */
function TechCard({ tech, color, delay, animate }) {
  return (
    <div
      className="group rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/30 sm:rounded-2xl sm:p-5"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, border-color 0.3s, background-color 0.3s`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 transition-colors duration-300 group-hover:border-zinc-700"
          style={{ color, backgroundColor: `${color}10` }}
        >
          {tech.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[#f4f4f5] truncate">{tech.name}</p>
          {tech.detail && (
            <p className="text-[11px] text-zinc-600 truncate">{tech.detail}</p>
          )}
        </div>
        <span className="text-xs font-medium tabular-nums" style={{ color }}>
          {tech.level}%
        </span>
      </div>
      <ProgressBar level={tech.level} color={color} animate={animate} />
    </div>
  );
}

/* ── Category Row (extracted to avoid hook-in-map issue) ────────── */
function CategoryRow({ category }) {
  const [catRef, catInView] = useInView();

  return (
    <div ref={catRef}>
      <div
        className="mb-5 flex items-center gap-3"
        style={{
          opacity: catInView ? 1 : 0,
          transform: catInView ? "translateX(0)" : "translateX(-16px)",
          transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: `${category.color}40` }} />
        <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: category.color }}>
          {category.titleKey}
        </h3>
        <div className="h-px flex-1" style={{ backgroundColor: `${category.color}15` }} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.techs.map((tech, techIdx) => (
          <TechCard
            key={tech.name}
            tech={tech}
            color={category.color}
            delay={0.1 + techIdx * 0.1}
            animate={catInView}
          />
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   TECH STACK SECTION
   ================================================================ */
export default function TechStack() {
  const [sectionRef, sectionInView] = useInView();
  const { t } = useLanguage();
  const ts = t("techStack");

  return (
    <section id="techstack" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#06b6d4]" />
            {ts.label}
          </div>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#f4f4f5] sm:text-4xl md:text-5xl">
            {ts.title}{" "}
            <span className="gradient-text">{ts.titleGradient}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 sm:mt-4 sm:text-base">
            {ts.subtitle}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {CATEGORIES.map((category) => (
            <CategoryRow key={category.titleKey} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
