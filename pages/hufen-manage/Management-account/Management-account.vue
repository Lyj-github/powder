<!-- @author 龙渊 -->
<template>
	<view class="w100">
		<!-- list -->
		<view class="w100 pos-r">
			<view class="user-div bg-white bd-bottom   pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">删除</button>
					<button type="button" class="c-white bg-main f-r f-10 mr-10">修改</button>
				</view>
			</view>

			<!-- list2 -->
			<view class="user-div bg-white bd-bottom   pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">删除</button>
					<button type="button" class="c-white bg-main f-r f-10 mr-10">修改</button>
				</view>
			</view>
			

		</view>
	</view>

</template>

<script>

</script>
<!-- 导入公共样式 -->
<style>
	@import "../../../static/css/public.css";

	.uni-card {
		box-shadow: none;
	}

	.list-btn {
		top: 35rpx;
		right: 0;
	}

	.input-search {
		border: 1px solid #fff;
		border-radius: 50rpx;
	}

	.user-img {
		width: 120rpx;
		height: 120rpx;
	}
</style>
