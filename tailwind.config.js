/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'cta-bounce': 'ctaBounce 2s infinite',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite',
        'reverse-pulse': 'reversePulse 2s ease-in-out infinite',
        'slide': 'slide 30s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ctaBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        reversePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        }
      },
      fontFamily: {
        cincel: ['Cincel', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        primary: "#EE7507",
        secondary: "#1A1A1A",
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
