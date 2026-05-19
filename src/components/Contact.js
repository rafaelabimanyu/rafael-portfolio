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
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

/* ── Icons ─────────────────────────────────────────────────────── */
function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SendIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

function SparkleIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  );
}

/* ── Contact Link Card ─────────────────────────────────────────── */
function ContactLink({ href, icon, label, value, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-4 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/30"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 transition-colors duration-300 group-hover:border-zinc-700">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs tracking-wider text-zinc-500 uppercase">{label}</p>
        <p className="truncate text-sm font-medium text-zinc-300 transition-colors duration-300 group-hover:text-[#f4f4f5]">{value}</p>
      </div>
    </a>
  );
}

/* ================================================================
   CONTACT SECTION
   ================================================================ */
export default function Contact() {
  const [headerRef, headerInView] = useInView();
  const [leftRef, leftInView] = useInView();
  const [formRef, formInView] = useInView();

  const { t } = useLanguage();
  const c = t("contact");

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* ── Section Header ─────────────────────────────────── */}
        <div
          ref={headerRef}
          className="mb-10 text-center sm:mb-16"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[10px] tracking-widest text-zinc-500 uppercase backdrop-blur-sm sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34d399]" />
            {c.label}
          </div>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#f4f4f5] sm:text-4xl md:text-5xl">
            {c.title}{" "}
            <span className="gradient-text">{c.titleGradient}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 sm:mt-4 sm:text-base">
            {c.subtitle}
          </p>
        </div>

        {/* ── Two Column Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Info */}
          <div ref={leftRef} className="flex flex-col gap-4 sm:gap-6" style={{ opacity: leftInView ? 1 : 0, transform: leftInView ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s" }}>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-5 backdrop-blur-md sm:rounded-3xl sm:p-8">
              <SparkleIcon className="mb-4 h-8 w-8 text-[#a855f7]" />
              <h3 className="mb-2 font-heading text-xl font-bold text-[#f4f4f5] sm:mb-3 sm:text-2xl">{c.ctaTitle}</h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{c.ctaDesc}</p>
            </div>

            <ContactLink href="mailto:rafael.abimanyu@email.com" icon={<MailIcon className="h-5 w-5 text-[#06b6d4]" />} label="Email" value="rafael.abimanyu@email.com" />
            <ContactLink href="https://github.com/rafaelabimanyu" icon={<GitHubIcon className="h-5 w-5 text-[#f4f4f5]" />} label="GitHub" value="github.com/rafaelabimanyu" external />
            <ContactLink href="https://linkedin.com/in/rafaelabimanyu" icon={<LinkedInIcon className="h-5 w-5 text-[#0A66C2]" />} label="LinkedIn" value="linkedin.com/in/rafaelabimanyu" external />
          </div>

          {/* RIGHT — Form */}
          <div ref={formRef} style={{ opacity: formInView ? 1 : 0, transform: formInView ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-5 backdrop-blur-md sm:gap-5 sm:rounded-3xl sm:p-8">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-xs font-medium tracking-wider text-zinc-500 uppercase">{c.nameLabel}</label>
                <input id="contact-name" name="name" type="text" required value={formState.name} onChange={handleChange} placeholder={c.namePlaceholder} className="min-h-[44px] w-full rounded-xl border border-zinc-800/80 bg-zinc-950/50 px-4 py-3 text-sm text-[#f4f4f5] placeholder-zinc-700 outline-none transition-all duration-300 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 sm:rounded-2xl sm:px-5 sm:py-3.5" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-medium tracking-wider text-zinc-500 uppercase">{c.emailLabel}</label>
                <input id="contact-email" name="email" type="email" required value={formState.email} onChange={handleChange} placeholder={c.emailPlaceholder} className="min-h-[44px] w-full rounded-xl border border-zinc-800/80 bg-zinc-950/50 px-4 py-3 text-sm text-[#f4f4f5] placeholder-zinc-700 outline-none transition-all duration-300 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 sm:rounded-2xl sm:px-5 sm:py-3.5" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-medium tracking-wider text-zinc-500 uppercase">{c.messageLabel}</label>
                <textarea id="contact-message" name="message" required rows={4} value={formState.message} onChange={handleChange} placeholder={c.messagePlaceholder} className="w-full resize-none rounded-xl border border-zinc-800/80 bg-zinc-950/50 px-4 py-3 text-sm leading-relaxed text-[#f4f4f5] placeholder-zinc-700 outline-none transition-all duration-300 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 sm:rounded-2xl sm:px-5 sm:py-3.5" />
              </div>

              <button type="submit" disabled={isSending} className="btn-glow group mt-1 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#06b6d4] px-6 py-3.5 text-sm font-semibold text-white shadow-lg disabled:opacity-60 disabled:cursor-not-allowed sm:mt-2 sm:px-8 sm:py-4">
                {isSending ? (
                  <><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>{c.sendingBtn}</>
                ) : sent ? (
                  <><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>{c.sentBtn}</>
                ) : (
                  <><SendIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />{c.sendBtn}</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
