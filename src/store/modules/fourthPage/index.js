import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

const savedState = localStorage.getItem('advices')
  ? JSON.parse(localStorage.getItem('advices'))
  : {
      advices: {
        non_formal_meetings: '',
        number_of_days_from_office: null,
        what_about_meetings_in_live: '',
        tell_us_your_opinion_about_us: ''
      }
    }

export default {
  namespaced: true,
  state: savedState,
  mutations,
  actions,
  getters
}
