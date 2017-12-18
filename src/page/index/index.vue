<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe720;</div>
      <div class="search"><a href="#" class="prompt"><i class="icon-search iconfont">&#xe741;</i><span class="search-con">输入城市/景点/游玩主题</span></a></div>
      <div class="city"><span class="area">{{position}}</span></div>
    </header>

    <index-swiper :swiperInfo="swiperInfo"></index-swiper> 

    <icon-swiper :pages="pages"></icon-swiper> 

   
    <div class="activity-list">
      <div class="list-item item-right"><i class="iconfont position">&#xe6ec;</i><span class="getposition">定位失败</span></div>
      <div class="list-item"><i class="iconfont position">&#xe667;</i><span class="addsName">{{activityList}}</span></div>
    </div>

    <div class="activity-con">
        <div class="con-item item-right">
          <img :src="imgSrc[0]" alt="" class="activity-img">
        </div>
        <div class="con-item">
          <img :src="imgSrc[1]" alt="" class="activity-img">
        </div>
    </div>
  
    <index-recommend :getIndexRec="getIndexRec"></index-recommend>

    <index-weekends :getWeekends="getWeekends"></index-weekends> 

    

    

  </div>
</template>

<script>
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
        position: '',
        swiperInfo: [],
        iconInfo: [],
        recommend: [],
        weekends: [],
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
        const area = body.data.position
        if (body && body.data && body.data.swiper) {
          this.swiperInfo = body.data.swiper
          this.iconInfo = body.data.icons
          this.recommend = body.data.city.BJ.recommend
          this.weekends = body.data.city.BJ.weekends
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
  .activity-img {
    height: 100%
  }
  /*.recommend {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 147.73%;
  }*/
  
  
</style>
