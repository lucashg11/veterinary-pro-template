import { defineCollection } from "astro:content";
import { z } from "astro/zod";
const servicesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number(),
      image: image(),
      imageAlt: z.string(),
    }),
});

export const collections = { services: servicesCollection };
