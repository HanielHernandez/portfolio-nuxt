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
    <div class="grid grid-cols-3 gap-x-14">
      <div
        class="flex col-span-3 md:col-span-1 flex-col items-center w-full "
      >
        <div
          id="profile_image"
          class="border-4  border-blue-500 border-collapse mb-16 lg:mb-0"
        >
          <img
            class="w-48 h-48 md:w-72 md:h-72 border-white border-4"
            src="/img/profile_picture.jpg"
            alt="profile piceture"
          />
        </div>
      </div>
      <div id="skills_title" class="p-4 lg:p-0 col-span-3 lg:col-span-2">


        <ContentDoc :path="`${locale}/aboutme`"/>

      </div>
    </div>
    <!-- Skills Section -->
    <SkillsSection />
  </div>
</template>
