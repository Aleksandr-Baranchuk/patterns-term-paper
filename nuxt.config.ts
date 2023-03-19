// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  tailwindcss: {
    cssPath: '~/assets/css/app.scss'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    'nuxt-lodash',
    '@vueuse/nuxt',
    '@morev/vue-transitions/nuxt'
  ],
  app: {
    head: {
      title: '', // Todo: add meta
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' },
        { key: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#6619e6' },
        { name: 'theme-color', content: '#2a303c' }
      ]
    }
  },
  googleFonts: {
    families: {
      Sono: {
        wght: [400, 600, 800]
      }
    }
  }
});
