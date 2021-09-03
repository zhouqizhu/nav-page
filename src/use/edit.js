// url框的拖拽排列
import { ref } from 'vue'
import store from '@/store/index'

//变量
let editWhich = ref(-1)            // 记录正在编辑的tab索引

export default function editFunction($message, $confirm) {
    // 控制编辑状态
    function handleEdit(id) {
        if(id != editWhich.value) {
            editWhich.value = id
        } else {
            editWhich.value = -1
        }     
    }
    // 删除标签以及标签下的所有网址
    function deleteTab(id) {
        $confirm({
            content: '确定删除该标签以及该标签下所有网址吗？'
        })
        .then(() => {
            store.commit('remove', id)
            $message({
                type: 'success',
                content: '标签页及子网址删除成功'
            })
        })
        .catch(() => {})
    }

    // 删除某个网址
    function deleteUrl(id) {
        $confirm({
            content: '确定删除该网址吗？'
        })
        .then(() => {
            store.commit('remove', id)
            $message({
            type: 'success',
            content: '网址删除成功'
            })
        })
        .catch(() => {})      
    }

    return {
        handleEdit,
        deleteTab,
        deleteUrl,
    }
}
