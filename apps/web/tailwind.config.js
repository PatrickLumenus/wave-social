module.exports = {
    purge: [
       './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#0072BB',
          secondary: '#7FB800',
          error: '#ED1C24'
        },
        fontFamily: {
          sans: ['Raleway'],
          serif: ['Raleway'],
          mono: ['Raleway'],
          display: ['Raleway'],
          body: ['Raleway']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }