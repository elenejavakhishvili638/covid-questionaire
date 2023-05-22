export default {
  setThirdPage(state, payload) {
    state.vaccination[payload.name] = payload.value
    localStorage.setItem('vaccination', JSON.stringify(state))
  }
}
