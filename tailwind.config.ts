import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': "300px",
      'sm': "480px",
      'md': "768px",
      'lg': "976px",
      'xl': "1440px",
    },
    extend: {
      colors: {
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        txt: "hsl(var(--color-txt) / <alpha-value>)",
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
      },
      backgroundImage: {
        // Define radial gradient
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        // Define conic gradient
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
