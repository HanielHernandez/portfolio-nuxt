import es from "./lang/es"

// https://nuxt.com/docs/api/configuration/nuxt-config
const getLocal = ():string=>{
  return localStorage.getItem('lang') || (navigator.language == 'es-ES' ? 'es' : 'en')
}

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.ts'
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.ts'
      }
    ],
    lazy: true,
    langDir: '/lang',
    defaultLocale: 'en' ,
    strategy: 'prefix'
  }
})
