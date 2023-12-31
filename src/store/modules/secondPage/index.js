import mutations from './mutations.js'
import getters from './getters.js'

const savedState = localStorage.getItem('questionnaire')
  ? JSON.parse(localStorage.getItem('questionnaire'))
  : {
      questionnaire: {
        had_covid: '',
        had_antibody_test: null,
        covid_sickness_date: '',
        antibodies: {
          test_date: '',
          number: null
        }
      }
    }

export default {
  namespaced: true,
  state: savedState,
  mutations,
  getters
}
