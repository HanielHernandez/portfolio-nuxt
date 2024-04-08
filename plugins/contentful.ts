import contentful from 'contentful'
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    return {
        provide: {
            contentfulClient: contentful.createClient({
                space: config.public.space,
                accessToken: config.public.accessToken
            })
        }
    }
})
