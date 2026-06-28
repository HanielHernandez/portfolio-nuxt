<script setup lang="ts">
import type MlProjectCardProps from './MlProjectCard.types'

const props = defineProps<MlProjectCardProps>()
</script>
<template>
    <NuxtLink
        :to="props.url"
        target="_blank"
        class="card flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] dark:shadow-none dark:ring-1 tems-start justify-start gap-4 cursor-pointer border dark:border-neutral-600 dark:hover:bg-neutral-700 border-neutral-200 hover:bg-neutral-100 transition-colors ease-in-out duration-300 rounded-md p-4"
    >
        <AtImage
            v-bind="image"
            class="w-full ft-contain rounded-sm"
        />
        <div class="flex flex-col gap-4 h-full">
            <AtText
                variant="h4"
                class="card-title"
            >
                {{ name }}
            </AtText>
            <div class="flex gap-4 flex-col">
                <AtText>
                    <AtRichText
                        class=""
                        :document="description"
                    />
                </AtText>
                <div class="">
                    <Chip
                        v-for="tag in madeWith"
                        :key="tag"
                        class="mr-2"
                    >
                        {{ tag }}
                    </Chip>
                </div>

                <a
                    :href="url"
                    class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold"
                    target="_blank"
                >
                    {{ $t('myWork.projects.view') }}

                    <Icon name="mdi:arrow-top-right" />
                </a>
            </div>
        </div>
    </NuxtLink>
</template>
<style lang="scss" scoped></style>
