"use client";

import { Quote } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Blobs from "./ui/Blobs";
import { Tape } from "./ui/Paper";
import { philosophies } from "@/data/content";

const rotations = [-1.5, 1, -1, 1.5, -1, 1.2];
const tapeRot = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-2", "rotate-2"];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <Blobs variant="a" />
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          center
          kicker="Philosophy"
          title="Things I build by."
          subtitle="A few ideas and quotes that shape how I think, design, and write code."
        />

        <div className="mt-12 gap-5 sm:columns-2 lg:columns-3">
          {philosophies.map((p, i) => (
            <Reveal
              key={p.text}
              delay={(i % 3) * 0.06}
              className="mb-5 block break-inside-avoid"
            >
              <div
                className="relative rounded-2xl glass p-6 shadow-paper transition-shadow hover:shadow-glow"
                style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
              >
                <Tape
                  className={`-top-3 left-6 h-5 w-16 ${tapeRot[i % tapeRot.length]}`}
                />
                <Quote size={26} className="text-azure/40" />
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  {p.text}
                </p>
                <p className="mt-4 font-hand text-lg text-teal">
                  {p.author ? `- ${p.author}` : "- a principle I follow"}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
