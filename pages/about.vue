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
  <div class="md:py-8 px-0 md:px-8">
    <div class="flex flex-col-reverse md:flex-row md:gap-16">

      <div id="skills_title" class="p-4 lg:p-0 col-span-3 lg:col-span-2  w-full md:w-2/3">


        <ContentDoc :path="`${locale}/aboutme`"/>

        <Btn outlined id="contact_me_btn" class="text-xl px-5 py-3 mt-4" >{{ $t('contactMe') }}</Btn>

      </div>
      <div
        class="flex flex-col items-center w-full p-4 md:p-0   md:w-1/3 "
      >
        <div
          id="profile_image"
          class=""
        >
          <img
            class=" md:w-72 md:h-72 "
            src="/img/profile_picture.jpg"
            alt="profile piceture"
          />
          <div class="cover">

          </div>
        </div>
      </div>
    </div>
    <!-- Skills Section -->
    <SkillsSection />
  </div>
</template>
<style lang="scss">
#profile_image {
  position: relative;
  
  img {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    transition: all ease-in-out 0.3s;
  }
  
  img:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
  }
}
</style>
