"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Counts up to `value` when scrolled into view. Supports decimals. */
export default function Counter({ value, duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  const target = parseFloat(value);
  const decimals = (String(value).split(".")[1] || "").length;

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  if (Number.isNaN(target)) return <span ref={ref}>{value}</span>;

  return <span ref={ref}>{display.toFixed(decimals)}</span>;
}
