import {createStore} from "vuex"
import firstPageModule from "./modules/firstPage/index"
import secondPageModule from "./modules/secondPage/index"


const store = createStore({
    modules: {
        identificaiton: firstPageModule,
        questionnaire: secondPageModule,
    },

});

export default store;