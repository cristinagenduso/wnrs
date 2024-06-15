import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
	base: process.env.BASE_PATH || "/",
	resolve: {
		alias: {
			"@atoms": `${path.resolve(__dirname, "./src/components/atoms")}`,
			"@molecules": `${path.resolve(__dirname, "./src/components/molecules")}`,
			"@organisms": `${path.resolve(__dirname, "./src/components/organisms")}`,
			"@svg": path.resolve(__dirname, "./src/assets/svg"),
		},
	},
	plugins: [react(), svgrPlugin()],
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	},
});
