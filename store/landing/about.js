import { fetchWrapper } from '../../utils'

export const state = () => ({
  data: {},
})

export const getters = {
  getData(state) {
    return state.data
  },
}

export const mutations = {
  setData(state, newData) {
    state.data = newData
  },
}

export const actions = {
  async fetchLanding({ commit }) {
    // make request
    const res = await fetchWrapper.get('/data/about.json')

    commit('setData', res)
  },
}
