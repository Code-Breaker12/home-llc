/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ['Abhaya Libre'],
      },
    },
  },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

