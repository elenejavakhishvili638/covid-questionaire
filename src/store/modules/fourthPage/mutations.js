export default {
  setFourthPage(state, payload) {
    state.advices[payload.name] = payload.value
    localStorage.setItem('advices', JSON.stringify(state))
  }
}
