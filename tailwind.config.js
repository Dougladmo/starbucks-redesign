/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      blue: '#D4EAE2',
      babyblue: '#d4e9e2',
      green: '#00623B',
      darkgreen: '#1e3932',
      gray: '#0000008F',
      lightgray: '#e5e5e5',
    },
    fontFamily: {
      Open: ["Open Sans"],
      Manrope: ["Manrope"]
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0px -1px 10px 0px #c5c5c5',
      none: 'none',
    },
    maxWidth: {
      'xs': '10rem',
      'lg': '32rem',
      '1/2': '50%',
      '3/4': '75%',
     },
     extend: {
      backgroundImage: {
        'background-main': "url('./src/assets/background.svg')",
       },
    }
  },
  plugins: [],
}