<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
  import { defineComponent, provide } from 'vue';
  import { ElMessageBox } from 'element-plus';
  import { ElMessage } from 'element-plus';
  
  export default defineComponent({
    setup() {
      const open = () => {
        ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            ElMessage({
              type: 'success',
              message: '删除成功!',
            });
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '已取消删除',
            });
          });
      };
      provide('open', open)

      return {
        open,
      };
    },
  });
</script>