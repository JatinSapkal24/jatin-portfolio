/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cloudBlue: '#0EA5E9',
        orangeAccent: '#F97316',
        darkBg: '#030712', // Sleek deep dark mode background
        darkCard: 'rgba(17, 24, 39, 0.7)', // Semi-transparent card
        lightBg: '#f8fafc',
        lightCard: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
