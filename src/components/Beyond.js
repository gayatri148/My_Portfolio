"use client";

import {
  Palette,
  BrainCircuit,
  Trophy,
  Users,
  BookOpen,
  Coffee,
  Quote,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Tilt from "./ui/Tilt";
import { Sparkle, Star, Zigzag, CurlyArrow } from "./ui/Doodles";
import { beyond } from "@/data/content";

const iconMap = { Palette, BrainCircuit, Trophy, Users, BookOpen, Coffee };

export default function Beyond() {
  return (
    <section id="beyond" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Beyond Code"
          title="The human behind the commits."
          subtitle={beyond.bio}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beyond.interests.map((it, i) => {
            const Icon = iconMap[it.icon] || Coffee;
            return (
              <Reveal key={it.label} delay={(i % 3) * 0.06}>
                <Tilt className="group h-full">
                  <div className="flex h-full items-center gap-4 rounded-2xl glass p-5 shadow-soft transition-colors hover:border-teal">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-teal to-azure text-white transition-transform group-hover:scale-110 [transform:translateZ(30px)]">
                      <Icon size={22} />
                    </div>
                    <div className="[transform:translateZ(20px)]">
                      <h3 className="font-display text-sm font-bold text-ink">
                        {it.label}
                      </h3>
                      <p className="text-xs text-slatey">{it.note}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>

        {/* personal quote band */}
        <Reveal delay={0.1} className="mt-8">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-center sm:p-12">
            <Quote size={64} className="absolute -left-2 -top-2 text-white/5" />
            <Sparkle className="absolute right-6 top-5 w-9 animate-floaty text-white/80" />
            <Star className="absolute bottom-6 left-8 w-11 text-white/60" />
            <Zigzag className="absolute right-10 top-7 w-16 rotate-6 text-white/40" />
            <CurlyArrow className="absolute bottom-5 right-8 w-20 -rotate-6 text-white/45" />
            <p className="relative mx-auto max-w-3xl font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
              &ldquo;<span className="text-gradient-light">{beyond.quote}</span>&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
