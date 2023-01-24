<script lang="ts" setup>
defineEmits(['on-menu-click'])
</script>

<template>
  <header
    class="h-16 justify-between z-50 top-0 sticky w-full dark:bg-gray-900 text-gray-800 dark:text-gray-50 bg-gray-100 border-b dark:border-gray-700 flex items-center px-6"
  >
    <button @click="$emit('on-menu-click')">
      <icon name="ph:arrow-circle-left" size="24" />
    </button>
    <p class="text-lg font-medium">Design Resources</p>
    <molecules-theme-switch />
  </header>
</template>
