"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Experience"
          title="Where I've been building."
          subtitle="Hands-on work shipping real features on production systems."
        />

        <div className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <article className="group relative grid gap-6 overflow-hidden rounded-3xl glass p-6 shadow-soft transition-all hover:shadow-glow sm:p-8 md:grid-cols-[200px_1fr]">
                {/* left rail */}
                <div className="flex flex-row items-center gap-4 md:flex-col md:items-start">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal to-azure text-white shadow-soft">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    {job.current && (
                      <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                        Current
                      </span>
                    )}
                    <p className="text-sm font-semibold text-ink">
                      {job.period}
                    </p>
                  </div>
                </div>

                {/* right content */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-ink">
                      {job.role}{" "}
                      <span className="text-teal">· {job.company}</span>
                    </h3>
                  </div>
                  <p className="mt-1 flex items-center gap-3 text-sm text-slatey">
                    <span>{job.type}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-slatey">
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-azure"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-azure/50 bg-paper2 px-2.5 py-1 text-xs font-medium text-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-azure/10 blur-2xl transition-opacity group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
