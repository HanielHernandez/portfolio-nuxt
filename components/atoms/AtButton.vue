<script setup lang="ts">
import { computed } from 'vue'

type AtButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type AtButtonColors = 'primary' | 'default'

interface AtButtonProps {
  size?: AtButtonSize
  label?: string,
  color?: string,
  outlined?: boolean
}

const attButtonClasssPerSize: Partial<Record<AtButtonSize, String>> = {
  "sm": "px-3 py-2 ",
  "md": "px-4 py-3"
}


const props = withDefaults(defineProps<AtButtonProps>(), {
  size: "md",
  outlined: false,
  color: "primary"
})



const buttonClasses = computed(() => {
  const buttonSizeClass = attButtonClasssPerSize[props.size]
  return [
    "inline-block border-none font-bold	text-base",
    buttonSizeClass
  ]
})



</script>
<template lang="">
  <button class="font-bold px-4 py-3">

      <span v-if="label">
        {{label}}
      </span>
      <slot v-else />

  </button>
</template>
<style lang="scss"></style>
