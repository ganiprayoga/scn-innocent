import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/icons/', './src/lib/assets'],
			svgoOptions: {
				multipass: true
			}
		})
	],
	server: {
		watch: {
			usePolling: true
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
