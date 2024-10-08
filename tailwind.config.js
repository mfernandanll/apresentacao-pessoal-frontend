/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        draw: 'draw 30s linear alternate infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        draw: {
          '0%': { 'stroke-dashoffset': 0 },
          '100%': { 'stroke-dashoffset': 1000 },
        }
      },
      animationDelay: {
        '1s': '1s',
        '2s': '2s',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
    colors: {
      "bg-primary": "#201E43",
      "bg-secondary": "#134B70",
      "bg-text": "#508C9B",
      "bg-card": "#b0d1e7",
      "bg-card-hover": "#82c0e9",
      "bg-white": "#EEEEEE",
      transparent: 'transparent',
    }
  },
  plugins: [
    plugin(
      function ({ addUtilities }) {
        const newUtilities = {
          '.delay-1s': {
            'animation-delay': '1s',
          },
          '.duration-40': {
            'animation-duration': '40s'
          }
        };  
        addUtilities(newUtilities);
      }
    ),
  ],
}

