import {createStore} from "vuex"
import firstPageModule from "./modules/firstPage/index"
import secondPageModule from "./modules/secondPage/index"
import thirdPageModule from './modules/thirdPage/index'



const store = createStore({
    modules: {
        identificaiton: firstPageModule,
        questionnaire: secondPageModule,
        vaccination: thirdPageModule,
    },

});

export default store;