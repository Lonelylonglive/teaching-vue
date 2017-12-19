<template>
  <div>
    <header class="header" >
      <i class="iconfont back">&#xe720;</i>
      <h2 class="classify">
        <div class="classify-box">
          <span class="inland">国内</span><span class="foreign">海外</span>
        </div>
      </h2>
    </header>

    <div class="content">
      <div class="search">
        <input class="search-con" type="text" :placeholder="hint" ref="search" @focus="handleInputFocus" @blur="handleInputBlur">
      </div>
      
      <div class="place"><h3 class="title">您的位置</h3></div>
      <div class="my-place">
        <div class="position">北京</div>
      </div>
      
      <div class="hot-city"><h3 class="title">热门城市</h3></div>
      <div class="hot-city-list" >
        <div class="city-list" v-for="item in hotCity" :key="item.id">{{item.city}}</div>
      </div>
      
    </div>

    <div class="indexes-list">
      <div v-for="item in allCity" :key="item.id">
        <div class="indexes-title" >{{item.indexes}}</div>
        <ul class="indexes-con">
          <li class="indexes-con-list" v-for="(list,index) in item.cityList"  :key="index">{{list.chinese}}</li>
        </ul>
      </div>
    </div>

    <div class="indexes">
      <ul>
        <li class="indexes-item" v-for="(item,index) in allCity" :key="item.id">{{item.indexes}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    created () {
      this.getCityData()
    },
    data () {
      return {
        hotCity: [],
        allCity: [],
        hint: '输入城市名或拼音'
      }
    },
    methods: {
      getCityData () {
        this.$http.get('/static/city.json')
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data) {
          this.hotCity = body.data.hotCity
          this.allCity = body.data.allCity
        }
      },
      handleInputFocus () {
        this.hint = ''
        this.$refs.search.style.textAlign = 'left'
      },
      handleInputBlur () {
        this.$refs.search.style.textAlign = 'center'
      }
    }
  }
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: .88rem;
    background: #00afc7;
    color: #fff;
  }
  .back {
    width: .8rem;
    float: left;
    padding: 0 .1rem;
    line-height: .88rem;
    font-size: .5rem;
  }
  .classify {
    display: flex;
    align-items: center;
    float: left;
    height: .88rem;
  }
  .classify-box {
    display: flex;
    margin-left: .42rem;
    width: 4.08rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    background: #fff;
    border-radius: .1rem;
  }
  .inland {
    width: 50%;
    color: #00afc7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .foreign {
    width: 50%;
    border: 1px solid #fff;
    background: #00afc7;
    border-radius: 0 .1rem .1rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content {
    margin-top: .88rem;
  }
  .search {
    display: flex;
    height: .72rem;
    background: #00afc7;
    padding: 0 .1rem;
  }
  .search-con {
    flex: 1; 
    height: .62rem;
    background: #fff;
    margin-left: .1rem;
    padding-left: .2rem;
    border-radius: .1rem;
    border: 0;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .place {
    height: .54rem;
    padding-left: .3rem;
    border-bottom: 1px solid #dfdfdf;
  }
  .title {
    width: 100%;
    line-height: .54rem;
    color: #9a9a9a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .my-place {
    display: flex;
    align-items: center;
    height: 1.08rem;
    padding-left: .3rem;
    background: #fff;
  }
  .position {
    width: 1.7rem;
    height: .6rem;
    border: 1px solid #00afcd;
    border-radius: .1rem;
    line-height: .6rem;
    text-align: center;
    color: #00afcd;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hot-city {
    height: .54rem;
    padding-left: .3rem;
    border-bottom: 1px solid #dfdfdf;
    border-top: 1px solid #dfdfdf;
  }
  .hot-city-list {
    display: flex;
    flex-wrap: wrap; 
    padding:.24rem .1rem;
    background: #fff;
  }
  .city-list {
    width: 1.7rem;
    height: .6rem;
    margin: .2rem;
    border: 1px solid #cdcdcd;
    border-radius: .1rem;
    line-height: .6rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .indexes {
    position: fixed;
    top: 35%;
    right: 0;
    width: .32rem;
    color: #3db0b3;
  }
  .indexes-item{
    margin-top: .2rem;
  }
  .indexes-title {
    height: .54rem;
    padding-left: .3rem;
    border-bottom: 1px solid #dfdfdf;
    line-height: .54rem;
  }
  .indexes-con {
    background: #fff;
  }
  .indexes-con-list {
    height: .74rem;
    line-height: .74rem;
    padding-left: .2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #ccc;
  }
</style>