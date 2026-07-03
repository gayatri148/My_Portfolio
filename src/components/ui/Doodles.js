"use client";

/**
 * Blue-ink hand-drawn doodle layer for the paper-collage theme - sparkles,
 * curly arrows, spirals, hearts, zigzags, stars, wavy underlines.
 * Fixed behind content; edge-weighted so the content column stays clean.
 */
export default function Doodles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Sparkle className="left-[10%] top-[14%] w-9 animate-floaty text-azure/70" />
      <Sparkle className="right-[14%] top-[20%] w-7 text-ink/50" style={{ animationDelay: "1.2s" }} />
      <CurlyArrow className="right-[6%] top-[38%] w-24 -rotate-12 text-azure/60" />
      <Spiral className="left-[3%] top-[30%] w-20 animate-floaty text-ink/45" />
      <Heart className="right-[26%] top-[58%] w-9 text-azure/55" />
      <Zigzag className="left-[22%] top-[44%] w-20 rotate-6 text-ink/40" />
      <Star className="right-[9%] top-[12%] w-12 animate-floaty text-azure/60" />
      <WavyLine className="bottom-[12%] left-[6%] w-40 text-ink/40" />
      <Star className="right-[34%] bottom-[16%] w-10 text-azure/50" style={{ animationDelay: "0.8s" }} />
      <Dot className="left-[30%] top-[42%]" />
      <Dot className="right-[30%] top-[50%]" />
      <Dot className="left-[12%] top-[62%]" />
    </div>
  );
}

export function Sparkle({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z" />
    </svg>
  );
}

export function Star({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M12 2 L15 9 L22 9.5 L16.5 14 L18.5 21 L12 17 L5.5 21 L7.5 14 L2 9.5 L9 9 Z" />
    </svg>
  );
}

export function CurlyArrow({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 70 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8 C 42 2, 60 26, 50 52" />
      <path d="M50 52 L40 46" />
      <path d="M50 52 L56 40" />
    </svg>
  );
}

export function Spiral({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M37 37 C 37 29, 27 29, 27 37 C 27 49, 45 49, 45 35 C 45 17, 21 17, 21 39 C 21 63, 53 63, 55 33" />
    </svg>
  );
}

export function Heart({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
      <path d="M12 20 C -4 10, 5 -1, 12 7 C 19 -1, 28 10, 12 20 Z" />
    </svg>
  );
}

export function Zigzag({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18 L14 6 L26 18 L38 6 L50 18 L58 11" />
    </svg>
  );
}

export function Burst({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 3 L20 13 M20 27 L20 37 M3 20 L13 20 M27 20 L37 20 M8 8 L15 15 M25 25 L32 32 M32 8 L25 15 M15 25 L8 32" />
    </svg>
  );
}

export function WavyLine({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M2 12 C 12 2, 22 2, 32 12 S 52 22, 62 12 S 82 2, 92 12 S 112 22, 118 12" />
    </svg>
  );
}

export function Asterisk({ className = "", style }) {
  return (
    <svg aria-hidden style={style} className={`absolute ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 3 L12 21 M3 12 L21 12 M5.5 5.5 L18.5 18.5 M18.5 5.5 L5.5 18.5" />
    </svg>
  );
}

function Dot({ className = "" }) {
  return <span className={`absolute h-2.5 w-2.5 rounded-full bg-azure/45 ${className}`} />;
}
