<script setup lang="ts">
import { MlBioProps } from './MlBio.types'

const props = defineProps<MlBioProps>()


</script>
<template lang="">
   <div class="flex flex-col-reverse md:flex-row md:gap-4 lg:gap-16">
      <div id="skills_title" class="p-4  text-center md:text-left  lg:p-0 col-span-3 lg:col-span-2  w-full md:w-3/5">
         <h2  class="text-3xl font-bold">
            {{title}}
         </h2>
         <AtRichText :document="biography" />
         <AtButton outlined size="lg" v-if="actionLink" element="a" :label="actionLink.text" :href="actionLink.url" />
      </div>
      <div
        class="flex flex-col  md:items-end items-center justify-center w-full p-4 md:p-0   md:w-2/5 "
      >
          <AtImage v-bind="image" id="profile_image" class="grayscale hover:grayscale-0 transition-all hover:scale-110 ease-in-out duration-500 w-[300px] h-[300px]" />
      </div>
    </div>
</template>
<style lang="scss"></style>
