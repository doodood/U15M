
export default {
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'tachyons/css/tachyons.css',
    './assets/sass/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components.js',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: 'memory'
      }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['@nuxtjs/markdownit', { html: true, injected: true }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   transpile: ['vue-agile'],
    extend (config, ctx) {
    }
  }
}
