const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');

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
      sourcemap: true,
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
    ],
  }
);
