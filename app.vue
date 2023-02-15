<script setup lang="ts">

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const nuxtApp = useNuxtApp();
const loading = ref(true);
const colorMode = useColorMode()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const changeTheme = ()=>{
  colorMode.preference = colorMode.preference == 'dark' ? 'light': 'dark'
}

nuxtApp.hook("app:rendered", () => {
  console.log('page finished loading')
  loading.value = false;
});

// onMounted(()=>{
//   setTimeout(()=>{
//     loading.value = false
//   },1500)
// })

const onEnter = (el,done)=>{

  const tl = gsap.timeline({
    onComplete:()=> done()
  })

  const loadingIndicator = el.querySelector('.loading-indicator')

  tl.from(loadingIndicator,
    {
      scale:0,
      opacity: 0,
      duration: 0.3,
      ease: 'power4.easeInOut'
    },
    0.3)

    tl.to(el,
    {
      opacity: 1,
      height: '100%',
      duration: 0.3,
      ease: 'power4.easeInOut'
    },
    0)

   

  tl.play()

}

const onLeave = (el:HTMLElement, done: ()=>void)=>{


  const tl = gsap.timeline({
    onComplete:()=> done()
  })

  const loadingIndicator = el.querySelector('.loading-indicator')

  tl.to(loadingIndicator,
    {
      scale:0,
      opacity: 0,
      duration: 0.3,
      ease: 'power4.easeInOut'
    },
    0)

    tl.to(el,
    {
      opacity: 0,
      height: 0,
      ease: 'power4.easeInOut'
    },
    0.3)

  tl.play()

}

</script>

<template>
  <body :class="{dark: $colorMode.preference == 'dark'}">
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
    line-height: 1 ;
    // animation: smoth-rotate 2s cubic-bezier(0.245, 0.000, 0.935, 0.080) infinite;
    // animation: smoth-rotate 2s cubic-bezier(0.245, 0.000, 0.935, 0.080) infinite;

  }
</style>
