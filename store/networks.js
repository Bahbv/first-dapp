export const state = () => ({
  list: [],
  network: {},
})

export const mutations = {
  setList(state, networks) {
    state.list = networks
  },
  setNetwork(state, network) {
    state.network = network
  }
}
