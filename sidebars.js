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
        'get-started',
        'how-it-works',
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
        'users/customers',
        'users/performers',
        'users/auditors',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'generated-index',
        title: 'Platform Features',
        description: 'Explore Dodao\'s powerful features and capabilities',
        keywords: ['features', 'capabilities', 'cross-chain', 'security'],
      },
      items: [
        'features/cross-chain',
        'features/security',
      ],
    },
    {
      type: 'category',
      label: 'Developer Documentation',
      link: {
        type: 'generated-index',
        title: 'Developer Documentation',
        description: 'Technical documentation for developers building on Dodao',
        keywords: ['developers', 'api', 'smart contracts', 'integration'],
      },
      items: [
        'developers/overview',
        'developers/smart-contracts',
        'developers/api-reference',
        'developers/cross-chain',
      ],
    },
    {
      type: 'category',
      label: 'Investors',
      link: {
        type: 'generated-index',
        title: 'Investment Information',
        description: 'Comprehensive investment materials and opportunities',
        keywords: ['investors', 'funding', 'tokenomics', 'traction', 'market'],
      },
      items: [
        'investors/overview',
        'investors/traction-metrics',
        'investors/market-opportunity',
        'investors/competitive-advantage',
        'investors/tokenomics',
        'investors/team-advisors',
        'investors/due-diligence',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'generated-index',
        title: 'Community',
        description: 'Join our community and participate in governance',
        keywords: ['community', 'governance', 'programs'],
      },
      items: [
        'community/governance',
        'community/programs',
      ],
    },
    {
      type: 'category',
      label: 'Legal & Privacy',
      link: {
        type: 'generated-index',
        title: 'Legal & Privacy',
        description: 'Legal information and privacy policies',
        keywords: ['legal', 'privacy', 'terms'],
      },
      items: [
        'legal/privacy',
      ],
    },
    {
      type: 'category',
      label: 'Platform Information',
      link: {
        type: 'generated-index',
        title: 'Platform Information',
        description: 'Learn about our progress and quality standards',
        keywords: ['progress', 'quality', 'verification'],
      },
      items: [
        'progress',
        'verification',
      ],
    },
    {
      type: 'category',
      label: 'Legacy Documentation',
      link: {
        type: 'generated-index',
        title: 'Legacy Documentation',
        description: 'Previous version documentation for reference',
        keywords: ['legacy', 'archive', 'reference'],
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Getting Started (Legacy)',
          items: [
            'legacy/getting-started/quick-start',
            'legacy/how-dodao-works',
          ],
        },
        {
          type: 'category',
          label: 'Technical (Legacy)',
          items: [
            'legacy/technical/architecture-overview',
            'legacy/technical/cross-chain-infrastructure',
            'legacy/smart-contract',
            'legacy/diamond-hld-diagram',
            'legacy/security-and-trust',
            'legacy/approach-to-scalability',
          ],
        },
        {
          type: 'category',
          label: 'Community Programs (Legacy)',
          items: [
            'legacy/community-programs/developer-program',
            'legacy/community-programs/arts-creator-program',
            'legacy/community-programs/ambassador-program',
            'legacy/community-programs/tester-program',
          ],
        },
        {
          type: 'category',
          label: 'Platform (Legacy)',
          items: [
            'legacy/dodao-processes',
            'legacy/dodao-tokenomics',
            'legacy/intellectual-property',
            'legacy/user-privacy',
            'legacy/partnership-strategy',
            'legacy/community-governance',
            'legacy/stats-dashboard',
          ],
        },
        {
          type: 'category',
          label: 'Vision (Legacy)',
          items: [
            'legacy/future-of-work-vision',
            'legacy/gig-economy',
          ],
        },
        {
          type: 'category',
          label: 'User Stories (Legacy)',
          items: [
            'legacy/user-stories',
            'legacy/success-stories',
            'legacy/user-stories/gitcoin-user-story',
          ],
        },
        {
          type: 'category',
          label: 'Guides (Legacy)',
          items: [
            'legacy/guides/performer/getting-started',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
