"use client";

import { Code2, Globe, Database, Wrench } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Blobs from "./ui/Blobs";
import Tilt from "./ui/Tilt";
import { skills, skillRibbon } from "@/data/content";

const icons = {
  "Frontend Development": Globe,
  "Backend Development": Database,
  "Tools & Technologies": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <Blobs variant="a" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Toolkit"
          title="Technologies I work with."
          subtitle="A pragmatic stack - picked for shipping reliable, scalable products."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = icons[s.group] || Code2;
            return (
              <Reveal key={s.group} delay={i * 0.08} className="h-full">
                <Tilt className="group h-full">
                  <div className="h-full rounded-3xl glass p-6 shadow-soft transition-all hover:shadow-glow">
                    <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal to-azure text-white shadow-soft transition-transform group-hover:scale-110 [transform:translateZ(30px)]">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-base font-bold text-ink [transform:translateZ(20px)]">
                      {s.group}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-azure/40 bg-paper2 px-2.5 py-1 text-xs font-medium text-slatey transition-colors hover:border-teal hover:text-teal"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Marquee ribbon */}
      <div className="relative mt-16 overflow-hidden border-y border-azure/30 bg-paper-card/60 py-5">
        <div className="marquee-track gap-8 pr-8">
          {[...skillRibbon, ...skillRibbon].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-xl font-semibold text-slatey/70"
            >
              {s}
              <span className="text-teal">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
