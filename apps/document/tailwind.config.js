// apps/document/tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}', // Docusaurus src
    '../../libs/react/src/**/*.{js,jsx,ts,tsx}', // monorepo lib
    '../../node_modules/@aicody-ui/react/**/*.{js,jsx,ts,tsx}', // dist 버전
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
