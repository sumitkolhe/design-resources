<template>
  <v-app>
    <v-main
      ><navigation />
      <v-container>
        <notification />
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
