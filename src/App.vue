<template>
  <div id="app">
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

</style>
