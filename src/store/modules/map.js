const map = {
    namespaced: true,
    state: {
        map: null
    },
    mutations: {
        GET_MAP(state, map) {
            state.map = map;
        },
        CLEAN_MAP(state) {
            state.map = null;
        }
    },
    actions: {
        GetMap({ commit }, map) {
            commit('GET_MAP', map);
        },
        CleanMap({ commit }) {
            commit('CLEAN_MAP');
        }
    }
};
export default map;
