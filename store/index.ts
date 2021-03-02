import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  loading: true,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  GET_LOADING: (state) => {
    return state.loading
  },
}

export const mutations: MutationTree<RootState> = {
  SET_LOADING: (state) => {
    state.loading = !state.loading
  },
}

export const actions: ActionTree<RootState, RootState> = {}
