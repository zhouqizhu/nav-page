<template>
    <div id="left-bar">
        <el-row>
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="$store.state.isCollapse == false">
                    <!-- 图标站名 -->
                    <div class="title">
                        <img class="icon-logo" src="../../assets/explore.png" alt="图标">
                        <span>XTab</span>  
                    </div>
                    <!-- 侧边栏导航 -->
                    <el-sub-menu index="1" class="tab" v-for="(item,index) in navInfo" :key="index">
                        <template #title class="tab-container" @click="toNAV(item.id)">
                            <i :class="['fa', `fa-${item.icon}`,'tabIcon']"></i>
                            <span>{{item.name}}</span>
                        </template>
                    </el-sub-menu>
                    <!-- 添加侧边栏分类 -->
                    <div class="tab add-tab">
                        <tab-alert title="添加分类" elicon="el-icon-plus"></tab-alert>
                    </div> 
                </el-menu>
            </el-col>
        </el-row>    
    </div>
</template>

<script>
import toNAV from '../../use/toNav'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import tabAlert from '../public/tabAlert.vue'
// import {inject} from 'vue'
export default {
    components: { tabAlert },
    setup() {
        const store = useStore()
        // const $message = inject('message')      // 获取message组件方法
        return{
            toNAV,
            navInfo: computed(() => store.state.catalogue)
        }
    },
}
</script>

<style lang="scss" scoped>
#left-bar{
    width: 250px;
    height: 100vh;
    float: left;
    // background-color: rgb(44, 42, 42);
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

