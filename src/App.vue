<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"> </router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
       <router-view v-if="!$route.meta.keepAlive"> </router-view>
    </transition>
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
.fadeIn-enter{
  opacity:0;
}
.fadeIn-enter-active{
  transition: all 1s;
}
.fadeIn-leave-active{
  transition: all 0s;
  opacity: 1;
}
.content-wrapper{
  position:absolute;
  left:0;
  top:40px;
  right:0;
  bottom:0;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
