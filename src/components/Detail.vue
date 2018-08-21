<template>
  <div class="detail">
    <v-header :back="true">
      <span slot="title">详情页</span>>
    </v-header>
    {{$route.params.bid}}
  </div>
</template>
<script type="text/ecmascript-6">
  import mHeader from '../base/mHeader.vue';
  export default {
    components:{
      "v-header":mHeader
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .detail{
    position :absolute;
    left :0;
    top:0;
    bottom:0;
    right:0;
    background :#fff;
    z-index :100;
  }
</style>
