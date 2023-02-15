<script setup>
const { locale, locales} = useI18n()
const switchLocalePath = useSwitchLocalePath()
const showLocales = ref(false)
</script>
<template>
    <div class="lang" @mouseenter="showLocales = true" @mouseleave="showLocales =false" >
        <span type="text"
              readonly 
              class="py-2 px-4 uppercase font-bold inline-block dark:text-white">{{ locale }}</span>
              <transition name="show-options" mode="out-in">
                <div v-if="showLocales" class="options absolute bottom border border-neutral-200 dark:border-neutral-700 w-full ">
            <div v-for="{code} in locales" :key="locale.code" class="option" :class="{active: locale == code}">
                <NuxtLink :to="switchLocalePath(code)" >
                {{ code }}
                </NuxtLink> 
            </div>
        </div>
              </transition>

    </div>
</template>
<style lang="scss" scoped>
 .lang, .option {
        @apply cursor-pointer hover:bg-neutral-200 uppercase font-bold dark:hover:bg-neutral-800 transition-colors ease-in-out duration-150;
  }

  .lang {
     @apply relative;

     .options { 
      @apply bg-white dark:bg-neutral-800 ;
      opacity: 0;
      .option{
       @apply px-2 py-1 dark:text-white;

       &.active {
        @apply text-blue-600;
       }
      }
     }
     &:hover{
      .options {
         opacity: 1;
      }
     }
   }
   
.show-options-enter-active,
.show-options-leave-active {
  transition: opacity 0.5s ease;

}

.show-options-enter-from,
.show-options-leave-to {
  opacity: 0;
}

</style>