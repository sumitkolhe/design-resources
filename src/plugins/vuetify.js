import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
          light: {
            svgColor: "#000",
            navbarColor: "#fff",
            slideGroupColor:"#ffffff",
            chipsColor: "#f1f1f1",
            navigationDrawerColor: "#f55555"
          },
          dark: {
            svgColor: "#fff",
            slideGroupColor:"#121212",
            navbarColor:"#121212",
            chipsColor:"#1e1e1e",
            navigationDrawerColor: "#212121"
          
          },
        },
      },
});
