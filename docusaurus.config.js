const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/* External URLs */
const externalUrl = {
  editUrl: 'https://github.com/Lissy93/dashy/edit/gh-pages/docs/',
  licenseUrl: 'https://github.com/Lissy93/dashy/blob/master/LICENSE',
  aliciaUrl: 'https://aliciasykes.com',
  dashyUrl: 'https://dashy.to',
};

const footerText = `<a href="${externalUrl.dashyUrl}">Dashy</a> - The Self-Hosted Dashboard for your Homelab`
  + `<br />License under <a href="${externalUrl.licenseUrl}">MIT</a>. `
  + `Copyright © ${new Date().getFullYear()} <a href="${externalUrl.aliciaUrl}">Alicia Sykes</a>`;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dashy',
  tagline: 'The Ultimate Homepage for your Homelab',
  url: externalUrl.dashyUrl,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lissy93', // Usually your GitHub org/user name.
  projectName: 'dashy', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    navbar: {
      title: 'Dashy',
      logo: {
        alt: 'Dashy Logo',
        src: 'img/dashy.png',
      },
      items: [

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Intro',
          items: [
            { label: 'GitHub', to: 'https://github.com/lissy93/dashy' },
            { label: 'Live Demo', to: 'https://demo.dashy.to' },
            { label: 'Quick Start', to: '/docs/quick-start' },
            { label: 'Documentation', to: '/docs' },
          ],
        },
        {
          title: 'Setup Guide',
          items: [
            { label: 'Deploying', to: '/docs/deployment' },
            { label: 'Configuring', to: '/docs/configuring' },
            { label: 'Management', to: '/docs/management' },
            { label: 'Troubleshooting', to: '/docs/troubleshooting' },
          ],
        },
        {
          title: 'Feature Docs Pt 1',
          items: [
            { label: 'Authentication', to: '/docs/deployment' },
            { label: 'Alternate Views', to: '/docs/configuring' },
            { label: 'Backup & Restore', to: '/docs/management' },
            { label: 'Icons', to: '/docs/icons' },
          ],
        },
        {
          title: 'Feature Docs Pt 2',
          items: [
            { label: 'Language Switching', to: '/docs/multi-language-support' },
            { label: 'Status Indicators', to: '/docs/status-indicators' },
            { label: 'Searching  & Shortcuts', to: '/docs/searching' },
            { label: 'Theming', to: '/docs/theming' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Developing', to: '/docs/deployment' },
            { label: 'Development Guides', to: '/docs/configuring' },
            { label: 'Contributing', to: '/docs/management' },
            { label: 'Showcase', to: '/docs/showcase' },
            { label: 'Credits', to: '/docs/credits' },
          ],
        },
        {
          title: 'Misc',
          items: [
            { label: 'Privacy & Security', to: '/docs/deployment' },
            { label: 'License', to: '/docs/configuring' },
            { label: 'Legal', to: '/docs/management' },
            { label: 'Code of Conduct', to: '/docs/code-of-conduct' },
            { label: 'Changelog', to: '/docs/changelog' },
          ],
        },
      ],
      copyright: footerText,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: externalUrl.editUrl,
        },
        theme: {
          customCss: [
            require.resolve('./src/styles/Colors.scss'),
            require.resolve('./src/styles/Typography.scss'),
            require.resolve('./src/styles/custom.scss'),
          ]
        },
      },
    ],
  ],
};