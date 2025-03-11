import { createClient } from 'contentful'

const config = {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const client = createClient({
        space: config.public.contentfulSpaceId as string,
        accessToken: config.public.contentfulAccessToken as string
    })

    nuxtApp.provide('contentfulClient', client)
})
