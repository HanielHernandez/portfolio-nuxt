<script setup lang="ts">
import gsap from 'gsap'
import { navigateTo, useRoute, useRouter } from 'nuxt/app'
import { config } from 'chai'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type MlNavbarProps from './MlNavbar.types'

const route = useRoute()
const { locale: localLang, locales, setLocale } = useI18n()
const toLocalePath = useLocalePath()

const routes = computed(() => config.navbarRoutes)
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()
const links = ref<any[]>([])
const menuOpen = ref(false)
const scrolled = ref(false)
const colorMode = useColorMode()
const openMenu = () => {
    menuOpen.value = !menuOpen.value
}

// The layout scrolls inside an inner container (not the window), so we listen in
// the capture phase to catch scroll events bubbling up from any scroll ancestor.
const onScroll = (e: Event) => {
    const target = e?.target as HTMLElement | null
    const top = target?.scrollTop ?? window.scrollY ?? 0
    scrolled.value = top > 8
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, true)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll, true)
})
const isDark = ref(colorMode.preference == 'dark')
const currentLang = ref(localLang)
const props = defineProps<MlNavbarProps>()

const currentRoute = computed(
    () =>
        props.links.find((x) => toLocalePath(x.url) == route.path) || {
            path: '/'
        }
)

const currentPath = computed(() => {
    const { path } = router.currentRoute.value

    return path
})

const getTimeline = (el: HTMLElement, done: () => void) => {
    const tl = gsap.timeline({
        onComplete: done
    })
    tl.fromTo(
        el,
        {
            y: '-100%',
            x: '100%',
            borderBottomLeftRadius: '9999px',
            opacity: 0
        },
        {
            y: 0,
            x: 0,
            opacity: 1,
            borderBottomLeftRadius: 0,
            ease: 'power4.inOut',
            duration: 0.3
        },
        0
    )

    tl.to(
        '#line-2',
        {
            opacity: 0,
            duration: 0.2
        },
        0
    )
    tl.to(
        '#line-1',
        {
            transformOrigin: 'center',
            y: '0.37rem',
            duration: 0.2
        },
        0
    )
    tl.to(
        '#line-3',
        {
            transformOrigin: 'center',
            y: '-0.37rem',
            duration: 0.2
        },
        0
    )
    tl.to(
        '#line-1',
        {
            rotate: 45
        },
        0.2
    )
    tl.to(
        '#line-3',
        {
            rotate: -45
        },
        0.2
    )

    tl.from(
        el.getElementsByClassName('nav-link-container'),
        {
            x: '-30px',
            opacity: 0,
            stagger: 0.1,
            duration: 0.3
        },
        0.25
    )

    return tl
}

const onEnter = (el: HTMLElement, done: () => void) => {
    const tl = getTimeline(el, done)
    tl.play()
}
const onLeave = (el: HTMLElement, done: () => void) => {
    const tl = gsap.timeline({
        onComplete: done
    })
    tl.to(
        el.getElementsByClassName('nav-link-container'),
        {
            x: '-30px',
            opacity: 0,
            stagger: 0.1,
            duration: 0.3
        },
        0
    )

    tl.to(
        '#line-2',
        {
            opacity: 1,
            duration: 0.2
        },
        0.2
    )
    tl.to(
        '#line-1',
        {
            rotate: 0,
            duration: 0.2
        },
        0.2
    )
    tl.to(
        '#line-3',
        {
            rotate: 0,
            duration: 0.2
        },
        0.2
    )
    tl.to(
        '#line-1,#line-3',
        {
            y: 0
        },
        0.6
    )

    tl.to(
        el,
        {
            y: '-100%',
            x: '100%',
            borderBottomLeftRadius: '9999px',
            opacity: 0,
            ease: 'power4.inOut',
            duration: 0.3
        },
        0.6
    )

    tl.play()
}

function setLang() {
    setLocale(currentLang.value)
    const path = switchLocalePath(currentLang.value)
    navigateTo(path)
}

watch(isDark, (newval) => {
    colorMode.preference = newval ? 'dark' : 'light'
})
</script>
<template>
    <div>
        <header
            class="nav fixed z-40 top-0 left-0 w-full transition-all ease-in-out duration-300"
            :class="
                scrolled
                    ? 'py-2 lg:py-3 bg-white dark:bg-neutral-900 border-b border-neutral-200/70 dark:border-white/10 shadow-sm shadow-neutral-900/5'
                    : 'py-3 lg:py-6 border-b border-transparent'
            "
        >
            <div
                class="mx-auto w-full px-4 lg:px-8"
                style="max-width: 1024px"
            >
                <div class="flex w-full md:flex-row justify-between items-center gap-4">
                    <NuxtLink
                        :to="toLocalePath('/')"
                        class="logo group inline-flex items-center gap-1 text-lg md:text-xl uppercase font-black tracking-tight"
                    >
                        <span
                            class="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                        >
                            H
                        </span>
                        <span class="text-neutral-900 dark:text-white">
                            aniel<span class="text-blue-600"> FED</span>
                        </span>
                    </NuxtLink>

                    <nav class="hidden lg:block">
                        <ul
                            id="navMenu"
                            class="flex items-center gap-1 order py-1"
                        >
                            <li
                                v-for="(link, index) in props.links"
                                :key="`route-${index}`"
                                :ref="(el) => (links[index] = el)"
                                class="nav-link-container text-center"
                            >
                                <navbar-link
                                    :to="link.url"
                                    :active="toLocalePath(link.url) == currentPath"
                                >
                                    <span class="font-black text-blue-600/80 mr-0.5">{{ `0${index + 1}` }}</span>
                                    {{ link.text }}
                                </navbar-link>
                            </li>
                        </ul>
                    </nav>

                    <div class="items-center flex gap-1 md:gap-2 z-50">
                        <LangSwitcher />
                        <span class="hidden sm:inline-block h-5 w-px bg-neutral-200 dark:bg-white/10" />
                        <ThemeSwitcher
                            :is-dark="isDark"
                            @click="isDark = !isDark"
                        />
                        <div class="hidden items-center lg:flex gap-3">
                            <span class="h-5 w-px bg-neutral-200 dark:bg-white/10" />
                            <AtButton
                                element="a"
                                link
                                href="mailto:haniel1121@outlook.com"
                                class="rounded-full hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
                            >
                                {{ $t('navbar.contactMe') }}
                            </AtButton>
                        </div>
                        <button
                            class="ml-1 p-2 rounded-full w-11 h-11 grid place-content-center lg:hidden z-50 menu-button hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors duration-200"
                            :class="{ menuOpen }"
                            aria-label="Toggle menu"
                            @click="openMenu()"
                        >
                            <div
                                id="line-1"
                                class="border mb-1 mx-auto rounded-xl dark:border-white border-neutral-900 w-6"
                            />
                            <div
                                id="line-2"
                                class="border mb-1 mx-auto rounded-xl dark:border-white border-neutral-900 w-6"
                            />
                            <div
                                id="line-3"
                                class="border mx-auto rounded-xl dark:border-white border-neutral-900 w-6"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <transition
            :css="false"
            mode="out-in"
            @enter="onEnter"
            @leave="onLeave"
        >
            <div
                v-if="menuOpen"
                class="menu z-30 ease-out bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl w-screen h-screen fixed top-0 left-0"
            >
                <ul class="flex h-full flex-col justify-center items-center gap-2">
                    <li
                        v-for="(link, index) in props.links"
                        :key="`route-${index}`"
                        class="nav-link-container text-3xl font-bold text-center px-8 py-3"
                    >
                        <navbar-link
                            :to="link.url"
                            :active="toLocalePath(link.url) == currentPath"
                            @click="menuOpen = false"
                        >
                            <span class="font-black text-blue-600 mr-1">{{ `0${index + 1}.` }}</span>
                            {{ link.text }}
                        </navbar-link>
                    </li>
                    <li class="nav-link-container mt-6">
                        <AtButton
                            element="a"
                            link
                            href="mailto:haniel1121@outlook.com"
                            class="rounded-full text-lg px-6 py-3 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
                        >
                            {{ $t('navbar.contactMe') }}
                        </AtButton>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<style lang="scss" scoped>
ul {
    list-style: none;
    padding-left: 0;
}

// .menu-button{
//   &.menuOpen {
//     #line-1, #line-3,#line-2{
//      @apply transition-all ease-in-out duration-500;
//      transform: translate(0,0) rotate(0deg);
//     }
//     #line-2 {
//       opacity: 0
//     }
//     #line-1, #line-3{
//       transform-origin: center;
//     }
//     #line-1 {
//       transform: translate(0,6px) rotate(45deg);
//     }
//     #line-3 {
//       transform: translate(0,-6px) rotate(-45deg);
//     }
//   }
// }
</style>
