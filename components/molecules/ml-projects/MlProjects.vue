<script setup lang="ts">
import type MlProjectsProps from './MlProject.types'

const props = defineProps<MlProjectsProps>()

</script>
<template>
  <div class="flex flex-col mx-auto items-center justify-center px-4 ">
    <!-- <h2 id="projects_title" v-if="props"
      class="text-3xl text-center text-neutral-600 dark:text-neutral-200 font-bold ">
      {{ props.title }}
    </h2> -->

    <AtText id="projects_title" variant="h2" class="px-4 my-5 md:m-0 md:px-0 text-center">
      {{ props.title }}
    </AtText>
    <div class="grid grid-cols-1 md:grid-cols-2  gap-8 py-8 max-w-3xl max-auto">
      <MlProjectCard v-for="project in props.projects" v-bind="project" :id="project" key="`project-${project.id}`" />
    </div>
  </div>
</template>
<style lang="scss">
@media (min-width: 1024px) {
  .cards {
    &-container {
      margin-right: -1rem;
      margin-left: -1rem;
    }
  }
}

.pill {
  @apply bg-neutral-400 p-2 px-4 mr-2 inline-block text-white dark:bg-neutral-600;
  vertical-align: middle;
  border-radius: 300px;
}
</style>
