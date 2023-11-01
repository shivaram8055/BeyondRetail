/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'searchHeight':'24px',
      },
      width:{
        'searchWidth':'243px',
      },padding:{
        'navbarPadX':'135px',
        'navbarPadY':'40px',
        '190px':'190px',
        '48px':'48px',
        '148px':'148px',
        '24px':'24px',
        '16px':'16px',
        '20px':'20px',
        '40px':'40px',
      '7px':'7px'      },
      fontFamily:{
        'abc':['Changa', 'sans-serif']
      }
    },
  },
  plugins: [],
}

