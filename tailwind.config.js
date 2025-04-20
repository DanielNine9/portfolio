/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // blue-400
          dark: '#3b82f6',  // blue-500
        },
        secondary: {
          light: '#a855f7', // purple-500
          dark: '#9333ea',  // purple-600
        },
        accent: {
          light: '#fbbf24', // amber-400
          dark: '#f59e0b',  // amber-500
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}