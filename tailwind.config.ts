import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'blue': '#0079FF',
      'medium-grey': '#697C9A',
      'blue-grey': '#4B6A9B',
      'dark-grey': '#2B3442',
      'light-grey': '#F6F8FF',
      'almost-white': '#FEFEFE',
      'white': '#FFFFFF',
      'almost-black': '#141D2F',
      'very-dark-grey': '#1E2A47'
    }
  },
  plugins: [],
};
export default config;
