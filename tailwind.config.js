/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // lato: ['Lato', 'sans-serif', 'Cincel'],
        cincel: [ 'Cincel'],
        sans: [ 'DM Sans'],
        bebas: [ 'Bebas Neue']
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
