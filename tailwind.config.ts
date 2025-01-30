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
            backgroundBase: "var(--color-background-base)",
            backgroundMuted:"var(--color-background-muted)",
            accent: {
              1: "var(--color-accent1)",
              2: "var(--color-accent2)",
            },
            textBase: "var(--color-text-base)",
            textMuted: "var(--color-text-muted)",
            textInverted: "var(--color-text-inverted)",
            editClockAccent: "var(--color-edit-clock)",
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
