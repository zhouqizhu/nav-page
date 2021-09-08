import store from '@/store/index'
import {ref} from 'vue'
let editWhich = ref(-1)
export default function editFunction () {
    // 控制编辑和退出按钮
    function handleEdit(id) {
        if(id != editWhich.value) {
            editWhich.value = id
        } else {
            editWhich.value = -1
        }     
    }

    // 编辑分类标签
    function editTab() {

    }

    // 删除分类标签
    function deleteTab(id) {
        store.commit('remove', id)
    }

    // 编辑网址导航
    function editNav() {}
    // 删除网址导航
    function deleteNav(id) {
        store.commit('remove', id)
    }

    return {
        editWhich,
        handleEdit,
        editTab,
        deleteTab,
        editNav,
        deleteNav
    }
}