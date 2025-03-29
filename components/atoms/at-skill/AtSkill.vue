<script setup lang="ts">
import type AtSkillProps from './AtSkill.types';


const props = defineProps<AtSkillProps>()
</script>
<template>
  <div
    class="skill-card border border-neutral-200 items-center relative rounded cursor-pointer transition-colors ease-in-out 200 flex flex-col gap-4 p-4 w-28 h-28 rouned-md dark:hover:bg-neutral-800 hover:bg-neutral-200">
    <AtImage v-bind="image" class=" object-contain w-12 h-12" />

    <AtText> {{ name }}</AtText>
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
