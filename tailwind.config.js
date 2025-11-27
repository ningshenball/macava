/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50: "#eff6ff", 500: "#3b82f6" },
        accent: { 50: "#f0fdf4", 500: "#22c55e" },
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typewriter: {
          "0%, 90%, 100%": { width: "0" },
          "10%, 80%": { width: "100%" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "typewriter": "typewriter 2s steps(40) infinite",
        "pulse-soft": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
