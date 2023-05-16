import {createStore} from "vuex"
import firstPageModule from "./modules/firstPage/index"
import secondPageModule from "./modules/secondPage/index"
import thirdPageModule from './modules/thirdPage/index'
import fourthPageModule from "./modules/fourthPage/index"



const store = createStore({
    modules: {
        identificaiton: firstPageModule,
        questionnaire: secondPageModule,
        vaccination: thirdPageModule,
        advices: fourthPageModule
    },

});

export default store;