<template>
  <v-btn @click="bookmarkWebsite(website)" icon class="bookmark ma-4"
    ><v-icon large color="accent" v-if="bookmarked.indexOf(website.title) != -1"
      >mdi-bookmark</v-icon
    >
    <v-icon v-else large color="accent">mdi-bookmark-outline</v-icon></v-btn
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: { website: {} },

  data() {
    return {
      bookmarked: '',
    }
  },

  mounted() {
    let temp = JSON.parse(localStorage.getItem('bookmarks')!) || []
    this.bookmarked = JSON.stringify(temp)
  },

  methods: {
    bookmarkWebsite(website: any) {
      console.log(website)
      let bookmarks = []
      bookmarks = JSON.parse(localStorage.getItem('bookmarks')!) || []
      if (JSON.stringify(bookmarks).indexOf(website.title) != -1) {
        bookmarks.splice()
      }

      bookmarks.push(website)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    },
  },
})
</script>

<style scoped>
.bookmark {
  position: absolute;
  top: 0;
  right: 0;
}
</style>