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
        primary: "#EE7507",
        secondary: "#025570",
        successGreen: "#0d802a",
        red: "#ff0000",
        grey: "#1A1A1A",
        text: {
          primary: "#FFFFFF"
        }
      },
    },
  },
  plugins: [],
}
