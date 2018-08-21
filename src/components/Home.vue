<template>
    <div class="home">
      <v-header :back="false">
        <span slot="title">首页</span>>
      </v-header>
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
    </div>
</template>
<script type="text/ecmascript-6">
  import mHeader from '../base/mHeader.vue';
  import swiper from '../base/swiper.vue';
  import {getSlider,getHotBook} from  "../api/index.js";
  export default {
    data(){
      return {
        swiperSlides:[],
        hotBooks:[]
      }
    },
    components:{
      "v-header":mHeader,
      "v-swiper":swiper
    },
    created(){
      this.getSliders();
      this.getHotBooks();
    },
    methods:{
      async getSliders(){
        const {slider}  =  await getSlider();
        this.swiperSlides = slider;
      },
      async getHotBooks(){
        this.hotBooks  =  await getHotBook();
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
