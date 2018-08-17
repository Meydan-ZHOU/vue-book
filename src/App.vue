<template>
  <div id="app">
    <i class="iconfont icon-back"></i>
    <router-view> </router-view>
    <v-tag></v-tag>
  </div>
</template>

<script>
import tag from "./base/tag.vue";
export default {
  name: 'App',
  components:{
    "v-tag":tag
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin: 0;
  padding:0;
}
  a{
    text-decoration: none;
  }
  input,button{
    -webkit-appearance: none;
  }
</style>
