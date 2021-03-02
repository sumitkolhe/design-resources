<template>
  <div>
    <v-row justify="center">
      <card :websites="all_websites[0]" />
    </v-row>
    <v-row justify="center" class="mt-12" v-if="loading">
      <v-col align="center" class="mt-12">
        <spinner />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
export default Vue.extend({
  layout: 'mobile',
  data() {
    return {
      all_websites: {},
      loading: true,
    }
  },

  async mounted() {
    await axios
      .get('api')
      .then((response) => {
        this.all_websites = response.data.websites
        this.loading = false
      })
      .catch((error) => {
        console.log(error)
      })
  },
})
</script>
