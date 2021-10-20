<template>
  <v-app-bar flat app :height="height" color="background">
    <v-btn class="ml-sm-1" color="primary" @click.stop="changeDrawer()" icon>
      <v-icon :large="!isMobile">mdi-arrow-right-circle</v-icon>
    </v-btn>

    <v-toolbar-title>
      <a class="text-decoration-none" href="/">
        <h4 class="ml-n3 d-sm-none">The Index</h4>
      </a>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>
    <v-tooltip max-width="300px" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" to="/search" icon class="mr-sm-4"
          ><v-icon color="primary" :large="!isMobile"
            >mdi-magnify</v-icon
          ></v-btn
        >
      </template>
      <span>Search</span>
    </v-tooltip>
    <v-tooltip max-width="300px" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" to="/bookmarks" icon class="mr-sm-4"
          ><v-icon color="primary" :large="!isMobile"
            >mdi-bookmark-multiple</v-icon
          ></v-btn
        >
      </template>
      <span>Bookmarks</span>
    </v-tooltip>

    <v-tooltip max-width="300px" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
          @click="changeTheme()"
          class="mr-sm-4"
        >
          <v-icon color="primary" :large="!isMobile"
            >mdi-white-balance-sunny</v-icon
          >
        </v-btn>
      </template>
      <span>Theme</span>
    </v-tooltip>

    <v-tooltip max-width="300px" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          class="mr-sm-2 d-none d-sm-block"
          @click.stop="showAbout = true"
          ><v-icon color="primary" :large="!isMobile">mdi-information</v-icon>
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
      isThemeDark: false,
      search: '',
    }
  },
  computed: {
    height() {
      if (this.$vuetify.breakpoint.xs) return 65
      else return 80
    },
    isMobile() {
      if (this.$vuetify.breakpoint.xs) return true
      else return false
    },
  },
  methods: {
    changeDrawer() {
      this.$emit('toggleDrawer')
    },
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

<style></style>
