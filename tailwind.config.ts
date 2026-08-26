import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: "#f6efe8",
          100: "#ecdfd2",
          200: "#d8bda3",
          300: "#c19a73",
          400: "#a8734a",
          500: "#8a5630",
          600: "#6f4022",
          700: "#572f1b",
          800: "#3f2214",
          900: "#2b160c",
          DEFAULT: "#2b160c",
        },
        cream: {
          50: "#fffdf8",
          100: "#fcf6ea",
          200: "#f7ecd6",
          300: "#f0debd",
          DEFAULT: "#f7ecd6",
        },
        terracotta: {
          400: "#e08654",
          500: "#cf6a3a",
          600: "#b8512a",
          700: "#9c3f22",
          DEFAULT: "#cf6a3a",
        },
        tomato: "#d84a33",
        sage: {
          100: "#eef2e9",
          200: "#dbe3d2",
          300: "#c0cdb1",
          400: "#9bb089",
          500: "#7c926a",
          600: "#61764f",
          700: "#4a5a3c",
          DEFAULT: "#9bb089",
        },
        butter: {
          200: "#fbedbb",
          300: "#f6dd8a",
          400: "#eec65a",
          500: "#e0a93a",
          600: "#c1871f",
          DEFAULT: "#f6dd8a",
        },
        ink: "#1a130f",
        paper: "#fffdf8",
      },
      fontFamily: {
        sans: [
          "var(--font-dm-sans)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "var(--font-sora)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        huge: "0.28em",
        wideish: "0.14em",
      },
      boxShadow: {
        soft: "0 12px 40px -18px rgba(43, 22, 12, 0.28)",
        lift: "0 24px 60px -28px rgba(43, 22, 12, 0.38)",
        card: "0 36px 90px -48px rgba(43, 22, 12, 0.55)",
        float: "0 40px 90px -45px rgba(43, 22, 12, 0.5)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
        glass: "0 8px 30px -12px rgba(43, 22, 12, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        shell: "1440px",
        "shell-wide": "1600px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 55s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
