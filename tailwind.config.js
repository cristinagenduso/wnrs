/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Dark Theme
				dark: {
					main: "#c10016",
					dark: "#880000",
					light: "#fb4d3f",
					contrastText: "#ffffff",
					paper: "#f6f6f6",
					contrastPaperText: "#c10016",
				},
				// Light Theme
				light: {
					main: "#c10016",
					dark: "#880000",
					light: "#fb4d3f",
					contrastText: "#ffffff",
					paper: "#f6f6f6",
					contrastPaperText: "#c10016",
				},
			},
		},
	},
	variants: {
		extend: {
			display: ["disabled"], // Ensure disabled variant is available
		},
	},
	plugins: [],
};
