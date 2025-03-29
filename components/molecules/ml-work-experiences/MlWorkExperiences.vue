<script setup lang="ts">
import { ref } from "vue";
import type MlWorkExperiencesProps from "./MlWorkExperiences.types"
const props = defineProps<MlWorkExperiencesProps>()
const currentExpanded = ref<string | number | null>(null);
const setCurrentExpanded = (index: number | string) => {
  currentExpanded.value = currentExpanded.value == index ? null : index;
};
</script>
<template>
  <div class="flex flex-col w-full justify-center items-center px-4">
    <AtText id="projects_title" variant="h3" class="m-0 mb-12  px-4  md:px-0 text-center">{{ props.title }}</AtText>

    <div id="my_profesional_experience" class="flex flex-col  max-w-3xl items-center w-full mx-auto my-0">
      <div v-for="(experience, index) in experiences" :key="`experience-${index}`" class=" w-full">
        <MlWorkExperienceCard :experience="experience" :expanded="index === currentExpanded"
          @onExpand="setCurrentExpanded(index)" />
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
