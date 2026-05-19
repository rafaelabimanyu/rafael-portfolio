import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ── Google Fonts ──────────────────────────────────────────────── */

/** Heading — futuristik, tegas, melebar */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Body — bersih, sangat mudah dibaca */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ── SEO Metadata ──────────────────────────────────────────────── */
export const metadata = {
  title: "Rafael Abimanyu — Full-Stack Web Developer",
  description:
    "Portfolio of Rafael Abimanyu — a passionate Full-Stack Web Developer crafting modern, performant, and visually stunning digital experiences.",
  keywords: [
    "Rafael Abimanyu",
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Rafael Abimanyu" }],
  openGraph: {
    title: "Rafael Abimanyu — Full-Stack Web Developer",
    description:
      "Crafting modern, performant, and visually stunning digital experiences.",
    type: "website",
  },
};

/* ── Root Layout ───────────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} h-full`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#050505] text-[#f4f4f5] antialiased">
        {/* ── Ambient Light Glow Background ─────────────────── */}
        <div className="ambient-glow" aria-hidden="true" />

        {/* ── Main Content Shell ─────────────────────────────── */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
