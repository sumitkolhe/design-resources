<script lang="ts" setup>
defineEmits(['on-menu-click'])

defineProps({
  isOpen: {
    type: Boolean,
  },
})
</script>

<template>
  <header
    class="h-16 justify-between z-50 top-0 sticky w-full dark:bg-gray-900 text-gray-800 dark:text-gray-50 bg-gray-100 border-b dark:border-gray-700 flex items-center px-6"
  >
    <div class="flex space-x-8">
      <button @click="$emit('on-menu-click')">
        <icon name="line-md:arrow-left" :class="[isOpen ? '' : 'rotate-180']" size="24" />
      </button>
      <p class="text-lg font-medium">Design Resources</p>
    </div>

    <!-- <div>
      <atoms-text-input placeholder="Search Resources" prefix-icon="ph:magnifying-glass" />
    </div> -->

    <molecules-theme-switch />
  </header>
</template>
