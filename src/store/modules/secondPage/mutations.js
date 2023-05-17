export default {
  setSecondPage(state, payload) {
    if (
      payload.name === 'had_covid' &&
      (payload.value === 'no' || payload.value === 'have_right_now')
    ) {
      state.questionnaire.had_antibody_test = null
      state.questionnaire.covid_sickness_date = null
      state.questionnaire.antibodies = {
        test_date: '',
        number: null
      }
    }

    if (payload.name === 'had_antibody_test' && payload.value === 'false') {
      state.questionnaire.antibodies = {
        test_date: '',
        number: null
      }
    }

    if (payload.name === 'had_antibody_test' && payload.value === 'true') {
      state.questionnaire.covid_sickness_date = null
    }

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
