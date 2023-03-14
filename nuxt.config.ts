// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  tailwindcss: {
    cssPath: '~/assets/css/app.scss'
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon', '@nuxtjs/google-fonts', 'nuxt-lodash'],
  googleFonts: {
    families: {
      Sono: {
        wght: [400, 600, 800]
      }
    }
  }
});
