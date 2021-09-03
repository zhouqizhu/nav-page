// 存储用户添加分类信息
const moduleTab = {
    state: {
        tabName: '',             //分类名称
        currentIcon: '',         //当前选择的icon
        isSeleted: false,        //用户是否选择
    },
    mutations: {
        // 修改增加分类信息
        changeTabInfo(state, payload) {
            let key, value, current
            if(Array.isArray(payload)) {
                let length = payload.length
                for(let i=0; i<length; i++) {
                    current = payload[i]
                    key = current.key
                    value = current.value
                    state[key] = value
                }
            }else {
                key = payload.key
                value = payload.value
                state[key] = value
            }
        }
    }
}

export default moduleTab