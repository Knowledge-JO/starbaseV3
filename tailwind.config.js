/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "100%": {
            top: "-360px",
          },
        },

        typing: {
          "40%, 60%": {
            left: "100%",
          },
          "100%": {
            left: "0%",
          },
        },
        blink: {
          "50%": {
            opacity: "0",
          },
        },
      },

      animation: {
        slide_anim: "slide 12s steps(12) infinite",
        typing_anim: "typing 4s infinite",
      },
    },
  },
  plugins: [],
};
