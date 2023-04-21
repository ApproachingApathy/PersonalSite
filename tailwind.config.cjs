const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [{
		pattern: /hljs+/
	}, "no-prose"],

	theme: {
		hljs: {
			theme: "atom-one-dark"
		},
		extend: {
		}
	},

	plugins: [
		require("@tailwindcss/typography"),
		require("tailwind-highlightjs")
	]
};

module.exports = config;
