<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="$store.state.isCollapse == false">
            <div id="left-bar">
                <!-- 图标站名 -->
            <div class="title">
                <img class="icon-logo" src="../../assets/explore.png" alt="图标">
                <span>XTab</span>  
            </div>
            <el-divider></el-divider>
            <!-- 侧边栏导航 -->
            <el-menu-item v-for="(item,index) in navInfo" :key="index" @click="toNAV(item.id)">
                <i :class="['fa', `fa-${item.icon}`,'tabIcon']"></i>
                <template #title>{{item.name}}</template>
                </el-menu-item>
                <!-- 添加侧边栏分类 -->
                <div class="tab add-tab">
                    <tab-alert title="添加分类" elicon="el-icon-plus"></tab-alert>
                </div> 
            </div>
        </el-menu> 
    </div>
</template>

<script>
import toNAV from '../../use/toNav'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import tabAlert from '../public/tabAlert.vue'
export default {
    components: { tabAlert },
    setup() {
        const store = useStore()
        return{
            toNAV,
            navInfo: computed(() => store.state.catalogue)
        }
    },
}
</script>

<style lang="scss" scoped>
#left-bar{
    height: 100vh;
    position: fixed;
    z-index: 99;
}
.el-sub-menu{
    cursor: pointer;
    height: 50px;
    color: rgb(185, 164, 164);
    line-height: 50px;
    position: relative;
}
.tab-container{
    display: inline-block;
    width: 100%;
    text-align: center;
    padding-left: 90px;
}
.tabIcon{
    color: red;
    margin-right: 10px;
    font-size: 30px;
}
.add-tab{
    text-align: center;
    color: black;
}
</style>

