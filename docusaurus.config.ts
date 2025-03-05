import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fishbone Aquatics',
  tagline: 'Your Source for Aquatic Knowledge',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site
  url: 'https://Fishbone-Aquatics.github.io',
  // Since this is a GitHub Pages site using a user/org repo, baseUrl should be '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Fishbone-Aquatics', // Your GitHub username or org
  projectName: 'Fishbone-Aquatics.github.io', // Your repository name
  deploymentBranch: 'gh-pages',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Fishbone-Aquatics/Fishbone-Aquatics.github.io/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Fishbone-Aquatics/Fishbone-Aquatics.github.io/tree/main/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Fishbone Aquatics',
      logo: {
        alt: 'Fishbone Aquatics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Fishbone-Aquatics/Fishbone-Aquatics.github.io',
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
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/YOUR_DISCORD_INVITE',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Fishbone-Aquatics/Fishbone-Aquatics.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fishbone Aquatics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
