export const state = () => ({
  connected: false,
})

export const mutations = {
  isConnected(state, value) {
    state.connected = value
  }
}
