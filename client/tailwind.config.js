/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    zIndex: {
      '100': '1000'
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
       '3': 'repeat(3, 1fr)',
       '2': '36rem 20rem',
      },
      fontFamily: {
        'sans': 'inter, sans-serif'
      }
    },
  },
  plugins: [],
}
