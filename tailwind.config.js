/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'half-black': '0px 0px 40px rgba(0, 0, 0, 0.50)',
      }
    },
  },
  plugins: [],
}

