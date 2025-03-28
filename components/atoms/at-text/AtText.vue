<script setup lang="ts">
import { clsx } from 'clsx';

import { atTextTagMap, type AtTextProps } from './AtText.types';
import { computed } from 'vue'

const { As: as, variant = "paragraph", } = defineProps<AtTextProps>()


const Tag = computed(() => {
  return as || atTextTagMap[variant];
});


</script>
<template>
  <component :is="Tag" :class="clsx">
    <slot />
  </component>
</template>
<style lang="scss"></style>
