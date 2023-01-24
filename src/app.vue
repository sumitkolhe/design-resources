<script setup lang="ts">
interface Resource {
  name: string
  description: string
  websites: {
    title: string
    description: string
    link: string
    icon: string
  }[]
}

const route = useRoute()

const showDrawer = ref(false)
const resource = ref<Resource>()

const { data } = useFetch('/api')

const categories = computed(() => data?.value?.map((i) => i.name))

useRouter().replace({
  query: { ...route.query, category: categories?.value ? categories?.value[0].toLowerCase() : null },
})

watch(route, (params) => {
  const selectCategory = params.query.category?.toString().toLowerCase()

  resource.value = data.value?.find((category) => category.name.toLowerCase() === selectCategory)

  showDrawer.value = false
})
</script>

<template>
  <section class="no-select">
    <organisms-app-header @on-menu-click="showDrawer = !showDrawer" />
    <organisms-app-drawer :categories="categories" :is-open="showDrawer" @close="showDrawer = false" />

    <div v-if="resource?.name" class="mx-6 mb-20">
      <div class="h-20 flex text-center justify-center items-center my-4 px-2">
        <p class="text-xl underline font-medium dark:text-gray-200">{{ resource.name }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        <molecules-website-card
          v-for="website in resource.websites"
          :key="website.title"
          :title="website.title"
          :icon="website.icon"
          :description="website.description"
          :link="website.link"
        />
      </div>
    </div>
  </section>
</template>

<style>
* {
  font-family: 'Inter', sans-serif !important;
}
.no-select {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.no-select:focus {
  outline: none !important;
}
body {
  @apply bg-gray-100 dark:bg-gray-800;
}
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
