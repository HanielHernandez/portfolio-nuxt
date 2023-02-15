<script setup lang="ts">
const experiences = ref([
  {
    companyName: "Curotec",
    from: "Oct. 2022",
    to: "Feb. 2023",
    position: "myWork.professionalExperience.curotec.title",
    backgroundColor: "",
    id: "curotec",
    companyLogo: "curotec.png",
    imgBgColor: "neutral-700",
    location: 'Wayne, Pennsylvania.'
  },
  {
    companyName: "FullStacklabs",
    from: "Mar. 2022",
    to: "Jul. 2022",
    position: "myWork.professionalExperience.fsl.title",
    backgroundColor: "",
    id: "fsl",
    companyLogo: "fullstacklabs.svg",
    location: 'Granite Bay, California',
    imgBgColor: "neutral-800",
  },
  {
    companyName: "AIM services",
    from: "Feb. 2019",
    to: "Mar. 2022",
    id: "aims",
    location: 'Ticuantepe, Nicaragua.',
    companyLogo: "aimservices.jfif",
    imgBgColor: "white",
  },
  {
    companyName: "Discovery Real State ",
    from: "Nov. 2017",
    to: "Jun. 2018",
    id: "drs",
    imgBgColor: "neutral-300",
    location: 'Managua, Nicaragua.',
    companyLogo: "discover.png",
  },
]);
const currentExpanded = ref<string | number | null>(null);
const setCurrentExpanded = (index: number | string) => {
  currentExpanded.value = currentExpanded.value == index ? null : index;
};
</script>
<template lang="">
  <div class="flex flex-col items-center px-4 md:px-0">
      <ExpandingCard  
      v-for="(experience, index) in experiences" :key="`${index}-experience`"
      class="flex-shrink-0"
      :expanded="currentExpanded == index" 
                      @onExpand="setCurrentExpanded(index)" 
                      >
        <template v-slot:title>
          <div class="flex justify-between w-full items-center">
            <h4 class="text-lg font-bold mb-0">
              {{ $t(`myWork.professionalExperience.${experience.id }.title`) }}
              <span class="font-normal text-neutral-600">@ </span>
              <span>{{ experience.companyName }}</span>
            </h4>
            <span class="hidden sm:block text-sm font-medium text-blue-600 ">
              {{ experience.from }} - {{ experience.to }}
            </span>
          </div>
        </template>

        <div class="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between w-full" >
          <div class="md:pr-8 h-full ">
            <span class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
              <Icon name="ic:baseline-place" class="h-5"/>  {{ experience.location }}  
            </span>
            <span class=" md:hidden">{{ experience.from }} - {{ experience.to }}</span> 
            <p class="text-neutral-600 text-justify text-clip" v-html="
              $t(`myWork.professionalExperience.${ experience.id }.description`)
            "></p>
           
          </div>
          <div class="flex-shrink-0  dark:bg-neutral-700 bg-neutral-300 rounded-md p-4 w-32 h-32 mb-4 md:mb-0">
            <img :src="`/img/works-places/${experience.companyLogo}`" class="flex-0 rounded-md mx-auto my-0  w-24 h-24 object-contain" alt="">
          </div>
        </div>
      </ExpandingCard>
  </div>

</template>
<style lang="scss">

</style>
