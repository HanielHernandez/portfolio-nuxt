<script setup lang="ts">
import type MlSkillsProps from './MlSkills.types'

const props = defineProps<MlSkillsProps>()

</script>
<template>
  <div class="py-12 flex flex-wrap justify-between px-4 md:px-0 ">
    <div class="w-full px-4 lg:px-0 section-title">
      <AtText variant="h2" class="mb-4 lg:mb-12 text-center">
        {{ props.title }}
      </AtText>
    </div>
    <div class="grid w-full grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-4">
      <div v-for="(skill, i) in props.skills" :key="`skill-${skill.name}`" class="flex ">
        <AtSkill v-bind="skill" />
      </div>
    </div>

  </div>
</template>
<style lang="scss"></style>
