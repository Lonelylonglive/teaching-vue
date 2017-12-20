<template>
	<div>
		<header class="header">
			<div class="back iconfont">&#xe60f;</div>
			<div class="search"><i class="search-ico iconfont">&#xe678;</i><a href="#" class="prompt">输入城市或景点名</a></div>
			<div class="city">搜索</div>
		</header>
    
    <div class="tourist">
    	<h3 class="tourist-select">游玩景点<span class="selection">(可多选)</span></h3>
      <div class="tourist-Area" ref="hotContainer">
          <ul class="tourist-show">
            <li class="tourist-Date" v-for="item in touristData" :key="item.id"><span class="tourist-Size" >{{item.name}}</span></li>
          </ul>
      </div>
      <span class="triangle" @click="handleTriangle"><span class="iconfont tourist-iconfont">&#xe62e;</span></span>
    </div>

    <ul class="list">
      <li class="list-data" v-for="item in listInfo" :key="item.id">
        <div class="list-img"><img class="list-size" :src="item.listImg"></div>
        <div class="list-con">
          <h4 class="list-tit">{{item.title}}</h4>
          <div class="list-ul">
            <span class="list-add">{{item.add}}</span>
            <span class="list-cost">{{item.cost}}</span>
            <span class="list-shop">{{item.shop}}</span>
          </div>
          <div class="list-price">
            <span class="money">&yen;</span>
            <span class="rate">{{item.price}}</span>
            <span class="start">起</span>
          </div>
          <div class="list-soldOut">
            已售{{item.soldOut}}
          </div>
        </div>
      </li>
    </ul>
   
    <div class="footer">
      <div class="pageBtn">
        <a href="#" class="pageBtn-left">上一页</a>
        <span class="pageBtn-num">1 / 21</span>
        <a href="#" class="pageBtn-right">下一页</a>
      </div>
      <div class="buy">去哪儿买票</div>
    </div>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'OneTour',

    data () {
      return {
        touristData: [],
        listInfo: [],
        flag: true
      }
    },

    methods: {

      getOneTOurData () {
        this.$http.get('/static/tour.json')
          .then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.tourist) {
          this.touristData = body.data.tourist
          this.listInfo = body.data.listDate
        }
      },

      handleTriangle () {
        if (this.flag) {
          this.$refs.hotContainer.style.display = 'none'
          this.flag = false
        } else {
          this.$refs.hotContainer.style.display = 'block'
          this.flag = true
        }
      }
    },

    created () {
      this.getOneTOurData()
    },

    mounted () {
      this.scroll = new BScroll(this.$refs.hotContainer)
    },

    watch: {
      listInfo: function () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
  }
</script>

<style scpoed>
	.header {
    display: flex;
    background: #05bad5;
    color: #fff;
  }
  .back {
    width: .64rem;
    line-height: .86rem;
    text-align: center;
    font-weight: bold;
    font-size: .36rem;
  }
  .search {
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
  }
  .search-ico{
    color:#ccc;
    padding:0 0.15rem;
  }
  .icon-shuaxin {
    color: #ccc;font-size: 0.26rem;padding:0 0.15rem;
  }
  .prompt {
    font-size: 0.26rem;color: #ccc;line-height: 0.6rem;
  }
  .city {
    padding-right:0.2rem;
    overflow: hidden;
    line-height: .86rem;
    text-align: left;
  }
  .tourist {
  	background: #e5e7e8;
  	position: relative;
  }
  .tourist-select {
  	line-height: .8rem;
  	text-indent: .2rem;
  	color: #212121;
  	font-size: .28rem;
  	border-bottom: 1px solid #ccc;
  }
  .selection {
  	font-size: .24rem;
  	padding-left: .1rem;
  	color: #212121;
  }
  .triangle {
  	display: block;
  	width: .8rem;
  	height: .8rem;
  	position: absolute;
  	right: 0;
  	top: 0;
  	line-height: .8rem;
  	text-align: center;
  	border-left: 1px solid #ccc;
  }
  .tourist-Date {
    float: left;
    padding: 0.04rem 0.08rem;
  }
  .tourist-Size {
    display: block;
    padding: 0 .22rem;
    min-width: .26rem;
    background: white;
    color: #212121;
    line-height: .56rem;
    font-size: .26rem;
  }
  .tourist-Area {
    padding: .08rem .12rem;
    background: #e5e7e8;
    height: 5rem;
    overflow: hidden;
    position: absolute;
    top: 0.81rem;
    left: 0;
  }
  .tourist-show {
    overflow: hidden;
    height: auto;
    width: 100%;
    /*position: absolute;*/
  }
  .list {
    display: flex;
    flex-direction: column;
  }
  .list-data {
    display: flex;
    height: 2rem;
    box-sizing: border-box;
    padding: .2rem;
  }
  .list-img {
    width: 1.6rem;
    margin-right: .2rem;
  }
  .list-size {
    height: 100%;
  }
  .list-con {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
  }
  .list-tit {
    line-height: .36rem;
    font-size: .3rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .list-ul {
    display: flex;
    padding-top:.06rem;
    line-height: .24rem; 
  }
  .list-add {
    color: #00bcd4;
    padding: 0 .1rem;
    font-size: .24rem;
  }
  .list-cost {
    color: #616161;
    padding: 0 .1rem;
    font-size: .24rem;
  }
  .list-shop {
    color: #616161;
    font-size: .24rem;
    padding: 0 .1rem;
  }
  .list-price {
    text-align: right;
  }
  .money {
    color: #ff8300;
    font-size: .22rem;
    font-weight: bold;
  }
  .rate {
    font-size: .32rem;
    color: #ff8300;
    padding-left: .04rem;
  }
  .start {
    font-size: .24rem;
    padding-left: .02rem;
    color: #9e9e9e;
  }
  .list-soldOut {
    color: #9e9e9e;
    font-size: .22rem;
  }
  .footer {
    display: flex;
    flex-direction: column;
    margin: .2rem 0;
  }
  .pageBtn {
    margin: 0 auto;
    height: .7rem;
    line-height: .7rem;
  }
  .pageBtn-left {
    display: inline-block;
    width: 1.4rem;
    line-height: .6rem;
    border-radius: .06rem;
    background: #bdbdbd;
    color: #fff;
    text-align: center;
  }
  .pageBtn-right {
    display: inline-block;
    width: 1.4rem;
    line-height: .6rem;
    border-radius: .06rem;
    background: #fff;
    color: #00afc7;
    text-align: center;
    border: .02rem solid #00afc7;
  }
  .pageBtn-num {
    color: #212121;
    line-height: .6rem;
    padding: 0 .3rem;
  }
  .buy {
    padding-top: .2rem;
    line-height: .3rem;
    font-size: .3rem;
    color: #00afc7;
    text-align: center;
  }
</style>