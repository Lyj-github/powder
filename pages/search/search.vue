<template>
	<view class="w100 pos-r">
		<view class="search-view mt-15">
			<!-- <uniIcon type="search" size="20" class=" pos-a ml-15 mt-15" color="rgba(0,0,0,.4)"></uniIcon> -->
			<image src="../../static/img/icon-search.png" class="pos-a ml-15 mt-10 icon40" mode=""></image>
			<input type="text" value="" class="radius20 input-search bg-white"  autocomplete="on"/>
			<!-- <form v-on:submit.prevent="addNewTodo">
			    <label for="new-todo">Add a todo</label>
			    <input class="pl-30 radius20 input-search bg-white"  v-model="newTodoText" id="new-todo" >
			    <button>Add</button>
			  </form> -->
		</view>
		<!-- <view class="w100 z-index pos-a pl-15 mt-15" @click="search">
			<view class="ml-50" style="">
					<uniIcon type="search" size="20" class="pos-a ml-15 mt-15" color="rgba(0,0,0,.4)"></uniIcon>
				<view class="pl-30 radius20 input-search" ></view>
			</view>
		</view> -->
		<view class="w100 pos-a f-16 mt-20 ml-20">
			<view class="f-l hot-l">热门搜索：</view>
			<view class="f-l pl-20">互粉</view>
			<view class="f-l pl-10">吸粉</view>
			<view class="f-l pl-10">赚钱</view>
			<view class="f-l pl-10">领取</view>
			<view class="f-l pl-10">清粉</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/m-icon/m-icon.vue";
	export default {
		components: {uniIcon},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("../../static/css/public.css");
	.input-search{
		padding-left: 60rpx;
		border-radius: 30rpx;
		width: 81%;
	}
	.search-view{
		margin-left: 65rpx;
	}
</style>
