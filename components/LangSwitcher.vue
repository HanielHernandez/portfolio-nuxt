<script setup>
const { locale, locales} = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
<template>
    <div class="relative ">
        {{ locale }}
        <div class="options absolute bottom 0 border border-neutral-200 ">
            <div v-for="{code} in locales" :key="locale.code">
                <NuxtLink :to="switchLocalePath(code)" >
                {{ code }}
                <NuxtLink/ >

            </div>
        </div>
    </div>
</template>