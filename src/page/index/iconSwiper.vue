<template>
  <swiper :options="swiperOption" class="swiper-icon">
    <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
      <div class="icon-wrapper">
        <div v-for="item in pageInfo" :key="item.id" class="icon-item">
          <div class="icon-img-con">
            <img  class="icon-img" :src="item.imgUrl"/>
            <div class="keyword">{{item.title}}</div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>


<script>
  export default {
    props: {
      pages: {
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        }
      }
    }
  }
</script>


<style scoped>
  .icon-item {
    box-sizing: border-box;
    float: left;
    width: 25%;
    text-align: center;
  }
  .icon-img-con {
    width: 100%;
    height: 1.3rem;
    padding-top: .3rem;
    text-align: center;
  }
  .icon-img {
    width: .66rem;
    height: .66rem;
  }
  .keyword {
    margin-top: .2rem;
    font-size: .28rem;
    text-align: center;
  }
  .swiper-icon {
    height: 3.8rem;
    background: #fff;
  }
</style>
