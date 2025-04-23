// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Document app
    './apps/document/src/**/*.{js,ts,jsx,tsx,mdx}',
    // React library
    './libs/react/src/**/*.{js,ts,jsx,tsx}',
    // Optional: include markdown docs if you use MDX
    './apps/document/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        'brand-main': '#de283b',
        'brand-sub': '#25b1bf',
        'brand-black': '#1a1a1a',
        'brand-white': '#ffffff',
        'brand-base': '#f5f5f5',
        'brand-gray': '#cccccc',

        'primary-main': '#de283b',
        'primary-sub': '#ff6366',
        'secondary-main': '#25b1bf',
        'secondary-sub': '#005461',
      },
    },
  },
  plugins: [],
};
