<template>
	<div class="recommend">
    <div  class="recTittle">
        <h2>热门推销</h2>
    </div>
    <div class="recCon">
      <ul class="recShow">
        <li class="recShowLi" v-for="(item,index) in getIndexRec" :key="item.id">
          <router-link :to="'/detail/'+ item.name">
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
          </router-link>
        </li>
      </ul>
    </div>
    <div class="moreRec">
      <a href="javascript:;">查看所有产品</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['getIndexRec']
  }
</script>

<style scoped>
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
    height: .8rem;
    width: 6rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recCon {
    display: flex;
    flex-direction: column;
    background: #fff;
    /*overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 129.33%;*/
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
    width: 4rem;
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
    height: .4rem;
    width: 5rem;
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
</style>