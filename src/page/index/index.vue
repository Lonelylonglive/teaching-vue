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

    <div class="recommend">
      <div class="recTittle">
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
                  &yen;<em class="price">{{item.price}}</em><i>起</i>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="moreRec">
        <a href="javascript:;" class="more">查看所有产品</a>
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
  import IndexSwiper from './swiper'
  import IconSwiper from './iconSwiper'
  import { mapState } from 'vuex'
  export default {

    name: 'Index',

    components: {
      IndexSwiper,
      IconSwiper
    },
    data () {
      return {
        recommendNum: 5,
        swiperInfo: [],
        iconInfo: [],
        recommend: [],
        weekends: [],
        activityList: '',
        ads: []
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
          this.recommend = body.data.city.北京.recommend
          this.weekends = body.data.city.北京.weekends
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
    height: 100%;
  }
  .recommend {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 147.73%;
  }
  .recTittle {
    box-sizing:border-box;
    position: relative;
  }
  .recTittle:after {
    content: "";
    position: absolute;
    top: 0;
    background: #e1e1e1;
    height: 1px;
    width: 100%;
    transform: scaleY(.5);
  }
  .recTittle h2 {
    width: 3.49rem;
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .recCon {
    display: flex;
    flex-direction: column;
    background: #fff;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 125.33%;
  }
  .recShowLi {
    position: relative;
    width: 100%;
  }
  .recShowLi:after {
    content: "";
    position: absolute;
    bottom: 0;
    background: #e1e1e1;
    height: 1px;
    width: 100%;
    transform: scaleY(.5);
  }
  .recShowLi a {
    display: flex;
    padding: .24rem;
    box-sizing:border-box;
  }
  .recImgBox {
    margin-right: .2rem;
  }
  .recImg {
    height: 1.4rem;
    width: 1.4rem;
  }
  .recItemName {
    width: 5rem;
    overflow: hidden;
    color: #212121;
    font-size: .3rem;
    margin-bottom: .1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recDescription {
    overflow: hidden;
    margin-bottom: .1rem;
    width: 5rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recItemPrice {
    font-size: .2rem;
    color: #ff8300;
  }
  .price {
    font-size: .36rem;
    margin: 0 .06rem;
  }
  .recItemPrice i {
    color: #9e9e9e;
    font-size: .24rem;
  }
  .moreRec {
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    background: #fff;
  }
  .more {
    display: inline-block;
    width: 5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .weekendsCon {
    background: #fff;
  }
  .weekTittle {
    width: 5rem;
    height: .8rem;
    line-height: .8rem;
    color: #212121;
    padding-left: .26rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pictureBox {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 38%;
  }
  .picture {
    width: 100%;
  }
  .weekendsInco {
    padding: .14rem .2rem .2rem .2rem;
  }
  .placename {
    width: 5rem;
    overflow: hidden;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .description {
    width: 5rem;
    overflow: hidden;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
