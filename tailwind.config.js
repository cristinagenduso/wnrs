/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			display: ["disabled"], // Ensure disabled variant is available
		},
	},
	plugins: [],
};
