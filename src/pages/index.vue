<script setup lang="ts">
const showDrawer = ref(false)
const search = ref()

const { data } = useFetch('/api')

const resources = computed(() => data.value)
</script>

<template>
  <section class="no-select">
    <organisms-app-header :is-open="showDrawer" @on-menu-click="showDrawer = !showDrawer" />
    <organisms-app-drawer :is-open="showDrawer" @close="showDrawer = false" />

    <div class="m-6">
      <atoms-text-input v-model="search" prefix-icon="ph:magnifying-glass" placeholder="Search resources" />
    </div>

    <div class="mx-6 mb-20">
      <!-- <div class="h-20 flex text-center justify-center items-center mb-4 px-2">
        <p class="text-xl underline font-medium dark:text-gray-200">{{ resource.name }}</p>
      </div> -->

      <div v-if="resources && resources?.length > 0">
        <div
          v-for="resource in resources"
          :key="resource.name"
          class="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
        >
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
