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
    padding-right: 30px;
    vertical-align: middle;
}
.sentence{
    display: inline-block;
    top: 50%;
    vertical-align: middle;
    width: 70%;
    margin-top: 10px;
    height: 40px;
    border-radius: 6px;
    box-shadow: 0px 0px 3px #b48c8c;
}
.sentence > i {
    margin-left: 20px;
    margin-right: 5px;
}
.sentence>span{
    height: 40px;
    line-height: 40px;
}
</style>