<script setup lang="ts">
import { computed, useAttrs } from 'vue'

type AtButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type AtButtonColor = 'primary' | 'default'

interface AtButtonProps {
  size?: AtButtonSize
  label?: string,
  color?: AtButtonColor,
  outlined?: boolean
  element?: string
}

const attButtonClasssPerSize: Partial<Record<AtButtonSize, String>> = {
  "sm": "px-3 py-2 text-sm",
  "md": "px-4 py-2 text-base",
  "lg": "px-5 py-3 text-xl"
}

const backgroundClassPerColor: Partial<Record<AtButtonColor, String>> = {
  "primary": "text-white bg-blue-600 border border-blue-600",
  "default": "px-4 py-2"
}
const outlineClassPerColor: Partial<Record<AtButtonColor, String>> = {
  "primary": "border-1 border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600",
  "default": "px-4 py-2"
}

const props = withDefaults(defineProps<AtButtonProps>(), {
  size: "md",
  outlined: false,
  color: "primary",
  element: "button"
})

const attrs = useAttrs();

const buttonClasses = computed(() => {
  const buttonSizeClass = attButtonClasssPerSize[props.size]
  const colorClass = backgroundClassPerColor[props.color]
  const outlinedClass = outlineClassPerColor[props.color]
  return [
    attrs["class"],
    "inline-block border font-bold hover:shadow-md transition-colors transition-shadow ease-in-out duration-200 ",
    buttonSizeClass,
    props.outlined ? outlinedClass : colorClass
  ]
})
</script>
<template>
  <component v-bind="attrs" :is="element" :class="buttonClasses">

    <span v-if="label">
      {{ label }}
    </span>
    <slot v-else />

  </component>
</template>
