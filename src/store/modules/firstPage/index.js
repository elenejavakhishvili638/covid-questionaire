import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

const savedState = localStorage.getItem('identification') ? JSON.parse(localStorage.getItem('identification')) : {
    identification: {
        first_name: '',
        last_name: '',
        email: ''
    }
};

export default {
    namespaced: true,
    state: savedState,
    mutations,
    actions,
    getters,
}