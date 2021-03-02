<template>
  <v-row justify="center" class="mt-2">
    <v-card
      class="ma-4"
      outlined
      hover
      min-height="220px"
      width="320"
     
      v-for="website in websites"
      :key="website.link"
      target="_blank"
    >
      <v-col class="text-left">
        <v-row class="mx-2 mt-4">
          <v-avatar size="50">
            <v-img
              :src="website.logo"
              @error="
                website.logo =
                  'https://raw.githubusercontent.com/sumitkolhe/Resources/master/404.png'
              "
            ></v-img>
          </v-avatar>
        </v-row>
        <v-row dense class="mt-2">
          <v-card-title class="text-left">{{ website.title }}</v-card-title>
        </v-row>
        <v-row dense>
          <v-card-subtitle class="mt-n5 text-left">{{
            website.description
          }}</v-card-subtitle>
        </v-row>
      </v-col>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: { websites: {} || [] },
})
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
  font-size: 18px;
  font-weight: 600;
}
.v-sheet.v-card {
  border-radius: 12px;
  border: 3px #cfcfcf9c solid;
}
.v-sheet.v-card:hover {
  border: 3px solid #bebebe;
  box-shadow: 0 0 10px #bebebe;
}
</style>