<template>
    <div class="hcontent">
        <!-- 控制侧边栏开合 -->
        <span>
            <el-radio-group @click="collapse" class="controlleBar">
                <el-radio-button :label="false" v-if="$store.state.isCollapse ==false"><i class="el-icon-s-unfold"></i></el-radio-button>
                <el-radio-button :label="true" v-else><i class="el-icon-s-fold"></i></el-radio-button>
            </el-radio-group>
        </span>
        <div class="sentence">
            <i class="el-icon-s-opportunity"></i>
            <span id="hitokoto_text"></span>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    setup() {
        fetch('https://v1.hitokoto.cn')
            .then(response => response.json())
            .then(data => {
                const hitokoto = document.getElementById('hitokoto_text')
                hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
                hitokoto.innerText = data.hitokoto
            })
            .catch(console.error)
    },
    methods: mapActions([
        'collapse'
    ])
}
</script>

<style lang="scss" scoped>
.controlleBar{
    top: 50%;
    padding-right: 30px;
}
.sentence{
    display: inline-block;
    vertical-align: middle;
    // margin-top: 20px;
    width: 80%;
    line-height: 50px;
    height: 50px;
    box-shadow: 0px 0px 3px #b48c8c;
}
</style>