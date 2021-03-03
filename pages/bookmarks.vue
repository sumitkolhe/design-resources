<template>
  <div>
    <v-row v-if="bookmarked_websites[0]" justify="center" class="mt-4">
      <v-chip large class="px-8" color="accent">
        <span class="font-weight-bold">{{
          bookmarked_websites[0].category
        }}</span>
      </v-chip>
    </v-row>

    <cards :websites="bookmarked_websites" />
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
    bookmarked_websites() {
      return this.$store.getters['GET_BOOKMARKED_WEBSITES']
    },
    loading() {
      return this.$store.getters['GET_LOADING']
    },
  },

  async mounted() {
    this.$store.commit('SET_LOADING', true)
    await this.$store
      .dispatch('fetchBookmarkedWebsites')
      .then(() => {
        this.$store.commit('SET_LOADING', false)
      })
      .catch((error) => {})
  },
})
</script>
