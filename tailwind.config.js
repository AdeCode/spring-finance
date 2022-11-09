/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ['group-hover'],
        visibility: ['group-hover'],
      colors:{
        'background': '#F6F8FC',
        'white' : '#FFFFFF',
        'primary_text' : '#263238',
        'gray' : '#E4E4E4',
        'light_green' : '#4BCA69',
        'dark_green' : '#6199DB',
        'light_gray' : '#C4C4C4',
        'label_text' : 'rgba(0, 21, 51, 0.65)',
        'bgsec' : '#4BCA69',
        'blue-bg': '#6741FC',
        'dark_text' : '#1D293F',

      }
    },
  },
  plugins: [],
}
