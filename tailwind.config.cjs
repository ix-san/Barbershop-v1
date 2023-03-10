/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'barbershop-color': '#9C9524',
        'barbershop-color-blue': '#1f5d5e',
        'barbershop-color-brown': '#9C5924',
      },
      fontFamily:{
        'abril': ['"Abril Fatface"', 'cursive'],
        'caveat': ['"Caveat"', 'cursive'],
        'courgette': ['"Courgette"', 'cursive'],
        'crimson': ['"Crimson Text"', 'serif'],
        'dm-serif': ['"DM Serif Display"', 'serif'],
        'greatv': ['"Great Vibes"', 'cursive'],
        'lobster2': ['"Lobster Two"', 'cursive'],
        'pt-serif': ['"PT Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}