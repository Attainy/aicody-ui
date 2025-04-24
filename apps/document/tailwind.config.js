/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.config.js')],
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    '../../libs/react/src/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{md,mdx}',
  ],

  theme: {
    extend: {
      fontSize: {
        h1: ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }], // 36px
        h2: ['1.5rem', { lineHeight: '2.25rem', fontWeight: '600' }], // 30px
        h3: ['1.25rem', { lineHeight: '1rem', fontWeight: '500' }], // 24px
      },
      colors: {
        heading: '#1a1a1a',
        'heading-dark': '#e5e5e5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

    function ({ addBase }) {
      addBase({
        h1: {
          '@apply text-h1 text-heading dark:text-brand-white': {},
        },
        h2: {
          '@apply text-h2 text-heading dark:text-brand-white': {},
        },
        h3: {
          '@apply text-h3 text-heading dark:text-brand-white': {},
        },
      });
    },
  ],
};
