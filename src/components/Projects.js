"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ImageIcon } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { Tape } from "./ui/Paper";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-mist/50 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Selected Work"
          title="Projects that solve real problems."
          subtitle="From a production CRM to real-time computer vision - here's what I've built."
        />

        <div className="mt-14 space-y-16">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} project={p} flip={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, flip, index }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-2">
        {/* Visual */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className={`group relative aspect-[16/11] overflow-hidden rounded-2xl border border-ink/10 shadow-soft ${
            flip ? "lg:order-2" : ""
          }`}
        >
          <Tape className="left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 -rotate-2" />

          {/* Real screenshot (shown when the file exists), else gradient placeholder */}
          {showImage && (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              onError={() => setImgError(true)}
              className="absolute inset-0 z-10 h-full w-full object-cover"
            />
          )}

          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`} />
          <div className="grid-overlay absolute inset-0 opacity-30" />
          <div className="relative flex h-full w-full flex-col items-center justify-center text-white">
            <span className="font-display text-6xl font-extrabold opacity-30">
              0{index + 1}
            </span>
            <div className="mt-3 flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <ImageIcon size={14} />
              Add screenshot · {project.image}
            </div>
          </div>

          {/* shine sweeps over whatever is shown */}
          <div className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </motion.div>

        {/* Copy */}
        <div className={flip ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3">
            <span className="font-hand text-2xl font-bold text-teal">0{index + 1}</span>
            <span className="h-px w-10 bg-kraft" />
            <span className="text-xs font-medium uppercase tracking-wide text-slatey">
              {project.year}
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
            {project.title}
          </h3>
          <p className="font-hand text-xl text-teal">{project.subtitle}</p>

          <p className="mt-4 text-base leading-relaxed text-slatey">{project.blurb}</p>

          <ul className="mt-4 space-y-2">
            {project.points.map((pt) => (
              <li key={pt} className="flex gap-2 text-sm text-slatey">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" />
                {pt}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-lg bg-paper2 px-2.5 py-1 text-xs font-medium text-ink">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal"
            >
              <Github size={16} /> Code
            </a>
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-paper-card px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:text-teal"
              >
                Live demo <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-ink/25 px-4 py-2.5 text-sm font-medium text-slatey">
                Demo soon
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
