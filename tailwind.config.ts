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
          skin: {
            backgroundBase: "hsl(var(--color-background-base) / <alpha-value>)",
            backgroundMuted:"hsl(var(--color-background-muted) / <alpha-value>)",
            accent: {
              1: "hsl(var(--color-accent1) / <alpha-value>)",
              2: "hsl(var(--color-accent2) / <alpha-value>)",
            },
            textBase: "hsl(var(--color-text-base) / <alpha-value>)",
            textMuted: "hsl(var(--color-text-muted) / <alpha-value>)",
            textInverted: "hsl(var(--color-text-inverted) / <alpha-value>)",
            editClockAccent: "hsl(var(--color-edit-clock) / <alpha-value>)",
          }
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
