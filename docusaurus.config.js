// @ts-check
const config = {
  title: 'Human Blockchain',
  tagline: 'Business plan, operating system, and One Prompt commissioning knowledge',
  url: 'https://donaldhaight.github.io',
  baseUrl: '/human-blockchain-operating-system/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  organizationName: 'donaldhaight',
  projectName: 'human-blockchain-operating-system',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {customCss: require.resolve('./src/css/custom.css')},
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Human Blockchain',
      items: [
        {to: '/start-here/package-index', label: 'Package', position: 'left'},
        {to: '/start-here/shared-definitions', label: 'Definitions', position: 'left'},
        {
          href: 'https://github.com/donaldhaight/human-blockchain-operating-system',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Human Blockchain working knowledge — ${new Date().getFullYear()}`,
    },
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
  },
};

module.exports = config;
