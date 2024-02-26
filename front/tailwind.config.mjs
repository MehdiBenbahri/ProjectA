/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			primary: colors.sky,
			"secondary": "#14b8a6",
			"accent": "#9333ea",
			"neutral": "#57534e",
			"base-100": "#f5f5f4",
			"info": "#0e7490",
			"success": "#65a30d",
			warning: colors.amber,
			error: colors.red,
			panel: colors.gray
		},
	},
	plugins: [],
	darkMode: 'class'
}
