import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D19",
          900: "#0A1628",
          850: "#0C1B33",
          800: "#0D2149",
          700: "#152E61",
          600: "#1E4080",
        },
        brand: {
          purple: {
            dark: "#581C87",
            DEFAULT: "#6B21A8",
            light: "#7C3AED",
            glow: "#9333EA",
            bright: "#A855F7",
          },
          cyan: {
            dark: "#0891B2",
            DEFAULT: "#06B6D4",
            light: "#22D3EE",
            bright: "#38BDF8",
            neon: "#67E8F9",
          },
          blue: {
            fatec: "#005BAA",
            dark: "#003A70",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-slow": "glow 3s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "tech-grid": "linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px)",
        "tech-radial": "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.08) 40%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
