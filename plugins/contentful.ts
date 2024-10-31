import contentfull from 'contentful'
const { createClient } = contentfull

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    return {
        provide: {
            contentfulClient: createClient({
                space: config.public.space,
                accessToken: config.public.accessToken
            })
        }
    }
})
