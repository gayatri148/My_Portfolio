"use client";

import { motion } from "framer-motion";

/**
 * Soft, slowly-drifting gradient blobs for section backgrounds.
 * Purely decorative, sits behind content, ignores pointer events.
 */
export default function Blobs({ variant = "a" }) {
  const sets = {
    a: [
      { c: "bg-azure/25", s: "h-72 w-72", p: "left-[-6rem] top-10", d: 14 },
      { c: "bg-teal/15", s: "h-80 w-80", p: "right-[-5rem] bottom-0", d: 18 },
    ],
    b: [
      { c: "bg-azure/20", s: "h-64 w-64", p: "right-[8%] top-[-4rem]", d: 16 },
      { c: "bg-azure/20", s: "h-72 w-72", p: "left-[-4rem] bottom-10", d: 20 },
    ],
  };
  const blobs = sets[variant] || sets.a;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`absolute rounded-full blur-3xl ${b.c} ${b.s} ${b.p}`}
          animate={{
            x: [0, 24, -16, 0],
            y: [0, -20, 14, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: b.d,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
