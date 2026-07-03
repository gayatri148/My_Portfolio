"use client";

/* ── Shared SVG filter defs (render once, near top of page) ──────── */
export function PaperDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <filter id="paper-torn" x="-6%" y="-12%" width="112%" height="124%">
          <feTurbulence type="fractalNoise" baseFrequency="0.011 0.026" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="13" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="paper-torn2" x="-6%" y="-12%" width="112%" height="124%">
          <feTurbulence type="fractalNoise" baseFrequency="0.013 0.03" numOctaves="3" seed="21" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}

/* ── Torn-edge paper card ─────────────────────────────────────────── */
export function PaperCard({ children, className = "", tone = "paper", rotate = 0, filter = "paper-torn", style }) {
  const fill =
    tone === "kraft" ? "#e7d2a8" : tone === "deep" ? "#f1e7d4" : "#fbf6ec";
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}
    >
      <svg
        className="absolute inset-0 h-full w-full [filter:drop-shadow(0_16px_24px_rgba(28,58,91,0.28))]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <rect x="0" y="0" width="100%" height="100%" fill={fill} filter={`url(#${filter})`} />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}

/* ── Washi tape ───────────────────────────────────────────────────── */
export function Tape({ className = "", style }) {
  return <span aria-hidden className={`tape ${className}`} style={style} />;
}

/* ── Paperclip ────────────────────────────────────────────────────── */
export function Paperclip({ className = "" }) {
  return (
    <svg aria-hidden className={`absolute ${className}`} viewBox="0 0 40 64" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 20 L28 46 C28 56 12 56 12 46 L12 14 C12 8 22 8 22 14 L22 44 C22 48 18 48 18 44 L18 20" />
    </svg>
  );
}

/* ── Pushpin ──────────────────────────────────────────────────────── */
export function Pushpin({ className = "" }) {
  return (
    <svg aria-hidden className={`absolute ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="9" r="7" />
      <rect x="11" y="14" width="2" height="9" rx="1" />
      <circle cx="9.5" cy="7" r="2" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

/* ── Lined notebook-paper corner scrap ────────────────────────────── */
export function LinedPaper({ className = "" }) {
  return (
    <div className={`note-lines relative bg-paper-card ${className}`}>
      <span className="absolute left-2 top-3 h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="absolute left-2 top-9 h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="absolute left-2 top-[60px] h-2.5 w-2.5 rounded-full bg-ink/15" />
    </div>
  );
}

/* ── Paper plane + dashed trail ───────────────────────────────────── */
export function PaperPlane({ className = "" }) {
  return (
    <svg aria-hidden className={`absolute ${className}`} viewBox="0 0 90 60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 30 C 18 26, 30 20, 44 6" strokeWidth="1.8" strokeDasharray="2 6" opacity="0.7" />
      <path d="M48 4 L86 14 L60 40 L54 26 Z" strokeWidth="2.4" fill="rgba(63,114,171,0.10)" />
      <path d="M86 14 L54 26" strokeWidth="2.4" />
    </svg>
  );
}

/* ── Brush-stroke underline (filled, hand-painted) ────────────────── */
export function BrushUnderline({ className = "", color = "currentColor" }) {
  return (
    <svg aria-hidden className={`absolute ${className}`} viewBox="0 0 300 30" preserveAspectRatio="none" fill={color}>
      <path d="M4 18 C 70 8, 150 22, 210 14 C 250 9, 280 18, 297 12 C 286 24, 232 27, 168 24 C 104 21, 44 26, 4 18 Z" />
    </svg>
  );
}

/* ── Botanical leaf sprig ─────────────────────────────────────────── */
export function Leaf({ className = "" }) {
  return (
    <svg aria-hidden className={`absolute ${className}`} viewBox="0 0 90 130" fill="none">
      <path d="M46 128 C 46 92, 44 58, 52 14" stroke="#5d7a3f" strokeWidth="3" strokeLinecap="round" />
      <Leaflet x={52} y={26} rot={-38} />
      <Leaflet x={48} y={52} rot={38} flip />
      <Leaflet x={47} y={78} rot={-34} />
      <Leaflet x={46} y={102} rot={32} flip />
    </svg>
  );
}
function Leaflet({ x, y, rot, flip }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${flip ? -1 : 1} 1)`}>
      <path d="M0 0 C 22 -8, 40 0, 30 18 C 22 30, 4 26, 0 0 Z" fill="#6e8b4a" />
      <path d="M2 4 C 14 4, 22 8, 28 14" stroke="#4f6a34" strokeWidth="1.4" fill="none" />
    </g>
  );
}
