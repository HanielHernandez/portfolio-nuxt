<script setup lang="ts">
type Theme = 'light' | 'dark'
const LOCAL_STORAGE_THEME_KEY = 'theme'
const darkMode = useState('theme', () => false)
const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  darkMode.value = newTheme === 'dark'
}
onMounted(() => {
  const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
  const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage)
  } else {
    setTheme(isDarkModePreferred ? 'dark' : 'light')
  }
})
watch(darkMode, (selected) => {
  setTheme(selected ? 'dark' : 'light')
})


</script>
<template>
 <div :class="{dark:  darkMode}" 
 class="transition-all pt-24 ease-in-out duration-300 w-full h-screen overflow-y-auto dark:bg-neutral-800"
      >
    <the-navbar id="navbar"  />
    <div class="mx-auto h-full bgtransparent transition-colors ease-in-out duration-300" style="max-width: 1024px">
      
      <slot />

      <!-- <div ref="modeIcon" class="change-theme-button" @click="changeLightMode()">
        <transition mode="out-in" :css="false" @enter="onSunEnter" @leave="onSunLeave">
          <div v-if="darkmode" class="icon sun">
            <div ref="modIconCenter" class="center"></div>
            <div ref="modIconCenterOff" class="off-center"></div>
            <div class="beam bteam-top"></div>
            <div class="beam beam-top-right"></div>
            <div class="beam beam-center-right"></div>
            <div class="beam beam-bottom-right"></div>
            <div class="beam beam-bottom"></div>
            <div class="beam beam-bottom-left"></div>
            <div class="beam beam-center-left"></div>
            <div class="beam beam-top-left"></div>
          </div>
          <div v-else="" class="icon">
            <div ref="modIconCenter" class="center"></div>
            <div ref="modIconCenterOff" class="off-center"></div>
          </div>
        </transition>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss"></style>
