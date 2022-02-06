module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			textColor: {
				skin: {
					base: "var(--color-text-base)",
					muted: "var(--color-text-muted)",
					inverted: "var(--color-text-inverted)",
					highlight: "var(--color-text-highlight)",
					"dark-highlight": "var(--color-text-dark-highlight)",
				},
			},
			backgroundColor: {
				skin: {
					fill: "var(--color-fill)",
					"button-accent": "var(--color-button-accent)",
					"button-accent-hover": "var(--color-button-accent-hover)",
					"button-muted": "var(--color-button-muted)",
				},
			},
			gradientColorStops: {
				skin: {
					hue: "var(--color-fill)",
				},
			},
		},
	},
	plugins: [],
}
