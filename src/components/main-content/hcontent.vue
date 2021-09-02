<template>
    <!-- 控制侧边栏开合 -->
    <el-radio-group @click="collapse" class="controlleBar">
        <el-radio-button :label="false" v-if="$store.state.isCollapse ==false"><i class="el-icon-s-unfold"></i></el-radio-button>
        <el-radio-button :label="true" v-else><i class="el-icon-s-fold"></i></el-radio-button>
     </el-radio-group>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    setup() {
        
    },
    methods: mapActions([
        'collapse'
    ])
}
</script>

<style lang="scss" scoped>
</style>