import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

      {/* ── Contact ──────────────────────────────────────────── */}
      <Contact />

      {/* ── Footer ───────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
