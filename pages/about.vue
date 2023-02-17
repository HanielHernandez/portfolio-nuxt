<script lang="ts" setup>
import { ref } from 'vue'
import animations from '~~/animations';

useHead({
  title: 'Hanie Hernandez - About Me'
})


definePageMeta({
    title: "About me",
    pageTransition: {
      name: 'custom-transition',
      mode: 'out-in',
      onEnter: (el, done) => {
        animations['about'].onEnter(el,done)
      },
      onLeave: (el,done) => {
        animations['about'].onLeave(el,done)
      }
    },
  })
const paragraphs = ref([
  'aboutMe.paragraph1',
  'aboutMe.paragraph2',
  'aboutMe.paragraph3'
])
const { locale } = useI18n();


</script>
<template>
  <div class="py-8 md:pr-8 md:pl-4  px-0 lg:px-8">
    <Head>
      <Title>Hanie Hernandez - About Me</Title>
    </Head>
    <div class="flex flex-col-reverse md:flex-row md:gap-4 lg:gap-16">
      <div id="skills_title" class="p-4  text-center md:text-left  lg:p-0 col-span-3 lg:col-span-2  w-full md:w-2/3">
        <ContentDoc :path="`${locale}/aboutme`"/>
        <Btn  id="contact_me_btn"
              outlined 
              link 
              href="mailto:haniel1121@outlook.com"
              class="text-xl px-5 py-3 mt-4" >
          {{ $t('contactMe') }}
        </Btn>
      </div>
      <div
        class="flex flex-col justify-center items-center w-full p-4 md:p-0   md:w-1/3 "
      >
        <div
          id="profile_image"
          class=""
        >
          <img
            class="w-full "
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
