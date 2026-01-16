import { defineCollection } from "astro:content";
import { z } from "astro/zod";
const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number(),
      image: image(),
    }),
});

export const collections = { services };
