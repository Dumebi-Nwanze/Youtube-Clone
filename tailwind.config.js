/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#181818",
        secondaryColor: "#212121",
        secondaryLight: "#383838",
        mainSecondaryLight: "#717171",
        textLightMain: "#aaaaaa",
        hoverTextColor: "#4d4d4d",
        textMain: "#fff",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
