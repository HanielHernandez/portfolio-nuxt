import es from "./lang/es"

// https://nuxt.com/docs/api/configuration/nuxt-config
const getLocal = (): string => {
  return localStorage.getItem('lang') || (navigator.language == 'es-ES' ? 'es' : 'en')
}

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.js'
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.js'
      }
    ],
    // lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect:true,
      fallbackLocale: 'en',
    },
    baseUrl: '/',
    strategy: 'prefix',
    langDir: '/lang',
    defaultLocale: 'en',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/globals.scss" as *;'
        }
      }
    }
  },
  loading: {
    color: 'blue',
    height: '5px'
  }
})
