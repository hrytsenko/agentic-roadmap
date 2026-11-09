// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'https://github.com/hrytsenko/agentic-roadmap';

/**
 * A sidebar group listing the pages in one directory.
 * Pages are ordered by `sidebar.order` in their frontmatter; the overview comes first.
 * @param {string} label
 * @param {string} directory
 */
const group = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

// https://astro.build/config
export default defineConfig({
	site: 'https://hrytsenko.github.io',
	base: '/agentic-roadmap',
	integrations: [
		starlight({
			title: 'Agentic Roadmap',
			description: 'An opinionated roadmap for agentic engineering.',
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [group('Areas', 'areas'), group('Practices', 'practices')],
		}),
	],
});
