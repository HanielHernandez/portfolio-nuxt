<script setup lang="ts">
import AtImage from '../atoms/at-image/AtImage.vue';
import { Document } from '@contentful/rich-text-types';

type AtImageProps = InstanceType<typeof AtImage>["$props"];
const toLocalePath = useLocalePath()

const props = defineProps<{
  title: String,
  subTitle: String,
  description: Document,
  image: AtImageProps
}>()
</script>
<template>
  <div class="flex flex-col-reverse lg:flex-row md:py-16 justify-center flex-nowrap md:justify-start"
    style="height: calc(100vh - 112px)">
    <div id="rightSide"
      class="flex justify-center flex-col w-full lg:w-1/2 md:h-full px-4 py-10 lg:px-0 text-center lg:text-left">
      <h2 class="section-title text-xl font-bold lg:text-4xl text-blue-600 mb-8 lg:mb-12 dark:text-blue-300">
        {{ subTitle }}
      </h2>
      <h1
        class=" leading font-black text-3xl ling md:text-3xl lg:text-5xl mb-8 text-neutral-800 lg:mb-12 dark:text-white">
        {{ title }}
      </h1>
      <div class=" text-neutral-600 mx-auto dark:text-neutral-400 mb-8" style="max-width:650px">
        <AtRichText :document="description" />
      </div>
      <div class="cta-buttons flex items-center justify-center lg:justify-start mb-8">
        <NuxtLink :to="toLocalePath('/my-work')"
          class="bg-blue-600 md:text-lg lg:text-xl font-bold transition-all ease-in-out btn shadow-md duration-300 hover:bg-blue-800 mr-4 border-ra text-white px-4 py-3 md:px-5 md:py-4 lg:px-5 lg:py-3 rounded-sm">
          {{ $t('home.myWorkBtn') }}</NuxtLink>
        <a href="mailto:haniel1121@outlook.com"
          class="border border-blue-600 md:text-lg lg:text-xl font-bold btn transition-all ease-in-out rounded-sm duration-300 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 md:px-5 md:py-4 lg:px-5 lg:py-3">{{
            $t('contactMe') }}</a>
      </div>
      <div id="social_links" class="text-3xl text-center lg:text-left ">
        <a href="https://www.linkedin.com/in/hanielhernandez/" alt="my linkedin profile" target="_blank"
          class="social-link mr-2 text-neutral-900 hover:text-blue-600 dark:text-neutral-200 transition-colors ease-in-out duration-200">
          <Icon name="mdi:linkedin" />
        </a>
        <a href="https://github.com/HanielHernandez/" target="_blank" alt="my github profile"
          class="social-link mr-2 text-neutral-900 hover:text-blue-600  dark:text-neutral-200 transition-colors ease-in-out duration-200">
          <Icon name="mdi:github" />
        </a>
      </div>
    </div>
    <div class="flex justify-center items-center w-full lg:w-1/2 lg:h-full px-4 lg:px-0">
      <AtImage v-bind="image" class="graph" />
    </div>
  </div>
</template>
<style lang="scss"></style>
