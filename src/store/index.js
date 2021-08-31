import { createStore } from "vuex";

const state = {
    isCollapse: false,
    catalogue: [
        {
            id: '1', name: '常用网站', icon: '',
            URLS: [
                {id:'1.1' , url: 'https://github.com/Lpyexplore/nav-url', icon: 'https://github.com/fluidicon.png', name: 'github'},
                {id:'1.2' , url: 'https://juejin.cn/post/6897030228867022856', icon: 'https://b-gold-cdn.xitu.io/favicons/v2/favicon-32x32.png', name: 'Vue3 API教程'},
            ]
        }
    ]
}
const mutations = {
    collapse: state => state.isCollapse = !state.isCollapse
}
const actions = {
    collapse: ({ commit }) => commit('collapse'),
}
// const getters = {

// }
// const mutations = {}

export default createStore({
    state,
    mutations,
    actions
})