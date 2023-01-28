<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: () => '',
  },
  link: {
    type: String,
    default: () => '',
  },
  description: {
    type: String,
    default: () => '',
  },
  icon: {
    type: String,
    default: () => '',
  },
})

const imageError = ref(false)

const setAltImg = () => {
  imageError.value = true
}
</script>

<template>
  <div
    class="bg-gray-50 dark:bg-gray-900 dark:border-gray-700 cursor-pointer p-4 hover:border-gray-600 hover:dark:border-gray-400 transition-all duration-200 rounded-md border"
  >
    <nuxt-link :to="link" target="_blank">
      <img
        v-if="!imageError"
        :src="icon"
        class="h-14 w-14 rounded-full bg-gray-900 border-2 dark:border-gray-700 border-gray-800"
        @error="setAltImg"
      />

      <div
        v-else
        class="h-14 w-14 rounded-full flex items-center justify-center bg-gray-200 border-2 dark:border-gray-700 border-gray-800"
      >
        <p class="text-2xl font-bold">{{ title.slice(0, 1) }}</p>
      </div>

      <div class="mt-4 mb-2 flex-col space-y-2 dark:text-gray-100">
        <p class="font-medium">{{ title }}</p>
        <p class="text-sm opacity-50">{{ description }}</p>
      </div>
    </nuxt-link>
  </div>
</template>
