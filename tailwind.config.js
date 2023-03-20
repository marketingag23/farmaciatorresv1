/** @type {import('tailwindcss').Config} */
const forms = require("@tailwindcss/forms");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        "401px": "25.063",
      },
      fontFamily: {
        sans: ["var(--font-mont)"],
      },
      colors: {
        bluet: "#0F51FA",
        pumpkin: "#FC7822",
        "auroMetal: ": "#637381",
        maastricht: "#091535",
        grayMain: "#D9D9D9",
      },
      spacing: {
        13: "3rem",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [forms],
};
