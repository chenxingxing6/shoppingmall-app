<template>
	<view class="content">
		<view class='cell-group margin-cell-group'>
			<view class='cell-item'
			v-for="item in list"
			:key="item.id"
			@click="articleDetail(item.id)"
			>
				<view class="cell-title-img">
					<image :src="item.cover" mode="aspectFill"></image>
				</view>
				<view class="cell-item-bd">
					<view class="article-title ">
						{{ item.title }}
					</view>
					<view class="article-time">
						{{ item.ctime }}
					</view>
				</view>
			</view>
		</view>
		<uni-load-more
		:status="loadStatus"
		></uni-load-more>
	</view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
export default {
	components: { uniLoadMore },
	data () {
		return {
			cid: 0, // 文章分类id
			page: 1,
			limit: 10,
			list: [],
			loadStatus: 'more'
		}
	},
	onLoad (options) {
		this.cid = options.cid
		if (!this.cid) {
			this.$common.errorToShow('未指定文章分类', () => {
				uni.navigateBack({
					delta: 1
				})
			})
		} else {
			this.articleList()
		}
	},
	onReachBottom () {
		if (this.loadStatus === 'more') {
			this.articleList()
		}
	},
	methods: {
		articleList () {
			let data = {
				page: this.page,
				limit: this.limit,
				type_id:this.cid
			}
			
			this.loadStatus = 'loading'
			
			this.$api.articleList(data, res => {
				if (res.status) {
					const _list = res.data.list
					
					this.list = [...this.list, ..._list]
					
					if (res.data.count > this.list.length) {
						this.loadStatus = 'more'
						this.page ++
					} else {
						// 数据已加载完毕
						this.loadStatus = 'noMore'
					}
				} else {
					// 接口请求出错了
					this.$common.errorToShow(res.msg)
				}
			})
		},
		// 查看文章详情
		articleDetail (articleId) {
			this.$common.navigateTo('/pages/article/index?id=' + articleId +'&id_type=1')
		}
	}
}	
</script>

<style>
.cell-title-img{
	width: 160upx;
	height: 160upx;
}
.cell-title-img image{
	width: 100%;
	height: 100%;
}
.cell-item-bd{
	padding-right: 0;
	vertical-align: top;
	position: relative;
}
.article-title{
	font-size: 28upx;
	color: #333;
	width: 100%;
	min-height: 80upx;
	display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.article-time{
	font-size: 24upx;
	color: #999;
	display: inline-block;
	min-width: 220upx;
	min-height: 32upx;
	position: absolute;
	bottom: 0;
}

</style>
