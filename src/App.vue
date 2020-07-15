<template>
  <v-app>
    <div v-if="!isMobile()">
      <desktop />
    </div>
    <div v-else>
      <mobile />
    </div>
  </v-app>
</template>

<script>
import desktop from "./components/desktop";
import mobile from "./components/mobile";
export default {
  name: "App",

  components: {
    desktop,
    mobile
  },
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    }
  }
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}
</style>