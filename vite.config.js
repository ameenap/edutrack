import { defineConfig } from 'vite'

export default defineConfig({
  // No React plugin needed — we're using Vite purely as build/dev server
  // The app is vanilla JS with Supabase, no JSX in use
  build: {
    outDir: 'dist',
    // Don't inline assets — keep them as separate files for Cloudflare Pages
    assetsInlineLimit: 0,
  },
  server: {
    port: 3000,
    open: true,
  },
})
