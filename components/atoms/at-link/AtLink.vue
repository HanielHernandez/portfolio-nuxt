<script setup lang="ts">
import { AtLinkProps } from './AtLink.types'
const attr = useAttrs()
const props = defineProps<AtLinkProps>()

</script>
<template>
  <a :href="url" v-bind="attr">
    <slot />
  </a>
</template>
<style lang="scss"></style>
