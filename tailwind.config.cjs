/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      primary: "#00C3FE",
      "primary-100": "#7FDDFA",
      "primary-300": "#2673F1",
    },
  },
  plugins: [],
};
