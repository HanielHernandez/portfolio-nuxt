<script setup lang="ts">
//   type Theme = 'light' | 'dark';
// const LOCAL_STORAGE_THEME_KEY = 'theme'
// const darkMode = useState('theme', () => false)
// const setTheme = (newTheme: Theme) => {
//   localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
//   darkMode.value = newTheme === 'dark'
// }
// onMounted(() => {
//   const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
//   const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
//   if (themeFromLocalStorage) {
//     setTheme(themeFromLocalStorage)
//   } else {
//     setTheme(isDarkModePreferred ? 'dark' : 'light')
//   }
// })
// watch(darkMode, (selected) => {
//   setTheme(selected ? 'dark' : 'light')
// })
const colorMode = useColorMode()


const changeTheme = ()=>{
  colorMode.preference = colorMode.preference == 'dark' ? 'light': 'dark'
}

</script>

<template>
  <body :class="{dark: $colorMode.preference == 'dark'}">
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </body>
    
</template>
