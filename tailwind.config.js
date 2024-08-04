/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        colasta: ["colasta", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        emoji: ["Noto Color Emoji"],
      },
      colors: {
        // Define your custom colors here
        primary: "#072032",
        secondary: "#5c6972",
        tertiary: "#fff",
        "btn-bg-main": "#ff845d",
      },
      gradientColorStops: (theme) => ({
        // Add custom gradient stops if needed
        "custom-start": "#FBF7F4",
        "custom-end": "#fbf7f400",
        start: "#FEE7C4",
        end: "#BEE5E4",
      }),
      fontSize: {
        // Define custom text sizes here
        base: "14px",
      },
      transform: {
        "rotate-x-180": "rotateX(180deg)",
      },
      perspective: {
        1000: "1000px",
      },
      animation: {
        "wc-y-anim": "wc-y-anim 5s ease-in-out infinite alternate",
        cube: "cube 3s ease-in-out infinite alternate",
        "bubble-one": "bubble-one 2s ease-in-out infinite alternate",
        "bubble-two": "bubble-two 2s ease infinite alternate",
      },

      keyframes: {
        "wc-y-anim": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
        cube: {
          "0%": { transform: "translateY(7px)" },
          "100%": { transform: "translateY(35px)" },
        },
        "bubble-one": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(50px)" },
        },
        "bubble-two": {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
    },
  },
  plugins: [],
};
