import {resolve} from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'app');

export default defineConfig ({
    build: {
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                category: resolve(root, 'page/category/category.html'),
                product_form: resolve(root, 'page/product/product_form.html'),
                client: resolve(root, 'page/client/client.html'),
            },
        },
    },
});