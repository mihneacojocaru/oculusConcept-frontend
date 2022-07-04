/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'fc-blueDarkHeader': '#293d50',
        'fc-dark': '#1b1b1b',
        'fc-darkGray': '#444',
        'fc-lightGray': '#a0a0a1',
        blueAccent: '#027bff',
        blueAccentLight: '#007bff',
        blueMenuFont: '#08468b',
        blueLogo: '#00366f',
        blueSectionLight: '#ecf5ff',
        blueMain: '#17409e',
        Pink: '#ff689b',
        Yellow: '#e8bf04',
        Turquoise: '#40cdc7',
        Green: '#40cf2e',
        Blue: '#40cdc7',
      },
    },
  },
  plugins: [],
};
