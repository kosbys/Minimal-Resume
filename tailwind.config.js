/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      comfortaa: ["Comfortaa"],
      computerModern: ["ComputerModern"],
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate"],
  },
};
