/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Add this to ensure proper hot reloading
future: {
    hoverOnlyWhenSupported: true
  },
  
plugins: [],
  
presets: [require('nativewind/preset')],
  
  theme: {
    extend: {}
  }
};
