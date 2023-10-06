<script setup lang="ts">
import { MlProjectCardProps } from './MlProjectCard.types';

const props = defineProps<MlProjectCardProps>()

</script>
<template lang="">
    <div class="card">
          <div class="card-media">
            <AtImage v-bind="image"/>
          </div>
          <div class="card-content">
            <h5 class="card-title mb-4">
              {{ name }}
            </h5>
            <div class="card-description">
              <AtRichText :document="description" />
              <h6 class="mt-4 text-neutral-600">{{ $t('myWork.projects.made_with') }} </h6>
              <div class="mt-4">
                <Chip v-for="tag in madeWith" :key="tag" class="mr-2" >
                  {{ tag }}
                </Chip>
              </div>
            </div>
          </div>
        </div>
</template>
<style lang="scss" scoped>
.card {
  @apply cursor-default relative border overflow-hidden border-neutral-100 dark:border-neutral-700;

  &-title {
    @apply font-bold text-neutral-800 dark:text-neutral-100 mb-2;

    &:hover {
      @apply text-blue-600;
    }
  }

  &-media {
    img {
      @apply rounded-t-sm;
      object-fit: cover;
      height: 250px;
    }
  }

  &-content {
    @apply p-4 absolute bottom-0 left-0 bg-neutral-100 rounded-b-sm border-t border-neutral-100 dark:border-neutral-800 bg-opacity-50 dark:bg-neutral-900/90 w-full transition-all;
    height: 84px;
  }

  &-description {
    @apply text-sm text-neutral-600 dark:text-neutral-300;
    height: 20px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  &:hover {
    .card {
      &-content {
        @apply bg-neutral-200/75 dark:bg-neutral-900/75;
        height: 100%;
        border-top-color: rgba(#000000, 0);

      }

      &-description {
        transition: all;
        height: 100%;
        white-space: normal;
        text-overflow: inherit;
        display: inline-block;
        -webkit-line-clamp: inherit;
        -webkit-box-orient: inherit;
      }
    }
  }
}
</style>
