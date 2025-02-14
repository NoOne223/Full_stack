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
        primary: "#84a59d",
        secondar: "#354f52",
      },
      container: {
        center : true,
        screens: {
          "2xl": "1680px",
        }
      }
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1560px',
    }
  },
  plugins: [],
} satisfies Config;
