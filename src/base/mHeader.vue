<template>
    <div class="header">
      <i class="iconfont icon-back" @click="goBack" v-if="back"></i>
      <slot name="title"></slot>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props:{
      back:{
        type:Boolean,
        default:true
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .header{
    width :100%;
    height :40px;
    line-height :40px;
    text-align :center;
    background :#2c3e50;
    color:#fff;
    font-weight :600;
    i{
      position :absolute;
      left :10px;
    }
  }
</style>
