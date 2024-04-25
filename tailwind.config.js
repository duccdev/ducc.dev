import catppuccinTcss from "@catppuccin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [
		catppuccinTcss({
			prefix: "ctp",
			defaultFlavour: "mocha",
		}),
	],
};
