import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');

export default defineConfig({
    root: root,
    build: {
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                categorias: resolve(root, 'pages/categorias/index.html'),
                produtos: resolve(root, 'pages/produtos/index.html'),
                clientes: resolve(root, 'pages/clientes/index.html')
            },
        }
    }
});
