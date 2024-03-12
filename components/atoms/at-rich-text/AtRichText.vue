<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { AtRichTextProps } from './AtRichText.types';


const props = withDefaults(defineProps<AtRichTextProps>(), {
  element: 'p',
})
const attrs = useAttrs()

const htmlString = computed(() => documentToHtmlString(props.document))

</script>
<template >
  <div v-html="htmlString" v-bind="attrs">
  </div>
</template>
<style lang="scss"></style>
