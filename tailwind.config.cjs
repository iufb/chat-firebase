/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "479.98px",
      md: "767.98px",
      lg: "991.98px",
      xl: "1449.98px",
    },
    extend: {
      animation: {
        bgPulse: "bgFrames 2.5s ease-in-out infinite ",
      },
      keyframes: {
        bgFrames: {
          "0%, 100%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        back: "400%",
      },
    },
  },
  plugins: [],
};
