import preprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [
				autoprefixer,
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
