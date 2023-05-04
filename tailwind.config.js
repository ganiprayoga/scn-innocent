/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#9c0e0e',
      secondary: '#8B79B1',
      tertiary: '#FFC300',
      black: {
        DEFAULT: '#2a2a2d',
        10: '#E9E9EB',
        40: '#A4A5AC',
        60: '#838487',
        80: '#5C5D5B'
      },
      white: '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}
