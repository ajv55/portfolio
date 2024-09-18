import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1C1E24", // Dark slate background
        foreground: "#E0E0E0", // Light grey for text and elements
        primary: {
          DEFAULT: "#34495E", // Muted Slate Blue (cool, modern)
          light: "#5D6D7E",   // Lighter cool blue-grey tone
          dark: "#2A3A45",    // Darker slate, slightly greenish
        },
        secondary: {
          DEFAULT: "#6A1B9A", // Deep Purple (vibrant accent)
          light: "#AB47BC",   // Light Purple (softer accents)
          dark: "#4A148C",    // Dark Purple (strong contrast)
        },
        accent: {
          DEFAULT: "#6BFFB3", // Soft Mint Green (refreshing highlight)
          light: "#8DFFC7",   // Lighter mint green (soft highlight)
          dark: "#44E09F",    // Darker mint green (subtle contrast)
        },
        neutral: {
          light: "#E0E0E0",   // Light grey (foreground text)
          dark: "#1C1E24",    // Dark slate background
        },
        text: {
          primary: "#F0F0F0", // Off-white for primary text
          secondary: "#B0B0B0", // Muted grey for secondary text
          accent: "#FF6B6B",  // Coral pink for accentuated text (like buttons)
        },
      },
    },
  },
  plugins: [],
};

export default config;

