<template>
  <div class="add">
    <v-header  :back="true">
      <span slot="title">图书添加</span>>
    </v-header>
    <div class="content-wrapper">
      <label for="bookNName" >名称</label>
      <input type="text" id="bookNName"  v-model="book.bookName" />
      <label for="bookInfo">详细信息</label>
      <input type="text" id="bookInfo"   v-model="book.bookInfo"/>
      <label for="bookPrice">价格</label>
      <input type="text" id="bookPrice"  v-model.number="book.bookPrice"/>
      <label for="bookCover">图片地址</label>
      <input type="text" id="bookCover"  v-model="book.bookCover"/>
      <button @click="add">提交</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import mHeader from '../base/mHeader.vue';
  import {addBook} from "../api/index.js"
  export default {
    components:{
      "v-header":mHeader
    },
    data(){
      return {
        book:{}
      };
    },
    computed:{
    },
    watch:{
    },
    methods:{
      async add(){
         await addBook(this.book);
        this.$router.push("/list");
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .add{
    .content-wrapper{
      width :90%;
      margin :0 auto;
      margin-top :30px;
      label{
        display:block;
        font-size :16px;
        font-weight :600;
      }
      input{
        width :95%;
        height :30px;
        outline :none;
        border-radius :5px;
        margin :10px 0;
        border:1px solid #b1b1b1;
        text-indent :5px;
      }
      input:focus{
        outline:none;
        border:1px solid #18b0b8;
      }
      button{
        width :100px;
        height :30px;
        margin-top :20px;
        border-radius :5px;
        border :none;
        background : #18b0b8;
        color:#fff;
        font-weight:600;
      }
    }
  }
</style>
