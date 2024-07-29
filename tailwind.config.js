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
        'gradient-bg': 'linear-gradient(90deg, #0A5364 0%, #094756 17.01%, #0B1B1A 67.51%, #0E110A 90.06%)',
        'gradient-md': 'linear-gradient(180deg, #002B35, #007E9B)',
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