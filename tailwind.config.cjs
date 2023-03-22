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
        slideTop: " slidetop 0.2s ease-in-out",
        shakeAnimation:
          "shake  0.82s cubic-bezier(.36,.07,.19,.97) both infinite",
      },
      keyframes: {
        bgFrames: {
          "0%, 100%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(25%)" },
          to: { opacity: 1, transform: "0" },
        },
        slidetop: {
          from: { opacity: 0, transform: "translateY(20%)" },
          to: { opacity: 1, transform: "0" },
        },
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%,80%": { transform: "translate3d(2px, 0, 0)" },
          " 30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
          " 40%, 60%": { transform: "translate3d(4px, 0, 0)" },
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
