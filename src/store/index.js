import {createStore} from "vuex"
import firstPageModule from "./modules/firstPage/index"


const store = createStore({
    modules: {
        identificaiton: firstPageModule,
    },

});

export default store;