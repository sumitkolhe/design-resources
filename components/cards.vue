<template>
  <v-row justify="center" class="mt-6">
    <v-card
      class="ma-6 pa-5"
      outlined
      hover
      height="220px"
      width="350"
      target="_blank"
      v-for="website in websites"
      :key="website.link"
    >
      <v-col class="text-left">
        <v-row>
          <v-avatar size="50">
            <v-img :src="website.logo"></v-img>
          </v-avatar>
          <v-btn v-if="bookmarked" icon class="bookmark ma-4"
            ><v-icon large color="accent">mdi-bookmark-plus</v-icon></v-btn
          >
          <v-btn v-else icon class="bookmark ma-4"
            ><v-icon large color="accent"
              >mdi-bookmark-plus-outline</v-icon
            ></v-btn
          >
        </v-row>
        <v-row>
          <h3
            class="text-left text--primary font-weight-medium mt-4 d-inline-block text-truncate"
          >
            {{ website.title }}
          </h3>
        </v-row>
        <v-row>
          <p class="text-left font-weight-medium text--secondary mt-2">
            {{ website.description.substring(0, 80) + '...' }}
          </p>
        </v-row>
      </v-col>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: { websites: {} },

  data() {
    return {
      bookmarked: false,
    }
  },
})
</script>

<style scoped>
.bookmark {
  position: absolute;
  top: 0;
  right: 0;
}

.v-card__text,
.v-card__title {
  word-break: normal;
  font-size: 18px;
  font-weight: 600;
}
.v-sheet.v-card {
  border-radius: 12px;
  border: 3px #91919141 solid;
}
.v-sheet.v-card:hover {
  border: 3px solid #91919141;
  box-shadow: 0 0 10px #9191916e;
}

.v-avatar {
  border: 2px solid;
}
</style>