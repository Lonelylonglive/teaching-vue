<template>
	<div class="main-img">
    <div class="detail-img">
      <img :src="viewImg[0]" alt="">
    </div>
    <div class="detail-info">
      <div class="detail-tittle">{{mainview.name}}</div>
      <div class="detail-imgnum">
        <span class="imgnum-icon"></span>
        <em class="num">{{viewImg.length}}</em>
      </div>
    </div>
  </div>

</template>

<script>
	export default {
  props: ['viewImg', 'mainview']
	}
</script>

<style scoped>
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
</style>