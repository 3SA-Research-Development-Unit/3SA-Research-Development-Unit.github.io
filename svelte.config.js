import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import fs from 'fs';
import path from 'path';

function getSlugs(dir) {
	return fs.readdirSync(dir)
		.filter(file => file.endsWith('.md'))
		.map(file => file.replace('.md', ''));
}

const guideSlugs = getSlugs('./src/lib/documents/guides');
const newsSlugs = getSlugs('./src/lib/documents/news');


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.svx', '.md'],
	})],
	kit: {
		adapter: adapter(), paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		prerender: {
			entries: [
				'*',
				...guideSlugs.map(slug => `/guides/${slug}`),
				...newsSlugs.map(slug => `/news/${slug}`)
			]
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
