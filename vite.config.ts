import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  base:'smartisan-ui',
  plugins: [vue(),vueJsx()],
  resolve:{
    alias:{
      '@':'/src'
    }
  },
  // build: {
  //   rollupOptions: {
  //     // 请确保外部化那些你的库中不需要的依赖
  //     external: ['vue','vue-router'],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  //   lib: {
  //     entry: './src/packages/index.ts',
  //     name: 'smartisan-ui',
  //   },
  // },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@import "./src/style/color.scss";',
      },
    },
  },
})
