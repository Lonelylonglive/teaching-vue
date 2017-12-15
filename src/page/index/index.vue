<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe607;</div>
      <div class="search"><a href="#" class="prompt"><i class="icon-search iconfont">&#xe60d;</i><span class="search-con">输入城市/景点/游玩主题</span></a></div>
      <div class="city"><span class="area">乌鲁木齐</span></div>
    </header>

    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <swiper>
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

  </div>
</template>

<script>
  export default {

    name: 'Index',

    data () {
      return {
        swiperInfo: [],
        iconInfo: [],
        swiperOption: {
          autoplay: 10000,
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },

    computed: {
      pages () {
        const pages = []
        this.iconInfo.forEach((value, index) => {
          let page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        })
        return pages
      }
    },

    methods: {

      getIndexData () {
        this.$http.get('/static/index.json')
          .then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.swiper) {
          this.swiperInfo = body.data.swiper
          this.iconInfo = body.data.icons
        }
      }

    },

    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    background: #05bad5;
    color: #fff;
    height:0.88rem;
  }
  .back {
    width: .64rem;
    line-height: .86rem;
    text-align: center;
    font-size: .40rem;
  }
  .search {
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
    padding-left: .2rem;
  }
  .prompt {
    font-size: 0.28rem;
    color: #e4e7ea;
    line-height: 0.6rem;
  }
  .icon-search {
    font-size: .32rem;
    margin-right: .1rem;
    float: left;
  }
  .search-con {
    display: inline-block;
    width: 3.6rem;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
    float: left;
  }
  .city {
    line-height: .86rem;
    text-align: center;
  }
  .area {
    display: inline-block;
    max-width: 1.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:clip;
    margin-right: .6rem;
  }
  .city::after {
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
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
  }
  .swiper-img {
    width: 100%;
  }
  .icon-wrapper {
  
  }
  .icon-item {
    box-sizing: border-box;
    float: left;
    width: 25%;
    /*padding: .4rem;*/
    text-align: center;
  }
  .icon-img-con {
    width: 100%;
    /*height: .66rem;*/
    /*height: 0;*/
    height: 1.3rem;
    padding-top: .3rem;
    /*line-height: 1.3rem;*/
    /*padding-bottom: 100%;*/
    text-align: center;
  }
  .icon-img {
    width: .66rem;
    height: .66rem;
    /*width: 100%;*/
  }
   .keyword {
    margin-top: .2rem;
    font-size: .28rem;
    text-align: center;
  } 
</style>
