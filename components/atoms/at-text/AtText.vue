<script setup lang="ts">
import { clsx } from 'clsx'
import { computed, useAttrs } from 'vue'
import { atTextTagMap, colorClasses, fontWeights, leadingClasses, textSizes, type AtTextProps } from './AtText.types'

const { as = 'p', href, class: textClass, variant = 'paragraph' } = defineProps<AtTextProps>()

const Tag = computed(() => {
    return as || atTextTagMap[variant]
})

const classes = computed(() => {
    return clsx(textSizes[variant], leadingClasses[variant], colorClasses[variant], fontWeights[variant], textClass)
})

const attrs = useAttrs()
</script>
<template>
    <component
        v-bind="attrs"
        :is="Tag"
        :class="classes"
        :href="variant === 'link' ? href : ''"
    >
        <slot />
    </component>
</template>
<style lang="scss"></style>
F
