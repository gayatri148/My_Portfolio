"use client";

import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import { about, education, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="About"
          title="Engineer by training, builder by instinct."
          subtitle={about.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Story card */}
          <Reveal className="glass rounded-3xl p-8 shadow-soft">
            <p className="text-lg leading-relaxed text-slatey">{about.body}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <InfoTile
                icon={<Briefcase size={18} />}
                label="Currently"
                value="Intern @ Joveo"
              />
              <InfoTile
                icon={<GraduationCap size={18} />}
                label="Studying"
                value="CSE & Business Systems"
              />
              <InfoTile
                icon={<MapPin size={18} />}
                label="Based in"
                value={profile.location}
              />
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="group relative overflow-hidden rounded-3xl border border-azure/40 bg-white/60 p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-teal"
              >
                <div className="font-display text-4xl font-extrabold text-gradient">
                  <Counter value={h.value} />
                  <span className="text-2xl">{h.suffix}</span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slatey">
                  {h.label}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal to-azure transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </Reveal>
        </div>

        {/* Education strip */}
        <Reveal delay={0.15} className="mt-6">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-ink p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10">
                <GraduationCap size={22} className="text-azure" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {education.school}
                </h3>
                <p className="text-sm text-sky/90">{education.degree}</p>
                <p className="mt-1 text-xs text-white/60">
                  {education.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-azure">
                  {education.cgpa}
                </p>
                <p className="text-xs text-white/60">CGPA</p>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-azure">
                  {education.period}
                </p>
                <p className="text-xs text-white/60">Timeline</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoTile({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-azure/40 bg-white/50 p-4">
      <div className="mb-2 inline-grid h-9 w-9 place-items-center rounded-xl bg-mist text-teal">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-wide text-slatey">{label}</p>
      <p className="text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}
