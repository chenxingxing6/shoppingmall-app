<template>
	<view class="content" style="padding-top: 0upx;">
		<jshop :data="pageData"></jshop>
		<jihaiCopyright></jihaiCopyright>
		<red-bag v-if="redBagShow" @click="handleGet"></red-bag>
	</view>
</template>
<script>
	import jshop from '@/components/jshop/jshop.vue'
	import jihaiCopyright from '@/components/jihai-copyright/jihaiCopyright.vue'
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	import redBag from '@/components/red-bag/index'
	import {
		goods
	} from '@/config/mixins.js'
	import {
		goBack
	} from '@/config/mixins.js'
	export default {
		mixins: [goods],
		components: {
			jihaiCopyright,
			jshop,
			uniCountdown,
			redBag
		},
		data() {
			return {
				myShareCode: '', //分享Code
				imageUrl: '/static/image/share_image.png', //店铺分享图片
				pageData: [],
				pageCode: 'mobile_home', //页面布局编码
				pintuan: [], //拼团列表,
				redBagShow: false, //红包
			}
		},
		computed: {
			appTitle() {
				return this.$store.state.config.shop_name
			}
		},
		onLoad(e) {
			this.initData()
			if(this.$store.state.config.shop_name){
				uni.setNavigationBarTitle({
					title: this.$store.state.config.shop_name||''
				});
			}
		},
		methods: {
			//领取红包
			handleGet() {},
			destroyed() {
				window.removeEventListener('scroll', this.handleScroll)
			},
			goSearch() {
				uni.navigateTo({
					url: './search'
				})
			},
			// 首页初始化获取数据
			initData() {
				//获取首页配置
				this.$api.getPageConfig({
						code: this.pageCode
					},
					res => {
						if (res.status == true) {
							this.pageData = res.data.items;
							//隐藏loading
							setTimeout(() => {
								this.showLoad = false;
							}, 600);
						}
					}
				);
				
				this.getMyShareCode();
			},
			getMyShareCode() {
				let userToken = this.$db.get("userToken");
				if (userToken && userToken != '') {
					// 获取我的分享码
					this.$api.shareCode({}, res => {
						if (res.status) {
							this.myShareCode = res.data ? res.data : '';
						}
					});
				}
			}
		},
		onPullDownRefresh() {
			this.initData()
			//this.$db.del('all_cat');
			uni.stopPullDownRefresh()
		},
		//分享
		onShareAppMessage() {
			let myInviteCode = this.myShareCode ? this.myShareCode : '';
			let ins = this.$common.shareParameterDecode('type=1&invite=' + myInviteCode);
			let path = '/pages/share/jump?scene=' + ins;
			return {
				title: this.$store.state.config.share_title,
				// #ifdef MP-ALIPAY
				desc: this.$store.state.config.share_desc,
				// #endif
				imageUrl: this.$store.state.config.share_image,
				path: path
			}
		}
	}
</script>

<style>
	.search {
		/* position: fixed; */
		/*  #ifdef  H5  */
		/* top: 44px; */
		/*  #endif  */
		/*  #ifndef  H5  */
		/* top: 0; */
		/*  #endif  */
	}

	.cell-item {
		border: none;
	}

	.cell-ft-text {
		font-size: 22upx;
		color: #999;
	}

	/* .new-goods {
		min-height: 300upx;
		white-space: nowrap;
		width: 100%;
	}

	.new-goods-item {
		width: 200upx;
		display: inline-block;
		margin-right: 20upx;
	}

	.new-goods-item:last-child {
		margin-right: 0;
	}

	.news-goods-img {
		width: 200upx;
		height: 200upx;
	}

	.news-goods-img image {
		width: 100%;
		height: 100%;
	}

	.news-goods-bot {
		margin-top: 6upx;
	}

	.new-goods-name {
		display: block;
		font-size: 26upx;
	}

	.new-goods-price {
		display: block;
		font-size: 26upx;
		color: #e14d4d;
	} */
</style>
