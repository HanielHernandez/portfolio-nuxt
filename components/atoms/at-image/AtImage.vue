<script setup lang="ts">

const props = defineProps<{
  file: {
    description: any;
    title: string;
    url: string;
  };
}>()
const attrs = useAttrs()

</script>
<template lang="">
  <img :src="file.url" v-bind="attrs" :alt="file.title"/>
</template>
<style lang="scss"></style>
