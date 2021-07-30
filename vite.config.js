const { resolve } = require('path')
import { defineConfig } from 'vite'
export default defineConfig({
    base: '/planet/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                no3d: resolve(__dirname, 'no3d/index.html')
            }
        }
    },

})