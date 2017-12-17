<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe60f;</div>
      <div class="search"><i class="search-ico iconfont">&#xe678;</i><a href="#" class="prompt">输入城市/景点/游玩主题</a></div>
      <div class="city">城市</div>
    </header>

    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <swiper :options="swiperOption1">
      <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
        <div class="icon-wrapper">
          <div v-for="item in pageInfo" :key="item.id" class="icon-item">
            <div class="icon-img-con">
              <img  class="icon-img" :src="item.imgUrl"/>
              <span class="title">{{item.name}}</span>
            </div>
          </div>
        </div>
      </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <ul class="list">
      <li class="positionFail"><span class="iconfont pos">&#xe600;</span>定位失败</li>
      <li class="discount"><span class="iconfont dis">&#xe7fc;</span>5折泡温泉</li>
    </ul>

    <div class="case">
      <ul class="caseCon">
        <li v-for="item in caseImg" :key="item.id" class="case-img">
          <img :src="item.imgUrl">
        </li>
      </ul>
      <p class="recommend">热销推荐</p>
    </div>

    <ul class="recommendCon">
      <li class="liCon" v-for="item in liCon" :key="item.id">
        <a class="liCon-img" href="#"><img class="liCon-imgSize" :src="item.imgUrl"></a>
        <div class="liCon-right">
          <h3 class="item-name">{{item.name}}</h3>
          <p class="item-intro">{{item.intro}}</p>
          <div class="price">
            <span class="symbol">￥</span><span class="priceSize">{{item.price}}</span><span class="sta">起</span>
          </div>
        </div>
      </li>
      <li class="recommendCon-more">查看所有产品</li>
    </ul>

    <div class="where">
      <div class="tit">周末去哪儿</div>
        <div class="where-case" v-for="item in where">
          <div class="where-img"><img :src="item.imgUrl" class="where-imgSize"></div>
          <p class="where-name">{{item.name}}</p>
          <p class="where-intro">{{item.intro}}</p>
        </div>
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
</template>

<script>
  export default {

    name: 'Index',

    data () {
      return {
        swiperInfo: [],
        iconInfo: [],
        caseImg: [],
        liCon: [],
        where: [],
        swiperOption: {
          autoplay: 10000,
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperOption1: {
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
          this.caseImg = body.data.caseImg
          this.liCon = body.data.liCon
          this.where = body.data.where
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
  .search-ico{
    color:#ccc;padding:0 0.15rem;
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
    padding: .4rem;
    text-align: center;
  }
  .icon-img-con {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .icon-img {
    width: 100%;
  }
  .title{
    white-space: nowrap;
  }
  .list{
    box-sizing: border-box;
    display: flex;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.26rem;
    color: #1c1c1c;
    border-top: 1px solid #e1e1e1;
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
  .liCon {
    display: flex;
    box-sizing: border-box;
    padding: 0.24rem;
    border-bottom: 1px solid #dbdbdb;
  }
  .liCon-img {
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
  }
  .liCon-imgSize {
    width: 100%;
    height: 100%;
  }
  .liCon-right {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: .2rem;
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
  .tit {
    height: 0.82rem;
    background: #f5f5f5;
    box-sizing: border-box;
    padding: 0.28rem;
  }
  .where-case {
    display: flex;
    flex-direction: column;
  }
  .where-imgSize {
    width: 100%;
  }
  .where-img {
    width: 100%;
    height: 0;
    padding-bottom: 2.8rem;
  }
  .where-name {
    box-sizing: border-box;
    padding: 0.26rem 0 0.2rem 0.22rem;
    font-size: 0.24rem;
  }
  .where-intro {
    box-sizing: border-box;
    padding-left: 0.22rem;
    padding-bottom: 0.34rem;
    color: #454545;
    font-size: 0.22rem;
    border-bottom: 0.1rem solid #f5f5f5;
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
