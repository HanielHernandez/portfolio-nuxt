<script setup lang="ts">
import { MlProjectsProps } from './MlProject.types'
const props = defineProps<MlProjectsProps>()

</script>
<template>
  <div class="flex flex-col ">
    <h2 id="projects_title" class="text-3xl text-center font-bold px-4 my-5 md:m-0 md:px-0">
      {{ props.title }}
    </h2>
    <div class="flex flex-wrap cards-container justify-center py-8">
      <div v-for="project in props.projects" :key="`project-${project.id}`" class="p-4 w-full md:w-1/2 lg:w-1/3">
        <MlProjectCard v-bind="project" />
      </div>
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
