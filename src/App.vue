<template>
  <div class="main">
    <!-- 侧边栏 -->
    <left-bar class="leftBar"></left-bar>
    <!-- 内容区 -->
    <main-content class="mainContent"></main-content>
  </div>
</template>

<script>

import leftBar from './components/left-bar/leftBar.vue'
import MainContent from './components/main-content/mainContent.vue'
export default {
  components: { leftBar, MainContent },
  setup() {
  },
}
</script>

<style lang="scss" scoped>
  .main{
    display: flex;
  }
  .leftBar{
    flex: 0;
  }
  .mainContent{
    flex: 1;
  }
</style>
