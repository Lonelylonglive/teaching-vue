<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="search"><a href="#" class="prompt">输入城市/景点/游玩主题</a></div>
      <div class="city">北京</div>
    </header>

    <swiper :options="swiperOption" class="swiper-img-con">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    
    <swiper class="iconCon">
      <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
        <div class="icon-wrapper">
          <div v-for="item in pageInfo" :key="item.id" class="icon-item">
            <div class="icon-img-con">
              <img  class="icon-img" :src="item.imgUrl"/>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="recommend">
      <div  class="recTittle">
          <h2>热门推销</h2>
      </div>  
      <div class="recCon">
        <ul class="recShow">
          <li class="recShowLi" v-for="(item,index) in getIndexRec" :key="item.id">
            <a href="javascript:;">
              <div class="recImgBox">
                <img class="recImg" :src="item.imgUrl">
              </div>
              <div class="recInfo">
                <div class="recItemName">{{item.name}}</div>
                <div class="recDescription">{{item.description}}</div>
                <div class="recItemPrice">
                  ￥<em class="price">{{item.price}}</em><i>起</i>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="moreRec">
        <a href="javascript:;">查看所有产品</a>
      </div>
    </div>
    <div class="weekends">
        <h2 class="weekTittle">周末去哪儿</h2>
      <div v-for="(item, index) in getWeekends" class="weekendsCon">
        <a href="javascript:;">
          <div class="pictureBox">
            <img :src="item.imgUrl" alt="" class="picture">
          </div>
          <div class="weekendsInco">
            <div class="placename">{{item.place}}</div>
            <div class="description">{{item.description}}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'Index',

    data () {
      return {
        recommendNum: 5,
        swiperInfo: [],
        iconInfo: [],
        recommend: [],
        weekends: [],
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
          this.recommend = body.data.city.北京.recommend
          this.weekends = body.data.city.北京.weekends
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
  .iconCon{

  }
  .icon-item {
    box-sizing: border-box;
    float: left;
    width: 25%;
    padding: .4rem;
  }
  .icon-img-con {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .icon-img {
    width: 100%;
  }

  .recommend{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 147.73%;
  }
  .recTittle{
    box-sizing:border-box;
    position: relative;
  }
  .recTittle:after{
    content: "";
    position: absolute;
    top: 0;
    background: #e1e1e1;
    height: 1px;
    width: 100%;
    transform: scaleY(.5);
  }
  .recTittle h2{
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
  }
  .recCon{
    display: flex;
    flex-direction: column;
    background: #fff;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 125.33%;
  }
  .recShowLi{ 
    position: relative;
    width: 100%;
  }
  .recShowLi:after{
    content: "";
    position: absolute;
    bottom: 0;
    background: #e1e1e1;
    height: 1px;
    width: 100%;
    transform: scaleY(.5);
  }
  .recShowLi a{
    display: flex;
    padding: .24rem;
    box-sizing:border-box;
  }
  .recImgBox{
    margin-right: .2rem;
  }
  .recImg{
    height: 1.4rem;
    width: 1.4rem;
  }
  .recItemName{
    overflow: hidden;
    color: #212121;
    font-size: .3rem;
    margin-bottom: .1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recDescription{
    overflow: hidden;
    margin-bottom: .1rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recItemPrice{
    font-size: .2rem;
    color: #ff8300;
  }
  .price{
    font-size: .36rem;
    margin: 0 .06rem;
  }
  .recItemPrice i{
    color: #9e9e9e;
    font-size: .24rem;
  }
  .moreRec{
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    background: #fff;
  }
  .weekendsCon{
    background: #fff;
  }
  .weekTittle{
    height: .8rem;
    line-height: .8rem;
    color: #212121;
    padding-left: .26rem;
  }
  .pictureBox{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 38%;
  }
  .picture{
    width: 100%;
  }
  .weekendsInco{
    padding: .14rem .2rem .2rem .2rem;
  }
  .placename{
    overflow: hidden;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .description{
    overflow: hidden;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
