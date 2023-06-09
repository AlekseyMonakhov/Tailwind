/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'media',
  darkMode: 'class',
  content: ['*'],
  theme: {
    extend: {},
    screens: {
      sm: '450px',
      lg: '1040px',
    },
    fontFamily: {
      julee: ['Julee', 'cursive'],
    },
  },
  plugins: [],
};
