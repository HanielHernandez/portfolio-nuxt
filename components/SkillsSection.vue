<script lang="ts" setup>
import { ref } from 'vue'

const skills = ref([
  {
    icon: '/img/icons/html_icon.svg',
    text: 'HTML '
  },
  {
    icon: '/img/icons/css_icon.svg',
    text: 'CSS '
  },
  {
    icon: '/img/icons/javascript_icon.png',
    text: 'Javascript '
  },
  {
    icon: '/img/icons/typescript_icon.png',
    text: 'Typescript '
  },
  {
    icon: '/img/icons/sass_icon.png',
    text: 'SASS '
  },

  {
    icon: '/img/icons/vue_icon.svg',
    text: 'Vue'
  },
  {
    icon: '/img/icons/angular_icon.svg',
    text: 'Angular'
  },
  {
    icon: '/img/icons/react_icon.svg',
    text: 'React'
  },
  {
    icon: '/img/icons/tailwind_icon.svg',
    text: 'Tailwind'
  },
  {
    icon: '/img/icons/bootstrap_icon.svg',
    text: 'Bootstrap'
  },
  {
    icon: '/img/icons/bulma_icon.png',
    text: 'Bulma'
  },
  {
    icon: '/img/icons/firebase_icon.svg',
    text: 'Firebase'
  },
  {
    icon: '/img/icons/laravel_icon.svg',
    text: 'Laravel'
  }
])
</script>
<template>
  <div class="py-12 flex flex-wrap justify-between px-4">
    <div class="w-full px-4 lg:px-0 section-title">
      <SectionTitle>
        {{ $t('aboutMe.skills.title') }}
      </SectionTitle>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-8 ">
      <div v-for="(skill, index) in skills" :key="`skill-${index}`" class="flex">
        <div class="skill-card relative">
          <img :src="skill.icon" class="skill-card-icon object-contain w-12 h-12" :alt="`${skill.text} icon`" />
          <div class="skill-card-text text-white font-bold bg-black/50 dark:bg-neutral-600/95">
            {{ skill.text }}
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<style lang="scss">
.skill-card {
  @apply p-4 mb-4 rounded-md;

  &:hover {
    @apply dark:bg-neutral-700/50;

    .skill-card {
      &-icon {
        transform: scale(1.25);
      }

      &-text {
        opacity: 1;
      }
    }

    background-color: rgba($color: #000000, $alpha: 0.1);
    transition: all ease-in-out 0.3s;
  }

  &-text {
    opacity: 0;
    @apply p-2 rounded-md text-sm;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    bottom: calc(100% + 0.5rem);
  }

  &-text,
  &-icon {
    transition: all ease-in-out 0.3s;
  }
}
</style>
