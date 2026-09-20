import node from "@astrojs/node";
import react from "@astrojs/react";
import auditLog from "@emdash-cms/plugin-audit-log";
import { defineConfig, fontProviders } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: sqlite({ url: "file:./data.db" }),
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
			plugins: [auditLog],
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Fraunces",
			cssVariable: "--font-primary",
			weights: [400, 500, 600, 700],
			fallbacks: ["Georgia", "serif"],
		},
		{
			provider: fontProviders.google(),
			name: "IBM Plex Sans",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "IBM Plex Mono",
			cssVariable: "--font-brand",
			weights: [400, 500, 600, 700],
			fallbacks: ["ui-monospace", "monospace"],
		},
	],
	devToolbar: { enabled: false },
});

