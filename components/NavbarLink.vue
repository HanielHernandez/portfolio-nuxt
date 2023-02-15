<template>
  <NuxtLink :to="localePath(to)"
    class="px-6 py-4 text-2xl md:px-4 md:py-0 text-center nav-link md:text-base hover:opacity-90 dark:opacity-80 font-medium dark:text-white dark:hover:text-gray-100 hover:text-gray-600 text-gray-900 transition-all ease-in-out duration-300"
    :class="{ active: active }">
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: () => false
  },
  to: {
    type: [Object, String],
    default: () => ''
  }
})
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.nav-link {
  &.active {
    @apply opacity-100;
    @apply text-blue-600;
  }

  &:hover{
    transform: scale(1.5);
  }
}
</style>
