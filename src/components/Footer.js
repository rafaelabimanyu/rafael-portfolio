"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

/* ── Icons ─────────────────────────────────────────────────────── */
function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/rafaelabimanyu", icon: <GitHubIcon className="h-4 w-4" /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/rafaelabimanyu", icon: <LinkedInIcon className="h-4 w-4" /> },
  { label: "Email", href: "mailto:rafael.abimanyu@email.com", icon: <MailIcon className="h-4 w-4" /> },
];

/* ================================================================
   FOOTER
   ================================================================ */
export default function Footer() {
  const { t } = useLanguage();
  const f = t("footer");
  const nav = t("navbar");

  const NAV_LINKS = [
    { label: nav.home, href: "/#hero" },
    { label: nav.about, href: "/#about" },
    { label: nav.techStack, href: "/#techstack" },
    { label: nav.projects, href: "/#projects" },
    { label: nav.contact, href: "/#contact" },
  ];

  return (
    <footer className="relative border-t border-zinc-800/60 px-4 py-8 sm:px-6 sm:py-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-8 md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-gradient-to-br from-[#a855f7]/10 to-[#06b6d4]/10 transition-all duration-300 group-hover:border-zinc-700 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <span className="gradient-text font-heading text-lg font-bold">R</span>
              </div>
              <span className="font-heading text-lg font-semibold text-[#f4f4f5]">
                Rafael<span className="text-zinc-500">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-600">{f.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase">{f.navigation}</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 transition-colors duration-200 hover:text-[#f4f4f5]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase">{f.connect}</h4>
            <div className="flex justify-center gap-3 md:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-500 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 hover:text-[#f4f4f5]">
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1.5 text-xs text-zinc-600 sm:mt-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34d399]" />
              </span>
              {f.available}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-zinc-800/40 pt-6 sm:mt-12 sm:flex-row sm:gap-4 sm:pt-8">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {f.copyright}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-zinc-700">
            {f.craftedWith}
            <span className="inline-block animate-pulse text-[#ec4899]">♥</span>
            {f.using}
            <span className="font-medium text-zinc-500">Next.js</span>
            &
            <span className="font-medium text-zinc-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
