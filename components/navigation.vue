<template>
  <div>
    <v-app-bar flat app height="85" color="background">
      <v-btn class="ml-1" color="primary" @click.stop="drawer = !drawer" icon>
        <v-icon large>mdi-arrow-right-circle</v-icon>
      </v-btn>
      <v-toolbar-title>
        <a class="text-decoration-none" href="https://theindex.tech">
          <h2 class="ml-n2" style="letter-spacing: 1px; font-weight: 800">
            The Index
          </h2>
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="mr-2"><v-icon large>mdi-book</v-icon></v-btn>
      <theme-switch class="mr-2" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      width="350"
      app
      dark
      fixed
      color="background"
    >
      <v-list-item-group>
        <v-row cols="12">
          <v-col>
            <v-list-item-content>
              <v-list-item-title>
                <h1 class="mb-2 ml-2">The Index</h1>
              </v-list-item-title>
              <v-list-item-subtitle>
                <h4 class="ml-2">by Sumit Kolhe</h4>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-col>
        </v-row>
      </v-list-item-group>

      <v-divider></v-divider>

      <v-row justify="center" class="mt-12" v-if="loading">
        <v-col align="center" class="mt-12">
          <spinner />
        </v-col>
      </v-row>

      <v-list nav dense v-else>
        <v-list-item
          v-for="(item, index) in categories"
          :key="index"
          @click="selectCategory(index)"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              <h3 class="text-wrap">{{ item }}</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2" align="center">
          <v-btn
            icon
            href="https://github.com/sumitkolhe/theindex"
            target="_blank"
          >
            <v-icon color="primary" large>mdi-github</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      drawer: true,
    }
  },

  computed: {
    categories() {
      return this.$store.getters['websites/GET_CATEGORIES']
    },

    loading() {
      return this.$store.getters['GET_LOADING']
    },
  },

  methods: {
    selectCategory(index: string | number) {
      this.$store.commit('websites/SET_WEBSITE_GROUP', index)
    },
  },
})
</script>

<style scoped>
#app {
  font-family: 'Montserrat', sans-serif;
}

.v-list-item__content {
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 1rem;
}
.v-list-item {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  margin: 1rem 1.5rem;
  background-color: #8b8b8b3d;
}
</style>
