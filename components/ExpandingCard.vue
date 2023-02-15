<script setup lang="ts">

const title = ref<HTMLElement|null>(null)
const content = ref<HTMLElement|null>(null)
const titleHeight = ref(60)
const contentHeight = ref(0)
const props = defineProps({
  expanded: {
    type: Boolean,
    default: ()=>false
  }
})
const emit = defineEmits(['onExpand'])




// const titleHeight = computed(()=>{
//   return title.value ? title.value.offsetHeight : 0
// }) 
// const contentHeight = computed(()=>{
//   return content.value ? content.value.offsetHeight : 0
// }) 




const cardStyle = computed(()=>{
  return {
       height: `${ props.expanded ?  titleHeight.value + contentHeight.value : titleHeight.value}px`
  }
}) 

const onExpanButtonClick = ()=>{
  emit('onExpand', !props.expanded)
}

onMounted(async ()=>{
  await checkDimensions()
})

watch(()=>props.expanded,async (newval)=>{
 await checkDimensions()
})


const checkDimensions = async ()=>{
  await nextTick()
  titleHeight.value = title.value?.offsetHeight || 60
  contentHeight.value = content.value?.offsetHeight || 0
}
window.addEventListener("resize", checkDimensions);


</script>
<template lang="">
  <div class="expanding-card relative  border hover:bg-neutral-100 border-neutral-100 dark:border-neutral-700  w-full mb-4 "
    :class="{expanded}"
    :style="cardStyle"
  >
    <div class="expanding-card-title flex p-4 pr-14 cursor-pointer" @click="onExpanButtonClick()" ref="title">
      <slot name="title" />
      <button  class="expanding-card-button text-neutral-600 text-lg">
        <Icon name="mdi:chevron-down" class="mb-2"/>
      </button>
    </div>
    <div class="expanding-card-content" ref="content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.expanding-card {
  @apply transition-all ease-in-out duration-300;
  overflow: hidden;

  .icon {
    @apply transition-all ease-in-out duration-300;
  }

  &-button {
    @apply w-16 h-16 absolute right-0 top-0  p-4;
    transition: all ease-in-out 0.3s;
    background-image: url();
  }

  &-content {
    @apply  px-4 pb-4  transition-all ease-in-out duration-500;
    overflow: hidden;
  }

  &-title {
    min-height: 60px;
  }

  &.expanded {
      .icon {
        transform: rotate(180deg);
      }
    }


 
}
</style>
