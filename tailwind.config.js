/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['var(--font-clash)'],
      },
      screens: {
        'chota': {'max': '350px'},
      }
    },
  },
  plugins: [],
}
