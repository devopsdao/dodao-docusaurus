// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

import "./plugins/docusaurus-plugin-svgfix/svgfix.ts";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dodao docs',
  tagline: 'Documentation of decentralized marketplace for tech talents, art creators and business professionals.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.dodao.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devopsdao', // Usually your GitHub org/user name.
  projectName: 'dodao-docusaurus', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logos/LBColor-white-eye.png',
      navbar: {
        title: 'Overview',
        logo: {
          alt: 'Dodao Logo',
          src: 'img/logos/LBColor-white-eye.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/devopsdao',
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
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram Announcements',
                href: 'https://t.me/dodao_announcements',
              },
              {
                label: 'Telegram Group',
                href: 'https://t.me/dodao_group',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/d5ZtpxCXZB',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dodaodev',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@dodaodev',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@dodao',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/dodao.dev',
              },
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/dodao',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/devopsdao',
              },
              {
                label: 'Pitch',
                href: 'https://t.me/dodao_pitch',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Dodao.dev . Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

    // plugins: [
    //   "./plugins/docusaurus-plugin-svgfix/index.ts"
    // ]
};

export default config;
