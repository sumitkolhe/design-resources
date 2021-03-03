export default {
  target: 'static',
  ssr: false,
  head: {
    titleTemplate: '%s - Design Resources for Developers',
    title: 'The Index',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900',
      },
    ],
  },

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  plugins: ['~/plugins/notifier.ts'],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#ffffff',
          secondary: '#613dc1',
          accent: '#ff5050',
          surface: '#242424',
          background: '#121212',
        },
        light: {
          primary: '#111111',
          secondary: '#00bbf9',
          accent: '#ff5050',
          surface: '#fafafa',
          background: '#fff',
        },
      },
    },
  },

  build: {
    extractCSS: true,
  },
}
