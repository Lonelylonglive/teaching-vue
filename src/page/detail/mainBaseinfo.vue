<template>
	<div class="main-baseinfo">

    <div class="detail-address">
      <p class="detail-addrtxt">
        <em class="iconfont position">&#xe6ec;</em>
        <span class="addrtxt">{{mainview.address}}</span>
        <em class="iconfont position">&#xe600;</em>
      </p>
    </div>

    <div class="findviewtime">
      <p class="detail-addrtxt">
        <span class="iconfont img">&#xe6ba;</span>
        <span class="addrtxt">查看景点及开放时间</span>
        <em class="iconfont position">&#xe600;</em>
      </p>
    </div>

  </div>  

</template>

<script>
	export default {
  props: ['mainview']
	}
</script>

<style scoped>
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
  .img {
    color: #666;
    font-size: .3rem;
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

</style>