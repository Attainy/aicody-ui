const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');
const postcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react', 'react-dom'],
    format: ['iife'],
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    outputFileName: 'bundle.js',
  },
  {
    output: {
      name: 'AicodyUI',
    },
    plugins: [
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000,
      }),
      postcss({
        plugins: [tailwindcss('./tailwind.config.js'), autoprefixer()],
        extract: true,
        minimize: true,
      }),
    ],
  }
);
