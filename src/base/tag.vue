<template>
    <div class="tag">
      <router-link to="/home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-list"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-add"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>
<script type="text/ecmascript-6">
</script>

<style type="text/stylus" lang="stylus" scoped>
  .tag{
    width :100%;
    height :40px;
    text-align :center;
    position fixed;
    bottom :0;
    left :0;
    display:flex;
    flex-direction :row;
    justify-content :space-around;
    background :#2c3e50;
    a{
      display :flex;
      flex-direction: column;
      flex :1;
      align-self :center;
    }
  }
</style>
