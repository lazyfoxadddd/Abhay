/** @type {import('tailwindcss').Config} */
const shadcnConfig = require("./node_modules/ui/tailwind.config.js");

module.exports = {
  darkMode: ["class"],
  content: [
    "./**/*.{html,js}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      ...shadcnConfig.theme.extend,
      colors: {
        ...shadcnConfig.theme.extend.colors,
        primary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      animation: {
        ...shadcnConfig.theme.extend.animation,
        float: "float 6s ease-in-out infinite",
        swing: "swing 3s ease-in-out infinite",
        twinkle: "twinkle 1.5s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "candy-float": "candy-float 8s ease-in-out infinite",
      },
      keyframes: {
        ...shadcnConfig.theme.extend.keyframes,
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ec4899, 0 0 20px #ec4899, 0 0 25px #ec4899",
          },
          "50%": {
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ec4899, 0 0 40px #ec4899, 0 0 50px #ec4899",
          },
        },
        "candy-float": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-15px) rotate(5deg)" },
          "50%": { transform: "translateY(0) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-5deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
      },
    },
  },
  plugins: [...shadcnConfig.plugins],
};
