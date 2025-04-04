/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}', // Docusaurus 파일
    '../libs/react/**/*.{js,jsx,ts,tsx}', // 외부 라이브러리 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
