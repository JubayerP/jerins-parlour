/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 4px 80px rgba(0, 0, 0, 0.1)',
      }
    },
    colors: {
      primary: '#F73E7B',
      secondary: '#FFF8F5',
      accent: '#111430'
    }
  },
  plugins: [],
}
