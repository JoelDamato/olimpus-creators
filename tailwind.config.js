/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cincel: ['Cincel', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        olimpus: "#EE7507",
        olimpusBlue: "#025570",
        successGreen: "#0d802a",
        red: "#ff0000"
      },
    },
  },
  plugins: [],
}
