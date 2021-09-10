<template>
  <div class="contanier">
    <!-- 头部内容 -->
    <hcontent id="hcontent"></hcontent>
    <!-- 内容区 -->
    <div id="content">
      <div v-for="tab in catalogue" :key="tab.id">
        <!-- 分类相关内容 -->
        <div class="tab-contanier">
          <i :class="['fa', `fa-${tab.icon}`]"></i>
          <span class="eachTabName">{{tab.name}}</span>
          <!-- 编辑状态时，编辑和删除某一分类 -->
          <span :class="['edit-tab-name', {'tabIsEdit': tab.id == editWhich}]">
            <tab-alert title="编辑分类" elicon="el-icon-edit" :id="tab.id"></tab-alert>
            <i class="el-icon-delete" @click="deleteTab(tab.id)"></i>
          </span>
          <span :class="['edit', {'isEdit': tab.id == editWhich}]" @click="handleEdit(tab.id)">{{tab.id == editWhich ? '退出' : '编辑'}}</span>
        </div>
        <!-- 分类区内导航内容 -->
        <ul class="nav-container">
          <li v-for="nav in tab.URLS" :key="nav.id" class="eachNavBox" :draggable="tab.id == editWhich ? true : false">
            <a :href="nav.url" target="_blank" class="url-link">
              <el-image :src="nav.icon" class="nav-image"></el-image>
              <span class="url-name">{{nav.name}}</span>
            </a>
            <span :class="['edit-container', {'urlIsEdit' : tab.id == editWhich}]">
              <i class="el-icon-edit"></i>
              <i class="el-icon-delete" @click="deleteNav(nav.id)"></i>
            </span>
          </li>
          <li class="eachNavBox">
            <nav-alert :id="tab.id"></nav-alert>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import hcontent from './hcontent.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import tabAlert from '../public/tabAlert.vue'
import navAlert from '../public/navAlert.vue'
import {ref} from 'vue'
export default {
  components: { hcontent, tabAlert, navAlert },
    setup() {
      const store = useStore()
      let editWhich = ref(-1)
      // 控制编辑与退出按钮
      function handleEdit(id) {
        if(id != editWhich.value) {
            editWhich.value = id
        } else {
            editWhich.value = -1
            }     
      }
      // 删除内容区分类标签
      function deleteTab(id) {
        store.commit('remove', id)
      }
      function deleteNav(id) {
        store.commit('remove', id)
      }
      return{
        editWhich,
        catalogue: computed(() => store.state.catalogue),
        handleEdit,
        deleteTab,
        deleteNav
      }
    },
}
</script>

<style lang="scss" scoped>

</style>