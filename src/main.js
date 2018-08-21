// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "lib-flexible/flexible";
import "./common/less/index.less";

import VueLazyload from 'vue-lazyload';
import vueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.use(VueLazyload);
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://attach.bbs.miui.com/forum/201601/22/150457vnlhbxz9cnmhhxb4.png',
  loading: 'http://q.115.com/imgload?r=9B247815D33B68227CDA599CF305C547CB1281C6&u=wNjm6x&s=-X8etUe9-0TQ91aattsgfg&e=5',
  attempt: 1
});

// 应用swiper插件
Vue.use(vueAwesomeSwiper);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
