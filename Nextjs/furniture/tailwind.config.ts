import type { Config } from "tailwindcss";

const config: Config = {
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
      'xl': '1536px',
    },
    extend: {
      colors: {
        'header-color': '#EECFA1',
        'title': '#F4A460',
      },
      boxShadow:{
        'bottom': '0px 0px 10px 0px black',
        'side': '15px 15px 5px 0px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
