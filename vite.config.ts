import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
// 按需加载自定义组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePluginForArco } from '@arco-plugins/vite-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // vue全家桶不放在前面打包产物会不可用
          vue: ['vue', 'vue-router', 'pinia'],
          'element-plus': ['element-plus'],
          lodash: ['lodash-es']
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `
        //     @use "@/assets/styles/element-plus-customization/index.scss" as *;`
      }
    }
  },
  define: {
    // 为了能够正常使用jsencrypt依赖包
    'process.env': {}
  },
  plugins: [
    // 老旧浏览器支持，默认没有ie11，使构建产物支持诸如可选链等新语法，会使包体积增大约十分之一，但会按需
    legacy({
      // globalThis在chrome71以上才支持，刚好内部是70，离了谱
      targets: ['Chrome 70'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      // modernPolyfills: true
    }),
    vue(),
    // 使svg能像组件一样使用，svgo的默认优化
    svgLoader({ svgo: false }),
    AutoImport({
      dts: 'src/auto-import.d.ts',
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ArcoResolver()]
    }),
    // 按需引入
    Components({
      dts: 'src/components.d.ts',
      // dts: true, // 如果安装了 `typescript`，则默认启用。Make sure you also add components.d.ts to your tsconfig.json under includes.
      dirs: ['src/components'], // 按需加载的文件夹]
      resolvers: [
        // arco design按需加载
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
    vitePluginForArco({
      style: 'css'
    }),
    // 增加tsx支持，写复杂模版可以用一下
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/')
    }
  },
  server: {
    port: 9000
  }
})
