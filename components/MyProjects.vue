<script lang="ts" setup>
const projects = [
  {
    id: 'customizableCss',
    name: 'Customizable Css',
    description:
      'A CSS framework inspire by tailwind and bulma, documentation was made with the help of nuxt js',
    tags: ['Nuxtjs', 'SASS', 'Algolia'],
    imageUrL: '/img/proyects/customizable_css.PNG',
    link: 'https://hanielhernandez.github.io/custom-css/'
  },
  {
    id: 'fireChat',
    name: 'Fire Chat',
    description: 'A Real time Messaging application ',
    tags: ['Vue', 'Tailwind', 'Firebase'],
    imageUrL: '/img/proyects/firechat.PNG',
    link: 'https://firechat-c857f.web.app/'
  }
]
</script>
<template>
  <div class="flex flex-wrap cards-container justify-center">
    <div v-for="project in projects" :key="`project-${project.id}`" class="p-4 w-full md:w-1/2 lg:w-1/3">
      <div class="card">
        <div class="card-media">
          <img :src="project.imageUrL" alt="" />
        </div>
        <div class="card-content">
          <h5 class="card-title mb-4">
            {{ project.name }}
          </h5>
          <div class="card-description">
            <p>
              {{ $t('myWork.projects.' + project.id + '.description') }}
              <a target="_blank" :href="project.link"
                class="opacity-90 text-md hover:opacity-100 mt-4 font-medium text-blue-600">{{ $t('myWork.projects.view')
                }}</a>

            </p>


            <h6 class="mt-4 text-neutral-600">{{ $t('myWork.projects.made_with') }} </h6>

            <div class="mt-4">
              <Chip v-for="tag in project.tags" :key="tag" class="mr-2">
                {{ tag }}
              </Chip>
            </div>
          </div>
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

@media (min-width: 1024px) {
  .cards {
    &-container {
      margin-right: -1rem;
      margin-left: -1rem;
    }
  }
}

.pill {
  @apply bg-neutral-400 p-2 px-4 mr-2 inline-block text-white dark:bg-neutral-600;
  vertical-align: middle;
  border-radius: 300px;
}
</style>
