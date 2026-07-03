"use client";

import Reveal from "./Reveal";
import { BrushUnderline } from "./Paper";

export default function SectionHeader({ kicker, title, subtitle, center }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {kicker && (
        <span className="mb-1 inline-block font-hand text-xl font-bold text-teal">
          {kicker}
        </span>
      )}
      <h2 className="relative inline-block font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
        {title}
        <BrushUnderline
          className={`-bottom-2 h-4 w-[55%] text-azure/30 ${
            center ? "left-1/2 -translate-x-1/2" : "left-0"
          }`}
        />
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base text-slatey ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
