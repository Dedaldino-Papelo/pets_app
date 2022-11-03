/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    zIndex: {
      '1000': '1000',
      '100': '100'
    },
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
       '3': 'repeat(3, 1fr)',
       '2': '36rem 22.75rem',
      },
      gridTemplateRows: {
        'layout': 'auto 5fr auto'
      },
      fontFamily: {
        'sans': 'inter, sans-serif'
      },
      animation:{
        'scaileUp': 'scaileUp 0.4s forwards',
      },
      keyframes: {
        scaileUp: {
          '100%': { transform: 'scale(1)'},
        }
      },
    },
  },
  plugins: [],
}
