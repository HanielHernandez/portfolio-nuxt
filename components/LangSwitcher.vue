<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const showLocales = ref(false)

const otherLocale = computed(() => {
    return locales.value.find((x) => x.code != locale.value)
})
</script>
<template>
    <div class="lang">
        <NuxtLink
            class="inline-flex h-10 w-10 items-center justify-center rounded-full uppercase font-bold text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-white/10 transition-colors ease-in-out duration-200"
            :to="switchLocalePath(otherLocale.code)"
        >
            {{ otherLocale.code }}
        </NuxtLink>
    </div>
</template>
<style lang="scss" scoped>
.option {
    @apply cursor-pointer hover:bg-neutral-200 uppercase font-bold dark:hover:bg-neutral-800 transition-colors ease-in-out duration-150;
}

.lang {
    @apply relative;

    .options {
        @apply bg-white dark:bg-neutral-800;
        opacity: 0;

        .option {
            @apply px-2 py-1 dark:text-white;

            &.active {
                @apply text-blue-600;
            }
        }
    }

    &:hover {
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
