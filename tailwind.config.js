/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'search': '3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62)',
      }
    }
  },
  plugins: [],
}