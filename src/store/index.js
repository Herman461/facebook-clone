import auth from './modules/auth';
import {createStore} from "vuex";

export default createStore({
    modules: {
        auth
    }
})
