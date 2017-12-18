<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe720;</div>
      <h1 class="headerTittle">故宫</h1>
    </header>


    <!-- 00000000000000000000000000000000000000000000000000000000 -->
    <main class="main">



      <div class="main-img">
        <div class="detail-img">
          <img :src="place.imgUrl" alt="">
        </div>
        <div class="detail-info">
          <div class="detail-tittle">{{place.name}}</div>
          <div class="detail-imgnum">
            <span class="imgnum-icon"></span>
            <em class="num">{{num}}</em>
          </div>
        </div>
      </div>




      <div class="main-baseinfo">

        <div class="detail-address">
          <p class="detail-addrtxt">
            <em class="iconfont position">&#xe6ec;</em>
            <span class="addrtxt">{{place.address}}</span>
            <em class="iconfont position">&#xe6ec;</em>
          </p>
        </div>

        <div class="findviewtime">
          <p class="detail-addrtxt">
            <span class="address-icon"></span>
            <span class="addrtxt">查看景点及开放时间</span>
            <em class="iconfont position">&#xe6ec;</em>
          </p>
        </div>

      </div>  
      




      <div class="main-comment">
          <div class="comment-left">
            <span class="comment-icon"></span>
            <span class="comment-level">★★★★★</span>
            <span class="comment-score">5分</span>
          </div>
          <div class="comment-right">
             <span class="comment-totalnum">9999999评论</span>
             <i class="iconfont">&#xe720;</i>
          </div>
      </div>



      <div class="main-announce">
        <i class="iconfont announce-icon">&#xe720;</i>
        <span class="announce-txt">除法定节假日，故宫博物院实行周一闭馆。</span>
        <i class="iconfont announce-icon">&#xe720;</i>
      </div>



      <div class="main-list">
        <div class="recommend-list">

          <h2 class="rec-list-title">
            <span class="title-icon"></span>
            <span class="title-txt">
              去哪儿推荐
            </span>
          </h2>
        <!--  -->
          <div class="rec-list-con">

            <div class="con-left">
              <p class="route">天安门故宫珍宝馆+八达岭+颐和园+恭王府联票无线耳麦人工讲解</p>
              <p>
                <span class="shopdesc">
                  <em class="iconfont position">&#xe6ec;</em>
                  可定明日
                </span>
                <span class="shopdesc">
                  <em class="iconfont position">&#xe6ec;</em>
                  无购物
                </span>
                <span class="shopdesc">
                  <em class="iconfont position">&#xe6ec;</em>
                  无自费
                </span>
              </p>
            </div>

            <div class="con-right buy-ticket"> 
              <div class="ticket-price">
                <em>&yen;</em>
                <span class="ticket-num">27</span>
                <i>起</i>
              </div>
              <span class="ticket-info">查看</span>
            </div>

          </div>
        <!--  -->
          <div class="rec-list-con">
            <div class="con-left">
              <p class="route">【5大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</p>
              <p>
                <span class="shopdesc">
                  <em class="iconfont position">&#xe6ec;</em>
                  可定明日
                </span>
                <span class="shopdesc">
                  <em class="iconfont position">&#xe6ec;</em>
                  无购物
                </span>
                <span class="shopdesc">
                  <em class="iconfont position">&#xe6ec;</em>
                  无自费
                </span>
              </p>
            </div>
            <div class="con-right buy-ticket"> 
              <div class="ticket-price">
                <em>&yen;</em>
                <span class="ticket-num">148</span>
                <i>起</i>
              </div>
              <span class="ticket-info">查看</span>
            </div>
          </div>
        <!--  -->



        </div>
      </div>


     

    </main>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        num: '',
        place: []
      }
    },
    created () {
      this.getDetail()
    },
    methods: {
      getDetail () {
        this.$http.get('/static/detail.json').then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.place) {
          this.place = body.data.place
          this.num = this.place.imgUrl.length
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    height:0.88rem;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background: #05bad5;
    color: #fff;
    z-index: 100;
    opacity: 0;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: .8rem;
    line-height: .86rem;
    text-align: center;
    font-size: .5rem;
  }
  .headerTittle {
    width: 100%;
    margin: 0 1rem;
    line-height: .88rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
  }
  .main-img{
    position: relative;
  }
  .detail-img img{
    width: 100%;
  }
  .detail-info {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: .26rem;
    left: .2rem;
    right: .2rem;
    z-index: 1;
  }
  .detail-tittle {
    width: 100%;
    margin-right: 1.4rem;
    line-height: .4rem;
    color: #fff;
    font-size: .32rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
  }
  .imgnum-icon{
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(../../../static/img/detail.png) 0 -2.26rem no-repeat;
    position: relative;
    top: .08rem;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
  .detail-imgnum {
    display: flex;
    justify-content: center;
    width: 1.2rem;
    height: .4rem;
    background: rgba(0,0,0,.5);
    border-radius: .2rem;
    font-size: .24rem;
    color: #fff;
    line-height: .4rem;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
  }
  .num{
    display: inline-block;
  }
  .main-baseinfo {
    position: relative;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    top: -0.1rem;
    border-radius: .1rem .1rem 0 0;
  }
  .detail-address, .findviewtime {
    position: relative;
    height: .88rem;
    color: #212121;
    line-height: .88rem;
  }
  .detail-addrtxt {
    display: flex;
  }
  .addrtxt {
    flex:1;
    padding-left: .1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .address-icon {
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(../../../static/img/detail.png) 0 -2.26rem no-repeat;
    position: relative;
    top: .08rem;
    margin-top: .26rem;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }

  .main-comment {
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;
    background-color: #fff;
    height: .8rem;
    line-height: .8rem;

  }
  .comment-icon{
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(../../../static/img/detail.png) 0 -1.35rem no-repeat;
    position: relative;
    top: .08rem;
    margin-left: .2rem;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
  .comment-score {
    display: inline-block;
    margin-left: .1rem;
    color: #ff8300;
  }
  .comment-totalnum {
    display: inline-block;
    line-height: .28rem;
    font-size: .28rem;
    margin-left: .16rem;
    color: #9e9e9e;
  }
  .main-announce {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #fdeede;
    color: #f1441a;
    margin-bottom: .2rem;
    height: .88rem;
    line-height: .88rem;
    padding-left: .23rem;
  }
  .announce-txt {
    display: inline-block;   
    width: 6.4rem;
    color: #f67353;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .title-icon {
    display: inline-block;
    width: .42rem;
    height: .42rem;
    background: url(../../../static/img/detail.png) 0 -2.64rem no-repeat;
    position: relative;
    top: .08rem;
    margin:.23rem .1rem .23rem .2rem; 
    background-size: .4rem 3rem;
  }
  .rec-list-title {
    display: flex;
    position: relative;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .32rem;
    line-height: .88rem;
  }
  .rec-list-title:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: #999;
    bottom: 0;
    transform-origin: left content;
    transform: scaleY(.5);
  }
  .title-txt {
    flex:1;
    display: inline-block;
    height: .88rem;
    width: 6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .rec-list-con {
    position: relative;
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    padding: .2rem 0;
  }
  .rec-list-con:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: #999;
    bottom: 0;
    transform-origin: left center;
    transform: scaleY(.5);
  }
  .con-left {
    flex: 2.5;
    padding-left: .2rem;
  }
  .route {
    margin-right: .1rem;
    line-height: .52rem;
    font-size: .3rem;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .ticket-price {
    text-align: center;
    margin-bottom: .1rem;
  }
  .ticket-price i{
    color: #9e9e9e;
    font-size: .24rem;
  }
  .buy-ticket {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    padding: .2rem;
    color: #ff9800;
  }
  .buy-ticket:after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 1px;
    background: #000;
    transform-origin: left top;
    transform: scaleX(.5);
  }
  .ticket-num {
    margin-left: .04rem;
    font-size: .32rem;
    line-height: .3rem;
  }
  .ticket-info {
    display: inline-block;
    width: 2rem;
    height: .6rem;
    color: #fff;
    background: #ff9800;
    text-align: center;
    line-height: .6rem;
  }
  .shopdesc {
    display: inline-block;
    color: #616161;
    font-size: .24rem;
    line-height: .32rem;
    white-space: nowrap;
  }
</style>