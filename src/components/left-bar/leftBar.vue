<template>
  <div class="left-bar">
      <el-row>
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="$store.state.isCollapse == false">
                    <!-- 图标站名 -->
                    <div class="title">
                        <img class="icon-logo" src="../../assets/explore.png" alt="图标">
                        <span>XTab</span>  
                    </div>
                    <!-- 侧边栏导航 -->
                    <el-sub-menu index="1" v-for="(item,index) in navInfo" :key="index" @click="toNAV(item.id)">
                        <template #title class="nav-container">
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
import toNAV from '@/use/toNav'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
export default {
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
.el-sub-menu{
    cursor: pointer;
    height: 50px;
    color: rgb(185, 164, 164);
    line-height: 50px;
    position: relative;
}
.nav-container{
    display: inline-block;
    widows: 100%;
    padding-left: 90px;
}
</style>

