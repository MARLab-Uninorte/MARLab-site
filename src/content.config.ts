import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    summary: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
    isPI: z.boolean().default(false),
    placeholder: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    link: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/software' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    repoUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { research, team, publications, software };
