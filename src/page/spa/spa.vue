<template>

	<div>
		<div class="download-client-container-background" ref="closeBackground"></div>
		<div class="download-client-container" ref="closeDownloadClient">
			<div class="quna-logo-container">
				<img :src="quNaLogoUrl" alt="" class="logo">
			</div>
			<div class="download-client-center">
				<div class="tour-where">去哪儿旅行</div>
				<div class="clever-choise">
					超过<span>4.6亿</span>人的聪明选择
				</div>
			</div>
			<div class="download-client-jump-link" @click="handleDownloadClientJumpLink">下载客户端</div>
			<div class="close-download-client-btn" @click="hancleCloseDownloadClient">
				<img :src="closeDownloadClientBtn" class="close-img">
			</div>
		</div>

		<div class="back-top iconfont" @click="handleBackUp">&#xe656;</div>

		<div class="content clearfix">
			<header>
				<a href="javascript:;" class="header-back iconfont" @click="handleBack">&#xe624;</a>
				<h1 class="spa-title hidden-single-line-text">{{spaHeaderTitle}}</h1>
				<a href="javascript:;" class="home-page-jump">
					<span class="iconfont">&#xe611;</span>
					<i class="hidden-single-line-text" @click="handleGoHomePage">首页</i>
				</a>
			</header>
			<div id="banner">
				<div class="banner-img-container">
					<img :src="bannerImgUrl" alt="" class="banner-img">
				</div>
				<div class="banner-detail clearfix">
          <h2 class="banner-title">
						<span class="transverse-line-banner transverse-line-banner-title-left"></span>
						<span>★</span>
						<i class="hidden-single-line-text">{{startFiveDiscount}}</i>
						<span>★</span>
						<span class="transverse-line-banner transverse-line-banner-title-right"></span>
					</h2>
					<p class="hidden-single-line-text">{{detailedChoiseListspaList}}</p>
				</div>
			</div>
			<div id="coupon">
				<div class="coupon-con">
					<div class="coupon-price-container">&#165;<span class="coupon-price">{{couponPrice}}</span></div>
					<div class="coupon-info">
						<div class="coupon-name hidden-single-line-text">{{couponName}}</div>
						<div class="new-customer-coupon hidden-single-line-text">{{newCustomerCoupon}}</div>
					</div>
					<div class="get-coupon-now">{{getCouponNow}}</div>
				</div>
			</div>

			<div id="container-self-con">
				<div class="life-guide-container">
					<ul class="life-guide clearfix">
						<li class="hidden-single-line-text" v-for="item in lifeGuideInfo" :key="item.id">
							{{item.content}}
						</li>
					</ul>
				</div>
<!-- 超值温泉 -->
				<div class="senior-value-spa-container clearfix">
					<h3 class="senior-value-spa-caption">
						<span class="transverse-line-spas transverse-line-senior-value-spa-left"></span>
						<i>{{seniorValueSpaTitle}}</i>
						<span class="transverse-line-spas transverse-line-senior-value-spa-right"></span>
					</h3>
					<p class="spa-text">{{seniorValueSpatText}}</p>
					<ul class="senior-value-spa-show clearfix">
						<li class="clearfix" v-for="item in seniorValueSpaShowList" :key="item.id">
							<a href="javascript:;">
								<div class="senior-value-spa-show-img-container">
									<img class="senior-value-spa-show-img" :src="item.seniorValueSpaShowImg" alt="">
									<span class="spa-location hidden-single-line-text">{{location}}</span>
								</div>
								<div class="senior-value-spa-info">
									<div class="senior-value-spa-name">{{item.seniorValueSpaShowInfo}}</div>
									<ul class="clearfix"><li class="add-spa-title-font-color-orange">{{item.FirstseniorValueSpaFeatures}}</li><li class="add-spa-title-font-color-deepblue">{{item.SecondSeniorValueSpaFeatures}}</li></ul>
									<ul class="clearfix"><li>&#165;<span>{{item.seniorValueSpaPrice}}</span></li><li>{{item.seniorValueSpaParPrice}}</li><li>马上抢</li></ul>
								</div>
							</a>
						</li>
					</ul>
				</div>
<!-- 山水温泉 -->
				<div id="mountain-river-spa-container">
					<h3 class="senior-value-spa-caption">
						<span class="transverse-line-spas transverse-line-senior-value-spa-left"></span>
						<i>{{spaMountainTitle}}</i>
						<span class="transverse-line-spas transverse-line-senior-value-spa-right"></span>
					</h3>
					<ul class="spa-mountain-tag-list-container clearfix">
						<li class="spa-mountain-tag-list-con" v-for="item in spaMountainTagList" :key="item.id">{{item.spaMountainTagName}}</li>
					</ul>
					<p class="spa-text">{{spaMountainText}}</p>
					<a class="mountain-river-spa-link clearfix" href="javascript:;" v-for="item in spaMountain" :key="item.id">
						<dl>
							<dt class="mountain-river-spa-img-container">
								<img class="mountain-river-spa-img" :src="item.spaImgUrl" alt="">
								<span class="spa-location hidden-single-line-text">{{location}}</span>
							</dt>
							<dt class="mountain-river-spa-name">{{item.spaName}}</dt>
							<dd class="mountain-river-spa-trait">
								<span class="add-spa-title-font-color-orange">私场</span>
								<span class="add-spa-title-font-color-deepblue">景色优美</span>
								<span class="add-spa-title-font-color-deepblue">SPA</span>
								<span class="iconfont add-spa-title-font-color-orange RMB-symbol">
									&#165;
									<i class="mountain-river-spa-price">{{item.spaPrice}}</i>
								</span>
							</dd>
							<dd class="mountain-river-spa-evaluate">{{item.spaEvaluate}}</dd>
						</dl>
					</a>
				</div>
<!-- 养生温泉 -->
				<div id="raise-health-spa-container">
					<h3 class="senior-value-spa-caption raise-health-spa-caption">
						<span class="transverse-line-spas transverse-line-senior-value-spa-left"></span>
						<i>{{spaRaiseHealthTitle}}</i>
						<span class="transverse-line-spas transverse-line-senior-value-spa-right"></span>
					</h3>
					<ul class="spa-mountain-tag-list-container clearfix">
						<li class="spa-mountain-tag-list-con" v-for="item in spaRaiseHealthTagList" :key="item.id">{{item.spaRaiseHealthTagName}}</li>
					</ul>
					<p class="spa-text">{{spaRaiseHealthText}}</p>
					<a class="mountain-river-spa-link clearfix" href="javascript:;" v-for="item in spaMountain" :key="item.id">
						<dl>
							<dt class="mountain-river-spa-img-container">
								<img class="mountain-river-spa-img" :src="item.spaImgUrl" alt="">
								<span class="spa-location hidden-single-line-text">{{location}}</span>
							</dt>
							<dt class="mountain-river-spa-name">{{item.spaName}}</dt>
							<dd class="mountain-river-spa-trait">
								<span class="add-spa-title-font-color-orange">私场</span>
								<span class="add-spa-title-font-color-deepblue">景色优美</span>
								<span class="add-spa-title-font-color-deepblue">SPA</span>
								<span class="iconfont add-spa-title-font-color-orange RMB-symbol">
									&#165;
									<i class="mountain-river-spa-price">{{item.spaPrice}}</i>
								</span>
							</dd>
							<dd class="mountain-river-spa-evaluate">{{item.spaEvaluate}}</dd>
						</dl>
					</a>
				</div>
<!-- 亲子温泉 -->
				<div id="raise-health-spa-container">
					<h3 class="senior-value-spa-caption raise-health-spa-caption">
						<span class="transverse-line-spas transverse-line-senior-value-spa-left"></span>
						<i>{{spaParentsChildTitle}}</i>
						<span class="transverse-line-spas transverse-line-senior-value-spa-right"></span>
					</h3>
					<ul class="spa-mountain-tag-list-container clearfix">
						<li class="spa-mountain-tag-list-con" v-for="item in spaParentsChildTagList" :key="item.id">{{item.spaParentsChildTagName}}</li>
					</ul>
					<p class="spa-text">{{spaParentsChildText}}</p>
					<a class="mountain-river-spa-link clearfix" href="javascript:;" v-for="item in spaParentsChild" :key="item.id">
						<dl>
							<dt class="mountain-river-spa-img-container">
								<img class="mountain-river-spa-img" :src="item.spaImgUrl" alt="">
								<span class="spa-location hidden-single-line-text">{{location}}</span>
							</dt>
							<dt class="mountain-river-spa-name">{{item.spaName}}</dt>
							<dd class="mountain-river-spa-trait">
								<span class="add-spa-title-font-color-orange" v-for="content in item.features">
									{{content}}
								</span>
								<span class="iconfont add-spa-title-font-color-orange RMB-symbol">
									&#165;
									<i class="mountain-river-spa-price">{{item.spaPrice}}</i>
								</span>
							</dd>
							<dd class="mountain-river-spa-evaluate">{{item.spaEvaluate}}</dd>
						</dl>
					</a>
				</div>

<!-- 省心一日游 -->
				<div id="raise-health-spa-container">
					<h3 class="senior-value-spa-caption raise-health-spa-caption">
						<span class="transverse-line-spas transverse-line-senior-value-spa-left"></span>
						<i>{{oneDayTour}}</i>
						<span class="transverse-line-spas transverse-line-senior-value-spa-right"></span>
					</h3>
					<ul class="spa-mountain-tag-list-container clearfix">
						<li class="spa-mountain-tag-list-con" v-for="itemcon in oneDayTourTagList" :key="itemcon.id">{{itemcon.oneDayTourTagListName}}</li>
					</ul>
					<p class="spa-text">{{spaParentsChildText}}</p>
					<ul class="one-day-tour-info-container clearfix">
						<li class="clearfix" v-for="oneDayTour in oneDayTourInfo" :key="oneDayTour.id">
								<div class="one-day-tour-info-img-container">
									<img class="one-day-tour-info-img" :src="oneDayTour.spaImgUrl">
									<span class="spa-location hidden-single-line-text">{{location}}出发</span>
								</div>
								<div class="one-day-tour-info-show clearfix">
									<p class="one-day-tour-info-show-text clearfix">古北水镇+段家温泉一日游【享长城脚下温泉、赏水镇魅力夜色】</p>
									<div class="one-day-tour-info-introduce">
										<span class="one-day-tour-price-container">&#165;<i class="one-day-tour-price">158</i></span>
										起
										<span class="one-day-tour-more">查看&gt;</span>
									</div>
								</div>
						</li>
					</ul>
				</div>

<!-- 查看更多 -->
				<div id="see-more" class="clearfix">
					<a href="javascript:;" class="hidden-single-line-text">
						{{seeMoreUp.seeMoreTitle}}
					</a>
					<h4 class="spa-tips hidden-single-line-text">{{seeMoreUp.seeMoreSpaTips}}</h4>
					<div class="enjoy-spa clearfix" v-for="seeMoreInfo in seeMore" :key="seeMoreInfo.id">
						<h5>
							<span class="enjoy-spa-title-left transverse-line-enjoy-spa"></span>
							<span>
								{{seeMoreInfo.enjoySpa}}
							</span>
							<span class="enjoy-spa-title-right transverse-line-enjoy-spa"></span>
						</h5>
						<ul class="enjoy-spa-method clearfix">
							<li v-for="item in seeMoreInfo.enjoyText1">
								{{item.con}}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Spa',
  data () {
    return {
      'quNaLogoUrl': '',
      'closeDownloadClientBtn': '',
      'spaHeaderTitle': '',
      'bannerImgUrl': '',
      'startFiveDiscount': '',
      'detailedChoiseListspaList': '',
      'couponPrice': '',
      'couponName': '',
      'newCustomerCoupon': '',
      'getCouponNow': '',
      'lifeGuideInfo': [],
      'location': '',
      'seniorValueSpaShowList': [],
      'seniorValueSpaTitle': '',
      'seniorValueSpatText': '',
      'spaMountainTitle': '',
      'spaMountainTagList': [],
      'spaMountainText': '',
      'spaMountain': [],
      'spaRaiseHealthTitle': '',
      'spaRaiseHealthText': '',
      'spaRaiseHealthTagList': [],
      'spaParentsChildTitle': '',
      'spaParentsChildText': '',
      'spaParentsChildTagList': [],
      'spaParentsChild': [],
      'oneDayTour': '',
      'oneDayTourTagList': [],
      'oneDayTourInfo': [],
      'seeMoreUp': '',
      'seeMore': []
    }
  },
  methods: {
    getData () {
      this.$http.get('/static/spa.json').then(this.handleGetDataSucc.bind(this))
    },
    hancleCloseDownloadClient () {
      this.$refs.closeBackground.style.display = 'none'
      this.$refs.closeDownloadClient.style.display = 'none'
    },
    handleDownloadClientJumpLink () {
      const u = navigator.userAgent
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isAndroid) {
        location.href = 'https://touch.qunar.com/h5/download?bd_source=qunar'
        return
      }
      if (isiOS) {
        location.href = 'https://itunes.apple.com/cn/app/id395096736'
      }
    },
    handleBackUp () {
      window.scrollTo(0, 0)
    },
    handleBack () {
      history.go(-1)
    },
    handleGoHomePage () {
      location.href = 'index'
    },
    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.spaHeaderTitle) {
        this.quNaLogoUrl = body.data.quNaLogoUrl
        this.closeDownloadClientBtn = body.data.closeDownloadClientBtn
        this.bannerImgUrl = body.data.bannerImgUrl
        this.spaHeaderTitle = body.data.spaHeaderTitle
        this.startFiveDiscount = body.data.startFiveDiscount
        this.detailedChoiseListspaList = body.data.detailedChoiseListspaList
        this.couponPrice = body.data.couponPrice
        this.couponName = body.data.couponName
        this.newCustomerCoupon = body.data.newCustomerCoupon
        this.getCouponNow = body.data.getCouponNow
        this.lifeGuideInfo = body.data.lifeGuideInfo
        this.location = body.data.location
        this.seniorValueSpaShowList = body.data.seniorValueSpaShowList
        this.seniorValueSpaTitle = body.data.seniorValueSpaTitle
        this.seniorValueSpatText = body.data.seniorValueSpatText
        this.spaMountainTitle = body.data.spaMountainTitle
        this.spaMountainTagList = body.data.spaMountainTagList
        this.spaMountainText = body.data.spaMountainText
        this.spaMountain = body.data.spaMountain
        this.spaRaiseHealthTitle = body.data.spaRaiseHealthTitle
        this.spaRaiseHealthText = body.data.spaRaiseHealthText
        this.spaRaiseHealthTagList = body.data.spaRaiseHealthTagList
        this.spaParentsChildTitle = body.data.spaParentsChildTitle
        this.spaParentsChildText = body.data.spaParentsChildText
        this.spaParentsChildTagList = body.data.spaParentsChildTagList
        this.spaParentsChild = body.data.spaParentsChild
        this.oneDayTour = body.data.oneDayTour
        this.oneDayTourTagList = body.data.oneDayTourTagList
        this.oneDayTourInfo = body.data.oneDayTourInfo
        this.seeMoreUp = body.data.seeMoreUp
        this.seeMore = body.data.seeMore
        console.log(this.seeMoreUp)
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>
	h3{
		padding-top: .4rem;
	}
	.back-top {
		display: block;
		width: .9rem;
		height: .9rem;
		position: fixed;
		right: .2rem;
		bottom: .2rem;
		border-radius: .5rem;
		z-index: 999999999999999;
		background: rgba(0,0,0,.6);
		color: #fff;
		text-align: center;
		line-height: .9rem;
		font-size: .6rem;
	}
	.download-client-container {
		display: flex;
		height: .8rem;
		position: relative;
		padding: .2rem 0;
		background: rgba(0,0,0,0.2);
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: 0 auto;
		z-index: 99999999;
	}
	.download-client-container-background {
		width: 100%;
		height: .8rem;
		padding: .2rem 0;
		z-index: 1;
		background: #000;
	}
	.quna-logo-container {
		width: 1.2rem;
		text-align: center;
		z-index: 2;
	}
	.logo {
		width: .8rem;
	}
	.download-client-center {
		z-index: 2;
	}
	.tour-where {
		font-size: .44rem;
		color: #25A4BB;
		font-weight: 700;
    line-height: .44rem;
	}
	.clever-choise {
		font-size: .24rem;
		color: #c4c4c4;
		line-height: .4rem;
	}
	.clever-choise>span {
		font-size: .28rem;
		color: #fab400;
		font-weight: 700;
	}
	.download-client-jump-link {
    width: 1.6rem;
    height: .72rem;
		border-radius: 5px;
    font-size: .28rem;
    line-height: .72rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
		background: #f4b000;
		z-index: 2;
		position: absolute;
		right: .9rem;
		top: .25rem;
	}
	.close-download-client-btn {
		width: .4rem;
		height: .4rem;
		position: absolute;
		right: .1rem;
		top: .1rem;
		z-index: 2;
	}
	.close-img {
		width: 100%;
	}

	.content {
		min-height: 1rem;
	}
	header {
		display: flex;
		text-align: center;
		background: #1ba9ba;
  }
		.header-back {
			width: .88rem;
	    height: .88rem;
	    line-height: .88rem;
	    font-size: .36rem;
	    line-height: .88rem;
	    text-align: center;
	    color: #fff;
		}
		.spa-title {
			line-height: .88rem;
			flex: 1;
	    font-size: .32rem;
	    font-weight: 100;
	    color: #fff;
		}
		.home-page-jump {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: .88rem;
			height: .88rem;
			color: #fff;
		}

	#banner {
		position: relative;
		background: #fff;
	}
		.banner-img-container {
			overflow: hidden;
			height: 0;
			padding-bottom: 56.4%;
			z-index: 9;
		}
			.banner-img {
				width: 100%;
			}
		.banner-detail {
			width: 3.54rem;
			min-height: .86rem;
			position: absolute;
			left: 26%;
			top: 45%;
			font-size: .32rem;
			color: #fff;
			z-index: 9;
		}
			.banner-title {
				display: flex;
				justify-content: center;
				height: 0.5rem;
				line-height: 0.5rem;
				text-align: center;
				
			}
				.banner-title>i {
					width: 100%;
				}
				.transverse-line-banner {
					display: inline-block;
					width: 45%;
					height: 1px;
					margin-top: 7%;
				}
				.transverse-line-banner-title-left {
					background: linear-gradient(to right,#000,#fff);
				}
				.transverse-line-banner-title-right {
					background: linear-gradient(to right,#fff,#000);
				}
		.banner-detail>p {
	    line-height: .6rem;
			font-size: .44rem;
			text-align: center;
		}
		#banner::after {
	    width: 100%;
	    height: 100%;
			content: '';
	    position: absolute;
	    top: 0;
	    left: 0;
	    z-index: 1;
	    background: rgba(0,0,0,.5);
		}

	#coupon {
		height: 1.92rem;
		display: flex;
    margin-bottom: .2rem;
    background: #fff;
	}
		.coupon-con {
			display: flex;
			justify-content: space-between;
			width: 6.09rem;
			height: 1.6rem;
			margin: auto;
			position: relative;
			background: linear-gradient(to right,#ffd033,#ff5d11);
		}
		.coupon-con::before {
			content: '';
	    width: .3rem;
	    height: .3rem;
	    position: absolute;
	    top: 43%;
	    right: -.14rem;
	    z-index: 10;
	    background: #fff;
	    border-radius: 50%;
		}
    	.coupon-price-container {
    		display: flex;
    		width: 25%;
		    height: 1.6rem;
		    font-size: .32rem;
		    line-height: 2.1rem;
		    text-align: right;
		    color: #fff;
		    justify-content: flex-end;
    	}
    		.coupon-price {
    			float: right;
    			max-width: 76%;
    			font-size: 1rem;
    			font-weight: 400;
    			margin-left: .1rem;
    			overflow: hidden;
    		}
    	.coupon-info {
    		max-width: 50%;
    		color: #fff;
    	}
    		.coupon-name {
    			width: 100%;
    			padding-top: .36rem;
			    font-size: .36rem;
			    line-height: .5rem;
			    text-align: center;
    		}
    		.new-customer-coupon {
					width: 100%;
    	    font-size: .24rem;
    			line-height: .34rem;
 			    text-align: center;
    		}
    	.get-coupon-now {
    		width: .28rem;
		    padding: .2rem .4rem;
		    border-left: .02rem dotted rgba(255,255,255,.5);
		    font-size: .28rem;
		    line-height: .3rem;
		    text-align: center;
    		}

#container-self-con {
  margin: .2rem 0;
  padding: .2rem;
}
  .life-guide-container {
  	min-height: 1.88rem;
  	overflow: hidden;
  }
  	.life-guide {
  		min-height: 1rem;
	    margin: .2rem .4rem .3rem;
  	}
  	.life-guide li {
	    width: 30%;
	    height: .64rem;
  		float: left;
  		border: 1px solid #000;
	    font-size: .28rem;
	    line-height: .64rem;
	    text-align: center;
	    color: #212121;
      margin: .1rem .08rem .1rem .08rem;
  	}
  	li.add-life-guide-color {
  		color: #fa0;
  		border-color: #fa0;
  	}

  .senior-value-spa-container {
  	min-height: 1rem;
  	display: flex;
  	flex-direction: column;
  	justify-content: flex-start;
  	background: #fff;
  	margin: .2rem 0;
  }
  	.senior-value-spa-caption,.raise-health-spa-caption {
  		display: flex;
  		justify-content: center;
  		width: 100%;
  		height: .5rem;
  		margin: 0 auto;
  		position: relative;
  		overflow: hidden;
  	}
  		.transverse-line-spas {
  			display: inline-block;
  			width: 15%;
  			height: 2px;
  			margin-top: 3%;
  		}
  		.transverse-line-senior-value-spa-left {
  			background: linear-gradient(to right,#ffa305,#ff431d);
  		}
  		.transverse-line-senior-value-spa-right {
  			background: linear-gradient(to right,#ff431d,#ffa305);
  		}
  	.senior-value-spa-caption i,.raise-health-spa-caption i {
  		max-width: 1.8rem;
  		line-height: .45rem;
  		margin: 0 .1rem;
  		display: inline-block;
	    color: #ff431d;
	    background-image: linear-gradient(left,#ffa305,rgb(255, 67, 29));
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
  	}
  	.spa-text {
	    min-height: .4rem;
	    line-height: .4rem;
  		margin: .1rem 0;
	    padding: 0 .52rem;
	    color: #616161;
	    font-size: .28rem;
	    text-align: justify;
	    position: relative;
	    overflow: hidden;
  	}
  	.spa-text::before {
	    width: .32rem;
	    height: .24rem;
	    content: '';
	    overflow: hidden;
	    position: absolute;
  	  left: .12rem;
      top: 0;
	    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAAXNSR0IArs4c6QAAA35JREFUSA21lktIVGEUx3VeGBW0E1NnLAqjpMemVVDQokSFwl6rokVBpItWYRDYA1q0iSTClhb0oIiUMsJND8hFC6WwVuU4jo0OaQ0OjqYz/b7rnOs339yrM4suXM7rf875f897S0oKfIaHh1tGRkZOFwjPgY2NjQXD4XDXxMTEmpwAhs90mHYmk/FGIpFb6XS6BX0BEpPBYPCFiXOzyd09NzfXTbx8ZmZmPTUaSktLZwVfKoqTjMfja5PJ5GNi9Vo85fV6D1ZXV7/VfI4qoz5CoIumqwRA82cM4BgyrXweCZhyampqHc0/4NebK1jZwsJCdzQa3WXm6DZLdh77id5cxbGbmcW7gnUkAMiXSCSeAtouQF3Cfnp+ft6eRj2mdEbeCOY2ddxmeFJyHAnA8A7J+wWkSwp/J7YnFAoN6X7RWXNF+iEYx9rkXyK3TfB5IJpfIPmsAHRJ8hfVvKam5ofuF318fLyc5ekBk7fbyc2Aa6H5DcErmXMKYL+Z3X5TB2j6Vzbfvqqqql+aL0dNpVIdOII5ziXjHMQ7l8xFLWcGYH8F9l4TBPuI3+8/sFzz0dHRHeSpXe/0XGbkec0V0CbA1NfR6IRTNiM/XllZGXGKiQ/y1yCft+mo+ZKRXxecKW0CTP1VlwJvGPlHM1G31WVDbpPuEx0C7aI7SYtAdtrN8y54NTI/b0AcpiTWaPqy9isunU+xWGy1S3xxCVi/jQDKTBDsoxRv41wneRO878DuNHHM3jbTl7VTXEgxNuc0kvRwO/Vy9pi1Zqz/IYo8dyliulMQa2JT9UmA4t/Qa8VeQfaSq74H6ljam3DrCkl6WM3UPdbdut8ZkZ9im3TACno9Az4jGGsPMPo5cRQiabqBnIYsdh7b+rAUkpvFtArWIuDxeKLiKELWKWx2Kn8Wkac+SLVq5lSOzEB/MQWyWPvMQ2LZY+pS28q3CKi7nSLq01vww6wNCJjR3Be9QDlEP2vZLQIqidtOrcufAgv89vl8NmF2dS95jwrMLYF8j2BtAtx2AwTUbZaSoJuEfWtFRUVc4thpSJzEfi0+Nwn2M39T9tVsE1AJ3FrvARxFdTsVs8Qv0uyB2QD/30Ag0Iy0Z8bEYPcTP8xr/8zYG0kHc07Vz2Mr717AIWQYOQimg+aOPyKSD9bDbakutlPoW8jzIgeZ3T5G3old7JGV0v9H/gMBi4VsMbCCvAAAAABJRU5ErkJggg==') 0 0/contain no-repeat;
  	}
  	.spa-text::after {
	    width: .32rem;
	    height: .24rem;
	    content: '';
	    overflow: hidden;
	    position: absolute;
  	  right: .12rem;
      bottom: 0;
	    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAAAAXNSR0IArs4c6QAAA4dJREFUSA3FlktIVFEYx507I6NDomkOI+lotWhRaIuC3otahPhYKClkDwiSaBEF7XosWgathF5kUJvaVCoFikllBS2KWmRFQfhIEQ1NJx9T8+j33eZcjvdeG1t14PB93//7/7/v3DvnnDueDG309/cXGYZxLJlMbgBezRzCf+H3+68UFRWNa1RXd2BgYK/H49mDpiJF+Ii9VVpa2m0XeBRA0yZELYiWK0yz816vd19JScl9DbPcsbGx0Nzc3HW0VRaoOdTtCYfD1dh5BZuNWelugG6E1kIUQbNRn89XWVxc/FjDMtAYg4ODvdhtOm73adpB83psTHLGyMhIANGNNE2F64/FYu002SiBGkNDQyfSNRUunFq0raqPQTEpFFaF0ticRCLRqnMoVK/Hf/PhHqR5tXAMAtlI/zLKEa8XAVoDozbSUmscEKLBO/ctVaHxtqd8D829Gp7Whb9DSLLid2nZTsJKgVh0HPPBmV4cQROkeabBEXkK7dPiVNdMlkI599eUvxQrP8/4+LhfXnUU8RFE1hlLV4ANJheDOVj4VWr0qDidhfs1GAz+kFedwfnq5YxuAXzFTAiGfc38LL59wO1TGJwk+krii8zvgoPNMB+I7zJMrdlYklwMb7naNgUCgTxE+cxG4FUuwozs7Oz3Og73V1lZ2Sn0+dxwxSwkl1ca0TnKBzcbO3Z0YWGhKeAKlSdw5MFeFhQUTKtCumUBSeJhxlpZOE30tOmDd4pjPbHO4JyugWCeNx0XH/ycHbPHXEpnZBPZcbTP1QfDkZyYmMhl89xD6HhahL1KaC+qYu79ZrT7Vaxb9KdVvKAxgqxIJNJBslwRdIvwrB7bfe7tOrDLdlxitN2yiVXOasynbRmv+CHNd6qkbhG26EI9Jz5P2hCPx++gt2oqDtpv+EdVLNYkTU5O5s3OzspncZee1PxOmp7U4gUuCz4McJuZuSDxJ/hJ4zp+oi96zhgdHQ1OTU09AdysJ5SPqC8nJ6cRK9ejY/Ck8lmUPwGOJxUyumYW/cwuNKLR6AqSYXsiJRqhYM1ixyelqYDj+geCuud50puutQXkzG6F9IgC2RrpDZdBDVfisIY5XDQ+XvVdbK1KUivOPM6TXlKY3VorpXkV5DYphG3nD15TKBSasQvcYjRZNO/Cysac5u5voGmXG9cV4/c6xLxAAdffy1WUAuX8o21jrvsb77/nfgNkSHFAQThm0wAAAABJRU5ErkJggg==') 0 0/contain no-repeat
  	}
  	.senior-value-spa-show {
  		min-height: 1rem;
  	}
	  	.senior-value-spa-show>li {
	  		padding: .2rem 0;
	  	}
	  	.senior-value-spa-show>li a{
	  		display: flex;
	  		justify-content: flex-start;
	  	}
  			.senior-value-spa-show-img-container {
  				
			    width: 28.17%;
  				overflow: hidden;
			    height: 0;
			    padding-bottom: 25.83%;
			    position: relative;
  			}
  				.senior-value-spa-show-img {
  					width: 100%;
  				}
  				.spa-location {
				    max-width: 78%;
				    position: absolute;
				    top: .1rem;
				    left: .1rem;
				    padding: 0 .1rem;
				    background: rgba(0,0,0,.5);
				    color: #fff;
				    font-size: .24rem;
				    line-height: .44rem;
				    border-radius: .44rem;
  				}

  			.senior-value-spa-info {
  				width: 71%;
			    height: 1.8rem;
			    margin-left: .1rem;
  				position: relative;
  				overflow: hidden;
  			}
  				.senior-value-spa-name {
  					height: .76rem;
  					margin-right: .4rem;
				    font-size: .32rem;
				    line-height: .38rem;
				    font-weight: 400;
				    color: #212121;
				    text-align: left;
				    overflow: hidden;
  				}
  				.senior-value-spa-info ul {
				    margin-top: .04rem;
  				}
  				.senior-value-spa-info ul:nth-of-type(1) li {
  					float: left;
				    min-width: .48rem;
				    padding: 0 .14rem 0 0;
				    font-size: .24rem;
				    line-height: .34rem;
  				}
  				.senior-value-spa-info ul:nth-of-type(2) {
				    height: .44rem;
				    overflow: hidden;
				    margin-top: .2rem;
				    line-height: .44rem;
  				}
  				.senior-value-spa-info ul:nth-of-type(2) li{
  					float: left;
  				}
  				.senior-value-spa-info ul:nth-of-type(2) li:nth-child(1) {
  					color: #ff8300;
    				font-weight: 400;
  				}
  				.senior-value-spa-info ul:nth-of-type(2) li:nth-child(3) {
  					float: right;
  					width: 1.1rem;
				    line-height: .56rem;
				    border-radius: .04rem;
				    font-size: .28rem;
				    text-align: center;
				    color: #fff;
  					background: #ff8300;
  				}
  				.senior-value-spa-info ul:nth-of-type(2) li:nth-child(1)>span {
  					font-size: .4rem;
  					color: #ff8300;
    				font-weight: 400;
    				text-align: left;
  				}
  				.senior-value-spa-info ul:nth-of-type(2) li:nth-child(2) {
  					margin-left: .04rem;
				    font-size: .24rem;
    				font-weight: 400;
				    color: #616161;
    				text-decoration: line-through;
    				line-height: .6rem;
  				}
.add-spa-title-font-color-orange {
	color: #ff8300;
}
.add-spa-title-font-color-deepblue {
	color: #00afc7;
}

	.spa-mountain-tag-list-container {
		min-height: .46rem;
		margin: .2rem 0;
    padding: .2rem;
		text-align: center;
	}
		.spa-mountain-tag-list-container li {
			display: inline-block;
	    margin: .08rem;
	    padding: 0 .18rem;
	    font-size: .24rem;
	    line-height: .42rem;
	    color: #212121;
	    border: 1px solid #d0d;
		}

		#mountain-river-spa-container,.raise-health-spa-container {
			background: #fff;
		}
		.mountain-river-spa-img-container {
			width: 100%;
			height: 37.5vw;
			position: relative;
		}
			.mountain-river-spa-img {
				width: 100%;
			}
		.mountain-river-spa-link {
			display: block;
			min-height: 1rem;
			margin: .4rem 0;
		}
		.mountain-river-spa-name {
			margin-top: .2rem;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .38rem;
		}
		.mountain-river-spa-trait {
			margin: 0.1rem 0;
		}
			.mountain-river-spa-trait>span {
				margin-right: .3rem;
			}
			.RMB-symbol {
				font-size: .24rem;
				float: right;
				line-height: .4rem;
			}
			.mountain-river-spa-price {
				font-size: .4rem;
			}
		.mountain-river-spa-evaluate {
			padding: .1rem .2rem;
	    line-height: .34rem;
	    border-radius: .04rem;
	    font-size: .24rem;
	    color: #616161;
	    background: rgba(204,204,204,0.5);
		}
	.one-day-tour-info-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: auto;
		min-height: 1rem;
		padding-top: .2rem;
	}
		.one-day-tour-info-container>li {
			width: 48%;
			min-height: 1rem;
			margin-right: .13rem;
			border: 1px solid #ccc;
		}
		.one-day-tour-info-container>li:nth-child(2n) {
			margin-right: 0;
		}
			.one-day-tour-info-img-container {
				width: 100%;
				height: 15.1vh;
				position: relative;
			}
				.one-day-tour-info-img {
					width: 100%;
				}
			.one-day-tour-info-show {
				margin: .2rem .2rem 0;
				color: #333;
				font-weight: 400;
			}
				.one-day-tour-info-show-text {
					height: .76rem;
			    line-height: .38rem;
			    font-size: .28rem;
			    color: #212121;
			    overflow: hidden;
				}
				.one-day-tour-info-introduce {
					display: flex;
			    height: .8rem;
			    line-height: .8rem;
			    font-size: .24rem;
			    color: #9e9e9e;
			    overflow: hidden;
			    position: relative;
				}
					.one-day-tour-price-container {
						margin-right: .04rem;
				    color: #ff8300;
				    font-size: .24rem;
					}
						.one-day-tour-price {
							font-size: .4rem;
						}
					.one-day-tour-more {
				    position: absolute;
				    right: 0;
				    bottom: 0;
				    padding-right: .2rem;
				    line-height: .8rem;
				    font-size: .24rem;
				    color: #616161;
					}
	#see-more {
		min-height: 1rem;
		padding: .2rem .3rem;
		text-align: center;
	}
		#see-more>a {
			display: block;
	    width: 44.5%;
	    line-height: .6rem;
	    margin: .2rem auto;
	    border: .02rem solid #fa0;
	    font-size: .28rem;
	    color: #ff8a00;
	    text-align: center;
		}
			.spa-tips {
		    width: 1.7rem;
		    line-height: .6rem;
		    margin: .6rem auto 0;
		    color: #fff;
		    font-size: .28rem;
		    text-align: center;
				position: relative;
		    background: linear-gradient(to right,#ffa604,#ff441e);
			}
				.spa-tips:before {
					content: '';
			    overflow: hidden;
			    width: 0;
			    height: 0;
			    position: absolute;
					top: 0;
			    left: 0;
			    border-top: .12rem solid #fff;
			    border-right: .12rem solid transparent;
				}
				.spa-tips:after {
					content: '';
			    overflow: hidden;
			    width: 0;
			    height: 0;
			    position: absolute;
					right: 0;
			    bottom: 0;
			    border-top: .12rem solid transparent;
    			border-right: .12rem solid #fff;
				}
			.enjoy-spa {
				min-height: 1rem;
				overflow: hidden;
			}
				.enjoy-spa>h5 {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
			    line-height: .44rem;
			    margin-top: .4rem;
			    font-size: .32rem;
			    color: #212121;
			    text-align: center;
				}
					.enjoy-spa>h5>span {
						margin-right: .05rem;
					}
					.transverse-line-enjoy-spa {
						display: inline-block;
						width: 8%;
						height: 2px;
					}
					.enjoy-spa-title-right {
						background: #000;
					}
					.enjoy-spa-title-left {
						background: #000;
					}
				.enjoy-spa-method {
					min-height: 1rem;
				}
					.enjoy-spa-method>li {
						margin-top: .2rem;
						line-height: .4rem;
						font-size: .28rem;
						font-weight: 400;
						color: #616161;
						text-align: left;
					}
</style>