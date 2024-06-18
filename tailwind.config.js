import themeSwapper from "tailwindcss-theme-swapper";

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	variants: {
		extend: {
			display: ["disabled"], // Ensure disabled variant is available
		},
	},
	plugins: [
		themeSwapper({
			themes: [
				{
					name: "base",
					selectors: [":root"],
					theme: {
						colors: {
							main: "#c10016",
							dark: "#880000",
							light: "#fb4d3f",
							contrastText: "#ffffff",
							paper: "#f6f6f6",
							contrastPaperText: "#c10016",
						},
					},
				},
				{
					name: "main",
					selectors: [".main", '[data-theme="main"]'],
					theme: {
						colors: {
							main: "#c10016",
							dark: "#880000",
							light: "#fb4d3f",
							contrastText: "#ffffff",
							paper: "#f6f6f6",
							contrastPaperText: "#c10016",
						},
					},
				},
				{
					name: "selfLove",
					selectors: [".selfLove", '[data-theme="selfLove"]'],
					theme: {
						colors: {
							main: "#efc5c3",
							dark: "#bc9493",
							light: "#fff8f6",
							contrastText: "#c10016",
							paper: "#f6f6f6",
							contrastPaperText: "#c10016",
						},
					},
				},
				{
					name: "voting",
					selectors: [".voting", '[data-theme="voting"]'],
					theme: {
						colors: {
							main: "#272c6c",
							dark: "#000340",
							light: "#57559b",
							contrastText: "#f6f6f6",
							paper: "#f6f6f6",
							contrastPaperText: "#181818",
						},
					},
				},
				{
					name: "race",
					selectors: [".race", '[data-theme="race"]'],
					theme: {
						colors: {
							main: "#181818",
							dark: "#000000",
							light: "#3e3e3e",
							contrastText: "#ffffff",
							paper: "#f6f6f6",
							contrastPaperText: "#181818",
						},
					},
				},
				{
					name: "ownIt",
					selectors: [".ownIt", '[data-theme="ownIt"]'],
					theme: {
						colors: {
							main: "#c10016",
							dark: "#880000",
							light: "#fb4d3f",
							contrastText: "#ffffff",
							paper: "#f6f6f6",
							contrastPaperText: "#181818",
						},
					},
				},
				{
					name: "valentino",
					selectors: [".valentino", '[data-theme="valentino"]'],
					theme: {
						colors: {
							main: "#4e1214",
							dark: "#2c0000",
							light: "#7e3c3a",
							contrastText: "#ffffff",
							paper: "#f6f6f6",
							contrastPaperText: "#4e1214",
						},
					},
				},
				{
					name: "cann",
					selectors: [".cann", '[data-theme="cann"]'],
					theme: {
						colors: {
							main: "#ecd2e1",
							dark: "#baa1af",
							light: "#ffffff",
							contrastText: "#00a6c7",
							paper: "#f6f6f6",
							contrastPaperText: "#00a6c7",
						},
					},
				},
				{
					name: "bumbleDate",
					selectors: [".bumbleDate", '[data-theme="bumbleDate"]'],
					theme: {
						colors: {
							main: "#F8CB5E",
							dark: "#c29a2d",
							light: "#fffe8e",
							contrastText: "#ffffff",
							paper: "#f6f6f6",
							contrastPaperText: "#201e1f",
						},
					},
				},
				{
					name: "bumbleBizz",
					selectors: [".bumbleBizz", '[data-theme="bumbleBizz"]'],
					theme: {
						colors: {
							main: "#ee7547",
							dark: "#b6461c",
							light: "#ffa674",
							contrastText: "#201e1f",
							paper: "#f6f6f6",
							contrastPaperText: "#201e1f",
						},
					},
				},
				{
					name: "bumbleBFF",
					selectors: [".bumbleBFF", '[data-theme="bumbleBFF"]'],
					theme: {
						colors: {
							main: "#4098bc",
							dark: "#006a8c",
							light: "#77c9ef",
							contrastText: "#201e1f",
							paper: "#f6f6f6",
							contrastPaperText: "#201e1f",
						},
					},
				},
				{
					name: "hbo",
					selectors: [".hbo", '[data-theme="hbo"]'],
					theme: {
						colors: {
							main: "#1f164c",
							dark: "#301633",
							light: "#006a8c",
							contrastText: "#f6f6f6",
							paper: "#f6f6f6",
							contrastPaperText: "#1f164c",
						},
					},
				},
			],
		}),
	],
};
