module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight:{
        '0':'0'
      },
      colors: {
        'color-primary': '#52f8cb',
        'color-secondary': '#f83a45',
      },
    },
    fontFamily:{
      irs:['irs']
    },

  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],

    },
  },
  plugins: [],
}

