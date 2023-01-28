<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

// emits
defineEmits(['close'])

// props
defineProps({
  isOpen: {
    type: Boolean,
    default: () => false,
    required: true,
  },
})

const { data } = useFetch('/api/categories')

const categories = computed(() => data?.value?.map((i) => i.name))
</script>

<template>
  <transition-root appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-[70]" @close="$emit('close')">
      <transition-child
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-50"
        enter-to="opacity-100"
        leave="ease-in-out duration-1000"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur" />
      </transition-child>

      <transition-child
        as="template"
        enter="transform transition ease-in-out duration-300"
        enter-from="translate-y-full md:-translate-x-full md:translate-y-0"
        enter-to="translate-y-0 md:-translate-x-0 md:translate-y-0"
        leave="transform transition ease-in-out duration-300"
        leave-from="translate-y-0 md:-translate-x-0 md:translate-y-0"
        leave-to="translate-y-full md:-translate-x-full md:translate-y-0"
      >
        <dialog-panel
          class="max-h-[90%] fixed bottom-0 flex w-screen flex-col justify-between overflow-y-auto rounded-t-lg border-r-0 bg-gray-50 dark:border-t dark:border-gray-700 dark:bg-gray-900 md:left-0 md:h-full md:max-h-screen md:w-[25%] md:rounded-t-none md:border-t-0 md:border-r"
        >
          <div
            class="space-y-1 sticky bg-gray-50 dark:bg-gray-900 top-0 flex items-center justify-between border-b p-4 dark:border-gray-700 md:p-5"
          >
            <p class="text-xl text-gray-900 dark:text-gray-200">Design Resources</p>
            <icon name="ph:x" class="dark:text-gray-200 cursor-pointer" size="24" @click="$emit('close')" />
          </div>

          <div class="flex justify-start space-y-2 flex-col my-4 dark:bg-gray-900 dark:text-gray-200">
            <nuxt-link
              v-for="category of categories"
              :key="category"
              :class="['bg-red-500  text-gray-50 dark:hover:bg-red-700 hover:bg-red-500']"
              class="text-md font-normal cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 rounded-md p-4 mx-4"
              :to="{ query: { category } }"
            >
              {{ category }}
            </nuxt-link>
          </div>
        </dialog-panel>
      </transition-child>
    </Dialog>
  </transition-root>
</template>
