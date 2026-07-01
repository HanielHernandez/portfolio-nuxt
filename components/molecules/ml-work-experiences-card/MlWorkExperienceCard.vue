<script setup lang="ts">
import AtRichText from '../../atoms/at-rich-text/AtRichText.vue'
import { type MlWorkExperienceCardEmits, type MlWorkExperienceCardProps } from './MlWorkExperienceCard.type'
const props = withDefaults(defineProps<MlWorkExperienceCardProps>(), {
    expanded: false
})
const emit = defineEmits<MlWorkExperienceCardEmits>()
const handleOnExpand = (expanded: boolean) => {
    emit('onExpand', expanded)
}
const { locale } = useI18n()
const fromToFormated = computed(() => {
    const {
        experience: { startDate: from, endDate: to }
    } = props
    const dayjs = useDayjs()
    const fromFormated = dayjs(from).locale(locale.value).format('MMM YYYY')
    const toFormated = dayjs(to).locale(locale.value).format('MMM YYYY')

    return `${fromFormated} - ${toFormated}`
})
</script>
<template>
    <div
        class="border-l relative border-blue-300 pl-8 pb-8 before:size-8 before:bg-blue-600 before:rounded-full before:absolute before:left-[-1rem] before:top-0"
    >
        <div
            class="border-l border-blue-600 px-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] dark:shadow-none dark:ring-1 dark:ring-white/1 flex flex-row border border-neutral-200 dark:border-neutral-600 dark:hover:bg-neutral-800 hover:bg-neutral-100 transition-colors ease-in-out duration-300 p-4 rounded-md cursor-pointer"
        >
            <div class="flex flex-col gap-4 w-full">
                <div class="">
                    <div class="flex flex-col gap-2">
                        <AtText
                            variant="h4"
                            class=""
                        >
                            {{ experience.name }}
                        </AtText>
                        <AtText
                            variant="paragraph"
                            class="!text-blue-600 text-sm !font-bold flex items-center gap-2"
                        >
                            <Icon
                                name="mdi:calendar"
                                class="text-2xl leading-none"
                            />
                            {{ fromToFormated }}
                        </AtText>
                    </div>
                </div>

                <AtText>
                    <AtRichText
                        :document="experience.description"
                        class="dark:text-neutral-300 text-clip"
                    />
                </AtText>
                <div>
                    <chip
                        v-for="tag in experience.tags"
                        class="mr-2 mb-2"
                    >
                        {{ tag }}
                    </chip>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>
