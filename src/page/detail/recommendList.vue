<template>
  <div class="recommend-list">

    <h2 class="rec-list-title">
      <span class="title-icon"></span>
      <span class="title-txt">
        去哪儿推荐
      </span>
    </h2>
  <!--  -->
    <div class="rec-list-con" v-for="item in mainview.recommend">

      <div class="con-left">
        <p class="route">{{item.route}}</p>
        <p>
          <span class="shopdesc">
            <em class="iconfont position">&#xe66d;</em>
            可定明日
          </span>
          <span class="shopdesc">
            <em class="iconfont position">&#xe601;</em>
            无购物
          </span>
          <span class="shopdesc">
            <em class="iconfont position">&#xe601;</em>
            无自费
          </span>
        </p>
      </div>

      <div class="con-right buy-ticket"> 
        <div class="ticket-price">
          <em>&yen;</em>
          <span class="ticket-num">{{item.price}}</span>
          <i>起</i>
        </div>
        <span class="ticket-info">查看</span>
      </div>

    </div>
  <!--  -->

  </div>

</template>

<script>
  export default {
    props: ['mainview']
  }
</script>

<style scoped>
  .recommend-list {
    margin-bottom: .2rem;
    background: #fff;
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
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: .1rem;
    line-height: .4rem;
  }
  .ticket-price i {
    display: inline-block;
    color: #9e9e9e;
    font-size: .24rem;
    height: .4rem;
  }
  .ticket-price em {
    display: inline-block;
    height: .4rem;
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
    background: gray;
    transform-origin: left top;
    transform: scaleX(.5);
  }
  .ticket-num {
    display: inline-block;
    margin: 0 .04rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 1.4rem;
    height: .4rem;
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