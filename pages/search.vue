<script lang="ts" setup>
import { AisInstantSearch, AisSearchBox, AisHits, AisHighlight } from "vue-instantsearch/vue3/es";

const indexName = 'wp_testingsearchable_posts'
const algolia = useAlgoliaRef()
</script>

<template>
  <div>
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <ais-search-box />
      <ais-hits>
        <template v-slot:item="{ item }">
          <h3><ais-highlight :hit="item" attribute="post_title" /></h3>
          <img class="w-24 h-24" :src="item.images.thumbnail.url" />
        </template>
      </ais-hits>
    </ais-instant-search>
  </div>
</template>