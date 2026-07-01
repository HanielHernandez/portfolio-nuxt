<script setup lang="ts">
import type AtSkillProps from './AtSkill.types'

const props = defineProps<AtSkillProps>()
</script>
<template>
    <div
        class="skill-card group flex flex-row shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] dark:shadow-none dark:ring-1 border border-neutral-200 dark:border-neutral-600 items-center relative rounded cursor-pointer transition-all ease-in-out 200 flex flex-col gap-2 px-4 py-2 rouned-md dark:hover:bg-neutral-800 hover:scale-105"
    >
        <AtImage
            v-bind="image"
            class="grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300 object-contain size-10"
        />

        <AtText class="skill-card-text"> {{ name }}</AtText>
    </div>
</template>
<style lang="scss">
.skill-card {
    /* @apply p-4 mb-4 rounded-md;

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
  }*/
}
</style>
