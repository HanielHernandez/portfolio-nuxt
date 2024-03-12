<script setup lang="ts">
import { MlSkillsProps } from './MlSkills.types'

const props = defineProps<MlSkillsProps>()

</script>
<template>
  <div class="py-16 flex flex-wrap justify-between">


    <div class="w-full px-4 lg:px-0 section-title">
      <SectionTitle>
        {{ props.title }}
      </SectionTitle>
    </div>
    <div v-for="(skill, i) in props.skills" :key="`skill-${skill.name}`" class="flex w-1/5 md:w-2/12 lg:w-2/12">
      <AtSkill v-bind="skill" />
    </div>
  </div>
</template>
<style lang="scss"></style>
