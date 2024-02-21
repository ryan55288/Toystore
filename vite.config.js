import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
// import { createVuePlugin } from "vite-plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'
import imagemin from 'unplugin-imagemin/vite';

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
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
    }),
    imagemin({
      mode: "sharp",
      compress: {
        jpeg: {
          // 0 ~ 100
          quality: 25,
        },
        png: {
          // 0 ~ 100
          quality: 25,
        },
        webp: {
          // 0 ~ 100
          quality: 25,
        },
      },
      conversion: [
        { from: "png", to: "webp" },
        { from: "jpeg", to: "png" },
      ],
      cache: false,
    }),
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
