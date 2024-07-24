/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        'black': '#000',
        'whatsapp': '#25d366',
      },
      colorScheme: {
      },
      backgroundImage: {
        'login': "url('/images/login-bg.png')",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
  ]
}



/*
'btnBlue': '#162778',
'darkBlue': '#0a1236',
*/