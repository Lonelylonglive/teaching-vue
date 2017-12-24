<template>
  <div>
    <qunar-title></qunar-title>
    <div class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="nowAcount">银联立减</div>
      <div class="indexPage">
        <p class="iconfont">&#xe608;</p>
        <p>首页</p>
      </div>
    </div>
    <div class="acountCon">
      <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2578unionpay11/banner.jpg" alt="">
      <div class="instruction">
        <p>用户在去哪儿网APP购买门票产品时，通过62开头银联卡支付完成订单交易，可享立减10元优惠</p>
      </div>
    </div>
    <div class="rule">
      <div class="ruleTitle">活动规则</div>
      <div class="ruleCon">
        <li v-for="item in ruleInfo" :key="item.id">{{item.textCon}}</li>
      </div>
    </div>
    <div class="entrance-list">
      <li v-for="item in entranceInfo" :key="item.id"><img :src="item.imgURl" alt=""></li>
    </div>
  </div>
</template>
<script>
import QunarTitle from './qunar'
export default {
  name: 'Acount',
  components: {
    QunarTitle
  },
  data () {
    return {
      entranceInfo: [],
      ruleInfo: []
    }
  },
  methods: {
    getIndexData () {
      this.$http.get('/static/disacount.json')
        .then(this.handleAjaxSucc.bind(this))
    },
    handleAjaxSucc (res) {
      var body = res.body
      if (body.data && body && body.data.entrance) {
        this.entranceInfo = body.data.entrance
        this.ruleInfo = body.data.ruleCon
      }
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>
<style scoped>
  .header{
    display: flex;
    height: .66rem;
  }
  .back{
    width: .65rem;
    height: .65rem;
    text-align: center;
    line-height: .65rem;
    color: #606060!important;
  }
  .nowAcount{
    flex: 1;
    line-height: .65rem;
    text-align: center;
  }
  .indexPage{
    width: .68rem;
    height: .65rem;
    text-align: center;
  }
  .indexPage p:last-child{
    font-size: .14rem;
    color: #616161;
    white-space: nowrap;
    overflow: hidden;text-overflow: ellipsis;
  }
  .acountCon{
    background: #fc8600;
    position: relative;
  }
  .acountCon img{
    width: 100%;
  }
  .instruction{
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center; 
  }
  .instruction p{
    width: 75%;
    height: .84rem;
    font-size: .16rem;
    color: #b37700;
    padding: .1rem .1rem 0 .2rem;
    background: #ffcc00;
    border-radius: .1rem;
  }
  .rule{
    background: #fc8600;
  }
  .ruleTitle{
    line-height: .76rem;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .ruleCon{
    padding: 0 8% 0 8%;
  }
  .ruleCon li{
    list-style: none;
    font-size: .28rem;
    line-height: .48rem;
    text-align: justify;
    color: #fff;
  }
  .entrance-list{
    background: #fc8600;
  }
  .entrance-list li{
    list-style: none;
    padding: 0.3rem .3rem .1rem .3rem;
  }
  .entrance-list li img{
    width: 100%;
  }
</style>