/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  darkMode: "class",
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
      },
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        "primary-light": colors.amber[300],
        "primary-dark": colors.yellow[600],
        "primary-bg": colors.zinc[50],
        "secondary-bg": colors.white,
        title: "hsl(0 ,0, 20%)",
        "title-dark": "black",
        subTitle: "#515151",
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
