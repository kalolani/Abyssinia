/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        emoji: ["Noto Color Emoji"],
      },
      colors: {
        // Define your custom colors here
        primary: "#072032",
      },
      gradientColorStops: (theme) => ({
        // Add custom gradient stops if needed
        "custom-start": "#FBF7F4",
        "custom-end": "#fbf7f400",
      }),
      fontSize: {
        // Define custom text sizes here
        base: "14px",
      },
    },
  },
  plugins: [],
};
