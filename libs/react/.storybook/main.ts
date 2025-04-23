import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (viteConfig) => {
    const existingPlugins = viteConfig.plugins ?? [];

    viteConfig.css = {
      ...(viteConfig.css ?? {}),
      postcss: {
        plugins: [
          require('@tailwindcss/postcss')({
            config: path.resolve(__dirname, '../../../tailwind.config.js'),
          }),
          require('autoprefixer')(),
        ],
      },
    };

    return {
      ...viteConfig,
      plugins: existingPlugins,
    };
  },
};

export default config;
