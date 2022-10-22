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
      gridTemplateColumns: {
        // Simple 16 column grid
       '3': 'repeat(3, 1fr)',
       '2': '36rem 20rem',
      },
      gridTemplateRows: {
        'layout': 'auto 5fr auto'
      },
      fontFamily: {
        'sans': 'inter, sans-serif'
      },
      animation:{
        'scaileUp': 'scaileUp 0.3s 0s forwards',
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
