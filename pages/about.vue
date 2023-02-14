<script lang="ts" setup>
import { ref } from 'vue'
import animations from '~~/animations';
const paragraphs = ref([
  'aboutMe.paragraph1',
  'aboutMe.paragraph2',
  'aboutMe.paragraph3'
])
const { locale } = useI18n();

definePageMeta({
    pageTransition: {
      name: 'custom-transition',
      mode: 'out-in',
      onEnter: (el, done) => {
        console.log('onenter',el)
        animations['about'].onEnter(el,done)
      },
      onLeave: (el,done) => {
        animations['about'].onLeave(el,done)
      }
    }
  })
</script>
<template>
  <div class="py-8">
    <div class="flex flex-col md:flex-row">
      <div
        class="flex flex-col items-center w-full md:pr-4 lg:pr-8 md:w-2/5 p-4 md:p-0"
      >
        <div
          id="profile_image"
          class="border-4 rounded-full border-blue-500 border-collapse"
        >
          <img
            class="rounded-full w-48 h-48 md:h-auto md:w-full shadow-md border-white border-4"
            src="/img/profile_picture.jpg"
            alt="profile piceture"
          />
        </div>
      </div>
      <div id="skills_title" class="flex flex-col w-full md:w-3/5 p-4 md:pl-24 text-justify lg:pr-0">


        <ContentDoc :path="`${locale}/aboutme`"/>

      </div>
    </div>
    <!-- Skills Section -->
    <SkillsSection />
  </div>
</template>
