<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
      <img :src="slide">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:{
      swiperSlides:{
        default:[]
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay :{
            delay:2000,
            disableOnInteraction:false,
            stopOnLastSlider:true
          },
          loop:true
        }
      }
    }
  }
</script>

<style scoped>
  img{
    width: 100%;
  }
</style>
