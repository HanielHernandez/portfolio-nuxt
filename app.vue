<script setup lang="ts">

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const nuxtApp = useNuxtApp();
const loading = ref(true);
const colorMode = useColorMode()
const { finalizePendingLocaleChange } = useI18n()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

nuxtApp.hook("app:rendered", () => {
  loading.value = false;
});

</script>

<template>

  <body :class="{ dark: $colorMode.preference == 'dark' }">
    <div class="h-screen">

      <NuxtLayout>
        <NuxtPage />
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
