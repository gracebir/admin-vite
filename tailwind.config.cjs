/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cl-dark-blue':'#1A2B88',
        'cl-pink':'#3D37F1'
      },
      boxShadow:{
        'nav-box':'0px 27.1019px 67.7548px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
