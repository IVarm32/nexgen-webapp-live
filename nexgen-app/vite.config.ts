import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore - Library missing types
import { VitePWA } from 'vite-plugin-pwa'
// @ts-ignore - Library missing types
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://live.nexgengospelradio.com/',
      dynamicRoutes: ['/requests', '/prayer', '/profile'],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'NexGen Gospel Radio',
        short_name: 'NexGen Radio',
        description: 'God Promises Never Fails - 24/7 Gospel Radio',
        theme_color: '#0EA5E9',
        background_color: '#0f172a',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        icons: [
          {
            src: '/brand_logo_main.jpeg', // Using available asset for now
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any maskable'
          },
          {
            src: '/brand_logo_main.jpeg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
