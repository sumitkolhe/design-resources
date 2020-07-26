<template>
  <v-app app>
    <!-- APP BAR -->
    <v-app-bar color="navbarColor" flat app height="60">
      <v-btn style="outline:none;" color="svgColor" class @click.stop="drawer = !drawer" icon>
        <svg style="width:34px;height:34px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,13H14L10.5,16.5L11.92,17.92L17.84,12L11.92,6.08L10.5,7.5L14,11H6V13Z"
          />
        </svg>
      </v-btn>
      <v-toolbar-title>
        <h2 class="ml-n1" style="letter-spacing:1px; font-weight:800;">The Index</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!--Github Link-->
      <v-btn
        style="outline:none;"
        color="svgColor"
        icon
        href="https://github.com/sumitkolhe/theindex"
        target="_blank"
        class="mr-1"
      >
        <svg
          viewBox="0 0 24 24"
          width="27"
          height="27"
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

      <!--Theme-->
      <v-btn
        v-if="isThemeDark==false"
        style="outline:none;"
        @click="changeTheme"
        color="svgColor"
        class="mr-0"
        icon
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
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
      <v-btn v-else style="outline:none;" @click="changeTheme" color="svgColor" class="mr-0" icon>
        <svg style="width:36px;height:36px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"
          />
        </svg>
      </v-btn>
    </v-app-bar>

    <!--END OF APP BAR -->

    <!-- NAVIGATION DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      width="360"
      app
      fixed
      floating
      clipped
      :class="{'navigationDrawerColor':!$vuetify.theme.dark,'navigationDrawerColor':$vuetify.theme.dark}"
    >
      <v-list-item-group>
        <v-row cols="6">
          <v-col class="text-center">
            <v-list-item-content>
              <v-list-item-title>
                <h1 class="mb-2 ml-2">The Index</h1>
              </v-list-item-title>
              <v-list-item-subtitle>
                <h4>by Sumit kolhe</h4>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-col>
          <v-col class="text-center">
            <v-list-item-content>
              <a href="http://github.com/sumitkolhe">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f55555"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 24l-6-5.269-6 5.269v-24h12v24zm-14-23h-10v2h10v-2zm0 5h-10v2h10v-2zm0 5h-10v2h10v-2zm0 5h-10v2h10v-2z"
                  />
                </svg>
              </a>
            </v-list-item-content>
          </v-col>
        </v-row>
      </v-list-item-group>

      <v-divider></v-divider>
      <h4 class="px-6 py- text-center">A curated list of design resources for developers</h4>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="(item,index) in categories"
          :key="index"
          @click="selectCategory(index)"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              <h3>{{ item }}</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- END OF NAVIGATION DRAWER -->

    <!-- MAIN CARDS -->
    <v-container app>
      <v-row class="heading" justify="center">
        <h2>{{heading}}</h2>
      </v-row>
      <v-row class="mt-4" justify="center">
        <!--LOADING SCREEN-->
        <div class="text-center mt-12 spinner" v-if="loading">
          <v-progress-circular indeterminate :size="50" :width="5" color="svgColor"></v-progress-circular>
        </div>
        <!--END LOADING SCREEN-->

        <v-card
          class="mx-6 my-4 outer"
          v-for="(item) in websiteList"
          :key="item.id"
          outlined
          height="260px"
          width="380px"
          :href="item.link" target="_blank"
        >
          <v-col class="text-center">
            <v-row class="justify-center mt-2">
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
              <v-card-subtitle class="mt-n6">{{item.description.substring(0,80)+"..."}}</v-card-subtitle>
            </v-row>
           
          </v-col>
        </v-card>
      </v-row>
    </v-container>

    <!-- END OF MAIN CARDS -->
  </v-app>
</template>

<script>
import api from "../controller/api";

export default {
  name: "mobile",
  data() {
    return {
      data: [],
      localStore: [],
      websiteList: [],
      heading: "UI Graphics",
      drawer: false,
      loading: true,
      isThemeDark: false,
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

    async selectCategory(index) {
      this.loading = false;
      this.drawer = !this.drawer;
      this.websiteList = this.localStore[index];
      this.heading = this.localStore[index][0].category;
    },
  },

  mounted() {
    this.$vuetify.theme.dark =
      JSON.parse(localStorage.getItem("isThemeDark")) || false;
    this.isThemeDark = this.$vuetify.theme.dark;
  },

  async created() {
    this.data = await api.getData();
    this.localStore = this.data.data.websites;
    this.websiteList = this.localStore[0];
    this.loading = false;
  },
};
</script>

<style scoped>
.heading {
  margin: 4.5rem 0rem 0rem 0rem;
  color: #f55555;
}

.spinner {
  position: absolute;
  top: 40%;
}
.outer {
  position: relative;
  padding-bottom: 50px;
}
.v-list-item__content {
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 1rem;
}

.v-list-item {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  margin: 1rem 1.5rem;
  background-color: #8b8b8b3d;
}

.card-actions {
  position: absolute;
  bottom: 5%;
}

.v-sheet.v-card {
  border-radius: 1.3rem;
  border: 3px #cfcfcf9c solid;
}
.v-sheet.v-card:hover {
  border: 3px solid #cfcfcf;
  box-shadow: 0 0 10px #cfcfcf;
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
  font-size: 18px;
  font-weight: 600;
}
</style>



