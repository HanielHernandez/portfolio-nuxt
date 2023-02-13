<!-- eslint-disable vue/no-v-html -->
<script lang="ts" setup>
const experiences = ref([
  {
    companyName: 'Curotec - Wayne, Pennsylvania.',
    from: 'Oct. 2022',
    to: 'Feb. 2023',
    position: 'myWork.professionalExperience.curotec.title',
    backgroundColor: '',
    id: 'curotec'
  },
  {
    companyName: 'FullStacklabs - Granite Bay, California',
    from: 'Mar. 2022',
    to: 'Jul. 2022',
    position: 'myWork.professionalExperience.fsl.title',
    backgroundColor: '',
    id: 'fsl'
  },
  {
    companyName: 'AIM services - Ticuantepe, Nicaragua.',
    from: 'Feb. 2019',
    to: 'Mar. 2022',
    id: 'aims',
    backgroundColor: 'bg-yellow-100 border-orange-300'
  },
  {
    companyName: 'Discovery Real State - Managua, Nicaragua.',
    from: 'Nov. 2017',
    to: 'Jun. 2018',
    id: 'drs',
    backgroundColor: 'bg-green-200 border-green-400'
  }
])
const { locale } = useI18n()
</script>
<template>
  <div class="h-full flex flex-col">
    <MyProjects />

    <section-title id="title" class="px-4 md:px-0">
      {{ $t('myWork.professionalExperience.title') }}
    </section-title>

    <div v-for="(experience, index) in experiences" 
        :key="`${index}-experience`"
        class="experience-row flex flex-col md:flex-row cursor-default items-center">
      <div class="md:w-2/6 px-3 lg:px-0 py-4 font-bold text-gray-500 dark:text-gray-400">
        <p>{{ experience.from }} - {{ experience.to }}</p>
      </div>
      <div class="w-full md:w-4/6 px-3 lg:px-0 py-4">


        <div
          class=" border-neutral-300 border p-4 rounded-sm transition-color ease-in-out duration-300 hover:shadow-md">
          <ContentDoc :path="`${locale}/works/${experience.id}`"/>

        </div>
      </div>




    </div>
  </div>
</template>
