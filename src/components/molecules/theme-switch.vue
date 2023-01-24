<script setup lang="ts">
const { isDarkTheme, changeTheme } = useTheme()
</script>

<template>
  <div class="relative cursor-pointer">
    <Icon
      v-if="!isDarkTheme"
      name="line-md:sun-rising-loop"
      size="24"
      class="text-gray-900 dark:text-gray-300"
      @click="changeTheme"
    />
    <Icon v-else name="line-md:moon" size="24" class="text-gray-900 dark:text-gray-300" @click="changeTheme" />
  </div>
</template>
