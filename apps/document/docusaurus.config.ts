import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

const config: Config = {
  title: 'Aicody UI',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://attainy.github.io',
  baseUrl: '/aicody-ui/',

  organizationName: 'attainy',
  projectName: 'aicody-ui',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false, // 블로그 기능 비활성화
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Aicody-ui',
      logo: {
        alt: 'Aicody-ui Logo',
        src: 'img/aicody-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'components/accordion',
          position: 'left',
          label: 'Components',
        },
        {
          href: 'https://github.com/aicody/aicody-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Getting Started', to: '/getting-started' },
            { label: 'Components', to: '/components/accordion' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/aicody/aicody-ui' },

            {
              label: 'blog',
              href: 'https://yunicornlab.tistory.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aicody-ui. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    '@docusaurus/plugin-client-redirects', // URL 리다이렉트 지원

    function webpackAliasPlugin() {
      return {
        name: 'custom-alias',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                '@aicody-ui/react': path.resolve(
                  __dirname,
                  '../../libs/react/src'
                ),
              },
            },
          };
        },
      };
    },
  ],
};

export default config;
