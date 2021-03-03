<template>
  <div>
    <v-btn
      @click="removeBookmark(website)"
      icon
      class="bookmark ma-4"
      v-if="is_bookmarked(website)"
      ><v-icon large color="accent">mdi-bookmark</v-icon>
    </v-btn>

    <v-btn @click="addBookmark(website)" icon class="bookmark ma-4" v-else>
      <v-icon large color="accent">mdi-bookmark-outline</v-icon></v-btn
    >
    <v-snackbar v-model="snackbar" color="accent" timeout="2000">
      <span class="font-weight-bold">{{ website.title }}</span>
      added to bookmarks!
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: { website: {} },

  data() {
    return {
      bookmarked_websites: '',
      snackbar: false,
    }
  },

  async mounted() {
    let temp = (await JSON.parse(localStorage.getItem('bookmarks')!)) || []
    this.bookmarked_websites = JSON.stringify(temp)
  },

  methods: {
    addBookmark(website: any) {
      console.log('adding bookmark')
      let bookmarks = []
      bookmarks = JSON.parse(localStorage.getItem('bookmarks')!) || []
      if (JSON.stringify(bookmarks).indexOf(website.title) != -1) {
        bookmarks.splice()
      }

      bookmarks.push(website)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
      this.snackbar = true
    },
    removeBookmark(website: any) {
      console.log('removing bookmark')
      let updated_bookmarks = []
      updated_bookmarks = JSON.parse(localStorage.getItem('bookmarks')!)

      let index = updated_bookmarks
        .map((item: any) => {
          return item.title
        })
        .indexOf(website.title)

      updated_bookmarks.splice(index, 1)
      localStorage.setItem('bookmarks', JSON.stringify(updated_bookmarks))
    },

    is_bookmarked(website: any) {
      return this.bookmarked_websites.indexOf(website.title) != -1
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