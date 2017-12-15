<template>
  <div>
    <header class="header">
      <div class="back">返回</div>
      <div class="search"></div>
      <div class="city">城市</div>
    </header>

    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="swiper-img-con">
          <img  class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg"/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-img-con">
          <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1712/5c/723bbb93e9683f02.jpg_640x200_7d38c6ad.jpg"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        direction: 'horizontal'
      }
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    background: #05bad5;
    color: #fff;
  }
  .back {
    width: .64rem;
    line-height: .86rem;
  }
  .search {
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
  }
  .city {
    width: 1.14rem;
    line-height: .86rem;
    text-align: center;
  }
  .swiper-img-con {
    width: 100%;
  }
  .swiper-img {
    width: 100%;
  }
</style>
