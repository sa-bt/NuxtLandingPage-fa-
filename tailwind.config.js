module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight:{
        '0':'0'
      },
      colors: {
        green: '#59981A',
        'green-yellow': '#ECF87F',
        'green-lime': '#81B622',
        'green-olive': '#3D550C',
      },
    },
    fontFamily:{
      irs:['irs']
    }
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],

    },
  },
  plugins: [],
}
