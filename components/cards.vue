<template>
  <v-row justify="center" class="mt-8">
    <v-card
      class="ma-5 pa-5"
      outlined
      hover
      height="220px"
      width="350"
      target="_blank"
      v-for="website in websites"
      :key="website.link"
      :href="website.link"
    >
      <v-col class="text-left">
        <v-row>
          <v-avatar size="50" color="primary">
            <v-img :src="website.logo"></v-img>
          </v-avatar>

          <bookmark
            @render="renderBookmarks"
            :key="render_key"
            :website="website"
          />
        </v-row>
        <v-row>
          <h3
            class="text-left text--primary font-weight-medium mt-4 d-inline-block text-truncate"
          >
            {{ website.title }}
          </h3>
        </v-row>
        <v-row>
          <v-tooltip max-width="300px" bottom>
            <template v-slot:activator="{ on, attrs }">
              <p
                v-bind="attrs"
                v-on="on"
                class="text-left font-weight-medium mt-2 text--secondary"
              >
                {{ website.description.substring(0, 80) + '...' }}
              </p>
            </template>
            <span> {{ website.description }}</span>
          </v-tooltip>
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
      render_key: 0,
    }
  },
  methods: {
    renderBookmarks() {
      this.render_key += 1
    },
  },
})
</script>

<style scoped>
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
  box-shadow: 0 0 12px #9191916e;
}

.v-avatar {
  border: 2px solid;
}
</style>