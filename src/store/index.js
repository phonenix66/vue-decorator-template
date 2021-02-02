import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import user from './modules/user';
import map from './modules/map';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        map
    },
    actions: {},
    state: {},
    mutations: {},
    getters
});
