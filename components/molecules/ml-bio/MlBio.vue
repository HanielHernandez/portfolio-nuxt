<script setup lang="ts">
import type { MlBioProps } from './MlBio.types.ts';


const props = defineProps<MlBioProps>()


</script>
<template lang="">
   <div class="flex flex-col-reverse md:flex-row md:gap-4 lg:gap-16">
      <div id="bio" class="p-4  text-center md:text-left  lg:p-0 col-span-3 lg:col-span-2  w-full md:w-3/5">
         <!-- <h2  class="text-3xl xl:text-4xl font-bold md mb-4 xl:mb-8 dark:text-neutral-200 ">
            {{title}}
         </h2> -->
         <AtText variant="h2"  class="mb-4 xl:mb-8">
          {{title}}
         </AtText>
          <AtText as="div" class="mb-4 xl:mb-6 ">
            <AtRichText :document="biography"  />
         </AtText> 
         
         <AtButton  outlined size="lg" v-if="actionLink" element="a" :label="actionLink.text" :href="actionLink.url" />
      </div>
      <div
        class="flex flex-col md:items-end items-center justify-center w-full p-4 md:p-0 md:w-2/5"
        id="profile_image"
      >
          <AtImage v-bind="image" id class="rounded-md grayscale hover:grayscale-0 transition-all hover:scale-110 ease-in-out duration-500 w-[300px] h-[300px]" />
      </div>
    </div>
</template>
<style lang="scss"></style>
