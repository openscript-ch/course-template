// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeOpenscript from 'starlight-theme-openscript'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      defaultLocale: 'de',
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de', // lang is required for root locales
        },
      },
      plugins: [starlightThemeOpenscript()],
      title: '[Company] [Coursename]',
      logo: {
        src: './src/assets/logo.svg',
        alt: '[Company] [Coursename]',
      },
      social: [{ icon: 'document', label: 'Webseite', href: 'https://openscript.ch' }],
      sidebar: [
        {
          label: 'Organisatorisches',
          items: [
            { label: 'Ablauf', slug: 'org/schedule' },
            { label: 'Präsentation', slug: 'org/presentation' },
          ],
        },
        {
          label: 'Tag 1',
          autogenerate: { directory: 'part1' },
        },
        {
          label: 'Tag 2',
          autogenerate: { directory: 'part2' },
        },
        {
          label: 'Tag 3',
          autogenerate: { directory: 'part3' },
        },
        {
          label: 'Tag 4',
          autogenerate: { directory: 'part4' },
        },
        {
          label: 'Tag 5',
          autogenerate: { directory: 'part5' },
        },
      ],
    }),
  ],
});
