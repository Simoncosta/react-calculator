/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  darkMode: ['class', 'veigas'],
  theme: {
    extend: {},
    colors: {
      green: colors.green,
      'calculator': {
        100: '#A3E9A4',
        300: '#26F98D',
        DEFAULT: '#64911C',
        600: '#229F5A',
        700: '#1B9131',
      },
      'white': '#FFFFFF'
    },
  },
  plugins: [],
}

