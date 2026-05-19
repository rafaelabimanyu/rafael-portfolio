import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <Hero />

      {/* ── About & Achievements ─────────────────────────────── */}
      <AboutBento />

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <TechStack />

      {/* ── Project Showcase ─────────────────────────────────── */}
      <Projects />
    </main>
  );
}
