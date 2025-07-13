/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: colors.amber[500],
        "primary-dark": colors.yellow[600],
        "primary-bg": colors.zinc[50],
        "secondary-bg": colors.white,
        title: "hsl(0 ,0, 20%)",
        "title-dark": "black",
        "txt-col": "#2684ce",
      },
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        top: "0px -5px 7  px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
