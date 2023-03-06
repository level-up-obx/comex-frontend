// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        categorias: resolve(__dirname, 'pages/categorias/index.html'),
        produtos: resolve(__dirname, 'pages/produtos/index.html'),
        clientes: resolve(__dirname, 'pages/clientes/index.html'),
      },
    },
  },
})
