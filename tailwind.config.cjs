const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{svelte,html}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				red: {
					DEFAULT: '#ba0021',
					light: '#cd1141',
					dark: '#8f0028',
				},
				navy: {
					DEFAULT: '#003263',
				},
				gray: {
					DEFAULT: '#c4cdd3',
					border: '#ddd',
				}
			},
		},
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		},
		container: {
			center: true,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
