import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'astro',
  nodeVersion: '22',
  contentSources: [],

  models: [
    {
      name: 'pages/home',
      type: 'page',
      filePath: 'src/content/pages/home.yaml',
      urlPath: '/',
      fields: [
        { name: 'hero', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'subheading', type: 'string' },
          { name: 'ctaLabel', type: 'string' },
          { name: 'ctaHref', type: 'string' },
          { name: 'videoUrl', type: 'string' },
        ]},
        { name: 'featuredDrink', type: 'object', fields: [
          { name: 'badge', type: 'string' },
          { name: 'name', type: 'string' },
          { name: 'nameBold', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'image', type: 'image' },
          { name: 'imageAlt', type: 'string' },
          { name: 'ctaLabel', type: 'string' },
          { name: 'ctaHref', type: 'string' },
        ]},
        { name: 'menuSection', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'cards', type: 'list', items: { type: 'object', fields: [
            { name: 'title', type: 'string' },
            { name: 'subtitle', type: 'string' },
            { name: 'image', type: 'image' },
            { name: 'href', type: 'string' },
            { name: 'label', type: 'string' },
          ]}},
        ]},
        { name: 'cta', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'body', type: 'string' },
          { name: 'ctaLabel', type: 'string' },
          { name: 'ctaHref', type: 'string' },
        ]},
        { name: 'reviews', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'items', type: 'list', items: { type: 'object', fields: [
            { name: 'quote', type: 'string' },
            { name: 'name', type: 'string' },
          ]}},
        ]},
        { name: 'investment', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'subheading', type: 'string' },
          { name: 'body', type: 'string' },
          { name: 'stats', type: 'list', items: { type: 'object', fields: [
            { name: 'number', type: 'string' },
            { name: 'label', type: 'string' },
          ]}},
          { name: 'ctaLabel', type: 'string' },
          { name: 'ctaHref', type: 'string' },
        ]},
        { name: 'faqs', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'items', type: 'list', items: { type: 'object', fields: [
            { name: 'question', type: 'string' },
            { name: 'answer', type: 'string' },
          ]}},
        ]},
        { name: 'contact', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'subheading', type: 'string' },
          { name: 'formHeading', type: 'string' },
        ]},
      ],
    },
    {
      name: 'pages/about',
      type: 'page',
      filePath: 'src/content/pages/about.yaml',
      urlPath: '/about',
      fields: [
        { name: 'hero', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'subheading', type: 'string' },
        ]},
        { name: 'intro', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'headingSpan', type: 'string' },
          { name: 'paragraphs', type: 'list', items: { type: 'string' } },
          { name: 'tagline', type: 'string' },
          { name: 'image', type: 'image' },
          { name: 'imageAlt', type: 'string' },
        ]},
        { name: 'stats', type: 'list', items: { type: 'object', fields: [
          { name: 'number', type: 'string' },
          { name: 'label', type: 'string' },
        ]}},
        { name: 'history', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'body', type: 'list', items: { type: 'string' } },
          { name: 'timeline', type: 'list', items: { type: 'object', fields: [
            { name: 'year', type: 'string' },
            { name: 'text', type: 'string' },
          ]}},
        ]},
        { name: 'founder', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'name', type: 'string' },
          { name: 'title', type: 'string' },
          { name: 'image', type: 'image' },
          { name: 'imageAlt', type: 'string' },
          { name: 'bio', type: 'list', items: { type: 'string' } },
          { name: 'ventures', type: 'list', items: { type: 'object', fields: [
            { name: 'name', type: 'string' },
            { name: 'desc', type: 'string' },
          ]}},
        ]},
        { name: 'cta', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'body', type: 'string' },
          { name: 'primaryLabel', type: 'string' },
          { name: 'primaryHref', type: 'string' },
          { name: 'secondaryLabel', type: 'string' },
          { name: 'secondaryHref', type: 'string' },
        ]},
      ],
    },
    {
      name: 'drink',
      type: 'data',
      filePath: 'src/content/drinks/{slug}.yaml',
      fields: [
        { name: 'name', type: 'string', required: true },
        { name: 'category', type: 'enum', options: { values: ['Coffee','Cold Brew','Energy','Dirty Pop','Refreshers','Smoothies','Teas','Kids','Hot Food','Treats'] } },
        { name: 'subtitle', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'image', type: 'image' },
        { name: 'tags', type: 'list', items: { type: 'string' } },
        { name: 'menuOrder', type: 'number' },
      ],
    },
    {
      name: 'location',
      type: 'data',
      filePath: 'src/content/locations/{slug}.yaml',
      fields: [
        { name: 'name', type: 'string', required: true },
        { name: 'address', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'state', type: 'string' },
        { name: 'zip', type: 'string' },
        { name: 'lat', type: 'number' },
        { name: 'lng', type: 'number' },
        { name: 'displayOrder', type: 'number' },
      ],
    },
    {
      name: 'settings/global',
      type: 'data',
      filePath: 'src/content/settings/global.yaml',
      fields: [
        { name: 'phone', type: 'string' },
        { name: 'hours', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'realEstateEmail', type: 'string' },
        { name: 'social', type: 'object', fields: [
          { name: 'instagram', type: 'string' },
          { name: 'facebook', type: 'string' },
          { name: 'tiktok', type: 'string' },
          { name: 'linkedin', type: 'string' },
        ]},
      ],
    },
  ],

  siteMap: ({ documents }): SiteMapEntry[] => {
    return documents
      .filter(doc => doc.modelName?.startsWith('pages/'))
      .map(doc => ({
        stableId: doc.id,
        urlPath: doc.fields?.urlPath as string ?? '/',
        document: doc,
        isHomePage: doc.modelName === 'pages/home',
      }));
  },
});
