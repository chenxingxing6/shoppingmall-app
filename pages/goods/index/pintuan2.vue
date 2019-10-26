<template>
	<view class="content">
		<view class="content-top">
			<!-- 轮播图 -->
			<view class='swiper'>
				<swiper class="swiper-c" :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval"
				 :duration="swiper.duration">
					<swiper-item class="have-none" v-for="(item, index) in goodsInfo.album" :key="index" @click="clickImg(item)">
						<image class='' :src='item' mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 轮播图end -->

			<view class='cell-group'>
				<!-- 倒计时 -->
				<view class='price-salesvolume' v-if="lasttime.hour!==false">
					<view class='commodity-price'>
						<text class='current-price'>￥{{ product.pintuan_price }}</text>
						<text class='cost-price'>￥{{product.mktprice}}</text>
					</view>
					<view class='commodity-salesvolume'>
						<text>已售{{goodsInfo.buy_count}}件/剩余{{product.stock}}件</text>
						<text>累计销售{{goodsInfo.buy_count}}件</text>
					</view>
					<view class='commodity-time-img'></view>
					<view class='commodity-time'>
						<text>距结束仅剩</text>
						<view class='commodity-day'>
							<uni-countdown :day="lasttime.day" :hour="lasttime.hour" :minute="lasttime.minute" :second="lasttime.second"></uni-countdown>
						</view>
					</view>
					<!-- <view class='commodity-time'>
						已结束
					</view> -->
				</view>
				<!-- 倒计时end -->

				<!-- 分享 -->
				<view class='cell-item goods-details'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>{{ product.name }}</view>
					</view>
					<view class='cell-item-ft'>
						<image class='cell-ft-next icon' @click="goShare()" src='../../../static/image/share.png'></image>
					</view>
				</view>
				<!-- 分享end -->



				<!-- 规格 -->
				<view class='cell-item goods-title-item' v-if="isSpes">
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>规格</view>
					</view>
					<view class='cell-item-bd' @click="toshow(2)">
						<text class='cell-bd-text'>{{ product.spes_desc }}</text>
					</view>
				</view>
				<!-- 规格end -->

				<!-- 说明 -->
				<view class='cell-item goods-title-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>说明</view>
					</view>
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<image class="goods-title-item-ic" src="../../../static/image/ic-dui.png" mode=""></image>
							<text class="cell-bd-text">24小时内发货</text>
						</view>
						<view class="cell-bd-view">
							<image class="goods-title-item-ic" src="../../../static/image/ic-dui.png" mode=""></image>
							<text class="cell-bd-text">7天拆封无条件退货</text>
						</view>
					</view>
				</view>
				<!-- 说明end -->
			</view>

			<!-- 团购拼单 -->
			<view class="cell-group margin-cell-group" v-if="teamCount">
				<view class='cell-item right-img'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>{{teamCount}}人在拼单，可直接参与</view>
					</view>
					<!-- <view class='cell-item-ft' >
						<image class='cell-ft-next icon' src='../../../static/image/right.png'></image>
						<text class='cell-ft-text'>查看更多</text>
					</view> -->
				</view>
				<view class="group-swiper">
					<swiper class="group-swiper-c" :indicator-dots="indicatorDots" :autoplay="autoplay" vertical="true" circular="true"
					 :interval="interval" :duration="duration">
						<swiper-item v-for="(item, index) in teamList" :key="index">
							<view class="swiper-item">
								<view class='cell-item'>
									<view class='cell-item-hd'>
										<image class="user-head-img cell-hd-icon have-none" :src='item[0].avatar' mode=""></image>
										<view class="cell-hd-title">
											{{item[0].user_name}}
										</view>
									</view>
									<view class='cell-item-bd'>
										<view class="cell-bd-view">
											<text class="cell-bd-text">还差<text class="red-price">{{item[0].peopleNums}}人</text>拼成</text>
										</view>
										<view class="cell-bd-view">
											<view class='commodity-day'>
												<uni-countdown :day="item[0].remainder_time.day" :hour="item[0].remainder_time.hour" :minute="item[0].remainder_time.minute"
												 :second="item[0].remainder_time.second"></uni-countdown>
											</view>

										</view>
									</view>
									<view class="cell-item-ft" v-if="!item[0].is_own">
										<button class="btn" @click="toshow(1,item[0].id)">去拼单</button>
									</view>
									<view class="cell-item-ft" v-else>
										<button class="btn btn-b">拼团中</button>
									</view>
								</view>
								<view class='cell-item' v-if="item[1]">
									<view class='cell-item-hd'>
										<image class="user-head-img cell-hd-icon have-none" :src='item[1].avatar' mode=""></image>
										<view class="cell-hd-title">
											{{item[1].user_name}}
										</view>
									</view>
									<view class='cell-item-bd'>
										<view class="cell-bd-view">
											<text class="cell-bd-text">还差<text class="red-price">{{item[1].peopleNums}}人</text>拼成</text>
										</view>
										<view class="cell-bd-view">
											<view class='commodity-day'>
												<uni-countdown :day="item[1].remainder_time.day" :hour="item[1].remainder_time.hour" :minute="item[1].remainder_time.minute"
												 :second="item[1].remainder_time.second"></uni-countdown>
											</view>

										</view>
									</view>
									<view class="cell-item-ft" v-if="!item[1].is_own">
										<button class="btn" @click="toshow(1,item[1].id)">去拼单</button>
									</view>
									<view class="cell-item-ft" v-else>
										<button class="btn btn-b">拼团中</button>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="cell-group margin-cell-group" v-else>
				<view class='cell-item right-img'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>暂无开团信息</view>
					</view>

				</view>
			</view>
			<view class="goods-content">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#333"></uni-segmented-control>
				<view class="goods-content-c">
					<view class="goods-detail" v-if="current === 0">
						<u-parse :content="goodsInfo.intro" />
					</view>
					<view class="goods-parameter" v-else-if="current === 1">
						<view class='cell-group' v-if="goodsParams.length">
							<view class='cell-item' v-for="(item, index) in goodsParams" :key="index">
								<view class='cell-item-hd'>
									<view class='cell-hd-title'>{{ item.name }}</view>
								</view>
								<view class='cell-item-bd'>
									<text class='cell-bd-text'>{{ item.value }}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="goods-assess" v-else-if="current === 2">
						<view v-if="goodsComments.list.length">
							<view class="goods-assess-item" v-for="(item, index) in goodsComments.list" :key="index">
								<view class='cell-group'>
									<view class='cell-item goods-title-item'>
										<view class='cell-item-hd'>
											<image class='user-head-img' :src='item.user.avatar' mode="aspectFill"></image>
										</view>
										<view class='cell-item-bd'>
											<view class="cell-bd-view">
												<text class="cell-bd-text">{{ item.user.nickname }}</text>
												<view class="cell-bd-text-right">
													<uni-rate size="16" disabled="true" :value="item.score"></uni-rate>
												</view>
											</view>
											<view class="cell-bd-view">
												<text class="cell-bd-text color-9" style="margin-right: 16upx;">{{ item.ctime }}</text>
												<text class="cell-bd-text color-9">{{ item.addon }}</text>
											</view>
										</view>
									</view>
								</view>
								<view class="gai-body">
									<view class="gai-body-text">
										{{ item.content }}
									</view>
									<view class="gai-body-img" v-if="item.images_url.length">
										<image :src="img" mode="aspectFill" v-for="(img, key) in item.images_url" :key="key" @click="clickImg(img)"></image>
									</view>
								</view>
							</view>
							<uni-load-more :status="goodsComments.loadStatus"></uni-load-more>
						</view>
						<view class="comment-none" v-else>
							<image class="comment-none-img" src="../../../static/image/order.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 弹出层 -->
		<lvv-popup position="bottom" ref="share">

			<!-- #ifdef H5 -->
			<shareByH5 :shareType='3' :goodsId="goodsInfo.id" :groupId="groupInfo.id" :shareImg="goodsInfo.image_url"
			 :shareTitle="goodsInfo.name" :shareContent="goodsInfo.brief" :shareHref="shareHref" @close="closeShare()"></shareByH5>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<shareByWx :shareType='3' :goodsId="goodsInfo.id" :groupId="groupInfo.id" :shareImg="goodsInfo.image_url"
			 :shareTitle="goodsInfo.name" :shareContent="goodsInfo.brief" :shareHref="shareHref" @close="closeShare()"></shareByWx>
			<!-- #endif -->

			<!-- #ifdef MP-ALIPAY -->
			<shareByAli :shareType='3' :goodsId="goodsInfo.id" :groupId="groupInfo.id" :shareImg="goodsInfo.image_url"
			 :shareTitle="goodsInfo.name" :shareContent="goodsInfo.brief" :shareHref="shareHref" @close="closeShare()"></shareByAli>
			<!-- #endif -->

			<!-- #ifdef APP-PLUS -->
			<shareByApp :shareType='3' :goodsId="goodsInfo.id" :groupId="groupInfo.id" :shareImg="goodsInfo.image_url"
			 :shareTitle="goodsInfo.name" :shareContent="goodsInfo.brief" :shareHref="shareHref" @close="closeShare()"></shareByApp>
			<!-- #endif -->

		</lvv-popup>

		<!-- 弹出层 -->

		<lvv-popup position="bottom" ref="lvvpopref">
			<view style="width: 100%;max-height: 804upx;background: #FFFFFF;position: absolute;left:0;bottom: 0;">
				<view class="pop-c">
					<view class="pop-t">
						<view class='goods-img'>
							<image :src='product.image_path' mode='aspectFill'></image>
						</view>
						<view class='goods-information'>
							<view class='pop-goods-name'>{{ product.name }}</view>
							<view class='pop-goods-price red-price'>￥ {{ product.price }}</view>
						</view>
						<view class='close-btn' @click="toclose()">
							<image src='../../../static/image/close.png'></image>
						</view>
					</view>
					<scroll-view class="pop-m" scroll-y="true" style="max-height: 560upx;">
						<spec :spesData="product.default_spes_desc" ref="spec" @changeSpes="changeSpes"></spec>

						<view class="goods-number">
							<text class="pop-m-title">数量</text>
							<view class="pop-m-bd-in">
								<uni-number-box :min="minNums" :max="product.stock" :value="buyNum" @change="bindChange"></uni-number-box>
							</view>
						</view>
					</scroll-view>
					<view class="pop-b" v-if="lvvpopref_type == 2">
						<button class='btn btn-square btn-g btn-half' @click="buyNow(1)">单独购买￥ {{ product.price }}</button>
						<button class='btn btn-square btn-b btn-half' @click="buyNow(2)">立即拼单￥ {{ product.pintuan_price }}</button>
					</view>
					<view class="pop-b" v-else>
						<button class='btn btn-square btn-b' @click="buyNow1(2)">确定￥ {{ product.pintuan_price }}</button>
					</view>
				</view>
			</view>
		</lvv-popup>
		<!-- 弹出层end -->
		<!-- 底部按钮 -->
		<view class="goods-bottom">
			<view class="goods-bottom-ic" @click="collection">
				<image class="icon" :src="isfav ? favLogo[1] : favLogo[0]" mode=""></image>
				<view v-if="!isfav">收藏</view>
				<view v-if="isfav">已收藏</view>
			</view>

			<view class="goods-bottom-ic" @click="redirectCart">
				<view class="badge color-f" v-if="cartNums">{{ cartNums }}</view>
				<image class="icon" src="../../../static/image/ic-me-car.png" mode=""></image>
				<view>购物车</view>
			</view>
			<button class='btn btn-square btn-b tl' @click="toshow(2)" hover-class="btn-hover2">立即拼单</button>
		</view>
		<!-- 底部按钮end -->

		<!-- 右边浮动球 -->
		<uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction"
		 @trigger="trigger"></uni-fab>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue";
	import lvvPopup from '@/components/lvv-popup/lvv-popup.vue';
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue";
	import uniRate from "@/components/uni-rate/uni-rate.vue";
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	import {
		get
	} from '@/config/db.js';
	import {
		apiBaseUrl
	} from '@/config/config.js';
	import {
		pintuanUrl
	} from '@/config/config.js';
	import uniCountdown from "@/components/uni-countdown/uni-countdown.vue";
	import uParse from '@/components/u-parse/u-parse.vue';
	import spec from '@/components/spec/spec.vue';
	import share from '@/components/share/share.vue';
	// #ifdef H5
	import shareByH5 from '@/components/share/shareByh5.vue'
	// #endif
	// #ifdef MP-WEIXIN
	import shareByWx from '@/components/share/shareByWx.vue'
	// #endif
	// #ifdef MP-ALIPAY
	import shareByAli from '@/components/share/shareByAli.vue'
	// #endif
	// #ifdef APP-PLUS
	import shareByApp from '@/components/share/shareByApp.vue'
	// #endif

	import htmlParser from '@/common/html-parser'
	export default {

		components: {
			uniSegmentedControl,
			lvvPopup,
			uniNumberBox,
			uniRate,
			uniLoadMore,
			uniFab,
			uniCountdown,
			uParse,
			share,
			spec,
			// #ifdef H5
			shareByH5,
			// #endif

			// #ifdef MP-WEIXIN
			shareByWx,
			// #endif

			// #ifdef MP-ALIPAY
			shareByAli,
			// #endif

			// #ifdef APP-PLUS
			shareByApp,
			// #endif
		},
		data() {
			return {
				myShareCode: '', //分享Code
				shareType: 0,
				providerList: [], // 分享通道 包含生成海报
				swiper: {
					indicatorDots: true,
					autoplay: true,
					interval: 3000,
					duration: 800,
				}, // 轮播图属性设置
				items: ['图文详情', '商品参数', '买家评论'],
				current: 0, // init tab位
				goodsId: 0, // 商品id
				groupId: 0, // 拼团ID
				cartNums: 0, // 购物车数量
				groupInfo: {}, // 拼团详情
				goodsInfo: {}, //商品详情
				teamList: [], //团队列表
				teamCount: 0, //开团团数
				product: {}, // 规格详情
				goodsParams: [], // 商品参数信息
				goodsComments: {
					loadStatus: 'more',
					page: 1,
					limit: 5,
					list: []
				}, // 商品评论信息
				buyNum: 1, // 选定的购买数量
				minBuyNum: 1, // 最小可购买数量
				type: 2, // 1加入购物车 2购买
				isfav: false, // 商品是否收藏
				favLogo: [
					'../../../static/image/ic-me-collect.png',
					'../../../static/image/ic-me-collect2.png'
				],
				horizontal: 'right', //右下角弹出按钮
				vertical: 'bottom',
				direction: 'vertical',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: "#FF7159"
				},
				content: [{
						iconPath: '../../../static/image/tab-ic-hom-selected.png',
						selectedIconPath: '../../../static/image/tab-ic-hom-unselected.png',
						// text: '首页',
						active: false,
						url: '/pages/index/index'
					},

					{
						iconPath: '../../../static/image/tab-ic-me-selected.png',
						selectedIconPath: '../../../static/image/tab-ic-me-unselected.png',
						// text: '个人中心',
						active: false,
						url: '/pages/member/index/index'
					},
				],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				lasttime: {
					hour: false,
					minute: 0,
					second: 0
				},
				lvvpopref_type: 2,
				team_id: 0, //团id
				userToken: 0,
				invite: 0 //邀请人的团Id
			}
		},
		onLoad(e) {
			this.goodsId = e.id;
			this.groupId = e.group_id;
			
			//获取拼团id，商品ID
			if (this.goodsId && this.groupId) {
				this.getPintuanInfo(groupId);
				this.getTeam(groupId);
				this.getGoodsParams();
				this.getGoodsComments();
			} else {
				this.$common.errorToShow('获取失败', () => {
					uni.navigateBack({
						delta: 1
					});
				});
			}
			
			// 获取购物车数量
			this.getCartNums();
			this.getMyShareCode();
		},
		computed: {

			// 规格切换计算规格商品的 可购买数量
			minNums() {
				return this.product.stock > this.minBuyNum ? this.minBuyNum : this.product.stock;
			},
			// 判断商品是否是多规格商品  (为了兼容小程序 只能写在计算属性里面了)
			isSpes() {
				if (this.product.hasOwnProperty('default_spes_desc') && Object.keys(this.product.default_spes_desc).length) {
					return true;
				} else {
					return false;
				}
			},
			// 优惠信息重新组装
			promotion() {
				let arr = [];
				if (this.product.promotion_list) {
					for (let k in this.product.promotion_list) {
						arr.push(this.product.promotion_list[k]);
					}
				}
				return arr;
			},
			shareHref() {
				let pages = getCurrentPages()
				let page = pages[pages.length - 1]
				// #ifdef H5 || MP-WEIXIN || APP-PLUS || APP-PLUS-NVUE
				return apiBaseUrl + 'wap/#/' + page.route + '?id=' + this.goodsId + '&group_id=' + this.groupId;
				// #endif

				// #ifdef MP-ALIPAY
				return apiBaseUrl + 'wap/#/' + page.__proto__.route + '?id=' + this.goodsId + '&group_id=' + this.groupId;
				// #endif
			}

		},
		onReachBottom() {
			if (this.current === 2 && this.goodsComments.loadStatus === 'more') {
				this.getGoodsComments();
			}
		},
		methods: {
			// 关闭弹出层
			close() {
				this.$emit('close')
			},
			// 点击操作
			clickHandler(e) {
				if (e.cate === 'poster') {
					this.createPoster()
				} else {
					// 去分享
					this.share(e)
				}
			},
			// 购物车页面跳转
			redirectCart() {
				uni.switchTab({
					url: '/pages/cart/index/index'
				});
			},
			//开团列表
			getTeam(id) {
				uni.showLoading({
					title: '加载中'
				});
				let userToken = this.$db.get("userToken");
				if (userToken && userToken != '') {
					this.userToken = userToken;
				}
				uni.request({
					url: this.$config.pintuanUrl + 'getTeam',
					header: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					method: 'POST',
					data: {
						rule_id: id,
						token: this.userToken
					},
					success: (res) => {
						uni.hideLoading();
						if (res.data.status) {
							let data = res.data.data;
							let new_data = new Array();
							for (var k = 0; k < data.length; k++) {
								if (k == 0 || k % 2 == 0) {
									if (k + 1 < data.length) {
										var a = [
											data[k],
											data[k + 1]
										];
									} else {
										var a = [data[k]];

									}
									new_data.push(a);
								}
							}
							//console.log(new_data);
							this.teamList = new_data;
							this.teamCount = res.data.count;
						}
					},
					fail: (error) => {
						uni.hideLoading();
						if (error && error.response) {
							this.$common.showError(error.response);
						}
					},
				});
			},

			//拼团信息
			getPintuanInfo(id) {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: this.$config.pintuanUrl + 'getPintuanInfo',
					header: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					method: 'POST',
					data: {
						id: id
					},
					success: (res) => {
						uni.hideLoading();
						if (res.data.status) {
							if (res.data.data.length < 1) {
								this.$common.errorToShow('该拼团活动不存在，请返回重新选择。', () => {
									uni.navigateBack({
										delta: 1
									});
								});
							}
							// else if (res.data.data.goods_info.goodmarketable != 1){
							// 	this.$common.errorToShow('该商品已下架，请返回重新选择商品。', () => {
							// 		uni.navigateBack({
							// 			delta: 1
							// 		});
							// 	});
							// }
							else {
								this.groupInfo = res.data.data;
								this.product = res.data.data.goods_info.product;
								this.goodsInfo = this.groupInfo.goods_info;
								let price = this.product.price;
								if (price > 0) {
									this.product.price = price;
								} else {
									this.product.price = 0.00;
								}
								this.product = this.spesClassHandle(this.product);
								this.lasttime = res.data.data.lasttime;
							}

						}
					},
					fail: (error) => {
						uni.hideLoading();
						if (error && error.response) {
							this.$common.showError(error.response);
						}
					},
				});
			},
			// 获取购物车数量	
			getCartNums() {
				let userToken = this.$db.get("userToken");
				if (userToken && userToken != '') {
					// 获取购物车数量
					this.$api.getCartNum({}, res => {
						if (res.status) {
							this.cartNums = res.data;
						}
					});
				}
			},
			// 显示modal弹出框
			toshow(type, team_id = 0) {
				if (type == 1) {
					this.lvvpopref_type = 1;
				}
				if (type == 2) {
					this.lvvpopref_type = 2;
				}
				if (team_id !== 0) {
					this.team_id = team_id;
				}
				this.$refs.lvvpopref.show();
			},
			// 关闭modal弹出框
			toclose() {
				this.$refs.lvvpopref.close();
			},
			// 切换商品规格
			changeSpes(obj) {
				//console.log(obj);
				let index = obj.v;
				let key = obj.k;
				if (this.product.default_spes_desc[index][key].hasOwnProperty('product_id') && this.product.default_spes_desc[index]
					[key].product_id) {
					uni.showLoading({
						title: '加载中'
					});
					uni.request({
						url: this.$config.pintuanUrl + 'getProductInfo',
						header: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
						method: 'POST',
						data: {
							id: this.product.default_spes_desc[index][key].product_id,
							discount_amount: this.groupInfo.discount_amount
						},
						success: (res) => {
							uni.hideLoading();
							if (res.data.status) {
								// 切换规格判断可购买数量
								this.buyNum = res.data.data.stock > this.minBuyNum ? this.minBuyNum : res.data.data.stock;
								this.product = this.spesClassHandle(res.data.data);
							}
						},
						fail: (error) => {
							uni.hideLoading();
							if (error && error.response) {
								this.$common.showError(error.response);
							}
						},
					});
					setTimeout(function() {
						uni.hideLoading();
					}, 1000);
				}
			},
			// 多规格样式统一处理
			spesClassHandle(products) {
				// 判断是否是多规格 (是否有默认规格)
				if (products.hasOwnProperty('default_spes_desc')) {
					let spes = products.default_spes_desc;
					for (let key in spes) {
						for (let i in spes[key]) {
							if (spes[key][i].hasOwnProperty('is_default') && spes[key][i].is_default === true) {
								this.$set(spes[key][i], 'cla', 'pop-m-item selected');
							} else if (spes[key][i].hasOwnProperty('product_id') && spes[key][i].product_id) {
								this.$set(spes[key][i], 'cla', 'pop-m-item not-selected');
							} else {
								this.$set(spes[key][i], 'cla', 'pop-m-item none');
							}
						}
					}
					products.default_spes_desc = spes;
				}
				return products;
			},
			// 购买数量加减操作
			bindChange(val) {
				this.buyNum = val;
			},
			// 商品收藏/取消
			collection() {
				let data = {
					goods_id: this.goodsId
				}
				this.$api.goodsCollection(data, res => {
					if (res.status) {
						this.isfav = !this.isfav;
						this.$common.successToShow(res.msg);
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},

			// tab点击切换
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			// 获取商品参数信息
			getGoodsParams() {
				this.$api.goodsParams({
					id: this.goodsId
				}, res => {
					if (res.status == true) {
						this.goodsParams = res.data;
					}
				})
			},
			// 获取商品评论信息
			getGoodsComments() {
				let data = {
					page: this.goodsComments.page,
					limit: this.goodsComments.limit,
					goods_id: this.goodsId
				}

				this.goodsComments.loadStatus = 'loading';

				this.$api.goodsComment(data, res => {
					if (res.status == true) {
						let _list = res.data.list;

						// 如果评论没有图片 在这块作处理否则控制台报错
						_list.forEach(item => {
							item.ctime = this.$common.timeToDate(item.ctime)
							if (!item.hasOwnProperty('images_url')) {
								this.$set(item, 'images_url', [])
							}
						});

						this.goodsComments.list = [...this.goodsComments.list, ..._list];
						// 根据count数量判断是否还有数据
						if (res.data.count > this.goodsComments.list.length) {
							this.goodsComments.loadStatus = 'more';
							this.goodsComments.page++;
						} else {
							this.goodsComments.loadStatus = 'noMore';
						}
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			// 添加商品浏览足迹
			goodsBrowsing() {
				let data = {
					goods_id: this.goodsInfo.id
				}

				this.$api.addGoodsBrowsing(data, res => {});
			},

			// 立即购买
			buyNow(card_type) {
				if (this.buyNum > 0) {
					let data = {
						product_id: this.product.id,
						nums: this.buyNum,
						type: 2, // 区分加入购物车和购买,
					}
					if (card_type == 2) {
						data['cart_type'] = 2;

					}
					this.$api.addCart(data, res => {
						if (res.status) {
							this.toclose();
							let cartIds = res.data;
							if (card_type == 1) {
								this.$common.navigateTo('/pages/goods/place-order/index?cart_ids=' + JSON.stringify(cartIds));
							} else {
								if (this.invite != 0) {
									this.$common.navigateTo('/pages/goods/place-order/index?cart_ids=' + JSON.stringify(cartIds) +
										'&cart_type=2&team_id=' + this.invite);
								} else {
									this.$common.navigateTo('/pages/goods/place-order/index?cart_ids=' + JSON.stringify(cartIds) +
										'&cart_type=2');
								}

							}

						}
					})
				}
			},
			// 立即购买
			buyNow1(card_type) {
				if (this.buyNum > 0) {
					let data = {
						product_id: this.product.id,
						nums: this.buyNum,
						type: 2, // 区分加入购物车和购买,
					}
					if (card_type == 2) {
						data['cart_type'] = 2;

					}
					this.$api.addCart(data, res => {
						if (res.status) {
							this.toclose();
							let cartIds = res.data;
							if (this.team_id != 0) {
								this.$common.navigateTo('/pages/goods/place-order/index?cart_ids=' + JSON.stringify(cartIds) +
									'&cart_type=2&team_id=' + this.team_id);
							} else {
								this.$common.navigateTo('/pages/goods/place-order/index?cart_ids=' + JSON.stringify(cartIds) + '&cart_type=2');
							}

						}
					})
				}
			},
			trigger(e) {
				this.content[e.index].active = !e.item.active;
				uni.switchTab({
					url: e.item.url
				})
			},
			// 跳转到h5分享页面
			goShare() {
				this.$refs.share.show();
			},
			closeShare() {
				this.$refs.share.close();
			},

			// 图片点击放大
			clickImg(imgs) {
				// 预览图片
				uni.previewImage({
					urls: imgs.split()
				});
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
		//分享
		onShareAppMessage() {
			let myInviteCode = this.myShareCode ? this.myShareCode : '';
			let ins = encodeURIComponent('type=5&id=' + this.goodsId + '&group_id=' + this.groupId + '&invite=' + myInviteCode);
			let path = '/pages/share/jump?scene=' + ins;
			return {
				title: this.goodsInfo.name,
				// #ifdef MP-ALIPAY
				desc: this.goodsInfo.brief,
				// #endif
				imageUrl: this.goodsInfo.album[0],
				path: path
			}
		}
	}
</script>

<style>
	.swiper {
		height: 750upx;
	}

	.goods-top {
		border-bottom: 0;
	}

	.goods-top .goods-price {
		font-size: 38upx;
	}

	.cost-price {
		font-size: 28upx !important;
		bottom: -10upx;
		color: #999;
		text-decoration: line-through;
	}

	.goods-top .cell-item-ft {
		font-size: 20upx;
		color: #666;
	}

	.goods-details {
		padding-top: 16upx;
	}

	.goods-details .cell-hd-title {
		width: 620upx;
		color: #333;
		font-size: 26upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.goods-details .cell-item-ft {
		top: 40%;
	}

	.goods-title-item .cell-item-hd {
		min-width: 60upx;
		color: #666;
		font-size: 24upx;
	}

	.goods-title-item .cell-item-bd {
		color: #333;
		font-size: 24upx;
	}

	.goods-title-item .cell-bd-text {
		bottom: 0;
	}

	.cell-bd-view {
		position: relative;
		overflow: hidden;
	}

	.cell-bd-view:first-child {
		margin-bottom: 8upx;
	}

	.goods-title-item-ic {
		width: 22upx;
		height: 22upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		/* #ifdef MP-ALIPAY */
		background-size: 100% 100%;
		/* #endif */
	}

	.cell-bd-view .cell-bd-text {
		margin-left: 30upx;
	}

	.goods-content {
		margin-top: 26upx;
		background-color: #fff;
		padding: 26upx 0;
	}

	.goods-content-c {}

	.goods-parameter {
		padding: 10upx 26upx;
	}

	.goods-bottom,
	.pop-b {
		background-color: #fff;
		position: fixed;
		bottom: 0;
		height: 90upx;
		width: 100%;
		overflow: hidden;
		display: flex;
		box-shadow: 0 0 20upx #ccc;
	}

	.pop-b button {
		flex: 1;
	}

	.goods-bottom button {
		height: 100%;
		width: 35%;
	}

	.goods-bottom-ic {
		display: inline-block;
		position: relative;
		text-align: center;
		height: 100%;
		width: 15%;
		float: left;
		font-size: 22upx;
		color: #666;
	}

	.goods-bottom-ic .icon {
		position: relative;
		top: 6upx;
		/* left: -6upx; */
		/* #ifdef MP-ALIPAY */
		background-size: 100% 100%;
		/* #endif */
	}

	.goods-bottom .btn-g {
		color: #333;
		background-color: #D9D9D9;
	}

	.goods-parameter .cell-item {
		border-bottom: none;
		margin-left: 0;
	}

	.goods-parameter .cell-item-hd {
		color: #333;
		font-size: 24upx;
	}

	.goods-parameter .cell-item-bd {
		color: #999;
	}

	.goods-parameter .cell-item-bd .cell-bd-text {
		bottom: 0;
	}

	.goods-parameter .cell-bd-text {
		margin-left: 0;
	}

	.pop-t {
		position: relative;
		padding: 30upx 26upx;
		border-bottom: 2upx solid #f3f3f3;
		/* box-shadow: 0 0 20upx #ccc; */
	}

	.goods-img {
		width: 160upx;
		height: 160upx;
		position: absolute;
		top: -20upx;
		background-color: #fff;
		border-radius: 6upx;
		border: 2upx solid #fff;
	}

	.goods-img image {
		height: 100%;
		width: 100%;
	}

	.goods-information {
		width: 420upx;
		display: inline-block;
		margin-left: 180upx;
	}

	.pop-goods-name {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: block;
		font-size: 24upx;
		margin-bottom: 20upx;
	}

	.pop-goods-price {
		font-size: 30upx;
	}

	.close-btn {
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		display: inline-block;
		position: absolute;
		right: 30upx;
	}

	.close-btn image {
		width: 100%;
		height: 100%;
	}

	.pop-m {
		font-size: 28upx;
		margin-bottom: 90upx;
	}

	.goods-specs,
	.goods-number {
		padding: 26upx;
		border-top: 1px solid #f3f3f3;
	}

	.goods-specs:first-child {
		border: none;
	}

	.pop-m-title {
		margin-right: 10upx;
		color: #666;
	}

	.pop-m-bd {
		overflow: hidden;
		margin-top: 10upx;
	}

	.pop-m-item {
		display: inline-block;
		float: left;
		padding: 6upx 16upx;
		background-color: #fff;
		color: #333;
		margin-right: 16upx;
		margin-bottom: 10upx;
	}

	.selected {
		border: 2upx solid #333;
		background-color: #333;
		color: #fff;
	}

	.not-selected {
		border: 2upx solid #ccc;
	}

	.none {
		border: 2upx dashed #ccc;
		color: #888;
	}

	.pop-m-bd-in {
		display: inline-block;
	}

	.badge {
		top: 2upx;
		left: 62upx;
	}

	.goods-assess .user-head-img {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}

	.goods-assess .cell-item-bd {
		padding-right: 0;
	}

	.goods-assess .cell-bd-text {
		margin: 0;
	}

	.goods-assess .cell-bd-text.color-9 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 440upx;
	}

	.gai-body {}

	.gai-body-text {
		font-size: 26upx;
		color: #333;
		padding: 0 26upx;
	}

	.gai-body-img {
		overflow: hidden;
		padding: 20upx 26upx;
	}

	.gai-body-img image {
		width: 220upx;
		height: 220upx;
		float: left;
		margin-right: 19upx;
		margin-bottom: 18upx;
	}

	.gai-body-img image:nth-child(3n) {
		margin-right: 0;
	}

	.redstar {
		width: 24rpx;
		height: 24rpx;
		padding: 2rpx;
	}

	.mask-share-wechat {
		display: inline-block;
		background-color: #fff;
		padding: 0;
	}

	.mask-share-wechat:after {
		border: none;
	}

	.right-ball {
		position: fixed;
		right: 30upx;
		bottom: 300upx;
		z-index: 999;
		text-align: center;
		padding: 14upx 0;
		/* line-height: 80upx; */
		width: 80upx;
		height: 80upx;
		font-size: 24upx;
		color: #fff;
		background-color: rgba(0, 0, 0, .5);
		border-radius: 50%;
	}

	.share-pop {
		height: 300upx;
		width: 100%;
		display: flex;
	}

	.share-item {
		flex: 1;
		text-align: center;
		font-size: 26upx;
		color: #333;
		padding: 20upx 0;
	}

	.share-item image {
		width: 120upx;
		height: 120upx;
	}

	.share-item .btn {
		line-height: 1;
		display: block;
		font-size: 26upx;
		background-color: #fff;
	}

	.comment-none {
		text-align: center;
		padding: 200upx 0;
	}

	.comment-none-img {
		width: 274upx;
		height: 274upx;
	}

	.price-salesvolume {
		width: 100%;
		padding: 0 0 0 26upx;
		overflow: hidden;
		color: #A5A5A5;
		background-color: rgb(252, 226, 80);
		position: relative;
	}

	.commodity-price {
		width: 224upx;
		display: inline-block;
		float: left;
	}

	.current-price {
		font-size: 40upx;
		color: #FF7159;
		display: block;
		line-height: 1.5;
	}

	.cost-price {
		font-size: 26upx;
		text-decoration: line-through;
		/* margin-left: 8rpx; */
		display: block;
	}

	.commodity-salesvolume {
		width: 240upx;
		display: inline-block;
		font-size: 22upx;
		float: left;
		padding: 16upx 0;
	}

	.commodity-salesvolume>text {
		display: block;
	}

	.commodity-time-img {
		display: block;
		width: 0;
		height: 0;
		border-width: 56upx 28upx 56upx 0;
		border-style: solid;
		border-color: transparent #FF7159 transparent transparent;
		/*透明 黄 透明 透明 */
		position: absolute;
		top: 0px;
		left: 462upx;
	}

	.commodity-time {
		display: inline-block;
		width: 260upx;
		text-align: center;
		font-size: 24upx;
		background-color: #FF7159;
		padding: 16upx 0 18upx;
		color: #FF7159;
	}

	.commodity-time>text {
		color: rgb(252, 226, 80);
	}

	.commodity-day>text {
		display: inline-block;
		background-color: rgb(255, 212, 176);
		color: rgb(255, 115, 0);
		padding: 0 6upx;
		border-radius: 6upx;
	}

	.tl {
		width: 70% !important;
	}

	.group-swiper {
		/* padding: 20upx 26upx; */
	}

	.group-swiper-c {
		height: 242upx;
	}

	.group-swiper-c .swiper-item .cell-item {
		height: 50%;
	}

	.group-swiper-c .swiper-item .cell-item .user-head-img {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}

	.group-swiper-c .swiper-item .cell-item .cell-hd-title {
		position: absolute;
		top: 50%;
		left: 100upx;
		transform: translateY(-50%);
		max-width: 260upx;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.group-swiper-c .swiper-item .cell-item .cell-item-bd {
		min-width: 150upx;
		max-width: 150upx
	}

	.group-swiper-c .swiper-item .cell-item .cell-item-ft .btn {
		font-size: 26upx;
		color: #fff;
		background-color: #FF7159;
		/* padding: 0; */
		text-align: center;
	}

	.price-salesvolume .commodity-day .uni-countdown__splitor {
		color: rgb(252, 226, 80);
	}

	.group-swiper .commodity-day .uni-countdown__splitor {
		color: #666;
	}

	@import url('@/components/u-parse/u-parse.css')
</style>
