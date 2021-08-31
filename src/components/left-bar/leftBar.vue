<template>
  <div class="left-bar" :style="{left:isLeftbar ? 0 : '-249px'}">
      <el-row>
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="$store.state.isCollapse == false">
                    <!-- 图标站名 -->
                    <div class="title">
                        <img class="icon-logo" src="../../assets/explore.png" alt="图标">
                        <span>XTab</span>  
                    </div>
                    <!-- 侧边栏导航 -->
                    <el-sub-menu index="1" v-for="(item,index) in navInfo" :key="index">
                        <template #title>
                            <el-image class="logo" :src="item.icon" fit="cover" lazy />
                            <span>{{item.name}}</span>
                        </template>
                        <!-- <el-menu-item-group>
                            <el-menu-item :index="`${index}-${idx}`" v-for="(nav,idx) in item.children" :key="nav._id" @click="findNav(nav._id)">
                                <a href="#">{{nav.name}}</a>
                            </el-menu-item>
                        </el-menu-item-group> -->
                    </el-sub-menu>
                </el-menu>
            </el-col>
        </el-row>    
    </div>
</template>

<script>
import {reactive, getCurrentInstance, toRefs} from 'vue'
export default {
    setup() {
        const state = reactive({
            isLeftbar: true,
            navInfo: []
        })
        const {proxy} = getCurrentInstance()
        state.navInfo = proxy.$store.state.catalogue 
        console.log(state.navInfo)
        return{
            ...toRefs(state)
        }
    },
}
</script>

<style lang="scss" scoped>
</style>

