/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "230%": "230%",
      16: "4rem",
    },
    extend: {
      gridTemplateColumns: {
        "custom-layout": "1fr 0.5fr 1fr 1fr",
        tablet: "1fr 0.5fr 1fr",
      },

      backgroundImage: {
        "footer-image": "url('./assets/images/footer-bg.png')",
        "car-image": "url('./assets/images/car-1.png')",
        "bike-image": "url('./assets/images/bike.png')",
        "basketball-image": "url('./assets/images/basketball.jpg')",
      },
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
        car: "car 22s linear infinite",
        bike: "bike 30s linear infinite",
        "bubble-one": "bubble-one 2s ease-in-out infinite alternate",
        "bubble-two": "bubble-two 3s ease infinite alternate",
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
        car: {
          "0%": { left: "-25%" },
          "100%": { left: "100%" },
        },
        bike: {
          "0%": { left: "-25%" },
          "100%": { left: "100%" },
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
    screens: {
      phone: "320px",
      // => @media (min-width: 640px) { ... }
      mdphone: "400px",
      ptab: "500px",
      mtab: "650px",
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      btablet: "850px",

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1200px",
      // => @media (min-width: 1280px) { ... }

      bigdesktop: "1400px",
    },
  },
  plugins: [],
};
