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
      label: "新增元素",
    },
    {
      type: "doc",
      id: "canvas",
      label: "Canvas",
    },
  ],
};

export default sidebars;
