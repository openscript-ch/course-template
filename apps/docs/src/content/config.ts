import { defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@openscript-ch/astro-course-theme/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
