<template>
  <component
    :is="link ? 'a' : 'button'"
    class="px-4 py-2 bg-blue-600 text-white font-medium transitionates hover:bg-blue-700"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped></style>
