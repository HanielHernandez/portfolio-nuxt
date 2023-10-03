<script setup lang="ts">
import { PageProps } from "~~/types/pageProps"
import { ComponentTypes } from "../components/components"
const { $contentfulClient } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

const contentFullLocal: Record<string, string> = {
  ["en"]: "en-US",
  ["es"]: "es"
}

const { data } = useAsyncData(async () => {
  try {
    console.log('current locale', locale.value)

    const slug = route.params.slug === '' ? "/" : route.params.slug
    const collection = await $contentfulClient.getEntries({
      content_type: "page",
      'fields.slug': slug,
      locale: contentFullLocal[locale.value]
    })
    const page = collection?.items?.length ? collection.items[0] : null
    return page ? cleanContentfulEntry<PageProps>(page) : null
  } catch (e) {
    console.error(e)
    return null
  }
}, { watch: [locale] })

const blockComponents = computed(() => ComponentTypes)

</script>
<template>
  <div>
    <span v-if="data && data.blocks">
      <template v-for="block in data.blocks" :key="block.CONTENTFUL_ID">
        <component :is="blockComponents[block.CONTENT_TYPE]" v-bind="block" />
      </template>
    </span>
  </div>
</template>
<style lang="scss"></style>
