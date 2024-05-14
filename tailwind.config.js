/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#2D3B87',
        edge: '#E0E3EE',
        bgColor: '#F4F5F9',
        secondaryColor: '#616CA5'
      }
    },
  },
  plugins: [],
}

