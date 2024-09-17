/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        green: 'hsl(120, 50%, 25%)',
        red: 'hsl(0, 100%, 50%)',
        blue: 'hsl(210, 50%, 30%)',
        black: 'hsl(0, 0%, 0%)',
        pink: 'hsl(330, 100%, 50%)',
        lightPink : 'hsl(350, 100%, 80%)',
      }
    },
  },
  plugins: [],
}

