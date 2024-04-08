<script setup lang="ts">
import type AtSkillProps from './AtSkill.types';


const props = defineProps<AtSkillProps>()
</script>
<template lang="">
  <div class="skill-card relative">
    <AtImage v-bind="image" class="skill-card-icon object-contain w-12 h-12"/>
    <div class="skill-card-text text-white font-bold bg-black/50 dark:bg-neutral-600/95">
      {{ name }}
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
