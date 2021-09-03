import { createStore } from "vuex";
import moduleTab from "./modules/tab";
const state = {
    isCollapse: false,
    catalogue: [
        {
            id: '1', name: '常用网站', icon: 'fa fa-wpexplorer',
            URLS: [
                {id:'1.1' , url: 'https://v3.cn.vuejs.org/guide/introduction.html', icon: 'https://v3.cn.vuejs.org/logo.png', name: 'Vue3文档'},
                {id:'1.2' , url: 'https://github.com/', icon: 'https://img0.baidu.com/it/u=649373506,1467315974&fm=26&fmt=auto&gp=0.jpg', name: 'GitHub'},
            ]
        }
    ]
}

const actions = {
    collapse: ({ commit }) => commit('collapse'),
}
// const getters = {

// }
const mutations = {
    // 控制侧边栏开合
    collapse: state => state.isCollapse = !state.isCollapse,
    // 添加
    add(state, payload) {
        let {key, value} = payload
        const catalogue = state.catalogue
        let len = catalogue.length
        // 添加分类
        if(key == '1') {
            let _id =  len == 0 ? '1' : (+catalogue[len -1].id + 1).toString()
            catalogue.push({
                id: _id,
                name: value.name,
                icon: value.icon,
                URLS: []
            })
            // updateLocal(store)
        }
    }
}

export default createStore({
    state,
    mutations,
    actions,
    modules: {
        moduleTab
    }
})