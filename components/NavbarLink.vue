<template>
    <NuxtLink
        :to="localePath(to)"
        class="nav-link group relative inline-flex items-center px-3 py-2 text-base font-semibold transition-colors duration-300 ease-in-out lg:text-[0.95rem] text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
        :class="{ active: active }"
    >
        <span class="relative z-10">
            <slot></slot>
        </span>
        <span
            class="indicator absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
        ></span>
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

<style lang="scss" scoped>
.nav-link {
    &.active {
        @apply text-blue-600 dark:text-blue-400;

        .indicator {
            @apply scale-x-100;
        }
    }
}
</style>
