<template>
  <v-main>
    <!-- APP BAR -->
    <v-app-bar color="navbarColor" elevate-on-scroll app height="60">
      <v-toolbar-title>
        <h2 class="mx-2" style="letter-spacing:1px;">The Index</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h3
        class="hidden-sm-and-down"
        style="font-spacing:1px; font-weight:500;"
      >A curated list of design resources for developers</h3>
      <v-spacer></v-spacer>

      <v-btn @click="changeTheme" color="svgColor" class="mx-2" style="outline:none;" icon>
        <svg v-if="!isThemeDark" style="width:36px;height:36px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </v-btn>
      <v-btn
        style="outline:none;"
        color="svgColor"
        class="mr-2"
        icon
        href="https://github.com/sumitkolhe/theindex"
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </v-btn>
    </v-app-bar>
    <!--END OF APP BAR -->

    <!-- CHIPS -->
    <v-row class="mt-4">
      <v-col>
        <v-sheet color="slideGroupColor">
          <v-chip-group
            mandatory
            active-class="error--text"
            prev-icon="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            next-icon="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          >
            <v-chip
              @click="showSelectedCategory(index)"
              color="chipsColor"
              show-arrows
              v-for="(i,index) in categories"
              :key="i"
            >
              <a class="text-decoration-none error--text">{{ i }}</a>
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>
    <!-- END OF CHIPS -->

    <!-- MAIN CARDS -->
    <v-container fluid app>
      <!--LOADING SCREEN-->
      <div class="spinner" v-if="loading">
        <v-progress-circular indeterminate :size="50" :width="5" color="svgColor"></v-progress-circular>
      </div>
      <!--END OF LOADING SCREEN-->

      <div class="my-4">
        <!-- <h2 :id="categories[index]" class="mx-6 my-4">{{categories[index]}}</h2>-->

        <v-row class="mx-4" justify="space-around">
          <v-card
            class="mx-4 my-6 outer"
            outlined
            height="350px"
            width="320"
            v-for="item in visibleWebsites"
            v-bind:key="item.id"
          >
            <v-col class="text-center">
              <v-row class="justify-center mt-4">
                <v-avatar size="60">
                  <v-img
                    :src="item.logo"
                    @error="item.logo='https://raw.githubusercontent.com/sumitkolhe/Resources/master/404.png'"
                  ></v-img>
                </v-avatar>
              </v-row>
              <v-row justify="center" dense>
                <v-card-title>{{item.title}}</v-card-title>
              </v-row>
              <v-row justify="center" dense>
                <v-card-subtitle class="mt-n4">{{item.description.substring(0,150)+"..."}}</v-card-subtitle>
              </v-row>
              <v-row justify="center" dense>
                <v-card-actions class="card-actions">
                  <v-btn :href="item.link" target="_blank" large icon>
                    <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                      <path
                        fill="#f55555"
                        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                      />
                    </svg>
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-col>
          </v-card>
        </v-row>
      </div>
    </v-container>
    <!-- END OF MAIN CARDS -->
  </v-main>
</template>

<script>
import api from "../controller/api";

export default {
  name: "desktop",

  data() {
    return {
      data: [],
      websites: [],
      visibleWebsites: [],
      categories: [
        "UI Graphics",
        "Fonts",
        "Colors",
        "Icons",
        "Icon Fonts",
        "Stock Photos",
        "Stock Videos",
        "Stock Music & Sound Effects",
        "Vectors & Clip Art",
        "Product & Image Mockups",
        "HTML & CSS Templates",
        "CSS Frameworks",
        "CSS Animations",
        "Javascript Animation Libraries",
        "UI Components & Kits",
        "React UI",
        "Vue UI",
        "Angular UI",
        "Design Systems & Style Guides",
        "Online Design Tools",
        "Downloadable Design Software",
        "Design Inspiration",
        "Image Compression",
        "Others",
      ],
      loading: true,
      iter: 0,
      isActive: false,
      isThemeDark: false,
    };
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.isThemeDark = !this.isThemeDark;
      localStorage.setItem(
        "isThemeDark",
        JSON.stringify(this.$vuetify.theme.dark)
      );
    },
    showSelectedCategory(index) {
      this.visibleWebsites = this.websites[index];
      return this.visibleWebsites;
    },
  },

  mounted() {
    this.$vuetify.theme.dark =
      JSON.parse(localStorage.getItem("isThemeDark")) || false;
  },

  async created() {
    this.data = await api.getData();
    this.websites = this.data.data.websites;
    this.visibleWebsites = this.websites[0];
    this.loading = false;
  },
};
</script>

<style scoped>
.outer {
  position: relative;
  padding-bottom: 50px;
}
.spinner {
  position: absolute;

  top: 300%;
  left: 50%;
}
.card-actions {
  position: absolute;
  bottom: 5%;
}

.v-chip {
  font-weight: 500;
  padding: 1.5rem;
}

.v-sheet.v-card {
  border-radius: 1.2rem;
  border: 3px #cfcfcf80 solid;
}
.v-sheet.v-card:hover {
  border: 3px solid #d4d4d4;
  box-shadow: 0 0 10px #d4d4d4;
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
  font-size: 18px;
  font-weight: 600;
}
</style>
