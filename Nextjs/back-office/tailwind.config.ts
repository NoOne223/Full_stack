import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1530px',
    },
    extend: {
      colors: {
        'darkcyan': '#00868B',
        'lightblue': '#BFEFFF',
        'bodybg': '#C6E2FF',
        'button': '#CDB38B',
      },
    },
  },
  plugins: [],
} satisfies Config;
