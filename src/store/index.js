import { createStore } from "vuex";
import moduleTab from "./modules/tab";
// import controlBar from "./modules/controlBar";
const state = {
    isCollapse: false,
    catalogue: [
        {
            id: '1', name: '常用网站', icon: 'el el-icon-star-on',
            URLS: [
                {id:'1.1' , url: 'https://v3.cn.vuejs.org/guide/introduction.html', icon: 'https://v3.cn.vuejs.org/logo.png', name: 'Vue3文档'},
                {id:'1.2' , url: 'https://next.vuex.vuejs.org/zh/', icon: 'https://v3.cn.vuejs.org/logo.png', name: 'Vuex文档'},
                {id:'1.3' , url: 'https://github.com/', icon: 'https://img0.baidu.com/it/u=649373506,1467315974&fm=26&fmt=auto&gp=0.jpg', name: 'GitHub'},
            ]
        }
    ]
}

const actions = {
    collapse: ({ commit }) => commit('collapse'),
}

const mutations = {
    // 控制侧边栏开合
    collapse: state => state.isCollapse = !state.isCollapse,
    // 移除
    remove(state ,payload) {
        // 需要判断是删除分类标签还是网址导航
        const catalogue = state.catalogue
        let len1 = catalogue.length
        for(let i=0; i<len1; i++) {
            let current = catalogue[i],
                URLS = current.URLS,
                len2 = URLS.length
            if(current.id === payload[0]) {
                // 删除标签分类以及标签分类中的内容
                if(payload.length === 1) {
                    catalogue.splice(i, 1)
                    break
                }
            }
            // 删除标签分类中的某个网址
            for(let j=0; j<len2; j++) {
                let URL = URLS[j]
                if(URL.id === payload) {
                    URLS.splice(j, 1)
                    break
                }
            }
        }
    },
    // 添加
    add(state, payload) {
        let {key, id, value} = payload
        const catalogue = state.catalogue
        let len1 = catalogue.length
        // 添加分类
        if(key == '1') {
            let _id = len1 == 0 ? '1' : (+catalogue[len1 -1].id + 1).toString()
            catalogue.push({
                id: _id,
                name: value.name,
                icon: value.icon,
                URLS: []
            })
            // updateLocal(store)
        }
        // 添加导航
        else if(key == '2') {
            const len2 = catalogue[id-1].URLS.length
            const navURL = catalogue[id-1].URLS
            let _id =  len2 == 0 ? '1' : (+navURL[len2-1].id + 0.1).toString()
            navURL.push({
                id: _id,
                name: value.name,
                url: value.url,
                icon: ''
            })
            // updateLocal(store)
        }
    },
    //更新
    update(state, payload) {
        let {key, value} = payload
        const catalogue = state.catalogue
        let len = catalogue.length
        for(let i=0; i<len; i++) {
            if(catalogue[i].id == key) {
                catalogue[i].name = value.name
                catalogue[i].icon = value.icon
            }
        }
    }
}

export default createStore({
    state,
    mutations,
    actions,
    modules: {
        moduleTab,
        // controlBar
    }
})