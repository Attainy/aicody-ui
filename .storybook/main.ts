import type { StorybookConfig } from '@storybook/react-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const config: StorybookConfig = {
  stories: ['./libs/react/src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [react(), nxViteTsPaths()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './libs/react/src/'),
        },
      },
    }),
};

export default config;
