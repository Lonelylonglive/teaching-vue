<template>
  <div>
    <div class="content">
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
    props: {
      hotCity: {
        type: Array
      },
      allCity: {
        type: Array
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
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