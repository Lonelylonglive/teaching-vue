<template>
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
</template>

<script>
	export default {
  props: []
	}
</script>

<style scoped>
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
</style>