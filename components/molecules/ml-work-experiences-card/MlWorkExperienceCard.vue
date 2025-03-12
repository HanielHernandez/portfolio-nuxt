<script setup lang="ts">
import { type MlWorkExperienceCardEmits, type MlWorkExperienceCardProps, } from './MlWorkExperienceCard.type'
const props = withDefaults(defineProps<MlWorkExperienceCardProps>(),
  {
    expanded: false
  })
const emit = defineEmits<MlWorkExperienceCardEmits>()
const handleOnExpand = (expanded: boolean) => {
  emit("onExpand", expanded)
}
const { locale } = useI18n()
const fromToFormated = computed(() => {
  const { experience: { startDate: from, endDate: to } } = props
  const dayjs = useDayjs()
  const fromFormated = dayjs(from).locale(locale.value).format("MMM YYYY")
  const toFormated = dayjs(to).locale(locale.value).format("MMM YYYY")

  return `${fromFormated} - ${toFormated}`
})
</script>
<template>
  <ExpandingCard class="flex-shrink-0" :expanded="(expanded as boolean)" @onExpand="handleOnExpand(!expanded)">
    <template v-slot:title>
      <div class="flex justify-between w-full items-center">
        <h4 class="text-lg font-bold mb-0 text-neutral-800 dark:text-neutral-400">
          {{ experience.name }}
        </h4>
        <span class="hidden sm:block text-sm font-medium text-blue-600 ">
          <!-- {{ experience.from }} - {{ experience.to }} -->
          {{ fromToFormated }}
        </span>
      </div>
    </template>
    <div class="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between w-full">
      <div class="md:pr-8 h-full ">
        <p class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
          <Icon name="ic:baseline-place" class="h-5" />
          {{ experience.location }}
        </p>
        <AtRichText :document="experience.description"
          class="text-neutral-600 dark:text-neutral-300 text-justify text-clip mb-4" />
        <chip v-for="tag in experience.tags" class="mr-4 mb-2">
          {{ tag }}
        </chip>
      </div>
      <div class="flex-shrink-0  dark:bg-neutral-700 bg-neutral-300 rounded-md p-4 w-32 h-32 mb-4 md:mb-0">
        <AtImage v-bind="experience.image" class="flex-0 rounded-md mx-auto my-0  w-24 h-24 object-contain" />
      </div>
    </div>
  </ExpandingCard>
</template>
<style lang="scss"></style>
