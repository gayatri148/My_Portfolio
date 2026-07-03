/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: "#f4ecdd",
        sky: "#e9dcc4",
        azure: "#3f72ab",
        teal: "#2c5685",
        ink: "#1c3a5b",
        slatey: "#6b6357",
        kraft: "#caa874",
        paper: "#fbf6ec",
        "paper-card": "#fbf6ec",
        paper2: "#f1e7d4",
        blue: "#3f72ab",
        leaf: "#6e8b4a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "Comic Sans MS", "cursive"],
      },
      boxShadow: {
        soft: "0 12px 30px -14px rgba(28, 58, 91, 0.28)",
        glow: "0 0 0 1px rgba(63,114,171,0.18), 0 22px 50px -18px rgba(28,58,91,0.40)",
        paper: "0 2px 0 rgba(0,0,0,0.02), 0 14px 28px -16px rgba(28,58,91,0.35)",
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
