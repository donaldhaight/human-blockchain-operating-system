// @ts-check
const config = {
  title: 'Human Blockchain',
  tagline: 'Business plan, operating system, and One Prompt commissioning knowledge',
  url: 'https://example.invalid',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'DonaldHaight',
  projectName: 'human-blockchain-okf',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
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
        {to: '/package-index', label: 'Package', position: 'left'},
        {to: '/shared-definitions', label: 'Definitions', position: 'left'},
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
