/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '50rem'
    },
    extend: {
      fontFamily: {
        'sans': 'inter, sans-serif'
      }
    },
  },
  plugins: [],
}
