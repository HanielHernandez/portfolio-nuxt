<script setup lang="ts">
  import animations from '~~/animations';
  const toLocalePath = useLocalePath()
  const route = useRoute()

  useHead({
  title: 'Haniel Henandez - Home'
})
  definePageMeta({
   
    pageTransition: {
      name: 'custom-transition',
      mode: 'out-in',
      onEnter: (el, done) => {
        animations['home'].onEnter(el,done)
      },
      onLeave: (el,done) => {
        animations['home'].onLeave(el,done)
      }
    }
  })



</script>
<template>
  <div
    class="flex flex-col-reverse md:flex-row md:py-16 justify-center flex-nowrap md:justify-start"
    style="height: 100%"
  >
    <div
      id="rightSide"
      class="flex justify-center flex-col w-full md:w-1/2 md:h-full px-4 py-10"
    >
      <h2
        class="text-xl text-center md:text-left font-bold md:text-4xl text-blue-600 mb-8 md:mb-12 dark:text-white"
      >
        {{ $t('home.firstLine') }}
      </h2>
      <h1
        class="text-center md:text-left leading font-black text-3xl ling md:text-3xl lg:text-5xl mb-8 text-neutral-800 md:mb-12 dark:text-white"
      >
        {{ $t('home.secondLine') }}
      </h1>
      <p
        class="text-center md:text-left text-neutral-600 dark:text-neutral-400 mb-8"
        style="max-width: 650px"
      >
        {{ $t('home.paragraph') }}
      </p>
      <div class="cta-buttons flex items-center justify-center md:justify-start mb-8">
        <NuxtLink
          :to="toLocalePath('/my-work')"
          class="bg-blue-600 md:text-lg lg:text-xl font-bold transition-all ease-in-out btn shadow-md duration-300 hover:bg-blue-800 mr-4 border-ra text-white px-4 py-3 md:px-5 md:py-4 lg:px-5 lg:py-3 rounded-sm"
          >{{ $t('home.myWorkBtn') }}</NuxtLink
        >
        <a
          href="mailto:haniel1121@outlook.com"
          class="border border-blue-600 md:text-lg lg:text-xl font-bold btn transition-all ease-in-out rounded-sm duration-300 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 md:px-5 md:py-4 lg:px-5 lg:py-3"
          >{{ $t('contactMe') }}</a
        >
      </div>
      <div id="social_links" class="text-3xl ">

        <a  href="https://www.linkedin.com/in/hanielhernandez/" 
            alt="my linkedin profile"
            target="_blank"
            class="social-link mr-2 text-neutral-900 hover:text-blue-600 dark:text-neutral-200 transition-colors ease-in-out duration-200">
            <Icon name="mdi:linkedin"/>
          
        </a>
        <a  href="https://github.com/HanielHernandez/" 
            target="_blank"
            alt="my github profile"
            class="social-link mr-2 text-neutral-900 hover:text-blue-600  dark:text-neutral-200 transition-colors ease-in-out duration-200">
            <Icon name="mdi:github"/>
        </a>

      </div>
    </div>
    <div
      class="flex justify-center items-center w-full md:w-1/2 md:h-full px-4"
    >
      <img src="/img/home_graph.svg" class="graph w-full h-auto" />
    </div>
  </div>
</template>
<style lang="scss">
  .cta-buttons{
    a:hover {
      transform: translateY(-0.5rem);
    }
  }
</style>
