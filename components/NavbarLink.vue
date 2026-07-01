<template>
    <NuxtLink
        :to="localePath(to)"
        class="nav-link group relative inline-flex items-center px-3 py-2 text-sm font-semibold ransition-colors duration-300 ease-in-out lg:text-[0.95rem] text-neutral-600 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-white"
        :class="{ active: active }"
    >
        <span class="relative z-10">
            <slot></slot>
        </span>
    </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
    active: {
        type: Boolean,
        default: () => false
    },
    to: {
        type: [Object, String],
        default: () => ''
    }
})
const localePath = useLocalePath()
</script>
