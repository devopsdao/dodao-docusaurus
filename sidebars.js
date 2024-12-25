/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig[]} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started with Dodao',
        description: 'Learn how to get started with the Dodao platform',
        keywords: ['getting started', 'introduction', 'overview'],
      },
      items: [
        'intro',
        'getting-started/quick-start',
        'how-dodao-works',
        'current-status',
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      link: {
        type: 'generated-index',
        title: 'User Guides',
        description: 'Detailed guides for different user roles',
        keywords: ['guides', 'tutorials', 'how-to'],
      },
      items: [
        {
          type: 'category',
          label: 'Performer Guide',
          items: ['guides/performer/getting-started'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      link: {
        type: 'generated-index',
        title: 'Technical Documentation',
        description: 'Technical details and architecture documentation',
        keywords: ['technical', 'architecture', 'smart contracts'],
      },
      items: [
        'technical/architecture-overview',
        'technical/cross-chain-infrastructure',
        'smart-contract',
        'diamond-hld-diagram',
        'security-and-trust',
        'approach-to-scalability',
      ],
    },
    {
      type: 'category',
      label: 'Community Programs',
      link: {
        type: 'generated-index',
        title: 'Community Programs',
        description: 'Learn about our community programs and how to participate',
        keywords: ['community', 'programs', 'participation'],
      },
      items: [
        'community-programs/developer-program',
        'community-programs/arts-creator-program',
        'community-programs/ambassador-program',
        'community-programs/tester-program',
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      items: [
        'dodao-processes',
        'dodao-tokenomics',
        'intellectual-property',
        'user-privacy',
        'partnership-strategy',
        'community-governance',
        'stats-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Vision & Stories',
      items: [
        'future-of-work-vision',
        'gig-economy',
        'success-stories',
        'user-stories',
        'user-stories/gitcoin-user-story',
      ],
    },
  ],
};

module.exports = sidebars;
