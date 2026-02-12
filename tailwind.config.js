/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ FIX: Only look at HTML/JS files in the main folder. 
  // This avoids scanning node_modules and makes the build instant.
  content: ["./*.html", "./*.js"], 
  theme: {
    extend: {
      colors: {
        navy: '#1B2A41',
        gold: '#C5A059',
        alabaster: '#F9F9F7'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}