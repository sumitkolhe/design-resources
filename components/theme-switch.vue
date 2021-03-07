<template>
  <v-tooltip max-width="300px" bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        icon
        @click="changeTheme()"
        class="mr-sm-4"
      >
        <v-icon color="primary" large>mdi-white-balance-sunny</v-icon>
      </v-btn>
    </template>
    <span>Theme</span>
  </v-tooltip>
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
    // ;(this as any).$vuetify.theme.dark =
    //   JSON.parse(localStorage.getItem('isThemeDark') as string) || false
    // this.isThemeDark = (this as any).$vuetify.theme.dark
  },
  methods: {
    changeTheme() {
      ;(this as any).$vuetify.theme.dark = !(this as any).$vuetify.theme.dark
      // this.isThemeDark = !this.isThemeDark
      // localStorage.setItem(
      //   'isThemeDark',
      //   JSON.stringify((this as any).$vuetify.theme.dark)
      // )
    },
  },
})
</script>

<style>
</style>