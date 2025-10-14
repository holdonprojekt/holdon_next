import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          600: "#888888",
        },
        raffia: "#E9E3BC",
        tussock: "#BC9C47",
        shakespeare: "#4BA2CA",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        accent: ["var(--font-cookie)", "cursive"],
      },
      boxShadow: {
        header: "0 10px 40px rgba(0, 0, 0, 0.08)",
      },
    },
  },
};

export default config;
