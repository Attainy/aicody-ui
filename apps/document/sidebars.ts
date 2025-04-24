/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/intro',
        'introduction/philosophy',
        'introduction/monorepo',
        'introduction/features',
        'introduction/release-notes',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/index',
        'getting-started/installation',
        'getting-started/tailwind-setup',
        'getting-started/basic-usage',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/accordion',
        'components/button',
        'components/alert-dialog',
        'components/aspect-ratio',
        'components/checkbox',
        'components/collapsible',
        'components/command',
        'components/context-menu',
        'components/dialog',
        'components/profile-photo',
        'components/switch',
      ],
    },
  ],
};

module.exports = sidebars;
