<script setup lang="ts">
import { useAttrs } from 'vue';


const props = defineProps<{
  file: {
    description: any;
    title: string;
    url: string;
  };
}>()
const attrs = useAttrs()

</script>
<template>
  <img :src="file.url" v-bind="attrs" :alt="file.title" />
</template>
<style lang="scss"></style>
