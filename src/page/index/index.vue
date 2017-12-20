<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe720;</div>
      <div class="search"><a href="#" class="prompt"><i class="icon-search iconfont">&#xe741;</i><span class="search-con">输入城市/景点/游玩主题</span></a></div>
      <div class="city">
        <router-link to="/city" class="area">{{city}}</router-link>
      </div>
    </header>

    <index-swiper :swiperInfo="swiperInfo"></index-swiper>
    <icon-swiper :pages="pages"></icon-swiper>
   
    <div class="activity-list">
      <div class="list-item item-right"><i class="iconfont position">&#xe6ec;</i><span class="item-con">定位失败</span></div>
      <div class="list-item"><i class="iconfont position">&#xe667;</i><span class="item-con">{{activityList}}</span></div>

    </div>

    <div class="activity-con">
        <div class="con-item item-right">
          <img :src="ads[0]" alt="" class="activity-img">
        </div>
        <div class="con-item">
          <img :src="ads[1]" alt="" class="activity-img">
        </div>
    </div>

  
    <index-recommend :getIndexRec="getIndexRec"></index-recommend>

    <index-weekends :getWeekends="getWeekends"></index-weekends> 

    

    


    <div class="where">
        <div class="where-prompt">
          <span class="promot-black">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
        </div>
    </div>

    <div class="more">
      <ul class="more-nav">
        <li>机票</li>
        <li>酒店</li>
        <li>公寓</li>
      </ul>
      <ul class="more-about">
        <li class="more-con">登陆</li>
        <li class="more-con">我的订单</li>
        <li class="more-con">最近浏览</li>
        <li class="more-con">关于我们</li>
      </ul>
    </div>

    <div class="footer">
      <p class="footer-type">
        <a href="#" class="footer-phone">触屏版</a>
        <a href="#" class="footer-computer">电脑版</a>
      </p>
      <p class="footer-intro">Qunar 京ICP备05021087 <a href="#" class="footer-idea">意见反馈</a></p>
    </div>
  </div>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  import IndexSwiper from './IndexSwiper'
  import IconSwiper from './IconSwiper'
  import IndexRecommend from './IndexRecommend'
  import IndexWeekends from './IndexWeekends'
  export default {
    components: {
      IndexSwiper,
      IconSwiper,
      IndexRecommend,
      IndexWeekends
    },
    name: 'Index',
    data () {
      return {
        recommendNum: 5,
        swiperInfo: [],
        iconInfo: [],
        recommend: [],
        weekends: [],
        activityList: '',
        ads: [],
        swiperOption: {
          autoplay: 10000,
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperOption1: {
          pagination: '.swiper-pagination'
        }
      }
    },

    computed: {
      ...mapState(['city']),
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
      },
      getIndexRec () {
        const IndexRec = []
        this.recommend.forEach((value, index) => {
          if (index < this.recommendNum) {
            IndexRec.push(value)
          }
        })
        return IndexRec
      },
      getWeekends () {
        const weekends = []
        this.weekends.forEach((value, index) => {
          if (index < this.recommendNum) {
            weekends.push(value)
          }
        })
        return weekends
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
          this.recommend = body.data.city.BJ.recommend
          this.weekends = body.data.city.BJ.weekends
          this.activityList = body.data.activityList
          if (body.data.activityImg) {
            const imgArr = body.data.activityImg
            imgArr.forEach((value, index) => {
              this.ads.push(imgArr[index].imgUrl)
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
    color: #fff;
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
  .getposition,.addsName {
    width: 1.4rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .activity-list i {
    display: inline-block;
  }
  .list-item {
    display: flex;
    justify-content: center;
    width: 50%;
    height: .98rem;
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
  .item-con {
    width: 1.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
  .activity-img {
    height: 100%
  }
  .title{
    white-space: nowrap;
  }
  .positionFail{
    box-sizing: border-box;
    width: 50%;
    border-right: 1px solid #e1e1e1;
  }
  .discount{
    box-sizing: border-box;
    width: 50%;
  }
  .case{
    display: flex;
    flex-direction: column;
    height: 2.4rem;
    background: #f5f5f5;
    box-sizing: border-box;
    padding-top: 0.2rem;
  }
  .caseCon{
    height: 1.4rem;
    width: 100%;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    background: #fff;
  }
  .case-img{
    box-sizing: border-box;
    width: 50%;
    float: left;
    height: 100%;
    border-right: 1px solid #dbdbdb;
  }
  .case-img img{
    width: 100%;
    height: 100%;
  }
  .recommend {
    font-size: 0.24rem;
    line-height: 0.8rem;
    padding-left: 0.28rem;
  }
  .recommendCon {
    display: flex;
    flex-direction: column;
  }

  .item-name {
    padding-top: 0.04rem;
    font-size: 0.26rem;
    color: #131313;
  }
  .item-intro {
    padding-top: 0.2rem;
    color: #9b9b9b;
    font-size: .24rem;
  }
  .price {
    padding-top: 0.24rem;
    color: #fa783c;
  }
  .symbol {
    font-size: 0.16rem;
    color: #ef9c56;
  }
  .sta {
    font-size: 0.2rem;
    color: #a4a4a4;
  }
  .priceSize {
    font-size: 0.4rem;
  }
  .recommendCon-more {
    height: 0.86rem;
    text-align: center;
    line-height: 0.86rem;
    color: #3dc4c0;
    font-size: 0.26rem;
  }
  .where {
    display: flex;
    flex-direction: column;
  }
  
  
  .where-prompt {
    box-sizing: border-box;
    padding: 0.2rem;
    font-size: 0.21rem;
    color: #303030;
  }
  .promot-black {
    font-size: 0.22rem;
    font-weight: 600;
    color: #454545;
  }
  .more {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0.2rem 0;
    border-bottom: 1px solid #c4c4c4;
  }
  .more-nav {
    display: flex;
    box-sizing: border-box;
    padding: 0 0.96rem;
  }
  .more-about {
    display: flex;
    box-sizing: border-box;
    padding-left: 0.4rem;
    padding-top: 0.32rem;
  }
  .more-con {
    padding-right: 0.42rem;
    color: #1ba2c0;
    font-size: 0.25rem;
  }
  .footer {
    display: flex;
    flex-direction: column;
    padding: 0.2rem 0;
  }
  .footer-type {
    text-align: center;
  }
  .footer-phone {
    color: #0a0a0a;
    padding-right: 0.64rem;
  }
  .footer-intro {
    padding-top: 0.25rem;
    text-align: center;
    color: #939393;
  }
  .footer-idea {
    color: #939393;
  }
</style>
