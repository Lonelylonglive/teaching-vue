<template>
	<div class="weekends">
    <h2 class="weekTittle">周末去哪儿</h2>
    <div v-for="(item, index) in getWeekends" :key="index" class="weekendsCon">
      <a href="javascript:;">
        <div class="pictureBox">
          <img :src="item.imgUrl" alt="" class="picture">
        </div>
        <div class="weekendsInco">
          <div class="placename">{{item.place}}</div>
          <div class="description">{{item.description}}</div>
        </div>
      </a>
    </div>
  </div>   
</template>

<script>
  export default {
    props: ['getWeekends']
  }
</script>

<style scoped>
	.weekendsCon {
    background: #fff;
  }
  .weekTittle {
    height: .8rem;
    width: 6rem;
    line-height: .8rem;
    color: #212121;
    padding-left: .26rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pictureBox {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 38%;
  }
  .picture {
    width: 100%;
  }
  .weekendsInco {
    padding: .14rem .2rem .2rem .2rem;
  }
  .placename {
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .description {
    overflow: hidden;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>