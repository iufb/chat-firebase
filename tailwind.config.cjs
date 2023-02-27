/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xm: "349.98px",
      sm: "479.98px",
      md: "767.98px",
      lg: "991.98px",
      xl: "1449.98px",
    },
    extend: {
      animation: {
        bgPulse: "bgFrames 2.5s ease-in-out infinite ",
        slideRight: "slideright 1s ease-in-out",
      },
      keyframes: {
        bgFrames: {
          "0%, 100%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20%)" },
          to: { opacity: 1, transform: "0" },
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
