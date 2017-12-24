<template>
  <div>
    <header class="header" >
      <router-link to="/" class="area iconfont back">&#xe720;</router-link>
      <h2 class="classify">
        <div class="classify-box">
          <span class="inload" @click="handleInlandBtn" :class='[{inloadColor:!inlandFlag}]'>国内</span><span class="foreign" @click="handleForeignBtn" :class='[{foreignColor:foreignFlag}]'>海外</span>
        </div>
      </h2>
    </header>
    
 
    <inland :hotCity="inlandHotCity" :allCity="inlandAllCity" v-if="inlandFlag"></inland>

    <Foreign :hotCity="foreignHotCity" :allCity="foreignAllCity" v-if="foreignFlag"></Foreign>

  </div>
</template>

<script>
  import Inland from './inland'
  import Foreign from './foreign'

  export default {
    created () {
      this.getCityData()
    },
    components: {
      Inland,
      Foreign
    },
    data () {
      return {
        inlandHotCity: [],
        inlandAllCity: [],
        foreignHotCity: [],
        foreignAllCity: [],
        inlandFlag: true,
        foreignFlag: false
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
          this.inlandHotCity = body.data.inland.hotCity
          this.inlandAllCity = body.data.inland.allCity
          this.foreignHotCity = body.data.foreign.hotCity
          this.foreignAllCity = body.data.foreign.allCity
        }
      },
      handleInlandBtn () {
        this.inlandFlag = true
        this.foreignFlag = false
      },
      handleForeignBtn () {
        this.inlandFlag = false
        this.foreignFlag = true
      }
    }
  }
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: .88rem;
    background: #00afc7;
    color: #fff;
    display: flex;
  }
  .back {
    position: absolute;
    width: .8rem;
    float: left;
    padding: 0 .1rem;
    line-height: .88rem;
    font-size: .5rem;
    color: #fff;
  }
  .classify {
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    height: .88rem;
    flex: 1;
  }
  .classify-box {
    display: flex;
    justify-content: center;
    width: 4.08rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    background: #fff;
    border-radius: .1rem;
  }
  .inload {
    width: 50%;
    color: #00afc7;
    background: #fff;
    border: 1px solid #fff;
    border-radius: .1rem 0 0 .1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .foreign {
    width: 50%;
    border: 1px solid #fff;
    border-radius: 0 .1rem .1rem 0;
    background: #00afc7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .foreignColor {
    background: #fff;
    color: #00afc7;
  } 
  .inloadColor {
    background: #00afc7;
    color: #fff;
  } 
  .search {
    display: flex;
    height: .72rem;
    background: #00afc7;
    padding: 0 .1rem;
    margin-top: .88rem;
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
  .search-container {
    position: absolute;
    top: 1.6rem;
    height: 100%;
    width: 100%;
    background: #fff;
  }
  .search-list {
    height: .6rem;
    padding-left: .2rem;
    line-height: .6rem;
    border-bottom: 1px solid #ccc;
  }
</style>