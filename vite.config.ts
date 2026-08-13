import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  // Crucial: Base URL must have a trailing slash for GitHub Pages asset routing
  base: '/portfolio', 

  optimizeDeps: {
    // Forces Vite to pre-bundle it so it doesn't scan modules repeatedly
    include: ['@thesvg/react'], 
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: false,
    
    // Rolldown specific optimizations for Vite 8+
    rolldownOptions: {
      checks: {
        // Optional: Suppresses [PLUGIN_TIMINGS] logs if the CSS builds slow you down
        pluginTimings: false 
      },
      output: {
        // Implements native advanced code splitting to address large chunks
        codeSplitting: {
          minSize: 20000, // 20KB threshold for individual extracted chunks
          groups: [
            {
              name: 'icons-vendor',
              // Isolates entire svg/devicon components into a parallel cacheable chunk
              test: /[\\/]node_modules[\\/](@devicon|@thesvg)/,
              priority: 20,
            },
            {
              name: 'framework-vendor',
              // Groups the underlying rendering engine modules together
              test: /[\\/]node_modules[\\/](react|react-dom)/,
              priority: 10,
            }
          ]
        }
      }
    }
  },
  
  plugins: [  
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          // Grab your source files
          src: 'public/assets/certificates/*',
          // Output path relative to your dist folder root
          dest: './',
          // FIX: The correct, type-safe property to prevent subfolder creation
          rename: {
            stripBase: true
          }
        },
        {
          // Grab your source files
          src: 'public/assets/images/*',
          // Output path relative to your dist folder root
          dest: './',
          // FIX: The correct, type-safe property to prevent subfolder creation
          rename: {
            stripBase: true
          }
        },
        {
          // Grab your source files
          src: 'public/assets/resume/*',
          // Output path relative to your dist folder root
          dest: './',
          // FIX: The correct, type-safe property to prevent subfolder creation
          rename: {
            stripBase: true
          }
        },
        {
          // Grab your source files
          src: 'public/favicon.svg',
          // Output path relative to your dist folder root
          dest: './',
          // FIX: The correct, type-safe property to prevent subfolder creation
          rename: {
            stripBase: true
          }
        },
      ]
    })
  ],
})
