/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#9c0e0e',
      secondary: '#E42313',
      tertiary: {
        DEFAULT: '#FFC300',
        40: '#FDF1D6'
      },
      black: {
        DEFAULT: '#2a2a2d',
        5: '#FCFCFC',
        10: '#E9E9EB',
        40: '#A4A5AC',
        60: '#838487',
        70: '#605756',
        80: '#5C5D5B'
      },
      white: '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}
