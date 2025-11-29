// vite.config.js
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),

        productListing: resolve(__dirname, "src/product-listing.html"),

        cart: resolve(__dirname, "src/cart/index.html"),

        product: resolve(__dirname, "src/product_pages/index.html"),

        checkout: resolve(__dirname, "src/checkout/index.html"),
        
        success: resolve(__dirname, "src/checkout/success.html"),
      },
    },
  },
});