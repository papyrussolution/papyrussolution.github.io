import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
	base: './',
	optimizeDeps: {
		include: ['svelte']
	},
	build: {
		target: 'esnext',
		commonjsOptions: {
			include: [/svelte/, /node_modules/]
		}
	},
	resolve: {
		alias: {
			$assets: '/src/lib/assets',
			$img: '/src/lib/assets/images'
		}
	},
})