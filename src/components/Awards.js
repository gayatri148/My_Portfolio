"use client";

import { Trophy, Medal, Award, BadgeCheck, Sparkles } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { awards, certifications, extras } from "@/data/content";

const rankIcon = { "1st": Trophy, "2nd": Medal, "3rd": Award };

export default function Awards() {
  return (
    <section id="awards" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Recognition"
          title="Awards, certifications & beyond."
          subtitle="Proof that the work holds up - on stage and on paper."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Awards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {awards.map((a, i) => {
              const Icon = rankIcon[a.rank] || Trophy;
              return (
                <Reveal key={a.title} delay={i * 0.06}>
                  <div className="group flex h-full gap-4 rounded-3xl glass p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal to-azure text-white">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold leading-snug text-ink">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-xs text-slatey">{a.event}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Certifications + extras */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-panel p-7 text-white">
                <div className="mb-4 flex items-center gap-2">
                  <BadgeCheck size={20} className="text-azure" />
                  <h3 className="font-display text-lg font-semibold">
                    Certifications
                  </h3>
                  <span className="ml-auto text-xs text-sky/70">
                    via Infosys Springboard
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <span
                      key={c}
                      className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-sky transition-colors hover:bg-white/20"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-3xl glass p-7 shadow-soft">
                <div className="mb-2 flex items-center gap-2 text-teal">
                  <Sparkles size={18} />
                  <h3 className="font-display text-base font-bold text-ink">
                    Leadership
                  </h3>
                </div>
                <p className="text-sm font-semibold text-ink">{extras.title}</p>
                <p className="mt-1 text-sm text-slatey">{extras.description}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
