import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: "#d4a373",
        secondarycolor: "#ccd5ae",
      },
    },
    container: {
      screens:{
        'xl' : '1560px'
      }
    },
    screens:{
      'sm': '320px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1560px',
      '2xl': '2040px',
    },
  },
  plugins: [],
} satisfies Config;
