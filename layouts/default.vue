<script setup lang="ts">
import { MlNavbarProps } from '~/components/molecules/ml-navbar/MlNavbar.types';

const { $contentfulClient } = useNuxtApp()
const { locale } = useI18n()

const contentFullLocal: Record<string, string> = {
  ["en"]: "en-US",
  ["es"]: "es"
}

const { data: navbar, pending } = useAsyncData(async () => {
  try {
    const collection = await $contentfulClient.getEntries({
      content_type: "mlNavbar",
      include: 10,
      locale: contentFullLocal[locale.value]
    })
    const nav = collection?.items?.length ? collection.items[0] : null
    return nav ? cleanContentfulEntry<MlNavbarProps>(nav) : null
  } catch (e) {
    console.error(e)
  }
})


</script>
<template>
  <div class="transition-all pt-20 lg:pt-28 ease-in-out duration-300 w-full h-screen overflow-y-auto dark:bg-neutral-900"
    style="overflow: overlay;">
    <MlNavbar v-if="!pending" id="navbar" :links="navbar.links || []" />

    <slot />
    <!-- <Footer/> -->
  </div>
</template>
<style lang="scss"></style>
