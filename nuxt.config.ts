// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@pinia/nuxt"],
	nitro: {
		logLevel: 4,
		preset: "node-server",
		server: {
			https: {
				key: "/nexon.com-key.pem",
				cert: "/nexon.com.pem",
				minVersion: "TLSv1.2",
				maxVersion: "TLSv1.3",
			},
		},
	},

	server: {
		port: 443,
	},
});
