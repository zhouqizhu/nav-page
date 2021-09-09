<template>
    <el-button class="add-more" type="text" @click="dialogFormVisible = true">
      <i class="el-icon-plus"></i>
    </el-button>

    <el-dialog :title="title" v-model="dialogFormVisible" width="30%" center>
        <el-form :model="form">
            <el-form-item label="名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" placeholder="请输入内容" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="链接" :label-width="formLabelWidth">
                <el-input v-model="form.url" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="deliveryInfo(id)">确 定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    props:{
        id: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    setup() {
        const state = reactive({
            dialogFormVisible: false,
            form: { name: '', url: '' },
            formLabelWidth: '120px',
        })
        let store = useStore()
        const deliveryInfo = (id) => {
            store.commit('add', {
                key: '2',
                id: id,
                value: {
                    url: state.form.url,
                    name: state.form.name
                }
            })
            state.dialogFormVisible = false
         }
        return {
            deliveryInfo,
            ...toRefs(state),
        };
    },
});
</script>

<style lang="scss" scoped>
.add-more{
    text-align: center;
    line-height: 150px;
    color: #e1e1e1;
    font-size: 10em;
}
</style>