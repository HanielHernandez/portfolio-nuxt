<script setup lang="ts">
const props = defineProps({
  expanded: {
    type: Boolean,
    default: ()=>false
  }
})
const emit = defineEmits(['onExpand'])


const onExpanButtonClick = ()=>{
  emit('onExpand',!props.expanded)
}
</script>
<template lang="">
  <div class="expanding-card relative  border border-neutral-200 dark:border-neutral-700 rounded-sm  w-full mb-4 "  :class="{expanded}">
    <div class="expanding-card-title flex p-4 pr-14 cursor-pointer" @click="onExpanButtonClick()">
      <slot name="title" />
      <button  class="expanding-card-button">
        <img :src="'/img/icons/expand.svg'"  alt="expand icon">
      </button>
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
    background-image: url();
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
