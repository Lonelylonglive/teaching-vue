<template>
  <div class="qunarads">
    <div class="qunaradsCon">
      <div class="logo">
        <img src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png" alt="" class="logoImg">
      </div>
      <div class="logoTitle">
        <span class="qunar">去哪儿旅行</span>
        <span class="choice">超过<i>4.6亿</i>人的聪明选择</span>
      </div>
      <div class="close"><img src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png" alt="" class="closeImg"></div>
      <div class="download">下载客户端</div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .qunarads{
    height: .9rem;
    background: #000;
  }
  .qunaradsCon{
    width: 100%;
    height: .9rem;
    background: #000;
    opacity: 0.8;
    position: fixed;
    z-index: 10;
  }
  .logo{
    width: .6rem;
    height: .6rem;
    float: left;
  }
  .logoImg{
    width: 100%;
    margin: .15rem 0 0 .15rem;
  }
  .logoTitle{
    width: 2.5rem;
    height: .69rem;
    float: left;
    margin: .1rem 0 0 .6rem;
  }
  .qunar{
    display: block;
    font-size: .31rem;
    color: #3bb7c3;
    font-weight: 900;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .choice{
    display: block;
    font-size: .16rem;
    color: #bebebe;
    margin-top: .11rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .choice>i{
    font-size: .2rem;
    color: #f2ba27;
  }
  .download{
    width: 1.3rem;
    height: .5rem;
    color: #fff;
    background: #f3b100;
    margin: .18rem .3rem 0 0;
    float: right;
    font-size: .2rem;
    line-height: .5rem;
    text-align: center;
    border-radius: .1rem;
    box-shadow: 0 .05rem .05rem #f3b100;
    white-space: nowrap;
    overflow: hidden;
  }
  .close{
    width: .3rem;
    height: .3rem;
    float: right;
    margin: .1rem .1rem 0 0;
  }
  .closeImg{
    width: 100%;
  }
</style>