/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust if you have TypeScript files
  ],
  theme: {
    extend: {
      width: {
        35: '35%', // Custom width for 35%
        60: '60%', // Custom width for 60%
      },
    },
  },
  plugins: [],
};
