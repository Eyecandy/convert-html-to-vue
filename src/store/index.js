import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { auth } from "./auth.module";
const store = createStore({
    modules: {
        auth,
    },
    plugins: [createPersistedState()]
});
export default store;

