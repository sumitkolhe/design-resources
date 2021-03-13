<template>
  <div>
    <v-row v-if="website_group[0]" justify="center" class="mt-sm-8 mt-2">
      <v-chip large class="px-8" color="accent">
        <span class="font-weight-bold">{{ website_group[0].category }}</span>
      </v-chip>
    </v-row>

    <cards :websites="website_group" :showCategory="false" />
    <v-row justify="center" class="mt-12" v-if="loading">
      <v-col align="center" class="mt-12">
        <spinner />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },

  computed: {
    website_group() {
      return this.$store.getters['GET_WEBSITE_GROUP']
    },
    loading() {
      return this.$store.getters['GET_LOADING']
    },
  },

  async mounted() {
    this.$store.commit('SET_LOADING', true)
    await this.$store
      .dispatch('fetchData')
      .then(() => {
        this.$store.commit('SET_LOADING', false)
      })
      .catch((error) => {})
  },
})
</script>
