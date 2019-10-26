<template>
	<view class="video bottom-cell-group" >
		<video :src="data.params.list[0].url" :poster="data.params.list[0].image" controls :autoplay='data.params.autoplay'></video>
	</view>
</template>

<script>
export default {
	name: "jshopvideo",
	props: {
		data:{
			type: Object,
			required: true,
		}
	},
	onLoad(){
		
	},
	methods: {
		
	}
}
</script>

<style>
.video video{
	width: 100%;
	min-height: 200upx;
}
</style>
