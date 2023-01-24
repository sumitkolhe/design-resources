import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Design Resources',
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'Kut' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },

  srcDir: 'src',

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon'],

  build: {
    transpile: ['@headlessui/vue'],
  },

  alias: {
    components: fileURLToPath(new URL('./src/components', import.meta.url)),
    composables: fileURLToPath(new URL('./src/composables', import.meta.url)),
    interfaces: fileURLToPath(new URL('./src/interfaces', import.meta.url)),
    store: fileURLToPath(new URL('./src/store', import.meta.url)),
  },
})
