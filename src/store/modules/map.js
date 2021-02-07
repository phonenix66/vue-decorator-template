const map = {
    namespaced: true,
    state: {
        map: null,
        type: ''
    },
    mutations: {
        GET_MAP(state, map) {
            state.map = map;
        },
        CLEAN_MAP(state) {
            state.map = null;
        },
        CLEAN_TYPE(state) {
            state.type = '';
        },
        SET_TYPE(state, type) {
            state.type = type;
        }
    },
    actions: {
        GetMap({ commit }, map) {
            commit('GET_MAP', map);
        },
        CleanMap({ commit }) {
            commit('CLEAN_MAP');
        },
        SetType({ commit }, type) {
            commit('SET_TYPE', type);
        },
        CleanType({ commit }) {
            commit('CLEAN_TYPE');
        }
    }
};
export default map;
