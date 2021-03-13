<template>
  <div>
    <appbar @toggleDrawer="Drawer" />
    <v-navigation-drawer
      exact
      v-model="drawer"
      width="350"
      app
      fixed
      color="background"
    >
      <v-list-item-group class="py-1">
        <v-row cols="6">
          <v-col class="text-center ml-4">
            <a href="/" class="text-decoration-none">
              <v-list-item-content>
                <v-list-item-title>
                  <h1 class="mb-2 font-weight-bold">The Index</h1>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <h4>by Sumit kolhe</h4>
                </v-list-item-subtitle>
              </v-list-item-content></a
            >
          </v-col>
          <v-col class="text-right mt-4 mr-4">
            <v-btn icon class="mr-2 d-sm-none" @click.stop="showAbout = true"
              ><v-icon color="primary" x-large>mdi-information</v-icon>
              <about v-model="showAbout"
            /></v-btn>
          </v-col>
        </v-row>
      </v-list-item-group>

      <v-divider></v-divider>

      <v-row justify="center" class="mt-12" v-if="loading">
        <v-col align="center" class="mt-12">
          <spinner />
        </v-col>
      </v-row>

      <v-list-item-group v-else class="mt-6 mb-8">
        <v-list-item
          v-for="(item, index) in categories"
          :key="index + item"
          @click="selectCategory(index)"
          link
        >
          <v-list-item-content>
            <v-list-item-title v-text="item" class="font-weight-bold">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <!-- <template v-slot:append>
        <div class="pa-2" align="center">
          <v-btn
            icon
            href="https://github.com/sumitkolhe/theindex"
            target="_blank"
          >
            <v-icon color="primary" large>mdi-github</v-icon>
          </v-btn>
        </div>
      </template> -->
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      showAbout: false,
      drawer: false,
    }
  },

  computed: {
    categories() {
      return this.$store.getters['GET_CATEGORIES']
    },

    loading() {
      return this.$store.getters['GET_LOADING']
    },
  },

  mounted() {
    if ((this as any).$vuetify.breakpoint.width > 600) {
      this.drawer = true
    }
  },

  methods: {
    selectCategory(index: string | number) {
      this.$store.commit('SET_WEBSITE_GROUP', index)
      if (!((this as any).$vuetify.breakpoint.width > 600)) {
        this.drawer = !this.drawer
      }

      if (this.$nuxt.$route.path != '/') this.$router.push('/')
    },

    Drawer() {
      this.drawer = !this.drawer
    },
  },
})
</script>

<style scoped>
#app {
  font-family: 'Montserrat', sans-serif;
}

.v-list-item {
  padding: 4px 20px;
  border-radius: 12px;
  margin: 12px 18px !important;
  border: 3px #91919141 solid;
}

::before,
::after {
  border-radius: 8px !important;
}
</style>
