<template>
  <div>

    <header class="header">
      <div class="back iconfont">&#xe720;</div>
      <h1 class="headerTittle">故宫</h1>
    </header>
    <router-link to="/"> 
      <span class="header-back iconfont">&#xe624;</span>
    </router-link>
    <main class="main">

      <main-img :viewImg="viewImg" :mainview="mainview"></main-img>

      <main-baseinfo :mainview="mainview"></main-baseinfo>

      <main-comment></main-comment>

      <div class="main-announce">
        <i class="iconfont announce-icon">&#xe720;</i>
        <span class="announce-txt">{{mainview.announce}}</span>
        <i class="iconfont announce-icon">&#xe720;</i>
      </div>

      <div class="main-list">
        <recommend-list :mainview="mainview"></recommend-list>
        <ticket-type :mainview="mainview"></ticket-type>
      </div>

      <comment-container :mainview="mainview"></comment-container>

      <recommend-info :mainview="mainview"></recommend-info>
     

    </main>
  </div>
</template>

<script>
  import mainImg from './mainImg'
  import mainBaseinfo from './mainBaseinfo'
  import mainComment from './mainComment'
  import recommendList from './recommendList'
  import ticketType from './ticketType'
  import commentContainer from './commentContainer'
  import recommendInfo from './recommendInfo'
  export default {
    components: {
      mainImg,
      mainBaseinfo,
      mainComment,
      recommendList,
      ticketType,
      commentContainer,
      recommendInfo
    },
    data () {
      return {
        viewname: this.$route.params.id,
        place: [],
        viewImg: [],
        mainview: {}
      }
    },
    created () {
      this.getDetail()
    },
    methods: {
      getDetail () {
        this.$http.get('/static/detail.json').then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.place) {
          this.place = body.data.place
          this.place.forEach((value, index) => {
            if (value.key === this.$route.params.id) {
              this.mainview = value
              this.viewImg = this.mainview.imgUrl
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    height:0.88rem;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background: #05bad5;
    color: #fff;
    z-index: 100;
    opacity: 0;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: .8rem;
    line-height: .86rem;
    text-align: center;
    font-size: .5rem;
  }
  .header-back {
    position: absolute;
    display: block;
    width: .72rem;
    height: .72rem;
    background-color: rgba(0,0,0,0.5);
    border-radius: .36rem;
    z-index: 99999;
    left: .1rem;
    top: .1rem;
    line-height: .72rem;
    text-align: center;
    color: #fff;
  }
  .headerTittle {
    width: 100%;
    margin: 0 1rem;
    line-height: .88rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
  }
  
  
  
  
  .main-announce {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #fdeede;
    color: #f1441a;
    margin-bottom: .2rem;
    height: .88rem;
    line-height: .88rem;
    padding-left: .23rem;
  }
  .announce-txt {
    display: inline-block;   
    width: 6.4rem;
    color: #f67353;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
 
</style>