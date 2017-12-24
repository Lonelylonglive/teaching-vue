<template>
<div>
	<div class="comment-container" >
    <h2 class="comment-title">用户评论</h2>
    <div class="comment-con" v-for="item in mainview.comment">
      <img src="../../../static/img/highQualityComment1.png" class="watermark">
      <div class="comment-level">
        <span class="comment-star iconfont">&#xe615;&#xe615;&#xe615;&#xe615;&#xe615;</span>
        <span class="comment-user">{{item.user}} {{item.date}}</span>
      </div>
      <p class="comment-txt">{{item.text}}</p>
      <div class="comment-txtextend iconfont">&#xe6a6;</div>
      <ul class="comment-img">
        <li v-for="(imgitem, index) in item.imgUrl" :key="index" class="comment-imgli" v-show="index>5?false:true">
          <img :src="imgitem" alt="图片加载失败">
        </li>
        <div class="imgnum">
          共<span class="num">9</span>张
        </div>
      </ul>
    </div>
    <div class="comment-all">
      查看全部评论
      <em class="iconfont">&#xe6a6;</em>
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
  .comment-container{
    background: #fff;
    margin-top: .2rem;
  }
  .comment-title {
    position: relative;
    padding: 0 .2rem;
    height: .88rem;
    color: #333;
    font-size: .3rem;
    line-height: .88rem;
    text-indent: .2rem;
  }
  .comment-title::after{
    content: " ";
    position: absolute;
    top: .33rem;
    left: .2rem;
    width: .06rem;
    height: .25rem;
    background: #1ba9ba;
    border-radius: .04rem;
  }
  .comment-con {
    position: relative;
    padding: .1rem .2rem .3rem .2rem;
  }
  .watermark {
    position: absolute;
    top: .2rem;
    right: .2rem;
    width: 1.42rem;
    height: .96rem;
  }
  .comment-level {
    display: flex;
    justify-content: space-between;
    margin-top: .1rem;
    line-height: .6rem;
  }
  .comment-star {
    color: #ffb436;
    font-size: .3rem;
  }
  .comment-user {
    width: 3rem;
    display: inline-block;
    line-height: .6rem;
    font-size: .24rem;
    color: #212121;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .comment-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
  .comment-txtextend {
    height: .48rem;
    line-height: .48rem;
    text-align: center;
    font-size: .4rem;
    color: #9e9e9e;
  }
  .comment-img {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
  }
  .comment-imgli {
    width: 32%;
    margin-bottom: .1rem;
  }
  .comment-imgli img{
    display: block;
    width: 100%;
  }
  .comment-all {
    margin-top: -.02rem;
    height: .8rem;
    color: #616161;
    line-height: .8rem;
    text-align: center;
  }
  .imgnum {
    position: absolute;
    right: 0;
    bottom:10%;
    display: inline-block;
    background: rgba(0,0,0,0.5);
    height: .4rem;
    width: .94rem;
    font-size: .24rem;
    color: #fff;
    text-align: center;
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem;
    line-height: .4rem;
  }
</style>