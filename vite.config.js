import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
// import { createVuePlugin } from "vite-plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      dirs: ['src/utils']
    })
  ],
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
