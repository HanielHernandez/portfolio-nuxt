<!-- eslint-disable vue/no-v-html -->
<script lang="ts" setup>
const experiences = ref([
  {
    companyName: 'Curotec',
    from: 'Oct. 2022',
    to: 'Feb. 2023',
    position: 'myWork.professionalExperience.curotec.title',
    backgroundColor: '',
    id: 'curotec',
    companyLogo: 'curotec.png',
    imgBgColor: "neutral-700",
  },
  {
    companyName: 'FullStacklabs',
    from: 'Mar. 2022',
    to: 'Jul. 2022',
    position: 'myWork.professionalExperience.fsl.title',
    backgroundColor: '',
    id: 'fsl',
    companyLogo: 'fullstacklabs.svg',
    imgBgColor: "neutral-800",

  },
  {
    companyName: 'AIM services',
    from: 'Feb. 2019',
    to: 'Mar. 2022',
    id: 'aims',
    companyLogo: 'aimservices.jfif',
    imgBgColor: "white",
  },
  {
    companyName: 'Discovery Real State ',
    from: 'Nov. 2017',
    to: 'Jun. 2018',
    id: 'drs',
    imgBgColor: "neutral-300",
    companyLogo: 'discover.png'
  }
])
const { locale } = useI18n()
</script>
<template>
  <div class="h-full flex flex-col">
    <MyProjects />

    <section-title id="title" class="p-4 lg:px-0 ">
      {{ $t('myWork.professionalExperience.title') }}
    </section-title>

    <div v-for="(experience, index) in experiences" 
        :key="`${index}-experience`"
        class="experience-row flex flex-col md:flex-row cursor-default items-center px-4 lg:p-0">
      <ExpandingCard>
        <template v-slot:title>
          <div>
            <h4 class="text-lg font-bold mb-0">
            {{ $t(`myWork.professionalExperience.${experience.id }.title`) }}  
            <span class="font-normal text-neutral-600">@ </span> 
            <span>{{experience.companyName }}</span>
          </h4> 
          </div>
        </template>
        <div  class="flex justify-between w-full">
            <span class="text-sm font-medium text-neutral-500 mb-2">   {{ experience.from }} - {{ experience.to }}</span>
           </div>

          <p class="text-neutral-600 text-justify text-clip"  v-html="
            $t(`myWork.professionalExperience.${ experience.id }.description`)
          "></p>



      </ExpandingCard> 

      <!-- <div class="md:w-2/6 px-3 lg:px-0 py-4 font-bold text-neutral-500 dark:text-neutral-400">
        <p>{{ experience.from }} - {{ experience.to }}</p>
      </div>
      <div class="w-full md:w-4/6 px-3 lg:px-0 py-4">
        <div
          class=" border-neutral-300 border dark:border-neutral-800  p-4 rounded-md transition-color ease-in-out duration-300 hover:shadow-md">
          <h4 class="text-lg font-bold ">
            {{ $t(`myWork.professionalExperience.${experience.id }.title`) }}
          </h4>
          <h3 class="text-blue-500 dark:text-blue-500 text-bold text-sm my-1">
            {{ experience.companyName }}
          </h3>
          <p class="text-neutral-600 text-justify" v-html="
            $t(`myWork.professionalExperience.${ experience.id }.description`)
          "></p>
        </div>
      </div> -->
      <!-- <div class="flex border-neutral-100 border w-full dark:border-neutral-800   rounded-md transition-color ease-in-out duration-300 hover:shadow-md mb-4">
        <div class="px-2 py-4 md:p-4 flex-0 flex justify-center flex-column items-center bg-neutral-300 dark:bg-neutral-700" >
          <img :src="`/img/works-places/${experience.companyLogo}`" class=" h-16 w-24 object-contain	" alt="">
        </div>
        <div class="p-4 w-full ">
          <h4 class="text-lg font-bold mb-2">
            {{ $t(`myWork.professionalExperience.${experience.id }.title`) }}  
            <span class="font-normal text-neutral-600">{{ $t('at') + " " }}</span> 
            <span>{{experience.companyName }}</span>
          </h4> 
          <div  class="flex justify-between w-full">
            <span class="text-sm font-medium text-neutral-500 mb-2">   {{ experience.from }} - {{ experience.to }}</span>
           </div>

          <p class="text-neutral-600 text-justify text-clip"  v-html="
            $t(`myWork.professionalExperience.${ experience.id }.description`)
          "></p>
        </div>
      </div> -->


    </div>
  </div>
</template>

<style lang="scss">
.experience-row {
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0;
  }
}
</style>
