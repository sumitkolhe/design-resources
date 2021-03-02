<template>
  <v-btn icon @click="changeTheme()">
    <v-icon large>mdi-white-balance-sunny</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isThemeDark: false,
    }
  },
  mounted() {
    (this as any).$vuetify.theme.dark =
      JSON.parse(localStorage.getItem('isThemeDark')!) || false
  },
  methods: {
    changeTheme() {
      (this as any).$vuetify.theme.dark = !(this as any).$vuetify.theme.dark
      this.isThemeDark = !this.isThemeDark
      localStorage.setItem(
        'isThemeDark',
        JSON.stringify((this as any).$vuetify.theme.dark)
      )
    },
  },
})
</script>

<style>
</style>