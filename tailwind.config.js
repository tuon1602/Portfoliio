/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        colors:{
          'blue-cus':"#1B0FEF",
          'pink1-cus':"#FED7FF",
          'pink2-cus':"#FFEBFF"
        },
        screens:{
          "xs":{'min':'320px',"max":"599px"},
          "md":{"min":"600px","max":"1024px"},
          "lg":"1025px"
        }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}