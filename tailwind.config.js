/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          600: "#888888",
        },
        raffia: "#E9E3BC",
        tussock: "#BC9C47",
        copperrose: "#9C6571",
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
      keyframes: {
        scrollBounce: {
          "0%, 100%": { opacity: "0", transform: "translateY(0)" },
          "40%": { opacity: "1" },
          "80%": { opacity: "0", transform: "translateY(20px)" },
        },
      },
      animation: {
        scrollBounce: "scrollBounce 2s infinite",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
