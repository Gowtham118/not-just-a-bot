/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["notosans", ...defaultTheme.fontFamily.sans],
        eightbit: ["eightbit", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        grey: "#1c1d21",
        "light-grey": "#d1d5db",
        violet: "#c351ec",
      },
      screens: {
        mobile: { max: "639px" },
        tablet: { max: "1250px" },
        sm: "640px",
        lg: "1024px",
        xl: "1250px",
        // => @media (min-width: 1120px) { ... }
      },
    },
  },
  plugins: [],
};
