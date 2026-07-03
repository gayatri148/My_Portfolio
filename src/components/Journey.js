"use client";

import { motion } from "framer-motion";
import { GraduationCap, Rocket, Trophy, Briefcase } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Blobs from "./ui/Blobs";
import { journey } from "@/data/content";

const tagIcon = {
  Education: GraduationCap,
  Projects: Rocket,
  Recognition: Trophy,
  Experience: Briefcase,
};

export default function Journey() {
  return (
    <section id="journey" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <Blobs variant="b" />
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          center
          kicker="My Journey"
          title="From first commit to production."
          subtitle="The path so far - a few milestones that shaped how I build."
        />

        <div className="relative mt-14">
          {/* center/left spine */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-teal/60 via-azure/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-14">
            {journey.map((item, i) => {
              const Icon = tagIcon[item.tag] || Rocket;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={item.title + i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-5 pl-12 sm:w-1/2 sm:pl-0 ${
                    left
                      ? "sm:ml-0 sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute left-4 top-1 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-teal to-azure text-white shadow-soft ring-4 ring-mist sm:left-auto ${
                      left ? "sm:-right-4 sm:translate-x-1/2" : "sm:-left-4 sm:-translate-x-1/2"
                    }`}
                  >
                    <Icon size={15} />
                  </span>

                  <div
                    className={`group w-full rounded-2xl glass p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow ${
                      left ? "sm:items-end" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 ${
                        left ? "sm:justify-end" : ""
                      }`}
                    >
                      <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-bold text-teal">
                        {item.year}
                      </span>
                      {item.current && (
                        <span className="rounded-full bg-azure/20 px-2.5 py-0.5 text-[11px] font-semibold text-teal">
                          Now
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-base font-bold text-ink sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-teal">{item.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slatey">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
