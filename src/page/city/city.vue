<template>
  <div>
    <header class="header" >
      <div>
        <router-link to="/" class="area iconfont back">&#xe720;</router-link>
      </div>
      <h2 class="classify">
        <div class="classify-box">
          <span class="inload" @click="handleInlandBtn" :class='[{inloadColor:!inlandFlag}]'>国内</span><span class="foreign" @click="handleForeignBtn" :class='[{foreignColor:foreignFlag}]'>海外</span>
        </div>
      </h2>
    </header>
    
    <div class="search">
      <input class="search-con" type="text" :placeholder="hint" ref="search" @focus="handleInputFocus" @blur="handleInputBlur" v-model="content">
    </div>

    <inland :hotCity="inlandHotCity" :allCity="inlandAllCity" v-if="inlandFlag"></inland>

    <Foreign :hotCity="foreignHotCity" :allCity="foreignAllCity" v-if="foreignFlag"></Foreign>

    <div class="search-container" v-if="searchFlag">
      <ul>
        <li class="search-list" v-for="(item,index) in getSearchData" :key="index">{{item.chinese}}</li>
      </ul>
    </div>
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
        hint: '输入城市名或拼音',
        inlandFlag: true,
        foreignFlag: false,
        searchFlag: false,
        content: ''
      }
    },
    computed: {
      getSearchData () {
        const SearchData = []
        this.inlandAllCity.forEach((value, index) => {
          value.cityList.forEach((value, index) => {
            let reg = new RegExp(this.content, 'g')
            if (reg.test(value.spell) || reg.test(value.chinese)) {
              SearchData.push(value)
            }
          })
        })
        return SearchData
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
      },
      handleInputFocus () {
        this.hint = ''
        this.$refs.search.style.textAlign = 'left'
      },
      handleInputBlur () {
        this.$refs.search.style.textAlign = 'center'
      }
    },
    watch: {
      content () {
        if (this.content) {
          this.searchFlag = true
        } else {
          this.searchFlag = false
        }
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
  }
  .back {
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