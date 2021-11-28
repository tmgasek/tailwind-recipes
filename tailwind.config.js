module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Source Sans Pro'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
