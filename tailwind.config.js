  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
      colors: {
        textPrimary: '#474747',
        textSecondary: '#474747',
        black:"#0000",
        white:"#ffff",
        primaryColor:'#100E86',
        darkPrimaryColor:"#0d0c6e",
        dividerBg:"#474747",
        lightGray:"#ECECEC",
      },
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }