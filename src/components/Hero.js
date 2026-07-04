"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, MapPin, Download } from "lucide-react";
import { profile } from "@/data/content";
import {
  PaperCard,
  Tape,
  Paperclip,
  LinedPaper,
  PaperPlane,
  Leaf,
  BrushUnderline,
} from "./ui/Paper";
import { Sparkle, Star, Spiral, CurlyArrow } from "./ui/Doodles";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block">
      <motion.span
        key={i}
        initial={{ y: "60%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="block text-blue"
      >
        {profile.roles[i]}
      </motion.span>
      <BrushUnderline className="-bottom-2 left-0 h-4 w-full text-azure/35" />
    </span>
  );
}

function Chip({ className = "", rotate = 0, tapeClass, children }) {
  return (
    <div className="relative" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className={`relative ${className}`}>
        <Tape className={`-top-3 left-1/2 h-5 w-14 -translate-x-1/2 ${tapeClass || ""}`} />
        <div className="bg-paper-card px-3 py-1.5 font-hand text-lg font-bold text-ink shadow-paper">
          {children}
        </div>
      </div>
    </div>
  );
}

// Hand-drawn "where I've lived" route map, ending at the current city.
function RouteMap() {
  const stops = ["Srikakulam", "Hyderabad", "Vijayawada"];
  return (
    <div
      className="relative w-52 bg-paper-card px-4 py-3 shadow-paper"
      style={{ transform: "rotate(-3deg)" }}
    >
      <Tape className="-top-3 left-8 h-5 w-16 -rotate-3" />
      <p className="mb-2 flex items-center gap-1 font-hand text-base font-bold text-teal">
        <MapPin size={15} /> my journey
      </p>
      <div className="relative">
        <span className="absolute left-[4px] top-2 bottom-3 border-l-2 border-dashed border-azure/50" />
        <ul className="space-y-2.5">
          {stops.map((c) => (
            <li key={c} className="relative flex items-center gap-3">
              <span className="z-10 h-2.5 w-2.5 rounded-full border-2 border-azure bg-paper-card" />
              <span className="font-hand text-sm text-slatey">{c}</span>
            </li>
          ))}
          <li className="relative flex items-center gap-3">
            <span className="relative z-10 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
            </span>
            <span className="font-hand text-sm font-bold text-ink">
              Bengaluru <span className="text-teal">· you are here</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-mesh relative flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* torn paper strip along the very top */}
      <svg
        aria-hidden
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="absolute left-0 top-0 z-0 h-10 w-full [filter:drop-shadow(0_6px_8px_rgba(28,58,91,0.12))] sm:h-14"
      >
        <path
          d="M0 0 H1440 V42 C1320 56,1230 30,1100 46 C980 60,880 32,740 46 C620 58,520 30,380 44 C250 57,130 34,0 50 Z"
          fill="#fbf6ec"
        />
      </svg>

      {/* lined-paper corner, top right */}
      <LinedPaper className="absolute right-0 top-6 z-0 hidden h-44 w-40 rotate-3 shadow-paper md:block" />

      {/* ambient hero doodles */}
      <PaperPlane className="left-[36%] top-[18%] hidden w-24 text-ink/70 sm:block" />
      <Star className="left-[8%] top-[24%] hidden w-7 text-azure/60 sm:block" />
      <Leaf className="-bottom-2 right-3 hidden w-24 md:block lg:w-28" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* ── Left column ── */}
        <div>
          {/* compact photo - mobile only */}
          <div className="mx-auto mb-8 w-44 lg:hidden">
            <PaperCard tone="paper" rotate={-3} className="p-2.5">
              <Paperclip className="-top-5 right-6 z-10 w-7 text-slatey" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-square w-full rounded-sm object-cover"
              />
              <p className="mt-2 text-center font-hand text-base text-slatey">Gayatri</p>
            </PaperCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-paper-card px-4 py-1.5 text-xs font-medium text-ink shadow-paper lg:mx-0"
          >
            <span className="h-2 w-2 rounded-full bg-leaf" />
            Open to opportunities · {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="fluid-h1 mt-5 text-center font-display font-extrabold tracking-tight lg:text-left"
          >
            <span className="block text-ink">Hi, I&apos;m</span>
            <span className="relative inline-block text-gradient">
              Gayatri.
              <BrushUnderline className="-bottom-1 left-0 h-4 w-[106%] text-azure/30" />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.13 }}
            className="fluid-role mt-4 text-center font-hand font-bold lg:text-left"
          >
            <RotatingRole />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-slatey sm:text-lg lg:mx-0 lg:text-left"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-teal"
            >
              View my work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-paper-card px-6 py-3.5 text-sm font-semibold text-ink shadow-paper transition-all hover:-translate-y-0.5 hover:text-teal"
            >
              <Download size={16} /> Resume
            </a>
            <a aria-label="GitHub" href={profile.socials.github} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl border border-ink/15 bg-paper-card text-ink shadow-paper transition-all hover:-translate-y-0.5 hover:text-teal">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl border border-ink/15 bg-paper-card text-ink shadow-paper transition-all hover:-translate-y-0.5 hover:text-teal">
              <Linkedin size={18} />
            </a>
          </motion.div>

          {/* handwritten note + scribbles */}
          <div className="relative mt-8 hidden h-12 lg:block">
            <Spiral className="left-0 top-1 w-12 text-ink/45" />
            <CurlyArrow className="left-14 top-0 w-12 rotate-[20deg] text-azure/55" />
            <span className="absolute left-28 top-1 font-hand text-2xl font-bold text-ink">
              let&apos;s create something amazing!
              <BrushUnderline className="-bottom-2 left-0 h-3 w-full text-azure/40" />
            </span>
            <span className="absolute left-[27rem] top-0 font-hand text-2xl text-ink">:)</span>
          </div>
        </div>

        {/* ── Right collage (desktop) ── */}
        <div className="relative hidden h-[540px] lg:block">
          {/* kraft backing behind the photo */}
          <div className="absolute right-8 top-10">
            <PaperCard tone="kraft" rotate={5} className="h-72 w-60" />
          </div>

          {/* 9.69 CGPA chip - above the photo */}
          <div className="absolute right-24 top-0 z-30">
            <Chip rotate={-6}>9.69 CGPA</Chip>
          </div>

          {/* polaroid photo card - upper area, right under the 9.69 */}
          <div className="absolute right-12 top-8 z-20">
            <PaperCard tone="paper" rotate={-3} className="w-60 p-3">
              <Paperclip className="-top-6 right-10 z-10 w-8 text-slatey" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <p className="mt-2 text-center font-hand text-lg text-slatey">
                Gayatri
              </p>
            </PaperCard>
          </div>

          {/* AI · Full Stack chip */}
          <div className="absolute -right-2 top-[46%] z-30">
            <Chip rotate={6}>AI · Full Stack</Chip>
          </div>

          {/* journey / route map - lower area (replaces the Bengaluru pin) */}
          <div className="absolute bottom-0 left-0 z-20">
            <RouteMap />
          </div>

          {/* sparkles around */}
          <Sparkle className="right-2 top-2 w-8 animate-floaty text-azure/70" />
          <Star className="left-6 top-[42%] w-6 text-ink/50" />
          <CurlyArrow className="bottom-8 right-4 w-16 rotate-[120deg] text-azure/55" />
        </div>
      </div>

      {/* scroll cue */}
      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-slatey sm:flex">
        <span className="kicker">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} className="text-teal" />
        </motion.span>
      </a>
    </section>
  );
}
