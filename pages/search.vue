<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" class="mt-12">
        <v-text-field
          solo
          rounded
          outlined
          clearable
          dark
          v-model="search"
          hide-details
        ></v-text-field>

        <v-col align="center">
          <v-btn
            @click="searchWebsites"
            class="mt-2"
            color="error"
            elevation="0"
            >Search</v-btn
          >
        </v-col>
      </v-col>
    </v-row>

    <cards :websites="filtered" :showCategory="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'search',
  data() {
    return {
      search: '',
    }
  },

  computed: {
    filtered() {
      return this.$store.getters['GET_FILTERED_WEBSITES']
    },
  },

  methods: {
    searchWebsites() {
      this.$store.commit('SET_FILTERED_WEBSITES', this.search)
    },
  },

  async mounted() {},
})
</script>
