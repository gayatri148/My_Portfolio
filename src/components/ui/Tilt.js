"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Subtle 3D tilt-on-hover wrapper. Pointer-driven, spring-smoothed.
 * Automatically inert on touch devices (no hover), so mobile is unaffected.
 */
export default function Tilt({ children, className = "", max = 8, glare = true }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 20,
  });
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`relative [transform-style:preserve-3d] ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{ left: glareX }}
          className="pointer-events-none absolute -top-1/2 h-[200%] w-1/3 -translate-x-1/2 rounded-full bg-white/20 opacity-0 blur-2xl transition-opacity duration-300 [transform:translateZ(40px)] group-hover:opacity-100"
        />
      )}
    </motion.div>
  );
}
