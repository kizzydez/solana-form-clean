/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        googlePurple: '#8e24aa',
        googleGray: '#5f6368',
        googleRed: '#d93025',
      },
    },
  },
  plugins: [],
}
