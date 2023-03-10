import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root: root,
    build: {
        outDir: outDir,
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                categorias: resolve(root, 'pagina/categorias/index.html'),
                produtos: resolve(root, 'pagina/produtos/index.html'),
                clientes: resolve(root, 'pagina/clientes/index.html')
            },
        }
    }
});