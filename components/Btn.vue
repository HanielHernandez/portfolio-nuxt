<script setup lang="ts">
const props = defineProps({
    outlined: {
      type: Boolean,
      default: ()=>false
    },
    color: {
      type:String,
      default: ()=>'blue-600'
    },
    link: {
      type: Boolean,
      default: () => false
    },
  })

  const classes = computed(()=>{

    const bgClass =   props.outlined ?   `bg-transparent hover:bg-${props.color} hover:text-white` : `bg-${props.color}`
    const borderClass =   props.outlined ?    `border border-${props.color}`: `` 
    const textClass =   props.outlined ?   `text-${props.color}` : `text-white`

    return [bgClass,borderClass,textClass]

  })
</script>
<template>
  <component
    :is="link ? 'a' : 'button'"
    class="px-4 py-2  font-medium transitionates  "
    :class="classes"
  >
    <slot />
  </component>
</template>



<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>
