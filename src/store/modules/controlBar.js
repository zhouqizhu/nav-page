export default {
    state: {
        isCollapse: false,
    },
    mutations: {
        collapse: state => state.isCollapse = !state.isCollapse
    },
    actions: {
        collapse: ({ commit }) => commit('collapse'),
    }
}