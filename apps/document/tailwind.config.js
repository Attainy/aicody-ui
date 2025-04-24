/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.config.js')],

  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    '../../libs/react/src/**/*.{js,ts,jsx,tsx}',
    '../../docs/**/*.mdx',
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
