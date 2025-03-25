<script setup lang="ts">
import type { Component } from 'vue'
import gsap from "gsap";
import type PageProps from "~~/types/pageProps"
import animations from "~/animations";
import type { ComponentType } from '~/components/components';
import ComponentTypes from '~/components/components';
const { $contentfulClient } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

const contentFullLocal: Record<string, string> = {
  ["en"]: "en-US",
  ["es"]: "es"
}

const slug = computed(() => route.params.slug === '' ? "/" : route.params.slug)
const { data } = useAsyncData(async () => {
  try {
    const collection = await $contentfulClient.getEntries({
      content_type: "page",
      'fields.slug': slug.value,
      include: 10,
      locale: contentFullLocal[locale.value]
    })


    const page = collection?.items?.length ? collection.items[0] : null
    console.log(page)

    if (page === null) {
      router.push("/page-not-found")
    }

    return page ? cleanContentfulEntry<PageProps>(page) : null
  } catch (e) {
    console.error(e)
    router.push("/page-not-found")
  }
}, { watch: [locale] })

const onEnter = (el: Element, done: () => void) => {

  const tl = gsap.timeline({
    onComplete: () => done()
  })
  tl.from(".nav", {
    opacity: 0,
    duration: 0.3,
    onComplete: () => { done() }
  });
  tl.play()
}

const onLeave = (el: Element, done: () => void) => {
  const tl = gsap.timeline({
    onComplete: () => done()
  })
  tl.to(".nav", {
    opacity: 0,
    duration: 0.3,
    onComplete: () => { done() }
  });
  tl.play()
}

definePageMeta({
  pageTransition: {
    name: 'custom-transition',
    mode: 'out-in',
    css: false
  },
  middleware(to, from) {
    const { slug: slugTo } = to.params
    const { slug: slugFrom } = from.params

    const pageToSlug = typeof slugTo === 'object' ? slugTo.join() : slugTo || "/"
    const pageFromSlug = typeof slugFrom === 'object' ? slugFrom.join() : slugFrom || "/"

    const animationsTo = animations[pageToSlug]
    const animationsFrom = animations[pageFromSlug]

    if (animationsTo && to.meta.pageTransition && typeof to.meta.pageTransition != 'boolean') {
      to.meta.pageTransition.onEnter = (el: Element, done: () => void) => { animationsTo.onEnter(el, done) }
    }

    if (animationsFrom && from.meta.pageTransition && typeof from.meta.pageTransition != 'boolean') {
      from.meta.pageTransition.onLeave = (el: Element, done: () => void) => { animationsFrom.onLeave(el, done) }
    }
  }
})

const getBlock = (blockType: ComponentType): Component => {
  return ComponentTypes[blockType]
}

</script>
<template>
  <div class="md:h-full mx-auto dar bgtransparent  transition-colors ease-in-out duration-300 "
    style="max-width: 1024px; ">
    <transition :css="false" mode="out-in" @enter="onEnter" @leave="onLeave">
      <div v-if="data">
        <div v-if="data && data.blocks">
          <template v-for="block in data.blocks" :key="block.CONTENTFUL_ID">
            <component :is="getBlock(block.CONTENT_TYPE)" v-bind="block" />
          </template>
        </div>
        <div v-else>
          <p>Looks like this page has no content yet.</p>
        </div>
      </div>
    </transition>

  </div>
</template>
<style lang="scss"></style>
