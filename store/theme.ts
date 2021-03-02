import { MutationTree, GetterTree } from 'vuex'
import { RootState } from '../store/index'

export type ThemeState = ReturnType<typeof state>

export const state = () => ({
  isThemeDark: false,
})

export const mutations: MutationTree<ThemeState> = {
  SET_THEME: (state) => {
    window.$nuxt.$root.$vuetify.theme.dark = !state.isThemeDark
    state.isThemeDark = !state.isThemeDark
    localStorage.setItem('isThemeDark', JSON.stringify(state.isThemeDark))
  },

  INIT_THEME: (state) => {
    state.isThemeDark =
      JSON.parse(localStorage.getItem('isThemeDark')!) || false
    window.$nuxt.$root.$vuetify.theme.dark = state.isThemeDark
  },
}

export const getters: GetterTree<ThemeState, RootState> = {
  GET_THEME: (state) => {
    return state.isThemeDark
  },
}
