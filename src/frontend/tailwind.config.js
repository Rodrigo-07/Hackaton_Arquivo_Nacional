const tailwindcss = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "main-red": "#D00737",
        "bage-bg": "#E9E9E9",
        "font-color": "#444548"
      }
    },
  },
  plugins: [],
}

