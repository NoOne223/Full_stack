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
      'xs': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1530px',
    },
    extend: {
      colors: {
        
      },
    },
  },
  plugins: [],
} satisfies Config;
