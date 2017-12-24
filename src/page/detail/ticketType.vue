<template>
  <div>
  	<div class="ticket-type" v-for="item in mainview.ticketType" :key="item.id">
      <h3 class="ticket-title">
        <em class="ticket-icon"></em>
        <span class="ticket-txt">{{item.groups}}</span>
      </h3>
      <div class="ticket-times border-top" v-for="(timesitem, value) in item.times">
        <p class="times">{{timesitem.timesname}}<span class="attention">{{timesitem.attention}}</span></p>
        <div class="ticket-price">
          <em>&yen;</em>
          <span class="ticket-num">{{timesitem.lowerprice}}</span>
          <i>起</i>
          <b class="back iconfont">&#xe6a6;</b>
        </div>
      </div>
      <div class="morepro border-top" @click="extend" v-if="item.show">
        <p>查看更多产品<i class="back iconfont">&#xe6a6;</i></p>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
  props: ['mainview'],
  data () {
    return {
      show: true,
      count: 0
    }
  },
  methods: {
    extend (e) {
      e.target.style.background = 'red'
    }
  }
	}
</script>

<style scoped>
  .ticket-type {
    background: #fff;
    margin-top: .2rem;
  }
  .ticket-title {
    display: flex;
    padding: 0 .2rem;
    height: .88rem;
  }
  .ticket-txt {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: .88rem;
    color: #333;
    font-size: .32rem;
  }
  .ticket-icon {
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(../../../static/img/detail.png) 0 -.44rem no-repeat;
    margin:.26rem .05rem; 
    background-size: .4rem 3rem;
  }
  .ticket-times {
    display: flex;
    justify-content: space-between;
    padding: .24rem .2rem;
    border-color: red;
  }
  .ticket-times::before {
    border-color: #ccc;
  }
  .times {
    flex: 4;
    color: #333;
    font-size: .3rem;
    line-height: .48rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .attention {
    font-size: .24rem;
    color: #888;
    line-height: .32rem;
    margin-left: .1rem;
  }

  .ticket-price {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: .4rem;
    text-align: center;
    margin-bottom: .1rem;
    color: #ff9800;
  }
  .ticket-price em{
    display: inline-block;
    height: .4rem;
    text-align: center;
  }
  .ticket-price i{
    height: .4rem;
    display: inline-block;
    color: #9e9e9e;
    font-size: .24rem;
  }
  .ticket-num {
    display: inline-block;
    height: .4rem;
    margin-left: .04rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 1.6rem;
  }
  .morepro {
    position: relative;
    margin-top: -.02rem;
    height: .8rem;
    color: #616161;
    line-height: .8rem;
    text-align: center;
  }
  .morepro::before {
    border-color: #ccc;
  }
</style>