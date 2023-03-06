import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src"); // mover o index para a pasta src

export default defineConfig({
  root: root,
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        category: resolve(root, "pages/categories/index.html"),
        product: resolve(root, "pages/clients/index.html"),
        client: resolve(root, "pages/products/index.html"),
      },
    },
  },
});