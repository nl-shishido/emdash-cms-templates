import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1 } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	output: "server",

	// Cloudflare Imagesの変換機能を使用しない
	adapter: cloudflare({
		imageService: "passthrough",
	}),

	image: {
		layout: "constrained",
		responsiveStyles: true,
	},

	integrations: [
		react(),
		emdash({
			database: d1({
				binding: "DB",
				session: "auto",
			}),

			// EmDashのメディア画像処理を無効化
			images: false,

			// storageは指定しない
		}),
	],

	devToolbar: {
		enabled: false,
	},
});