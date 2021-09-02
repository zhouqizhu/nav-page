<template>
    <el-button type="text" @click="dialogFormVisible = true">
        <i class="el-icon-plus" style="color:black;"></i>
    </el-button>

    <el-dialog title="新增分类" v-model="dialogFormVisible" width="30%" center>
        <el-form :model="form">
            <el-form-item label="分类名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" placeholder="请输入内容" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="选择图标" :label-width="formLabelWidth">
              <e-icon-picker v-model="icon" :options="options" />
              <e-icon :icon-name="icon"/>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
  import { defineComponent, reactive, toRefs } from 'vue';
  import {EIcon} from 'e-icon-picker';
  export default defineComponent({
    components: {EIcon},
    setup() {
      const state = reactive({
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        formLabelWidth: '120px',
      });

      return {
        ...toRefs(state),
      };
    },
  });
</script>

<style lang="scss" scoped>

</style>