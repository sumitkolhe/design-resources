import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '../store/index'

export type WebsitesState = ReturnType<typeof state>

export const state = () => ({
  all_websites: [],
  categories: [],
  website_group: Array(),
  category: 0,
})

export const mutations: MutationTree<WebsitesState> = {
  SET_ALL_WEBSITES: (state, websites) => {
    state.all_websites = websites
  },
  SET_WEBSITE_GROUP: (state, index) => {
    state.website_group = state.all_websites[index]
  },
  SET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },
  SET_CATEGORY: (state, index) => {
    state.category = index
  },
}

export const actions: ActionTree<WebsitesState, RootState> = {
  async fetchData({ commit }) {
    const data = await this.$axios.$get('http://localhost/api')
    commit('SET_CATEGORIES', data.categories)
    commit('SET_ALL_WEBSITES', data.websites)
    commit('SET_WEBSITE_GROUP', 0)
  },
}

export const getters: GetterTree<WebsitesState, RootState> = {
  GET_ALL_WEBSITES: (state) => {
    return state.all_websites
  },
  GET_WEBSITE_GROUP: (state) => {
    return state.website_group
  },
  GET_CATEGORIES: (state) => {
    return state.categories
  },
}
