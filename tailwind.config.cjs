const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{svelte,html}'],
	darkMode: 'media', // or 'media' or 'class'
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
					lighter: '#eee',
					light: '#ddd',
					dark: '#313131',
					darker: '#191919',
				}
			},
		},
		fontFamily: {
			sans: 'muli, sans-serif',
			serif: 'fp-dancer-serif, serif',
		},
		screens: {
			'sm-': { max: '475px' },
			'sm': { min: '476px' },
			'md-': { max: '768px' },
			'md': { min: '769px' },
			'lg-': { max: '1024px' },
			'lg': { min: '1024px' },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
