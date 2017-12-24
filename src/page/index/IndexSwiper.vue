<template>
	<swiper :options="swiperOption" class="swiper-img-con">
    <swiper-slide v-for="item in swiperInfo" :key="item.id">
      <router-link class="swiper-img-con" to="/disacount">
        <img  class="swiper-img" :src="item.imgUrl"/>
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
	export default {
	  props: ['swiperInfo'],
	  data () {
	    return {
	      swiperOption: {
	        loop: true,
	        autoplay: 3000,
	        pagination: '.swiper-pagination'
	      }
	    }
	  }
}
</script>

<style scoped>
	.swiper-img-con {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
  }
  .swiper-img {
    width: 100%;
  }
</style>