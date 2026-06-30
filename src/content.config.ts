import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const drinks = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/drinks' }),
  schema: z.object({
    name: z.string(),
    category: z.string().optional().default(''),
    subtitle: z.string().optional().default(''),
    description: z.string().optional().default(''),
    image: z.string().optional().default(''),
    icon: z.string().optional().default(''),
    tags: z.preprocess((v) => (v == null ? [] : v), z.array(z.string())).default([]),
    menuOrder: z.number().optional().default(99),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/categories' }),
  schema: z.object({
    title: z.string(),
    number: z.string().optional().default('99'),
    description: z.string().optional().default(''),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/locations' }),
  schema: z.object({
    name: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    lat: z.number(),
    lng: z.number(),
    displayOrder: z.number().optional().default(99),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/pages' }),
  schema: z.any(),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/settings' }),
  schema: z.any(),
});

export const collections = { drinks, categories, locations, pages, settings };
