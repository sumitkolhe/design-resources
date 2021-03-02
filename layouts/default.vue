<template>
  <v-app dark>
    <v-app-bar color="navbarColor" elevate-on-scroll app height="60">
      <v-toolbar-title>
        <h2 class="mx-2" style="letter-spacing: 1px">The Index</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h3
        class="hidden-sm-and-down"
        style="font-spacing: 1px; font-weight: 500"
      >
        A curated list of design resources for developers
      </h3>
      <v-spacer></v-spacer>
      <theme-switch />
      <v-btn color="svgColor" icon>
        <svg style="width: 34px; height: 34px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
      </v-btn>

      <v-btn
        style="outline: none"
        color="svgColor"
        class="mr-2"
        icon
        href="https://github.com/sumitkolhe/theindex"
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import themeSwitch from '~/components/theme-switch.vue'
export default Vue.extend({
  components: { themeSwitch },
})
</script>

<style scoped>
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>


