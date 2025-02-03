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
        "primary-color": "#34a0a4",
        "secondary-color": "#669bbc",
        "fade-black": "rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        'custom-1' : '0px 0px 5px rgba(0, 0, 0, 0.5)',
      },
    },
    container:{
      screens: {
        "2xl": "1536px",
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    }
  },
  plugins: [],
} satisfies Config;
