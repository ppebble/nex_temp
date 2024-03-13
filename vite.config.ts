import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	const localApi = env.VITE_TEST_URL2;
	const SIMSApi = env.VITE_TEST_URL1;
	return {
		plugins: [react()],
		build: {
			chunkSizeWarningLimit: 1600,
		},
		server: {
			port: 3000,
			proxy: {
				'/api': {
					target: localApi,
					changeOrigin: true,
					ws: true,
					secure: false,
				},
				'/datainfo': {
					target: SIMSApi,
					changeOrigin: true,
					secure: false,
					ws: true,
				},
			},
		},
	};
});
