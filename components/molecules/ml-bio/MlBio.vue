<script setup lang="ts">
import type { MlBioProps } from './MlBio.types.ts'

const props = defineProps<MlBioProps>()
</script>
<template>
    <div class="flex flex-col-reverse md:flex-row md:gap-4 lg:gap-16 py-8">
        <div
            id="profile_image"
            class="flex flex-col md:items-end items-center justify-center w-full p-4 md:p-0 md:w-2/5"
        >
            <AtImage
                v-bind="image"
                id
                class="rounded-md grayscale object-cover hover:grayscale-0 transition-all hover:scale-110 ease-in-out duration-500 h-full"
            />
        </div>
        <div
            id="bio"
            class="p-4 text-center md:text-left items-center md:items-start gap-6 flex flex-col lg:p-0 col-span-3 lg:col-span-2 w-full md:w-3/5"
        >
            <div>
                <AtText variant="subtitle">
                    {{ $t('aboutMe.subtitle') }}
                </AtText>
                <AtText variant="h2">
                    {{ title }}
                </AtText>
            </div>

            <AtText as="div">
                <AtRichText :document="biography" />
            </AtText>

            <AtButton
                v-if="actionLink"
                outlined
                size="lg"
                class="w-auto"
                element="a"
                :label="actionLink.text"
                :href="actionLink.url"
            />
        </div>
    </div>
</template>
<style lang="scss"></style>
