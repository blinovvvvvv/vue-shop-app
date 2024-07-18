import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	define: {
		SUPABASE_KEY: process.env.SUPABASE_KEY,
	},
})
