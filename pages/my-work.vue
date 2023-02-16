<!-- eslint-disable vue/no-v-html -->
<script lang="ts" setup>
import animations from '~~/animations';
const route = useRoute()

useHead({
  title: 'Haniel Henandez - My Work'
})
const { locale } = useI18n();


definePageMeta({
    pageTransition: {
      name: 'custom-transition',
      mode: 'out-in',
      onEnter: (el, done) => {
        console.log('onenter',el)
        animations['mywork'].onEnter(el,done)
      },
      onLeave: (el,done) => {
        animations['mywork'].onLeave(el,done)
      }
    }
  })
</script>
<template>
  <div class="h-full flex flex-col ">
    <h4 id="my_projects_title" class="px-4 text-center">
      {{ $t('myWork.projects.title') }}
    </h4>
    <MyProjects />
    <h4 class="px-4 my-16 text-center" id="work_experience_title">
      {{$t("myWork.professionalExperience.title")}}
    </h4>
    <MyWorkPlaces/>
  </div>
</template>

<style lang="scss">
.experience-row {
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0;
  }
}
</style>
