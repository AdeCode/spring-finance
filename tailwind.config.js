/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
        'text_blue': '#7B61FF',
        'text_green': '#55BA6A',
        'primary_text' : '#263238',
        'gray' : '#E4E4E4',
        'light_green' : '#4BCA69',
        'dark_green' : '#6199DB',
        'light_gray' : '#C4C4C4',
        'label_text' : 'rgba(0, 21, 51, 0.65)',
        'bgsec' : '#4BCA69',
        'blue-bg': '#6741FC',
        'dark_text' : '#1D293F',
        'card' : 'rgba(103, 65, 252, 0.04)',
        'how_p' : 'rgba(38, 50, 56, 0.6)',
        'st_text' : '#7C8087',
        'placeholder' : '#8C97AC',
        'bg_light' : '#F0F1FC',
        'input_text' : '#2A3342',
        'label' : '#333F51',
        'app_bar' : '#E5E5E5',
        'bg_dark' : '#262626',
      },
      backgroundImage: {
        'mobileBg': "url('./images/institution/BG-mobile.png')",
        'desktopBg': "url('./images/institution/bannerBG.png')",
        'aboutBG' : "url('./images/about/aboutBG-banner.png')",
        'aboutMB' : "url('./images/about/aboutMB-banner.png')",
        'purpleBG' : "url('./images/about/purple_bg.png')",
        'purpleMB' : "url('./images/about/purpleMB.png')",
        'institute' : "url('./images/institution/BGinstitute.png')",
        'aboutBtmBG' : "url('./images/about/aboutBG.png')",
        'comingBG' : "url('./images/coming.png')",

      }
    },
    fontFamily: {
      'Gilroy': ['Gilroy'],
      'Playfair' : ['Playfair Display', 'serif'],
    }
  },
  plugins: [],
}
