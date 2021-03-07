<template>
  <v-app-bar flat app :height="height" color="background">
    <v-btn class="ml-sm-1" color="primary" @click.stop="changeDrawer()" icon>
      <v-icon large>mdi-arrow-right-circle</v-icon>
    </v-btn>

    <v-toolbar-title>
      <a class="text-decoration-none" href="/">
        <h2 class="ml-n3 d-sm-none">The Index</h2>
      </a>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <h4 class="px-6 py-2 text-center d-none d-md-block">
      A curated list of design resources for developers
    </h4>
    <v-spacer></v-spacer>

    <v-tooltip max-width="300px" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" to="/bookmarks" icon class="mr-sm-4"
          ><v-icon color="primary" large>mdi-book-open-outline</v-icon></v-btn
        >
      </template>
      <span>Bookmarks</span>
    </v-tooltip>

    <theme-switch />

    <v-tooltip max-width="300px" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          class="mr-sm-2 d-none d-sm-block"
          @click.stop="showAbout = true"
          ><v-icon color="primary" large>mdi-information</v-icon>
          <about v-model="showAbout"
        /></v-btn>
      </template>
      <span>Bookmarks</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      showAbout: false,
    }
  },
  computed: {
    drawer() {
      return this.$store.getters['GET_DRAWER']
    },
    height() {
      if (this.$vuetify.breakpoint.xs) return 65
      else return 80
    },
  },
  methods: {
    changeDrawer() {
      this.$emit('toggleDrawer')
    },
  },
})
</script>

<style>
</style>