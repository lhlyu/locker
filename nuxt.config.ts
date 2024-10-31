// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'app/',
  devtools: { enabled: false },
  modules: [
    'nuxt-mongoose',
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
  nitro: {
    storage: {
      data: {
        driver: 'vercelKV',
        base: 'locker'
      }
    }
  },
  app: {
    keepalive: true,
    head: {
      htmlAttrs: {
        lang: 'zh-cmn-Hans',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '',
    },
    rootTag: 'body',
  },
  // imports: {
  //   dirs: ['stores'],
  // },
  // build: {
  //   analyze: {
  //     enabled: true,
  //   },
  // },
  // features: {
  //   inlineStyles: false,
  // },
})
