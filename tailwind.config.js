/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
}

