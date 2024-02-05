import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mkcert()],
    server: {
        port: 4200,
        strictPort: false,
    },
    preview: {
        port: 4173,
        strictPort: false,
    }

})
