import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    category: z.enum(['Robotics', 'Embedded systems', 'Digital design']),
    status: z.string(),
    year: z.string(),
    order: z.number(),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    context: z.string(),
    repository: z.string().url().optional(),
    video: z.string().optional(),
  }),
});

export const collections = { projects };
