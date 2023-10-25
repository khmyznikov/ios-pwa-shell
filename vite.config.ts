import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ios-pwa-shell",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext", "edge100", "firefox100", "chrome100", "safari18"],
    outDir: "docs",
  },
  // publicDir: "node_modules/@esri/calcite-components/dist/calcite",
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'docs/sw.js',
        globDirectory: 'docs',
        globPatterns: [
          '**/*.{html,js,css,json, png}',
        ],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ]
})
