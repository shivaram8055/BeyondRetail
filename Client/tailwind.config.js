/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        'searchHeight':'24px','450px':'450px',
        '500px':'500px',
        '280px':'280px',
        '300px':'300px',
        '292px':'292px',
        '600px':'600px',
        '800px':'800px'
      },
      width:{
        'searchWidth':'243px',
        '280px':'280px',
        '450px':'450px',
        '500px':'500px',
        '600px':'600px',
        '700px':'700px',
        '250px':'250px',
        '330px':'330px',
        '342px':'342px',
      },padding:{
        'navbarPadX':'125px',
        'navbarPadY':'18px',
        '190px':'190px',
        '48px':'48px',
        '148px':'148px',
        '24px':'24px',
        '16px':'16px',
        '20px':'20px',
        '40px':'40px',
      '7px':'7px'      },
      fontFamily:{
        'abc':['Changa', 'sans-serif'],
        'poppins':['Poppins','sans-serif'],
      },
      fontSize:{
        '10px':'10px',
        '8px':'8px',
        '5px':'5px',
        '12px':'12px'
      },
      backgroundImage:{
        'phone':"url('./assets/s23ultra.avif')",
        's23series':"url('./assets/s23 series.webp')",
        'laptops':"url('./assets/watches.jpeg')",
        'buds':"url('./assets/buds.avif')",
      },margin:{
        'navbarMarX':'135px',
        'navbarMarY':'18px',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
};
