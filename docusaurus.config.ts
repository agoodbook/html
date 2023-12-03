import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const username: string = "agoodbook";
const repo: string = "html";

const config: Config = {
  title: "AGoodBook",
  tagline: "书山有路勤为径，学海无涯苦作舟",
  favicon: "img/favicon.ico",

  url: `https://agoodbook.github.io/`,
  baseUrl: `/${repo}`,

  organizationName: username,
  projectName: repo,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-CN",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en",
      },
      "zh-CN": {
        label: "中文",
        direction: "ltr",
        htmlLang: "zh-CN",
      },
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${username}/${repo}/tree/main`,
          lastVersion: "current",
          versions: {
            current: {
              label: "HTML5",
              path: "next",
            },
            "4.0.0": {
              label: "HTML4",
              path: "4.0.0",
              banner: "none",
            },
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    versions: {
      "4.0.0": "versioned_docs/version-4.0.0",
      "5.0.0": "docs",
    },
    themes: ["@docusaurus/theme-search-algolia"],
    algolia: {
      appId: "WHMBQSPQOS",
      apiKey: "9f430fb0112fb4bb367bfc56009d9770",
      indexName: "html",
      contextualSearch: true,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "AGoodBook", // 导航上站点名称
      hideOnScroll: true,
      logo: {
        alt: "AGoodBook", //  站点 logo 文字替换
        src: "img/logo.svg", //   站点 logo  链接
      },
      items: [
        {
          to: "docs/next",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        {
          type: "search",
          position: "left",
          className: "custom-search",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: `https://github.com/${username}/${repo}/issues/3526`,
              label: "帮助我们翻译",
            },
          ],
        },
        {
          href: `https://github.com/${username}/${repo}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} AGoodBook.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
