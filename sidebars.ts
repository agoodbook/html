import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/* 示例
{
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'installation',
        'configuration',
        'playground',
        'typescript-support',
      ],
    },
 */

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "doc",
      id: "semantic-tags",
      label: "语义元素",
    },
    {
      type: "doc",
      id: "started",
      label: "介绍",
    },
    {
      type: "doc",
      id: "guide",
      label: "指南",
    },
    {
      type: "category",
      label: "food",
      link: {
        type: "generated-index",
        title: "Docusaurus Guides",
      },
      items: ["food/apple", "food/banner"],
    },
  ],
};

export default sidebars;
