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
        sans: [ 'DM Sans']
      },
      colors: {
        olimpus: "#EE7507",
      },
    },
  },
  plugins: [],
}
