<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="search"><a href="#" class="prompt">输入城市/景点/游玩主题</a></div>
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
    text-align: center;
  }
  .search {
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
  }
  .icon-shuaxin {
    color: #ccc;font-size: 0.26rem;padding:0 0.15rem;
  }
  .prompt {
    font-size: 0.26rem;color: #ccc;line-height: 0.6rem;
  }
  .city {
    width: 1.14rem;
    line-height: .86rem;
    text-align: left;
  }
  .city::after{
    content:"";
    display: block;
    width: 0px;
    height: 0px;
    border: 0.1rem solid #fff;
    border-color: white transparent transparent transparent;
    position: absolute;
    right: 0.3rem;
    top: 0.36rem;
  }
  .swiper-img-con {
    width: 100%;
  }
  .swiper-img {
    width: 100%;
  }

</style>
