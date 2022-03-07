module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['League Spartan', 'sans-serif']
		},
		extend: {},
		colors: {
			primary: '#C81D77',
			secondary: '#6710C2',
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
