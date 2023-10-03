<script setup lang="ts">

const props = defineProps<{
  file: {
    description: any;
    title: string;
    url: string;
  };
}>()

</script>
<template lang="">
  <img :src="file.url" v-bind="$attr" title="title"/>
</template>
<style lang="scss"></style>
