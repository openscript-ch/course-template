import { defineConfig } from 'astro/config';
import starlight from '@openscript-ch/astro-course-theme';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'New course',
			social: {
				github: 'https://github.com/openscript-ch/astro-course-theme',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	base: '/docs/',
	outDir: '../../dist/docs'
});
