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
.contanier{
  justify-content: space-between;
  flex-wrap: wrap;
}
#hcontent{
  width: 100%;
  background-color: white;
  height: 80px;
  box-shadow: 1px 1px 5px #eee;
  line-height: 80px;
  position: relative;
}
#content{
  height: calc(100% - 80px);
  overflow: hidden;
}
.tab-contanier{
  height: 50px;
  line-height: 50px;
  color: #66629e;
  margin-left: 20px;
  position: relative;
  .fa{
  font-size: 25px;
  margin-right: 5px;
  }
  .eachTabName{
    font-size: 20px;
  }
  .edit-tab-name{
    display: inline-block;
    width: 45px;
    height: 20.8px;
    line-height: 20.8px;
    margin-left: 10px;
    opacity: 0;
  }
  .tabIsEdit{
    display: inline-block;
    opacity: 1;
    .el-icon-edit{
      margin-right: 5px;
    }
  }
  .edit{
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translate(0, -50%);
    color: rgb(172, 161, 161);
    font-size: .8em;
    cursor: pointer;
  }
}

.nav-container{
  display: inline-block;
  position: relative;
}

.eachNavBox{
    display: inline-block;
    height: 150px;
    width: 200px;
    background-color: rgb(195, 218, 176);
    box-shadow: 0 0 3px 3px  rgba(225, 225, 225, .1);
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    margin: 15px 0 15px 30px;
    position: relative;
    .url-link{
    height: 100%;
    width: 100%;
    position: relative;
    .nav-image{
    height: 60%;
    width: 60%;
    margin: 5% 20% 5%;
    }
    .url-name{
      display: block;
      height: 25.5%;
      text-align: center;
      color: #666;
      overflow: hidden;
      box-sizing: border-box;
      padding: 0 10px;
      word-break: break-all;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }
  }
}

.edit-container{
  position: absolute;
  top: 0;
  right: -55px;
  display: inline-block;
  width: 45px;
  height: 25px;
  line-height: 25px;
  // transition: all .5s ease;
  opacity: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: rgb(248, 237, 237);
}
.urlIsEdit{
  opacity: 1;
  transform: translate(-50px);
  .el-icon-edit{
    margin-right: 5px;
  }
}
</style>