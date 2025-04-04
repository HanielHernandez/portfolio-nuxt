<script setup lang="ts">
import gsap from "gsap";
import type MlNavbarProps from "./MlNavbar.types";
import { navigateTo, useRoute, useRouter } from "nuxt/app";
import { config } from "chai";
import { computed, ref, watch } from "vue";

const route = useRoute();
const { locale: localLang, locales, setLocale } = useI18n();
const toLocalePath = useLocalePath();

const routes = computed(() => config.navbarRoutes);
const router = useRouter()
const switchLocalePath = useSwitchLocalePath();
const links = ref<any[]>([]);
const menuOpen = ref(false);
const colorMode = useColorMode();
const openMenu = () => {
  menuOpen.value = !menuOpen.value;
};
const isDark = ref(colorMode.preference == "dark");
const currentLang = ref(localLang);
const props = defineProps<MlNavbarProps>()

const currentRoute = computed(
  () =>
    props.links.find((x) => toLocalePath(x.url) == route.path) || {
      path: "/",
    }
);

const currentPath = computed(
  () => {
    const { path } = router.currentRoute.value

    return path
  }
);


const getTimeline = (el: HTMLElement, done: () => void) => {
  const tl = gsap.timeline({
    onComplete: done,
  });
  tl.fromTo(
    el,
    {
      y: "-100%",
      x: "100%",
      borderBottomLeftRadius: "9999px",
      opacity: 0,
    },
    {
      y: 0,
      x: 0,
      opacity: 1,
      borderBottomLeftRadius: 0,
      ease: "power4.inOut",
      duration: 0.3,
    },
    0
  );

  tl.to(
    "#line-2",
    {
      opacity: 0,
      duration: 0.2,
    },
    0
  );
  tl.to(
    "#line-1",
    {
      transformOrigin: "center",
      y: "0.37rem",
      duration: 0.2,
    },
    0
  );
  tl.to(
    "#line-3",
    {
      transformOrigin: "center",
      y: "-0.37rem",
      duration: 0.2,
    },
    0
  );
  tl.to(
    "#line-1",
    {
      rotate: 45,
    },
    0.2
  );
  tl.to(
    "#line-3",
    {
      rotate: -45,
    },
    0.2
  );

  tl.from(
    el.getElementsByClassName("nav-link-container"),
    {
      x: "-30px",
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
    },
    0.25
  );

  return tl;
};

const onEnter = (el: HTMLElement, done: () => void) => {
  const tl = getTimeline(el, done);
  tl.play();
};
const onLeave = (el: HTMLElement, done: () => void) => {
  const tl = gsap.timeline({
    onComplete: done,
  });
  tl.to(
    el.getElementsByClassName("nav-link-container"),
    {
      x: "-30px",
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
    },
    0
  );

  tl.to(
    "#line-2",
    {
      opacity: 1,
      duration: 0.2,
    },
    0.2
  );
  tl.to(
    "#line-1",
    {
      rotate: 0,
      duration: 0.2,
    },
    0.2
  );
  tl.to(
    "#line-3",
    {
      rotate: 0,
      duration: 0.2,
    },
    0.2
  );
  tl.to(
    "#line-1,#line-3",
    {
      y: 0,
    },
    0.6
  );

  tl.to(
    el,
    {
      y: "-100%",
      x: "100%",
      borderBottomLeftRadius: "9999px",
      opacity: 0,
      ease: "power4.inOut",
      duration: 0.3,
    },
    0.6
  );

  tl.play();
};

function setLang() {
  setLocale(currentLang.value);
  const path = switchLocalePath(currentLang.value);
  navigateTo(path);
}

watch(isDark, (newval) => {
  colorMode.preference = newval ? "dark" : "light";
});
</script>
<template>
  <div>
    <div
      class="nav fixed z-40 top-0 left-0 p-3 lg:p-6 flex w-full dark:bg-neutral-900/90 transition-colors ease-in-out duration-300 bg-white">
      <div class="mx-auto w-full" style="max-width: 1024px">
        <div class="flex w-full md:flex-row justify-between items-center">
          <NuxtLink :to="toLocalePath('/')" class="icon md:text-xl uppercase font-black logo text-blue-600">
            Haniel FED
          </NuxtLink>
          <div>
            <ul id="navMenu" class="hidden transitions md:shadow-none md:py-0 w-100 lg:flex dark:text-white">
              <li v-for="(link, index) in props.links" :key="`route-${index}`" :ref="(el) => (links[index] = el)"
                class="nav-link-container text-center">
                <navbar-link :to="link.url" :active="toLocalePath(link.url) == currentPath">
                  <span class="font-black text-blue-600"> {{ `0${index + 1}.` }}</span>
                  {{ link.text }}
                </navbar-link>
              </li>
            </ul>
          </div>
          <div class="items-center flex z-50 ">
            <LangSwitcher />
            <span class="inline-block mx-1 md:mx-2 lg:mx-3 dark:text-white/20 text-neutral-300">|</span>
            <ThemeSwitcher :is-dark="isDark" @click="isDark = !isDark" />
            <span class="inline-block mx-1 md:mx-2 lg:mx-3 dark:text-white/20 text-neutral-300">|</span>
            <AtButton element="a" link href="mailto:haniel1121@outlook.com "
              class="hidden lg:inline-block hover:drop-shadow-lg hover:shadow-md transition-shadow ease-in-out duration-500">
              {{ $t("navbar.contactMe") }}
            </AtButton>
            <button class="p-2 rounded-full w-12 h-12 lg:hidden z-50 menu-button" @click="openMenu()"
              :class="{ menuOpen }">
              <div id="line-1" class="border mb-1 mx-auto rounded-xl dark:border-white border-black w-6" />
              <div id="line-2" class="border mb-1 mx-auto rounded-xl dark:border-white border-black w-6" />
              <div id="line-3" class="border mx-auto rounded-xl dark:border-white border-black w-6" />
            </button>
          </div>
        </div>
      </div>
      <transition :css="false" mode="out-in" @enter="(onEnter)" @leave="(onLeave)">
        <div v-if="menuOpen"
          class="menu z-40 ease-out bg-white dark:bg-black/80 w-screen h-screen bg-opacity-90 fixed top-0 left-0">
          <ul class="flex h-full flex-col justify-center items-center">
            <li v-for="(link, index) in props.links" :key="`route-${index}`"
              class="nav-link-container text-3xl text-center px-8 py-4">
              <navbar-link :to="link.url" :active="toLocalePath(link.url) == currentPath">
                <span class="font-black text-blue-600"> {{ `0${index + 1}.` }}</span>
                {{ link.text }}
              </navbar-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
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
// }</style>
