import { State } from './app.d'

const state: State = {
  name: 'app'
}
const mutations = {
  UPDATE_NAME(state: State, name: string) {
    state.name = name
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
