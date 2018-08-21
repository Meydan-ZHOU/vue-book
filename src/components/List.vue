<template>
  <div class="list">
    <v-header  :back="true">
      <span slot="title">图书列表</span>
    </v-header>
    <div class="loadDown" v-show="loadDown"><img src="http://q.115.com/imgload?r=9B247815D33B68227CDA599CF305C547CB1281C6&u=wNjm6x&s=-X8etUe9-0TQ91aattsgfg&e=5"></div>
    <div class="content-wrapper" ref="scrollContent" @scroll="loadMore" >
      <ul>
        <router-link v-for="(book,key) in books" :key="key" :to="{name:'Detail',params:{bid:book.bookId}}" tag="li">
          <img v-lazy="book.bookCover">
          <div class="detail">
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>￥{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
      <div v-if="hasMore" class="more">正在加载...</div>
      <div v-if="!hasMore" class="more">没有更多</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import mHeader from '../base/mHeader.vue';
  import {pagination,removeBook} from "../api/index.js";
  export default {
    data(){
      return {
        books:[],
        offset:0,
        hasMore:true,
        loadDown:false,
        timer:"",
        timer2:"",
        isLoading:false
      };
    },
    mounted(){
    /* this.$refs.scrollContent.addEventListener("scroll",() => { // 另一种添加滚动事件的方式
          console.log("999999");
      }); */
      let scrollContent = this.$refs.scrollContent;
      let top = scrollContent.offsetTop;
      let distance =0;
      scrollContent.addEventListener("touchstart",(e) => {
        console.log(scrollContent.offsetTop);
        if(scrollContent.scrollTop!==0||scrollContent.offsetTop !== top) return; // 滚动条在最顶端的时候，并且当前盒子在最顶端的时候，才继续往下走
        let start = e.touches[0].pageY;
        let move = (e) => {
          let current = e.touches[0].pageY;
          distance = current - start;
          if(distance>0){
            this.loadDown = true;
            if(distance<=60){
              scrollContent.style.top = distance + top + "px";
            }else{
              distance = 60;
              scrollContent.style.top = 60+ 40+"px";
            }
          }else{
            // 当不在考虑范围内时，移除move和end事件
            scrollContent.removeEventListener("touchmove",move);
            scrollContent.removeEventListener("touchend",end);
          }
        };
        let end = (e) => {
          clearInterval(this.timer2);
          this.timer2 = setInterval(() => {
            if (distance <= 0) {
              clearInterval(this.timer2);
              distance = 0;
              scrollContent.style.top = 40 + "px";
              this.books = [];
              this.offset = 0;
              this.loadDown = false;
              this.getBooks();
            }
            distance -= 1;
            scrollContent.style.top = distance + top + "px";
          },1);
        };
       scrollContent.addEventListener("touchmove",move);
       scrollContent.addEventListener("touchend",end);
      },false);
    },
    components:{
      "v-header":mHeader
    },
    created(){
      this.getBooks();
    },
    methods:{
      loadMore(){
        // scrollTop：卷去高度 clientHeight：当前可见区域 scrollHeight：总高
        // 触发scroll事件，可能触发n次，先进来开一个定时器，下次触发时将上一次定时器清除
        clearTimeout(this.timer);
        this.timer = setTimeout(() => { // 防抖 / 防抖
          let {scrollTop,clientHeight,scrollHeight} = this.$refs.scrollContent;
          if(scrollTop+clientHeight+20 > scrollHeight){
            this.getBooks()
          }
        },60);
      },
      async getBooks(){
        if(!this.isLoading&&this.hasMore){
          this.isLoading = true;
          let result = await pagination(this.offset);
          this.books = [...this.books,...result.data];
          this.hasMore = result.hasMore;
          this.offset = this.books.length;
          this.isLoading = false;
        }
      },
      async remove(id){
        await removeBook(id);
        this.$router.go(0);
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .content-wrapper{
    margin-bottom :40px;
    overflow :scroll;
    .more{
      padding :10px;
      font-size :14px;
      text-align :center;
      color:#aaa;
    }
    ul{
      width :90%;
      margin :0 auto;
      li{
        display :flex;
        padding 10px 0;
        border-bottom :1px solid #eee;
        vertical-align :middle;
        h4{
          font-size :16px;
        }
        img{
          width :120px;
          height :150px;
        }
        .detail{
          width 220px;
          margin-left :10px;
          p{
            line-height :25px;
          }
          b{
            color:red;
          }
          button{
            display :block;
            width :60px;
            height :25px;
            background : #ff6120;
            border-radius :5px;
            outline :none;
            border:none;
            color:#fff;
          }
        }
      }
    }
  }
</style>
