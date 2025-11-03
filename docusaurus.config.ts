import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // presets: [
  //   [
  //     'classic',
  //     {
  //       docs: {
  //         sidebarPath: './sidebars.ts',
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
  //       },
  //       blog: {
  //         showReadingTime: true,
  //         feedOptions: {
  //           type: ['rss', 'atom'],
  //           xslt: true,
  //         },
  //         // Please change this to your repo.
  //         // Remove this to remove the "edit this page" links.
  //         editUrl:
  //           'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
  //         // Useful options to enforce blogging best practices
  //         onInlineTags: 'warn',
  //         onInlineAuthors: 'warn',
  //         onUntruncatedBlogPosts: 'warn',
  //       },
  //       theme: {
  //         customCss: './src/css/custom.css',
  //       },
  //     } satisfies Preset.Options,
  //   ],
  // ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo',
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'GTM-THVM29S',
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi', // plugin id
        docsPluginId: 'classic', // configured for preset-classic
        config: {
          petstore: {
            specPath: 'static/openapi/petstore.yaml',
            proxy: 'https://cors.pan.dev',
            outputDir: 'docs/api/petstore',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
            template: 'static/templates/api.mustache',
            infoTemplate: 'static/templates/info.mustache',
            tagTemplate: 'static/templates/tag.mustache',
            schemaTemplate: 'static/templates/schema.mustache',
            downloadUrl: '/petstore.yaml',
            hideSendButton: false,
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'openapiSidebar',
          position: 'left',
          label: 'API sample',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} seoyoung-dev, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
