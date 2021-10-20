<template>
  <v-dialog v-model="show" max-width="350">
    <v-card class="px-6 py-4">
      <v-row justify="center">
        <v-col justify="center" align="center">
          <h2>Design Resources</h2>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-sheet rounded="lg">
        <v-row justify="center" class="my-2">
          <v-col justify="center" align="center">
            <h3>Author</h3>
            <v-btn
              depressed
              class="mt-2"
              target="_blank"
              href="https://sumit.co"
              >Sumit Kolhe</v-btn
            >
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row justify="center" class="my-2">
          <v-col justify="center" align="center">
            <h4>Github</h4>
            <v-btn
              depressed
              class="mt-2"
              target="_blank"
              href="https://github.com/sumitkolhe/design-resource"
              >Source Code</v-btn
            >
          </v-col>
        </v-row>
      </v-sheet>
      <v-divider></v-divider>
      <v-row justify="center" class="mt-4 mb-2">
        <v-btn outlined color="accent" @click="show = false">Close</v-btn>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: Boolean,
  },

  computed: {
    show: {
      get() {
        return (this as any).value
      },
      set(value) {
        ;(this as any).$emit('input', value)
      },
    },
  },
})
</script>

<style></style>
