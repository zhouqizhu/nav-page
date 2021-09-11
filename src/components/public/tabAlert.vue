<template>
    <el-button type="text" @click="dialogFormVisible = true">
      <i :class="elicon" style="color:black;"></i>
    </el-button>

    <el-dialog :title="title" v-model="dialogFormVisible" width="30%" center>
        <el-form :model="form">
            <el-form-item label="名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" placeholder="请输入内容" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="添加图标" :label-width="formLabelWidth">
               <iconpicker v-model="form.icon"></iconpicker>
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
  import iconpicker from './icon.vue'
  import { useStore } from 'vuex';
  export default defineComponent({
    props:{
      title: {
        type: String,
        default: ''
      },
      elicon: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: '9999'
      },
    },
    components: {iconpicker},
    setup() {
      const state = reactive({
        dialogFormVisible: false,
        form: { name: '' },
        formLabelWidth: '120px',
      })
      let store = useStore()
      const deliveryInfo = (id) => {
        if(id == 9999) {
          store.commit('add', {
            key: '1',
            value: {
              icon: state.form.icon,
              name: state.form.name
            }
          })
        }else{
          store.commit('update', {
            key: id,
            value: {
              icon: state.form.icon,
              name: state.form.name
            }
          })
        }
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

</style>