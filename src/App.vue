<template>
  <v-app>
    <div v-if="!isMobile()">
      <desktop />
    </div>
    <div v-else>
      <mobile />
    </div>

    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="error"
      @click="toTop"
    >
      <svg style="width:42px;height:42px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
      </svg>
    </v-btn>
  </v-app>
</template>

<script>
import desktop from "./components/desktop";
import mobile from "./components/mobile";
export default {
  name: "App",

  components: {
    desktop,
    mobile,
  },
  data: () => ({
    fab: false,
  }),

  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}
</style>