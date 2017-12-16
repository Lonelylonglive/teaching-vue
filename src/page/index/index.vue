<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe720;</div>
      <div class="search"><a href="#" class="prompt"><i class="icon-search iconfont">&#xe741;</i><span class="search-con">输入城市/景点/游玩主题</span></a></div>
      <div class="city"><span class="area">{{position}}</span></div>
    </header>

    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

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

    <div class="activity-list">
      <div class="list-item item-right"><i class="iconfont position">&#xe6ec;</i><span>定位失败</span></div>
      <div class="list-item"><i class="iconfont position">&#xe667;</i><span>{{activityList}}</span></div>
    </div>

    <div class="activity-con">
        <div class="con-item item-right">
          <img :src="imgSrc[0]" alt="" class="activity-img">
        </div>
        <div class="con-item">
          <img :src="imgSrc[1]" alt="" class="activity-img">
        </div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'Index',

    data () {
      return {
        position: '',
        swiperInfo: [],
        iconInfo: [],
        swiperOption: {
          autoplay: 4000,
          pagination: '.swiper-pagination',
          loop: true
        },
        activityList: '',
        imgSrc: []
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
        const area = body.data.position
        if (body && body.data && body.data.swiper) {
          this.swiperInfo = body.data.swiper
          this.iconInfo = body.data.icons
          if (area.length > 4) {
            this.position = area.substr(0, 4)
          } else {
            this.position = area
          }
          this.activityList = body.data.activityList
          if (body.data.activityImg) {
            const imgArr = body.data.activityImg
            imgArr.forEach((value, index) => {
              this.imgSrc.push(imgArr[index].imgUrl)
            })
          }
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
    position: relative;
    font-size: 0.28rem;
    color: #e4e7ea;
    line-height: 0.6rem;
  }
  .icon-search {
    position: absolute;
    left: .2rem;
    top: 50%;
    font-size: .32rem;
    margin-right: .1rem;
  }
  .search-con {
    position: absolute;
    left: .6rem;
    top: 50%;
    display: inline-block;
    width: 3.4rem;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
  }
  .city {
    line-height: .86rem;
    text-align: center;
  }
  .area {
    display: inline-block;
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
  .activity-list {
    box-sizing: border-box;
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    height: .98rem;
    margin-bottom: .2rem;
    background: #fff;
  }
  .activity-list:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: #e1e1e1;
    transform: scaleY(.5);
    top: 0;
  }
  .list-item {
    width: 50%;
    height: 100%;
    line-height: .98rem;
  }
  .item-right {
    position: relative;
  }
  .item-right:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background: #e1e1e1;
    transform: scaleX(.5);
    right: 0;
  }
  .position {
    font-size: .36rem;
  }
  .activity-con {
    box-sizing: border-box;
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    height: 1.38rem;
    background: #fff;
  }
  .activity-con:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: #e1e1e1;
    transform: scaleY(.5);
    top: 0;
  }
  .con-item {
    width: 50%;
    height: 100%;
  }
  .activity-img{
    width: 90%;
  }
</style>
