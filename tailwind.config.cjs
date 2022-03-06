module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['Saira Condensed', 'sans-serif']
		},
		extend: {},
		colors: {
			primary: '#A53F3F',
			secondary: '#008AFE',
			white: '#FFFFFF',
			granite: '#212121',
			slate: '#484848',
			transparent: 'transparent'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
