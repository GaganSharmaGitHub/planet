const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                no3d: resolve(__dirname, 'no3d/index.html')
            }
        }
    },
}