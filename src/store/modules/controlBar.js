// const state = {
//     isCollapse: false,
// }
// const mutations = {
//     collapse: state => state.isCollapse = !state.isCollapse,

// }
// const actions = {
//     collapse: ({ commit }) => commit('collapse'),
// }
// export default {
//     state,
//     mutations,
//     actions
// }

const moduleA = {
    state: () => ({ isCollapse: false, }),
    mutations: { collapse: state => state.isCollapse = !state.isCollapse, },
    actions: { collapse: ({ commit }) => commit('collapse'), },
  }

  export default moduleA