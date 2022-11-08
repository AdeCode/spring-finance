/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#F6F8FC',
        'white' : '#FFFFFF',
        'primary_text' : '#263238',
        'gray' : '#E4E4E4',
        'light_green' : '#4BCA69',
        'dark_green' : '#6199DB',
      }
    },
  },
  plugins: [],
}
