/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '150': '450px',
      },
      width:{
        '300':'300px'
      }
    },
  },
  plugins: [],
}