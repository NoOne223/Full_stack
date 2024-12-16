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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color-1': "#469d89",
        'color-2': "#14746f",
        // background: "var(--background)",
      },
    },
    container:{
      screens: {
        '2xl': '1536px',
      },
    },
    screens: {
      sm: '320px',
      '3xl': '1920px',
    },
  },
  plugins: [],
} satisfies Config;
