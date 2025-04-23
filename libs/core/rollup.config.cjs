const { withNx } = require('@nx/rollup/with-nx');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', 'cjs'],
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  {
    plugins: [resolve()],
    output: {
      entryFileNames: ({ format, name }) =>
        format === 'cjs' ? `${name}.cjs.js` : `${name}.js`,
    },
  }
);
