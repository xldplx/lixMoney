/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'half-black': '0px 0px 20px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

