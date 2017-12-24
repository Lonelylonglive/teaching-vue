<template>
  <div>
    <div class="search">
      <input class="search-con" type="text" :placeholder="hint" ref="search" @focus="handleInputFocus" @blur="handleInputBlur" v-model="content">
    </div>

    <div class="search-container" v-if="searchFlag">
      <ul>
        <li class="search-list" v-for="(item,index) in getSearchData" :key="index">{{item.chinese}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['inlandAllCity'],
    data () {
      return {
        hint: '输入城市名或拼音',
        searchFlag: false,
        content: ''
      }
    },
    methods: {
      handleInputFocus () {
        this.hint = ''
        this.$refs.search.style.textAlign = 'left'
      },
      handleInputBlur () {
        this.$refs.search.style.textAlign = 'center'
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