import colors from 'vuetify/es5/util/colors'

require('dotenv').config()
const { API_KEY, CONTACT_BASE_URL, BASE_URL } = process.env

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: '小平市で活動しているキッズダンスサークル、ソウルスパイスです',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content:
          '小平市で活動しているキッズダンスサークル、ソウルスパイスです。小学校１年生から中学校３年生までのキッズ達が、 楽しく活動 しています。 ほとんどの子供たちが初心者からダンスを始めました。ヒップホップを中心に、ロック、ハウスとなかなかキッズダンスでは習えないダンスに挑戦しています。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '小平市で活動しているキッズダンスサークル、ソウルスパイスです'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: BASE_URL },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '小平市で活動しているキッズダンスサークル、ソウルスパイスです'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '小平市で活動しているキッズダンスサークル、ソウルスパイスです。小学校１年生から中学校３年生までのキッズ達が、 楽しく活動 しています。 ほとんどの子供たちが初心者からダンスを始めました。ヒップホップを中心に、ロック、ハウスとなかなかキッズダンスでは習えないダンスに挑戦しています。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: BASE_URL + '/ogp.jpg'
      },
      {
        hid: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content: 'SoulSpice'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/components.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    API_KEY,
    CONTACT_BASE_URL
  }
}
