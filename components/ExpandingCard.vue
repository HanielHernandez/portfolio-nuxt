<script setup>


const expanded = ref(false)
</script>
<template lang="">
  <div class="expanding-card relative  border border-neutral-200 rounded-sm  w-full mb-4 "  :class="{expanded}">
    <div class="expanding-card-title flex p-4  pr-14">
      <slot name="title" />
      <button @click="expanded = !expanded" class="expanding-card-button">⛛</button>
    </div>
    <div class="expanding-card-content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.expanding-card {
  @apply transition-all ease-in-out duration-300;
  overflow: hidden;

  &-button {
    @apply w-12 h-12 absolute right-0 top-0  p-4;
    transition: all ease-in-out 0.3s;
    .expanded & {
      transform: rotate(180deg);
    }
  }

  &-content {
    @apply  px-4 pb-4  transition-all ease-in-out duration-300;
    &:not(.expanded &) {
      @apply opacity-0 py-0;
      height: 0px;
    }
   
  }

 
}
</style>
