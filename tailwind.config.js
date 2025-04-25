/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'libs/react/src/**/*.{js,ts,jsx,tsx,css}',
    'libs/react/.storybook/**/*.{js,ts,jsx,tsx,css}',
  ],
  safelist: ['aspect-[1/1]', 'aspect-[16/9]', 'aspect-[4/3]'],
  theme: {
    extend: {
      colors: {
        'brand-main': '#de283b',
        'brand-sub': '#25b1bf',
        'brand-black': '#1a1a1a',
        'brand-white': '#ffffff',
        'brand-base': '#f5f5f5',
        'brand-gray': '#cccccc',
        'primary-main': '#ff3347',
        'primary-sub': '#ff6366',
        'primary-base': '#fdecee',
        'secondary-main': '#06A5F0',
        'secondary-sub': '#4ac6ff',
        'secondary-base': '#e5f6ff',
      },
    },
  },
  plugins: [],
};
