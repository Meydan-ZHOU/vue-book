<template>
    <div class="home">
      <v-header :back="false">
        <span slot="title">首页</span>>
      </v-header>
      <v-loading v-if="loadding"></v-loading>
      <template  v-if="!loadding">
        <div class="content-wrapper">
          <v-swiper :swiperSlides="swiperSlides"></v-swiper>
          <div class="bookContainer">
            <h3>热门图书</h3>
            <ul>
              <li v-for="(book,index) in hotBooks" :key="index">
                <img :src="book.bookCover">
                <span>{{book.bookName}}</span><br>
                <span>price:<span class="price">￥{{book.bookPrice}}</span></span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
</template>
<script type="text/ecmascript-6">
  import mHeader from '../base/mHeader.vue';
  import swiper from '../base/swiper.vue';
  import loading from '../base/loading.vue';
  import {getAll} from  "../api/index.js";
  export default {
    data(){
      return {
        swiperSlides:[],
        hotBooks:[],
        loadding:true
      }
    },
    components:{
      "v-header":mHeader,
      "v-swiper":swiper,
      "v-loading":loading
    },
    created(){
      this.getAllData();
    },
    methods:{
      async getAllData(){
        let [sliders,hotBooks]  =  await getAll();
        this.swiperSlides = sliders.slider;
        this.hotBooks = hotBooks;
        this.loadding = false;
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .bookContainer{
    width :90%;
    margin :0 auto;
    margin-top :10px;
    h3{
      font-weight :600;
      font-size :14px;
    }
    ul{
      display :flex;
      flex-wrap:wrap;
      li{
        width :50%;
        padding :10px 20px;
        box-sizing :border-box;
        text-align :center;
        img{
          width :100%;
        }
        .price{
          color:red;
        }
      }
    }
  }
</style>
