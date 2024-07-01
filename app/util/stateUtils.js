"use client";

// Helper to establish initial theme based on user preference
export const getUserThemePreference = () => {
  if (typeof window !== "undefined") {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  }
  return "light";
};
