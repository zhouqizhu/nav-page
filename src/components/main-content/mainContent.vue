<template>
  <div class="contanier">
    <!-- 头部内容 -->
    <hcontent id="hcontent"></hcontent>
    <!-- 内容区 -->
    <div id="content">
      <div id="each-content" v-for="(tab) in catalogue" :key="tab.id">
        <!-- 分类相关内容 -->
        <div :id="tab.id" class="tab-name">
          <el-image class="navLogo" :src="tab.logo" fit="cover" lazy></el-image>
          <span class="navName">{{tab.name}}</span>
          <!-- 编辑状态时，编辑和删除某一分类 -->
          <span :class="['edit-tab-name', {'tabIsEdit': tab.id == editWhich}]">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </span>
          <span :class="['edit', {'idEdit': tab.id == editWhich}]" @click="handleEdit(tab.id)">{{tab.id == editWhich ?'退出' : '编辑'}}</span>
        </div>
        <!-- 分类区内导航内容 -->
        <ul class="nav-boxes" @dragstart="navBoxDragStart" @dragend="navBoxDragEnd">
          <li v-for="(nav) in tab.URLS" :key="nav.id" class="each-nav-box" :draggable="tab.id == editWhich ? true : false"
          @dragenter="urlBoxEnter($event, tab.id)" :data-id="nav.id">
            <a :href="nav.url" target="_blank" class="url-link">
              <span class="url-name">{{nav.name}}</span>
            </a>
            <span :class="['edit-container', {'urlIsEdit' : tab.id == editWhich}]">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
            </span>
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
export default {
  components: { hcontent },
    setup() {
      const store = useStore()
      return{
        catalogue: computed(() => store.state.catalogue)
      }
    },
}
</script>

<style lang="scss" scoped>
.contanier{
  display: flex;
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
.each-content:hover .edit{
  display: inline-block;
}
.tab-name{
  height: 60px;
  line-height: 60px;
  color: #837c7c;
  position: relative;
}
.edit-tab-name{
    display: inline-block;
    width: 55px;
    height: 20.8px;
    line-height: 20.8px;
    color: #eee;
    display: none;
}
.tabIsEdit{
    display: inline-block;
}
.edit-icon, .delete-icon{
  margin-left: 10px;
  color: rgb(112, 106, 106);
  font-size: 14px;
  cursor: pointer;
}
.edit-icon{
  margin-right: 5px;
}
.edit-icon:hover, .delete-icon:hover{
    color: rgb(194, 96, 4);
}
.nav-boxes{
  display: inline-block;
  position: relative;
}
.each-nav-box{
    display: inline-block;
    height: 150px;
    width: 200px;
    background-color: white;
    box-shadow: 0 0 3px 3px  rgba(225, 225, 225, .1);
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    margin: 15px 0 15px 30px;
    position: relative;
}
.url-link{
  height: 100%;
  width: 100%;
  position: relative;
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
.edit-container{
    position: absolute;
    top: 0;
    right: -55px;
    display: inline-block;
    width: 55px;
    height: 25px;
    line-height: 25px;
    color: #eee;
    transition: all .5s ease;
    opacity: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: rgb(248, 237, 237);
}
.urlIsEdit{
    opacity: 1;
    transform: translate(-55px);
}
.each-nav-box:hover{
    transform: translate(0, -5px);
    transition: all .3s ease;
    box-shadow: 0 0 3px 3px  rgba(225, 225, 225, .3);
}
</style>