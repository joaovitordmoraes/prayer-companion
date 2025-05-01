/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto_400Regular', 'sans-serif'],
        sansBold: ['Roboto_700Bold', 'sans-serif'],
      },
      colors: {
        background: '#242626',  
      },
    },
  },
  plugins: [],
} 