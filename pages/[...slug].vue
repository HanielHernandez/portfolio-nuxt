<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch, watchEffect, type Component } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from "gsap";
import type PageProps from "~/types/pageProps"
import { cleanContentfulEntry } from '~/utils/contentfull'
import animations from "~/animations";
import type { ComponentType } from '~/components/components';
import ComponentTypes from '~/components/components';
import { useAsyncData, useNuxtApp, useRoute, useRouter } from 'nuxt/app';
// Tipamos el client de manera laxa para evitar error 'unknown'.
const { $contentfulClient } = useNuxtApp() as unknown as { $contentfulClient: any }
const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

const contentFullLocal: Record<string, string> = {
  ["en"]: "en-US",
  ["es"]: "es"
}
const pageRef = ref<HTMLElement | null>(null)
// Normalizamos el slug para cubrir casos: undefined, string vacía, array (catch‑all) => string
const normalizeSlug = (slug: string | string[]) => {
  const raw = slug
  if (!raw) return '/' // undefined o null
  if (Array.isArray(raw)) {
    if (raw.length === 0) return '/'
    return '/' + raw.filter(Boolean).join('/')
  }
  if (raw === '') return '/'
  // Aseguramos que empieza con '/'
  return raw.startsWith('/') ? raw : '/' + raw
}

const loading = ref(false)

const slug = computed(() => route.params.slug)


const { data, pending, status } = await useAsyncData(`fetchPage-${route.params.slug}`, async () => {
  if (slug.value == undefined) {
    router.push("/page-not-found")
    return
  }

  const cleanSlug = normalizeSlug(slug.value)

  try {
    const collection = await $contentfulClient.getEntries({
      content_type: "page",
      // Dependiendo de cómo guardes el slug en Contentful puede que necesites quitar el leading '/'
      'fields.slug': cleanSlug === '/' ? '/' : cleanSlug.replace(/^\//, ''),
      include: 10,
      locale: contentFullLocal[locale.value]
    })


    const page = collection?.items?.length ? collection.items[0] : null

    if (page === null) {
      router.push("/page-not-found")
    }

    return cleanContentfulEntry<PageProps>(page)
  } catch (e) {
    console.error(e)
    router.push("/page-not-found")
  }
}, {
  deep: true,
  lazy: false
})


const getBlock = (blockType: ComponentType): Component => {
  return ComponentTypes[blockType]
}

router.beforeEach(() => (loading.value = true))
router.afterEach(() => (loading.value = false))



</script>
<template>
  <div class="md:h-full mx-auto dar bgtransparent  transition-colors ease-in-out duration-300 "
    style="max-width: 1024px; ">

    <div v-if="loading" class="fixed h-screen w-screen bg-neutral-50/30 z-2 top-0 left-0 bottom-0 right-0 ">
      <div class="w-full h-full flex flex-col items-center justify-center">
        <div class="size-12 border-4 border-blue-600 rounded-full border-r-neutral-100">

        </div>
      </div>
    </div>


    <div v-if="data">
      <div v-if="data.blocks">
        <template v-for="block in data.blocks" :key="block.CONTENTFUL_ID">
          <component :is="getBlock(block.CONTENT_TYPE)" v-bind="block" />
        </template>
      </div>
      <div v-else>
        <p>Looks like this page has no content yet.</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
