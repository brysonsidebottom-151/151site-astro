import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

// Reusable SEO block (browser-tab title, meta description, social share image)
// added to every page model so search/social metadata is editable per page.
const seoField: any = {
  name: 'seo', type: 'object', label: 'SEO & Social', fields: [
    { name: 'title', type: 'string', label: 'Browser tab / search title' },
    { name: 'description', type: 'string', label: 'Meta description' },
    { name: 'ogImage', type: 'image', label: 'Social share image' },
  ],
};

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
            seoField,
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheadingLine1', type: 'string' },
              { name: 'subheadingLine2', type: 'string' },
              { name: 'ctaLabel', type: 'string' },
              { name: 'ctaHref', type: 'string' },
              { name: 'videoUrl', type: 'string', label: 'Hero background video', description: 'Paste a YouTube or Vimeo link, or a direct .mp4 file URL. Leave blank for the default video.' },
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
            { name: 'locatorPlaceholder', type: 'string' },
            { name: 'contact', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
              { name: 'formHeading', type: 'string' },
              { name: 'firstNameLabel', type: 'string' },
              { name: 'lastNameLabel', type: 'string' },
              { name: 'emailLabel', type: 'string' },
              { name: 'phoneLabel', type: 'string' },
              { name: 'messageLabel', type: 'string' },
              { name: 'submitLabel', type: 'string' },
            ]},
          ],
        },
        {
          name: 'PageMenu',
          type: 'page',
          filePath: 'src/content/pages/menu.yaml',
          urlPath: '/menu',
          fields: [
            seoField,
            { name: 'heroVideo', type: 'string', label: 'Hero background video', description: 'Paste a YouTube or Vimeo link, or a direct .mp4 file URL. Leave blank for the default video.' },
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
            ]},
            { name: 'dirtypopExtra', type: 'string' },
            { name: 'customize', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'flavorLabel', type: 'string' },
              { name: 'flavorTip', type: 'string' },
              { name: 'sfLabel', type: 'string' },
              { name: 'milks', type: 'list', items: { type: 'string' } },
              { name: 'flavors', type: 'list', items: { type: 'string' } },
              { name: 'sfFlavors', type: 'list', items: { type: 'string' } },
            ]},
            { name: 'labels', type: 'object', label: 'Menu UI labels', fields: [
              { name: 'sodaAlso', type: 'string' },
              { name: 'emptyHeading', type: 'string' },
              { name: 'emptySub', type: 'string' },
            ]},
            { name: 'drinkPage', type: 'object', label: 'Drink detail page labels', fields: [
              { name: 'backLabel', type: 'string' },
              { name: 'flavorNotesLabel', type: 'string' },
              { name: 'viewMenuLabel', type: 'string' },
              { name: 'flavorsHeading', type: 'string' },
              { name: 'sugarFreeHeading', type: 'string' },
            ]},
          ],
        },
        {
          name: 'PageAbout',
          type: 'page',
          filePath: 'src/content/pages/about.yaml',
          urlPath: '/about',
          fields: [
            seoField,
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
            seoField,
            { name: 'heroVideo', type: 'string', label: 'Hero background video', description: 'Paste a YouTube or Vimeo link, or a direct .mp4 file URL. Leave blank for the default video.' },
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
            seoField,
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
          urlPath: '/realestate',
          fields: [
            seoField,
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
              { name: 'emailIntro', type: 'string' },
              { name: 'buttonLabel', type: 'string' },
              { name: 'firstNameLabel', type: 'string' },
              { name: 'lastNameLabel', type: 'string' },
              { name: 'emailLabel', type: 'string' },
              { name: 'phoneLabel', type: 'string' },
              { name: 'propertyLabel', type: 'string' },
              { name: 'detailsLabel', type: 'string' },
            ]},
          ],
        },
        {
          name: 'PageLocations',
          type: 'page',
          filePath: 'src/content/pages/locations.yaml',
          urlPath: '/locations',
          fields: [
            seoField,
            { name: 'heroVideo', type: 'string', label: 'Hero background video', description: 'Paste a YouTube or Vimeo link, or a direct .mp4 file URL. Leave blank for the default video.' },
            { name: 'hero', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'subheading', type: 'string' },
              { name: 'countSuffix', type: 'string' },
            ]},
            { name: 'searchPlaceholder', type: 'string' },
            { name: 'directionsLabel', type: 'string' },
            { name: 'stateNames', type: 'list', label: 'State code to full name', items: { type: 'object', labelField: 'name', fields: [
              { name: 'code', type: 'string' },
              { name: 'name', type: 'string' },
            ]}},
          ],
        },
        {
          name: 'PagePrivacy',
          type: 'page',
          filePath: 'src/content/pages/privacy.yaml',
          urlPath: '/privacy-policy',
          fields: [
            seoField,
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
            { name: 'category', type: 'reference', required: true, models: ['Category'] },
            { name: 'subtitle', type: 'string', default: '' },
            { name: 'description', type: 'string', default: '' },
            { name: 'image', type: 'image' },
            { name: 'icon', type: 'string', label: 'Emoji icon (Kids / Hot Food / Treats only)' },
            { name: 'tags', type: 'list', items: { type: 'string' } },
            { name: 'menuOrder', type: 'number', default: 99 },
          ],
        },
        {
          name: 'Category',
          type: 'data',
          labelField: 'title',
          filePath: 'src/content/categories/{slug}.yaml',
          fields: [
            { name: 'title', type: 'string', required: true, default: 'New Category' },
            { name: 'number', type: 'string', label: 'Display order (e.g. 01, 02)' },
            { name: 'description', type: 'string' },
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
            { name: 'slogan', type: 'string' },
            { name: 'copyright', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'hours', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'realEstateEmail', type: 'string' },
            { name: 'giftCardLabel', type: 'string', label: 'Gift Card button text' },
            { name: 'giftCardUrl', type: 'string', label: 'Gift Card iframe URL' },
            { name: 'nav', type: 'list', label: 'Header nav links', items: { type: 'object', labelField: 'label', fields: [
              { name: 'label', type: 'string' },
              { name: 'href', type: 'string' },
            ]}},
            { name: 'social', type: 'object', fields: [
              { name: 'instagram', type: 'string' },
              { name: 'facebook', type: 'string' },
              { name: 'tiktok', type: 'string' },
              { name: 'linkedin', type: 'string' },
            ]},
            { name: 'footer', type: 'object', label: 'Footer', fields: [
              { name: 'companyHeading', type: 'string' },
              { name: 'companyLinks', type: 'list', items: { type: 'object', labelField: 'label', fields: [
                { name: 'label', type: 'string' },
                { name: 'href', type: 'string' },
              ]}},
              { name: 'socialHeading', type: 'string' },
              { name: 'supportHeading', type: 'string' },
              { name: 'giftCardButtonLabel', type: 'string' },
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
      PageRealestate: '/realestate',
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
