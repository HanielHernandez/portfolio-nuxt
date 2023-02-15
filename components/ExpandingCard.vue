<script setup lang="ts">
import gsap from 'gsap';

const CONTENT_PADDING = 32;
// const title = ref<HTMLElement|null>(null)
// const content = ref<HTMLElement|null>(null)
// const titleHeight = ref(60)
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
  contentHeight.value = content.value && content.value.scrollHeight + CONTENT_PADDING || 0
}
// window.addEventListener("resize", checkDimensions);


// onBeforeUnmount(()=> {
//   window.removeEventListener("resize", checkDimensions);
// })

const onEnter = (el:HTMLElement, done: ()=>any)=>{
  done()
  console.log("showing content")
  gsap.from(
    el,
    {
      height: '0px',
      paddingTop: 0,
      paddingBottom: 0,
      duration: 0.3,
      onComplete: ()=>done(),
      ease: "power4.easeInOut"
    })
}
const onLeave = (el:HTMLElement, done: ()=>any)=>{
  gsap.to(
    el,
    {
      height: '0px',
      duration: 0.3,
      paddingTop: 0,
      paddingBottom: 0,
      onComplete: ()=>done(),
      ease: "power4.easeInOut"
    })

}

</script>
<template lang="">
  <div class="expanding-card relative border hover:bg-neutral-100 dark:hover:bg-neutral-900 border-neutral-100 dark:border-neutral-800  w-full mb-4 "
  >
    <div class="expanding-card-title flex p-4 pr-14 cursor-pointer" @click="onExpanButtonClick()" ref="title">
      <slot name="title" />
      <button  class="expanding-card-button text-neutral-600 text-lg">
        <Icon name="mdi:chevron-down" class="mb-2"/>
      </button>
    </div>
    <Transition mode="in-out"  @enter="onEnter" @leave="onLeave" >
      <div v-if="expanded" class="expanding-card-content" ref="content"  >
        <slot />
      </div>
    </Transition>
    
  </div>
</template>
<style lang="scss">
.expanding-card {
  max-width: 700px;

  .icon {
    @apply ease-in-out duration-300;
  }

  &-button {
    @apply w-16 h-16 absolute right-0 top-0  p-4;
    background-image: url();
  }

  &-content {
    @apply  px-4 pb-4;
    overflow: hidden;
  }

  &.expanded {
      .icon {
        transform: rotate(180deg);
      }
    }


 
}
</style>
