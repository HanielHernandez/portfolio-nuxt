import { createClient } from 'contentful'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  return {
    provide: {
      contentfulClient: createClient({
        space: config.space,
        accessToken: config.accessToken
      })
    }
  }
})
