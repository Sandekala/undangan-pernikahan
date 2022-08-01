/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Amiri: ['Amiri', 'serif'],
      Cormorant: ['Cormorant SC', 'serif'],
      GreatVibes: ['Great Vibes', 'serif'],
    },
    extend: {
      colors: {
        primary: '#3e2511',
        secondary: '#f2e5dc',
        dark2: '#1b1b1b',
        textDark: '#717171',
      },
    },
  },
  plugins: [],
};
