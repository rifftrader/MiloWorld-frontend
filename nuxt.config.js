export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Milo World | Milo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Personal project incorporating Nuxt, Apollo, Strapi and MongoDB. Not to be taken seriously.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=NTR&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.1/css/all.css',
        integrity: 'sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp',
        crossOrigin: 'anonymous'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/styles/main.css',
    '~/assets/styles/custom.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    '@nuxtjs/cloudinary',
    '@nuxtjs/markdownit'
  ],

  // DELETE IF NOT WORKING
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // FINISH DELETING HERE IF NOT WORKING

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  strapi: {
    entities: ['data'],
    url: process.env.strapiBaseUri || 'http://localhost:1337'
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
      }
    }
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  cloudinary: {
    cloudName: 'something-weird',
    useComponent: true
  },

  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },

  ssr: true,

  loading: {
    color: 'black',
    height: '5px',
    continuous: true,
    duration: 5000,
    throttle: 0
  },

  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  }
}
