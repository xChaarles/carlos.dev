/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  darkMode: 'class',
  theme: {
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide') // add this line
  ],
}