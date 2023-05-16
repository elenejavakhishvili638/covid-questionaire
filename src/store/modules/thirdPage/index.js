import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

const savedState = localStorage.getItem('vaccination') ? JSON.parse(localStorage.getItem('vaccination')) : {
    vaccination: {
        had_vaccine: "",
        vaccination_stage: "",
        i_am_waiting: "",
    }
};

export default {
    namespaced: true,
    state: savedState,
    mutations,
    actions,
    getters,
}