<script setup>
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: ()=>false
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const click= ()=>{
    emit('update:modelValue', !props.modelValue)
  }

</script>
<template lang="">
  <div class="toggle rounded-full bg-gray-300 dark:bg-neutral-700  h-6 w-12 inline-block  relative" @click="click" >
    <div class="ball rounded-full transition-all absolute top-0 dark:bg-neutral-900 dark:border-neutral-800  bg-white border border-neutral-200 h-6 w-6 dark"
    :class="modelValue == true ? 'active' : ''">
        <img v-if="modelValue" src="/img/icons/dark_mode.svg" alt="lights off"/>
        <img v-else src="/img/icons/light_mode.svg" alt="lights on"/>

    </div>
  </div>
</template>
<style lang="scss">
.toggle {
      .ball {

        &.active {
          right: 0px;

          img {
            filter: invert(100%);
          }
        
        }
  
        &:not(.active) {
       
           right: calc( 100% - 1.5rem);
        }
      }
  
    }
</style>
