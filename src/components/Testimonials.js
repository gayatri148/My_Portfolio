"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Blobs from "./ui/Blobs";
import { Paperclip } from "./ui/Paper";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const n = testimonials.length;

  const go = useCallback(
    (d) => {
      setDir(d);
      setI((v) => (v + d + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[i];

  return (
    <section className="relative px-5 py-20 sm:px-6 sm:py-28">
      <Blobs variant="a" />
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          center
          kicker="Kind Words"
          title="What people say."
          subtitle="Recommendations from people I've built and competed alongside."
        />

        <div className="relative mt-12">
          <Paperclip className="-top-5 left-10 z-20 w-8 text-slatey" />
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl glass p-8 shadow-soft sm:min-h-[240px] sm:p-12">
            <Quote size={80} className="absolute right-4 top-4 text-azure/15" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={i}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <blockquote className="font-display text-lg font-medium leading-relaxed text-ink sm:text-xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-teal to-azure font-display text-sm font-bold text-white">
                    {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{t.name}</span>
                    <span className="block text-xs text-slatey">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-paper-card text-ink transition-all hover:-translate-y-0.5 hover:text-teal"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => {
                    setDir(idx > i ? 1 : -1);
                    setI(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-6 bg-teal" : "w-2 bg-kraft"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-paper-card text-ink transition-all hover:-translate-y-0.5 hover:text-teal"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
