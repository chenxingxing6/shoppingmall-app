<template>
	<view class="blank" :style="{background:data.params.backgroundColor,height:data.params.height*2+'rpx'}"></view>
</template>

<script>
export default {
	name: "jshopblank",
	props: {
		data:{
			// type: Array,
			required: true,
		}
	},
	methods: {
		
	}
}
</script>

<style>
</style>
