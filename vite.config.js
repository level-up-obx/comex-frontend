import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist")

export default defineConfig({
  root: root,
  build: {
    outDir: outDir,
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