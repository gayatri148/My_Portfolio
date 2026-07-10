"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 border-t border-azure/30 pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal to-azure font-display text-sm font-bold text-white">
                GG
              </span>
              <span className="font-display text-base font-semibold text-ink">
                {profile.name}
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slatey">
              Full Stack Developer & AI Engineer crafting scalable, thoughtful
              products.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm font-medium text-slatey hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            <FooterIcon href={profile.socials.github} label="GitHub">
              <Github size={18} />
            </FooterIcon>
            <FooterIcon href={profile.socials.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </FooterIcon>
            <FooterIcon href={`mailto:${profile.email}`} label="Email">
              <Mail size={18} />
            </FooterIcon>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slatey sm:flex-row">
          <p>
            © {year} {profile.name}. Built with Next.js & Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-lg border border-azure/50 px-3 py-1.5 font-medium text-ink transition-colors hover:border-teal hover:text-teal"
          >
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, label, children }) {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="grid h-10 w-10 place-items-center rounded-xl border border-azure/50 bg-paper-card text-ink transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal"
    >
      {children}
    </a>
  );
}
