/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       "yellowcolor":'#EDA802',
        "blue-primary":"#132845"
      },
    },
  },
  plugins: [],
  darkMode: "class",
};