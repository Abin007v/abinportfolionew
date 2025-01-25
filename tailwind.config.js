/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backdropBlur: ['responsive'],
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
        },
        clipPath: {
          'polygon': 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
        },
      },
    },
    plugins: [],
    variants: {
      extend: {
        backdropBlur: ['responsive'],
      },
    },
  }