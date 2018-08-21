<template>
  <div class="list">
    <v-header  :back="true">
      <span slot="title">图书列表</span>
    </v-header>
    <div class="content-wrapper">
      <ul>
        <router-link v-for="(book,key) in books" :key="key" :to="{name:'Detail',params:{bid:book.bookId}}" tag="li">
          <img :src="book.bookCover">
          <div class="detail">
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>￥{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import mHeader from '../base/mHeader.vue';
  import {getBooks,removeBook} from "../api/index.js";
  export default {
    data(){
      return {
        books:[]
      };
    },
    components:{
      "v-header":mHeader
    },
    created(){
      this.getAllBooks();
    },
    methods:{
      async getAllBooks(){
        this.books = await getBooks();
      },
      remove(id){
        removeBook(id);
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .content-wrapper{
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
