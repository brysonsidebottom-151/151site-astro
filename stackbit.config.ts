import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'astro',
  nodeVersion: '22',

  contentSources: [
    new GitContentSource({
      rootPath: process.cwd(),
      contentDirs: ['src/content'],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/',
      },
      models: [
        {
          name: 'PageHome',
          type: 'page',
          filePath: 'src/content/pages/home.yaml',
          urlPath: '/',
          fields: [
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheadingLine1', type: 'string' },
              { name: 'subheadingLine2', type: 'string' },
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
            { name: 'locationsSection', type: 'object', fields: [
              { name: 'heading', type: 'string' },
            ]},
            { name: 'contact', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
              { name: 'formHeading', type: 'string' },
            ]},
          ],
        },
        {
          name: 'PageMenu',
          type: 'page',
          filePath: 'src/content/pages/menu.yaml',
          urlPath: '/menu',
          fields: [
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
            ]},
            { name: 'categories', type: 'list', items: { type: 'object', fields: [
              { name: 'slug', type: 'string' },
              { name: 'number', type: 'string' },
              { name: 'title', type: 'string' },
              { name: 'description', type: 'string' },
            ]}},
            { name: 'dirtypopExtra', type: 'string' },
            { name: 'customize', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'milks', type: 'list', items: { type: 'string' } },
              { name: 'flavors', type: 'list', items: { type: 'string' } },
              { name: 'sfFlavors', type: 'list', items: { type: 'string' } },
            ]},
          ],
        },
        {
          name: 'PageAbout',
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
          name: 'PageCareers',
          type: 'page',
          filePath: 'src/content/pages/careers.yaml',
          urlPath: '/careers',
          fields: [
            { name: 'agegate', type: 'object', fields: [
              { name: 'eyebrow', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'body', type: 'string' },
              { name: 'yesLabel', type: 'string' },
              { name: 'noLabel', type: 'string' },
            ]},
            { name: 'under18', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'body', type: 'list', items: { type: 'string' } },
              { name: 'linkText', type: 'string' },
            ]},
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
            ]},
            { name: 'workstreamLabel', type: 'string' },
            { name: 'workstreamHref', type: 'string' },
          ],
        },
        {
          name: 'PageMerch',
          type: 'page',
          filePath: 'src/content/pages/merch.yaml',
          urlPath: '/merch',
          fields: [
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
            ]},
            { name: 'items', type: 'list', items: { type: 'object', labelField: 'name', fields: [
              { name: 'name', type: 'string' },
              { name: 'price', type: 'string' },
              { name: 'category', type: 'string' },
              { name: 'image', type: 'image' },
            ]}},
          ],
        },
        {
          name: 'PageRealestate',
          type: 'page',
          filePath: 'src/content/pages/realestate.yaml',
          urlPath: '/real-estate',
          fields: [
            { name: 'hero', type: 'object', fields: [
              { name: 'eyebrow', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'body', type: 'string' },
              { name: 'ctaLabel', type: 'string' },
              { name: 'ctaHref', type: 'string' },
            ]},
            { name: 'overview', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'headingSpan', type: 'string' },
              { name: 'body', type: 'list', items: { type: 'string' } },
              { name: 'stats', type: 'list', items: { type: 'object', fields: [
                { name: 'number', type: 'string' },
                { name: 'label', type: 'string' },
              ]}},
              { name: 'image', type: 'image' },
              { name: 'imageAlt', type: 'string' },
            ]},
            { name: 'criteria', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
              { name: 'cards', type: 'list', items: { type: 'object', labelField: 'title', fields: [
                { name: 'title', type: 'string' },
                { name: 'body', type: 'string' },
              ]}},
            ]},
            { name: 'idealSite', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'items', type: 'list', items: { type: 'string' } },
            ]},
            { name: 'markets', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
              { name: 'tags', type: 'list', items: { type: 'string' } },
            ]},
            { name: 'contact', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'formHeading', type: 'string' },
              { name: 'formSubtext', type: 'string' },
              { name: 'email', type: 'string' },
              { name: 'buttonLabel', type: 'string' },
            ]},
          ],
        },
        {
          name: 'PageLocations',
          type: 'page',
          filePath: 'src/content/pages/locations.yaml',
          urlPath: '/locations',
          fields: [
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
              { name: 'countSuffix', type: 'string' },
            ]},
          ],
        },
        {
          name: 'PagePrivacy',
          type: 'page',
          filePath: 'src/content/pages/privacy.yaml',
          urlPath: '/privacy-policy',
          fields: [
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
            ]},
            { name: 'sections', type: 'list', items: { type: 'object', labelField: 'heading', fields: [
              { name: 'heading', type: 'string' },
              { name: 'body', type: 'text' },
            ]}},
          ],
        },
        {
          name: 'Drink',
          type: 'data',
          labelField: 'name',
          filePath: 'src/content/drinks/{slug}.yaml',
          fields: [
            { name: 'name', type: 'string', required: true, default: 'New Drink' },
            { name: 'category', type: 'enum', required: true, default: 'Coffee', options: ['Coffee','Cold Brew','Energy','Dirty Pop','Refreshers','Smoothies','Teas','Kids','Hot Food','Treats'] },
            { name: 'subtitle', type: 'string', default: '' },
            { name: 'description', type: 'string', default: '' },
            { name: 'image', type: 'image' },
            { name: 'tags', type: 'list', items: { type: 'string' } },
            { name: 'menuOrder', type: 'number', default: 99 },
          ],
        },
        {
          name: 'Location',
          type: 'data',
          labelField: 'name',
          filePath: 'src/content/locations/{slug}.yaml',
          fields: [
            { name: 'name', type: 'string', required: true, default: '151 Coffee' },
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
          name: 'SettingsGlobal',
          type: 'data',
          filePath: 'src/content/settings/global.yaml',
          fields: [
            { name: 'siteName', type: 'string' },
            { name: 'logo', type: 'image' },
            { name: 'copyright', type: 'string' },
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
    }),
  ],

  siteMap: ({ documents }): SiteMapEntry[] => {
    const URL_MAP: Record<string, string> = {
      PageHome: '/',
      PageMenu: '/menu',
      PageAbout: '/about',
      PageCareers: '/careers',
      PageMerch: '/merch',
      PageRealestate: '/real-estate',
      PageLocations: '/locations',
      PagePrivacy: '/privacy-policy',
    };
    const pageEntries = documents
      .filter(doc => doc.modelName && URL_MAP[doc.modelName])
      .map(doc => ({
        stableId: doc.id,
        urlPath: URL_MAP[doc.modelName!],
        document: doc,
        isHomePage: doc.modelName === 'PageHome',
      }));
    const drinkEntries = documents
      .filter(doc => doc.modelName === 'Drink')
      .map(doc => {
        const slug = doc.id.replace(/^src\/content\/drinks\//, '').replace(/\.yaml$/, '');
        return { stableId: doc.id, urlPath: `/drinks/${slug}`, document: doc };
      });
    return [...pageEntries, ...drinkEntries];
  },
});
