<template>
    <div class="iconpicker"  v-clickoutside="handleClose">
        <div class="iconpicker-item">
            <div class="iconpicker-icon"><i :class="selectedIcon"></i></div>
            <div style="flex: 1" @click="collapse = !collapse">
                <i :class="collapse ? 'edge':''" class="el-icon-caret-bottom"></i>
            </div>
        </div>
        <div class="anim" v-show="collapse">
            <div class="iconpicker-body">
                <div class="iconpicker-list-box">
                    <div class="iconpicker-list">
                        <div class="iconpicker-icon-limit">
                            <div class="iconpicker-icon-item" v-for="(icon, index) in data" :key="index"
                                 @click="handleSelect(icon)"><i :class="icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="iconpicker-page">
                        <div class="iconpicker-page-count"><span>{{pageNo}}</span>/<span>{{totalPage}}</span> (<span>{{total}}</span>)
                        </div>
                        <div class="iconpicker-page-operate"><i class="el-icon-arrow-left" @click="handleLeft"></i> <i
                                class="el-icon-arrow-right" @click="handleRight"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import Clickoutside from '../../../node_modules/element-plus/es/directives/click-outside';
import { onBeforeMount } from '@vue/runtime-core';
export default {
    props: {
        disabled: Boolean,
    },
    directives: {Clickoutside},
    setup() {
        const state = reactive({
            allData: [],
            collapse: false,
            selectedIcon: 'el-icon-caret-bottom',
            data: '',
            pageNo: 1,
            pageSize: 15,
            totalPage: '',
            total: '',
            allList: ''
        })
        //减减
        const handleLeft = () => {
            if(state.pageNo > 1) {
                state.pageNo--
                let start = (state.pageNo - 1)*state.pageSize
                state.data = state.allList.slice(start, start+state.pageSize)
            }
        }
        //加加
        const handleRight = () => {
            if (state.pageNo < state.totalPage) {
                state.pageNo++;
                let start = (state.pageNo - 1) * state.pageSize;
                state.data = state.allList.slice(start, start + state.pageSize);
            }
        }
        //确认选择
        const handleSelect = (icon) => {
            state.collapse = false;
            state.selectedIcon = icon
        }
        const handleClose = () => {
            state.collapse = false;
        }
        onBeforeMount(() => {
            document.styleSheets.forEach(obj => {
                obj.cssRules.forEach(item => {
                    if (item.selectorText) {
                        //Element-ui内置图标 ||  //自定义图标元素
                        if (item.selectorText.search(/^.el-icon-/) != -1 || item.selectorText.search(/^.sx-icon-/) != -1) {
                            let icon = item.selectorText.split(':')[0].split('.')[1];
                            if(!state.allData.includes(icon)){
                                state.allData.push(icon)
                            }
                        }
                    }
                })
            });
            let start = state.pageNo * state.pageSize;
            state.data = state.allData.slice(start, start + state.pageSize);
            state.totalPage = parseInt(state.allData.length / state.pageSize)
            state.total = state.allData.length
            state.allList = state.allData
        })       
        return{
            ...toRefs(state),
            handleLeft,
            handleRight,
            handleSelect,
            handleClose,
            onBeforeMount,
        }
    }
}
</script>

<style lang="scss" scoped>
    .iconpicker {
        position: relative;
        max-width: 280px;
    }

    .iconpicker-item {
        border: 1px solid #e6e6e6;
        width: 90px;
        height: 38px;
        border-radius: 4px;
        cursor: pointer;
        position: relative;
        display: flex;
        text-align: center;
        align-items: center;
    }

    .iconpicker-icon {
        border-right: 1px solid #e6e6e6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 60px;
        height: 100%;
        background: #fff;
        transition: all .3s;
    }

    .iconpicker-item i {
        line-height: 38px;
        font-size: 18px;
    }

    .iconpicker-item:hover {
        border-color: #D2D2D2 !important;
    }

    .iconpicker-item:hover .iconpicker-icon {
        border-color: #D2D2D2 !important;
    }

    .iconpicker-item .el-icon-caret-bottom {
        transition: all .3s
    }

    .iconpicker-item .edge {
        transform: rotate(180deg);
    }

    .iconpicker .anim {
        position: absolute;
        left: 0;
        top: 42px;
        padding: 5px 0;
        z-index: 2000;
        min-width: 100%;
        border: 1px solid #d2d2d2;
        max-height: 300px;
        overflow-y: auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
        box-sizing: border-box;
    }

    .iconpicker-body {
        padding: 6px;
    }

    .iconpicker-search:hover {
        border-color: #D2D2D2 !important;
    }

    .iconpicker .iconpicker-list {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding-left: 15px;
    }

    .iconpicker .iconpicker-icon-item {
        display: inline-block;
        width: 21.1%;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
        vertical-align: top;
        height: 36px;
        margin: 4px;
        border: 1px solid #ddd;
        border-radius: 2px;
        transition: 300ms;
    }

    .iconpicker .iconpicker-icon-item i {
        font-size: 17px;
    }

    .iconpicker .iconpicker-icon-item:hover {
        background-color: #eee;
        border-color: #ccc;
        -webkit-box-shadow: 0 0 2px #aaa, 0 0 2px #fff inset;
        -moz-box-shadow: 0 0 2px #aaa, 0 0 2px #fff inset;
        box-shadow: 0 0 2px #aaa, 0 0 2px #fff inset;
        text-shadow: 0 0 1px #fff;
    }

    .iconpicker-page {
        margin-top: 6px;
        margin-bottom: -6px;
        display: flex;
        font-size: 12px;
        padding: 0 2px;
        justify-content: space-between;
    }

    .iconpicker-page-operate {
        cursor: pointer;
    }
</style>
