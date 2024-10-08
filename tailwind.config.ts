module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        txt: "hsl(var(--color-txt) / <alpha-value>)",
        cmp_bkg:"hsl(var(--color-cmp-bkg) / <alpha-value>)",
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        editClockColor : "hsl(var(--color-edit-clock) / <alpha-value>)",
      },
      backgroundImage: {
        // // Define background images for dark theme
        // "editClockIcon-dark-on": `url(${darkOnIcon})`,
        // "editClockIcon-dark-off": `url(${darkOffIcon})`,

        // // Define background images for light theme
        // "editClockIcon-light-on": `url(${lightOnIcon})`,
        // "editClockIcon-light-off": `url(${lightOffIcon})`,
      },
    },
  },
  plugins: [],
};
