export default {
  setSecondPage(state, payload) {
    if (payload.parent) {
      if (!state.questionnaire[payload.parent]) {
        state.questionnaire[payload.parent] = {}
      }
      state.questionnaire[payload.parent][payload.name] = payload.value
    } else {
      state.questionnaire[payload.name] = payload.value
    }

    localStorage.setItem('questionnaire', JSON.stringify(state))
  }
}
