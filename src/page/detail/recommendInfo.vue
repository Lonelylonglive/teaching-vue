<template>
  <div>
    <div class="recommend-info">
      <h2 class="recommend-title">看了该景点的人还看了</h2>
      <div class="recommend-con" v-for="item in mainview.recommendInfo" :key="item.id">
        <div class="recommend-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="recommend-txt">
          <div class="txt-top">
            <span class="txt-viewname">{{item.name}}<i class="levelA">{{item.level}}</i></span>
            <span class="txt-price"><i>&yen;</i><em class="pricenum">{{item.lowerprice}}</em><b class="start">起</b></span>
          </div>
          <div class="txt-bottom">
            <p><em class="star">★★★★★</em><i class="commentnum">{{item.commentnum}}条评论</i></p>
            <div class="address">{{item.address}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
  props: ['mainview']
	}
</script>

<style scoped>
  .recommend-title {
    position: relative;
    padding: 0 .2rem;
    height: .88rem;
    color: #333;
    font-size: .3rem;
    line-height: .88rem;
    text-indent: .2rem;
  }
  .recommend-title::after{
    content: " ";
    position: absolute;
    top: .33rem;
    left: .2rem;
    width: .06rem;
    height: .25rem;
    background: #1ba9ba;
    border-radius: .04rem;
  }
  .recommend-con {
    display: flex;
  }
  .recommend-img img{
    margin: .2rem .2rem 0 .2rem;
    width: 1.62rem;
    height: 1.62rem;
  }
  .recommend-txt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex:1;
    padding-top: .2rem;
  }
  .txt-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .txt-top span {
    display: inline-block;
  }
  .txt-viewname {
    width: 4rem;
    height: .4rem;
    line-height: .4rem;
    font-size: .3rem;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .levelA {
    color: #adadad;
  }
  .txt-price {
    color: #ff9800;
    line-height: .4rem;
  }
  .pricenum {
    font-size: .36rem;
  }
  .start {
    color: #9e9e9e;
  }
  .star {
    color: #ffb436;
    font-size: .4rem;
  }
  .commentnum {
    margin-left: .1rem;
    line-height: .28rem;
    font-size: .24rem;
    color: #9e9e9e;
  }
  .address {
    width: 5rem;
    padding: 0 .04rem 0 .1rem;
    color: #9e9e9e;
    font-size: .24rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>