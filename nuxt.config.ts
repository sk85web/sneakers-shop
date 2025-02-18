// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/fonts', '@pinia/nuxt'],
	fonts: {
		families: [{ name: 'Inter', provider: 'google' }],
	},
})
