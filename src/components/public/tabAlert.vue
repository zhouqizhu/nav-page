<template>
    <el-button type="text" @click="dialogFormVisible = true">
      <i :class="elicon" style="color:black;"></i>
    </el-button>

    <el-dialog :title="title" v-model="dialogFormVisible" width="30%" center>
        <el-form :model="form">
            <el-form-item label="名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" placeholder="请输入内容" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item :label="label" :label-width="formLabelWidth">
               <e-icon-picker v-model="form.icon"/>
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
      title: {
        type: String,
        default: 'lala'
      },
      elicon: {
        type: String,
        default: ''
      },
      id: {
        type: Number,
        default: 9999
      }
    },
    setup() {
      const state = reactive({
        dialogFormVisible: false,
        form: { name: '', icon: '' },
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