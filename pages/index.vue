<template>
  <v-row justify="center" align="center"> {{ result }} </v-row>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      result: {},
    }
  },

  mounted() {
    axios.get('api').then((resp) => {
      this.result = resp
    })
  },
})
</script>
