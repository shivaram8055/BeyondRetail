/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        searchHeight: "24px",
      },
      width: {
        searchWidth: "243px",
      },
      padding: {
        navbarPadX: "135px",
        navbarPadY: "18px",
        "190px": "190px",
        "48px": "48px",
        "148px": "148px",
        "24px": "24px",
        "60px": "60px",
        "30px": "30px",
        "40px": "40px",
        "7px": "7px",
      },
      fontFamily: {
        abc: ["Changa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
