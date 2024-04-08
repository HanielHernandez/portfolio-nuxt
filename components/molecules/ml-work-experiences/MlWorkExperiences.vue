<script setup lang="ts">
import type MlWorkExperiencesProps from "./MlWorkExperiences.types"
const props = defineProps<MlWorkExperiencesProps>()
const currentExpanded = ref<string | number | null>(null);
const setCurrentExpanded = (index: number | string) => {
  currentExpanded.value = currentExpanded.value == index ? null : index;
};
</script>
<template>
  <div class="flex flex-col">
    <h3 id="projects_title" class="text-2xl text-center m-0 mb-6  font-bold px-4  md:px-0">
      {{ props.title }}
    </h3>
    <div id="my_profesional_experience" class="flex flex-col items-center max-w-2xl w-full mx-auto my-0">
      <div v-for="(experience, index) in experiences" :key="`experience-${index}`" class=" w-full">
        <MlWorkExperienceCard :experience="experience" :expanded="index === currentExpanded"
          @onExpand="setCurrentExpanded(index)" />
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
