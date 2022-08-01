/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors:{
    //   'color1':'#c3ced4'
    // },
    // h:{
    //   'RobotFace1': '40rem'
    // }
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    },
  },
  plugins: [],
}
