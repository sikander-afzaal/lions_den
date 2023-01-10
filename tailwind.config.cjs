const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#C48A61",
        brown: "#CFA787",
        lightBrown: "#DCC8B5",
      },
      backgroundImage: {
        brownGr:
          "radial-gradient(50% 50% at 51.32% 50%, rgba(207, 167, 135, 0.4) 0%, rgba(196, 138, 97, 0.4) 100%)",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
