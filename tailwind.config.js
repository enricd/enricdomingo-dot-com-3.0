/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.8, 1) infinite',
			}
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
