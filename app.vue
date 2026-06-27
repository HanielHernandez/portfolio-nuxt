<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const nuxtApp = useNuxtApp()
const loading = ref(true)
const colorMode = useColorMode()
const { finalizePendingLocaleChange } = useI18n()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

nuxtApp.hook('app:rendered', () => {
    loading.value = false
})

// With i18n `skipSettingLocaleOnNavigate: true`, switching language only records a
// *pending* locale change; it must be finalized manually, otherwise `locale.value`
// never updates and the language switcher only works once. We finalize on the page
// transition's onBeforeEnter (after the leave animation, before the new page enters)
// so the language flips in sync with the transition. This hook is merged (via defu)
// into every page's transition without overriding the pages' own name/onEnter/onLeave.
const onBeforeEnter = async () => {
    await finalizePendingLocaleChange()
}
</script>

<template>
    <body :class="{ dark: $colorMode.preference == 'dark' }">
        <div class="h-screen">
            <NuxtLayout>
                <NuxtPage :transition="{ onBeforeEnter }" />
            </NuxtLayout>
        </div>
    </body>
</template>

<style lang="scss">
@keyframes smoth-rotate {
    0% {
        transform: rotate(0deg);
    }

    /* 50% {
      transform: rotate(180deg);
    } */
    100% {
        transform: rotate(360deg);
    }
}

.loading-indicator {
    line-height: 1;
    // animation: smoth-rotate 2s cubic-bezier(0.245, 0.000, 0.935, 0.080) infinite;
    // animation: smoth-rotate 2s cubic-bezier(0.245, 0.000, 0.935, 0.080) infinite;
}
</style>
