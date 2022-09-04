module.exports = {
  mode:'jit',
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    maxHeight: {
      '0': '0',
     '1/4': '25%',
     '1/2': '50%',
     '3/4': '75%',
     'full': '100%',
    }
  },
  plugins: [],
}
