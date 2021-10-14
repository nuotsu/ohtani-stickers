import preprocess from 'svelte-preprocess'
import tailwindcss from 'tailwindcss'
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [
				tailwindcss,
			]
		}
	}),

	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
