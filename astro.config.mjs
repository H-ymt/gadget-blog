import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  vite: {
    experimental: {
      viewTransitions: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/_breakpoint.scss";`
        }
      }
    }
  },
  integrations: [icon()]
})
