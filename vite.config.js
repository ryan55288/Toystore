import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
// import { createVuePlugin } from "vite-plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_function.scss";`,
      },
    },
  },
});
