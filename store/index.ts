import { MutationTree, GetterTree, ActionTree } from 'vuex'

export type WebsitesState = ReturnType<typeof state>

export const state = () => ({
  all_websites: [],
  categories: [],
  bookmarked_websites: [],
  filtered_websites: <any>[],
  website_group: Array(),
  category: 0,
  loading: true,
})

export const mutations: MutationTree<WebsitesState> = {
  SET_ALL_WEBSITES: (state, websites) => {
    state.all_websites = websites
  },
  SET_WEBSITE_GROUP: (state, index) => {
    state.website_group = state.all_websites[index]
  },
  SET_BOOKMARKED_WEBSITES: (state, websites) => {
    state.bookmarked_websites = websites
  },
  SET_FILTERED_WEBSITES: (state, search_term) => {
    state.filtered_websites = []
    state.all_websites.forEach((website_group: any) =>
      website_group.forEach((website: any) => {
        if (
          website.title.includes(search_term) ||
          website.description.includes(search_term)
        ) {
          state.filtered_websites.push(
            //   {
            //   title: website.title,
            //   description: website.description,
            //   link: website.link,
            //   logo: website.logo,
            //   category: website.category,
            // }
            website
          )
        }
      })
    )

    // filtered.forEach((website: any) => {
    //   if (website.length != 0) state.filtered_websites.push(website)
    // })

    // state.filtered_websites = filtered as any
    //console.log(state.filtered_websites)
  },
  SET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },
  SET_CATEGORY: (state, index) => {
    state.category = index
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading
  },
}

export const actions: ActionTree<WebsitesState, WebsitesState> = {
  async fetchData({ commit }) {
    const data = await this.$axios.$get('https://theindex.tech/api')
    commit('SET_CATEGORIES', data.categories)
    commit('SET_ALL_WEBSITES', data.websites)
    commit('SET_WEBSITE_GROUP', 0)
  },
  async fetchBookmarkedWebsites({ commit }) {
    const data = (await JSON.parse(localStorage.getItem('bookmarks')!)) || []
    let bookmark_categories: string[] = []
    data.forEach((website: any) => {
      if (bookmark_categories.indexOf(website.category) === -1)
        bookmark_categories.push(website.category)
    })
    commit('SET_CATEGORIES', bookmark_categories)
    commit('SET_BOOKMARKED_WEBSITES', data)
  },
}

export const getters: GetterTree<WebsitesState, WebsitesState> = {
  GET_ALL_WEBSITES: (state) => {
    return state.all_websites
  },
  GET_WEBSITE_GROUP: (state) => {
    return state.website_group
  },
  GET_FILTERED_WEBSITES: (state) => {
    return state.filtered_websites
  },
  GET_BOOKMARKED_WEBSITES: (state) => {
    return state.bookmarked_websites
  },
  GET_CATEGORIES: (state) => {
    return state.categories
  },
  GET_LOADING: (state) => {
    return state.loading
  },
}
