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
        'green':'#1db854',
        'dark':'#121212',
        'darkest':'#191414',
        'light':'#282828',
        'lightest':'#838383',
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
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    boxShadow: ['responsive', 'hover', 'focus', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    textDecoration: ['responsive', 'hover', 'focus', 'dark'],
  },
  plugins: [],
}

