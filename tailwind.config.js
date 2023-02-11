/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "supercombo": "url('/images/supercombo.jpg')",
      },
      backgroundPosition: {
        "center-down-2": "center -3rem",
        "center-down-16": "center -16rem",
      },
      backgroundColor: {
        "tiktok": "#39006a",
      },
      boxShadow: {
        "inner-header": "inset 0 0 13vh 10vh rgba(0, 0, 0, 0.7)",
      },
      fontFamily: {
        "header": ["'Montserrat', sans-serif"],
      },
      height: {
        "104": "26rem",
      },
      screens: {
        "2xs": "320px",
        "sx": "480px",
      },
      scale: {
        "115": "1.15",
      },
      padding: {
        "1.5": "0.375rem",
      },
    },
  },
  plugins: [],
}
