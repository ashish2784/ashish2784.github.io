import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		csp: {
			directives: {
				'script-src': ['self', 'unsafe-inline', 'https://www.gstatic.com', 'https://dialogflow.cloud.google.com'],
				'object-src': ['none'],
				'base-uri': ['self'],
				'img-src': ['self', 'data:', 'https://drive.google.com'],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com', 'https://www.gstatic.com'],
				'frame-src': ['self', 'https://www.gstatic.com', 'https://dialogflow.cloud.google.com'],
				'connect-src': ['self', 'https://dialogflow.cloud.google.com'],
				'frame-ancestors': ['none']
			}
		}
	}
};

export default config;
