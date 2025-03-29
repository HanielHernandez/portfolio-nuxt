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
    location: 'Wayne, Pennsylvania.',
    tags: ['Vue', 'Less']
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
    tags: ['React', 'NextJs', 'Prisma', 'Typescript', 'GrapQL', 'NodeJS']
  },
  {
    companyName: "AIM services",
    from: "Feb. 2019",
    to: "Mar. 2022",
    id: "aims",
    location: 'Ticuantepe, Nicaragua.',
    companyLogo: "aimservices.jfif",
    imgBgColor: "white",
    tags: ['Vue', 'Angular', 'Bootstrap', 'Tailwind', 'Laravel', 'Firebase', 'Pusher', 'Java', 'Android', 'Ionic', 'Typescript', 'Javascript', 'GSAP', 'SASS']
  },
  {
    companyName: "Discovery Real State ",
    from: "Nov. 2017",
    to: "Jun. 2018",
    id: "drs",
    imgBgColor: "neutral-300",
    location: 'Managua, Nicaragua.',
    companyLogo: "discover.png",
    tags: ['JQuery', 'PHP', 'CSS', 'Bootstrap', 'Javascript']

  },
]);
const currentExpanded = ref<string | number | null>(null);

const setCurrentExpanded = (index: number | string) => {
  currentExpanded.value = currentExpanded.value == index ? null : index;
};

</script>
<template>
  <div class="flex flex-col justify-centeritems-center px-4 lg:px-0 lg:max-w-2xl w-full mx-auto"
    id="my_profesional_experience">
    <ExpandingCard v-for="(experience, index) in experiences" :key="`${index}-experience`" class="flex-shrink-0"
      :expanded="currentExpanded == index" @onExpand="setCurrentExpanded(index)">
      <template v-slot:title>
        <div class="flex justify-between w-full items-center">
          <AtText variant="h4" class=" mb-0">
            {{ $t(`myWork.professionalExperience.${experience.id}.title`) }}
            <span class="font-normal text-neutral-600 dark:text-neutral-200">@ </span>
            <span>{{ experience.companyName }}</span>
          </AtText>
          <span class="hidden sm:block text-sm font-medium text-blue-600 ">
            {{ experience.from }} - {{ experience.to }}
          </span>
        </div>
      </template>

      <div class="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between w-full">
        <div class="md:pr-8 h-full ">
          <p class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            <Icon name="ic:baseline-place" class="h-5" /> {{ experience.location }} ,
            <span class="inline-block md:hidden text-blue-600">
              {{ experience.from }} - {{ experience.to }}
            </span>
          </p>

          <p class="text-neutral-600 text-justify text-clip mb-4" v-html="$t(`myWork.professionalExperience.${experience.id}.description`)
            "></p>
          <chip v-for="tag in experience.tags" class="mr-4 mb-2">
            {{ tag }}</chip>

        </div>
        <div class="flex-shrink-0  dark:bg-neutral-700 bg-neutral-300 rounded-md p-4 w-32 h-32 mb-4 md:mb-0">
          <img :src="`/img/works-places/${experience.companyLogo}`"
            class="flex-0 rounded-md mx-auto my-0  w-24 h-24 object-contain" alt="">
        </div>
      </div>
    </ExpandingCard>
  </div>

</template>
<style lang="scss"></style>
