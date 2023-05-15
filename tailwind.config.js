/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    margin: {
      "101": "101px",
      "200": "200px",
      '47':"47px"
    },
    padding: {
      "97": "97px",
      "23": "23px"
    },
    extend: {
      colors: {
        black: "#232323",
        gray: "#626262",
        lightB: '#000000'
      },
      backgroundColor: {
        'cream': '#EAEAEA',
      },
      width: {
        '20': '200px',
        '1520': '1520px',
        '513': '513px'
      },
      height: {
        '50': '50px'
      }
    },
  },
  plugins: [],
}
