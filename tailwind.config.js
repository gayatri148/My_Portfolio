/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Every colour is driven by a CSS variable so the whole site can flip
      // to dark mode automatically via prefers-color-scheme (see globals.css).
      colors: {
        mist: "rgb(var(--c-mist) / <alpha-value>)",        // page background
        paper: "rgb(var(--c-paper) / <alpha-value>)",      // card surface
        "paper-card": "rgb(var(--c-paper) / <alpha-value>)",
        paper2: "rgb(var(--c-paper2) / <alpha-value>)",    // chips / inset
        panel: "rgb(var(--c-panel) / <alpha-value>)",      // always-dark bands
        ink: "rgb(var(--c-ink) / <alpha-value>)",          // primary text
        slatey: "rgb(var(--c-slatey) / <alpha-value>)",    // body text
        azure: "rgb(var(--c-azure) / <alpha-value>)",
        blue: "rgb(var(--c-blue) / <alpha-value>)",
        teal: "rgb(var(--c-teal) / <alpha-value>)",
        sky: "rgb(var(--c-sky) / <alpha-value>)",
        kraft: "rgb(var(--c-kraft) / <alpha-value>)",
        leaf: "rgb(var(--c-leaf) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "Comic Sans MS", "cursive"],
      },
      boxShadow: {
        soft: "0 12px 30px -14px var(--shadow-soft)",
        glow: "0 0 0 1px rgb(var(--c-azure) / 0.18), 0 22px 50px -18px var(--shadow-strong)",
        paper: "0 2px 0 rgba(0,0,0,0.02), 0 14px 28px -16px var(--shadow-soft)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: { "100%": { transform: "translateX(100%)" } },
        gridmove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        gridmove: "gridmove 18s linear infinite",
      },
    },
  },
  plugins: [],
};
