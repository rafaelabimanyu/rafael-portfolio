import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <Hero />

      {/* ── About & Achievements ─────────────────────────────── */}
      <AboutBento />
    </main>
  );
}
