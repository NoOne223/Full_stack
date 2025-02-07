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
        
      },
      boxShadow: {
        'inner-custom': 'inset 0 5px 15px 5px rgba(0, 0, 0, 0.1)',
        'custom': '0px 0px 10px 1px',
      },
    },
    container:{
      screens: {
        '2xl': '1650px',
      },
    },
    screens:{
      'sm' : '320px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1440px',
      '2xl' : '1650px',
    },
  },
  plugins: [],
} satisfies Config;
