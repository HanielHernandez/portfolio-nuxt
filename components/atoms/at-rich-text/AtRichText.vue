<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { AtRichTextProps } from './AtRichText.types';
import { RICH_TEXT_OPTIONS } from '~/constants/constants';


const props = withDefaults(defineProps<AtRichTextProps>(), {
  element: 'p',
})
const attrs = useAttrs()

const htmlString = computed(() => documentToHtmlString(props.document, RICH_TEXT_OPTIONS))

</script>
<template>
  <div v-html="htmlString" v-bind="attrs" />
</template>
<style lang="scss"></style>
