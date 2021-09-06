import store from '@/store/index'
import {ref} from 'vue'

let editWhich = ref(-1)
export default function editFunction () {
    function handleEdit(id) {
        if(id != editWhich.value) {
            editWhich.value = id
        } else {
            editWhich.value = -1
        }     
    }
    
    // let handleEdit = (tab) => tab.id = !tab.id
    function editTab() {}

    // 删除分类标签
    function deleteTab(id) {
        store.commit('remove', id)
    }
    function editNav() {}
    // 删除网址导航分类
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