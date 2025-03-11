// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxtjs/color-mode',
        '@nuxtjs/algolia',
        '@nuxt/content',
        'nuxt-icon',
        'dayjs-nuxt',
        '@nuxt/image'
    ],
    devtools: { enabled: true },
    algolia: {
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        applicationId: process.env.ALGOLIA_APPLICATION_ID,
        instantSearch: {
            theme: 'algolia'
        }
    },

    runtimeConfig: {
        space: process.env.NUXT_CTF_SPACE_ID,
        accessToken: process.env.NUXT_CTF_CDA_ACCESS_TOKEN,
        public: {
            space: process.env.NUXT_CTF_SPACE_ID,
            accessToken: process.env.NUXT_CTF_CDA_ACCESS_TOKEN
        }
    },

    css: ['~/assets/css/tailwind.css'],

    // Defaults options
    tailwindcss: {
        configPath: 'tailwind.config.js',
        exposeConfig: { level: 2 },
        config: {},
        viewer: true
    },

    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English',
                file: { path: 'en-US.js', cache: false }
            },
            {
                code: 'es',
                name: 'Español',
                file: { path: 'es.js', cache: false }
            }
        ],
        // lazy: true,
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: false,
            fallbackLocale: 'en'
        },
        baseUrl: '',
        strategy: 'prefix',
        langDir: 'lang',
        defaultLocale: 'en',
        skipSettingLocaleOnNavigate: true
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    vite: {
        optimizeDeps: {
            exclude: ['class-validator']
        }
        // css: {
        //     preprocessorOptions: {
        //         // scss: {
        //         //     additionalData: '@use "@/assets/globals.scss" as *;'
        //         // }
        //     }
        // }
    },

    build: {
        transpile: ['gsap', 'class-validator']
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'Haniel Hernandez - Frontend Developer',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Personal website/portfolio of Haniel Hernandez'
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },

    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },

    components: [
        { path: '~/components/atoms', pathPrefix: false },
        { path: '~/components/organisms', pathPrefix: false },
        { path: '~/components/molecules', pathPrefix: false },
        '~/components'
    ],

    dayjs: {
        locales: ['en', 'es'],
        plugins: ['relativeTime', 'utc', 'timezone'],
        defaultLocale: 'es',
        defaultTimezone: 'America/New_York'
    },

    compatibilityDate: '2024-07-05',

    devtools: {
        enabled: true
    }
})
