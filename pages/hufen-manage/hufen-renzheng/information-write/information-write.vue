<!-- @author 龙渊 -->
<template>
	<view class="w100 f-16 bg-white">
		<view class="d-cc input-list bg-white">
			<view class="">姓名：</view>
			<view class="">
				<input type="text" class="bd-gray" value="" placeholder="请输入姓名" />
			</view>
		</view>
		<view class="d-cc input-list bg-white mr-30">
			<view class="">身份证：</view>
			<view class="">
				<input type="text" class="bd-gray" value="" placeholder="请输入身份证" />
			</view>
		</view>
		<view class="d-cc input-list bg-white">
			<view class="">手机：</view>
			<view class="">
				<input type="text" class="bd-gray" value="" placeholder="请输入手机号" />
			</view>
		</view>
		<view class="d-cc input-list bg-white">
			<view class="">职业：</view>
			<view class="bd-gray select pos-r  d-cc z-indexselect f-16 sellect-all">
				<view class=" select-view  pos-r">
					<view class="" @click="showSelectA">
						<view class="selected1 ml-10 mt-10 d-sf">
							{{ selected }}
						</view>
						<view class="select-line select-img pos-a">

						</view>
						<image class="select-img pos-a" src="../../../../static/img/show_down.png" mode=""></image>
					</view>
					<view class="bg-white mt-10 pos-a abc selected1 select-border select-list" v-if="selectaA">
						<view @click="Myselect(index)" class="ml-10 showSelectA f-16 d-sf" :value="select.text" v-for="(select, index) in mySelect"
						 :key="index">{{select.text}}</view>
					</view>

				</view>
			</view>
		</view>
		<view class="d-cc input-list textarea bg-white">
			<view class="d-cc">简介：</view>
			<view class="uni-textarea textarea-size bd-gray">
				<textarea placeholder-style="color:#ccc" class="textarea-size" placeholder="输入简介" width="300rpx" height="60rpx" />
				</view>
		</view>
		<view class="d-cc submit-btn input-list textarea bg-white">
			<button type="button" @click="submit" class="bg-main c-white">提交审核</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: '宝妈',
				mySelect: [{
						value: 0,
						text: '宝妈'
					},
					{
						value: 1,
						text: '上班族'
					},
					{
						value: 2,
						text: '自由职业'
					},
					{
						value: 3,
						text: '自媒体'
					}
					
				],
				isActive: false,
				isActive2: true,
				selectaA: false
				
			}
		},
		methods: {
			Myselect(i) {
				this.selected = this.mySelect[i].text;
				this.selectaA = false
			},
			showSelectA() {
				if (this.selectaA == true) {
					this.selectaA = false
				} else {
					this.selectaA = true;
				}
			},
			submit(){
				uni.navigateTo({
					url:"../../../pay-pwd/pay-pwd"
				})
			}
		}
	}
</script>

<style>
	@import url("../../../../static/css/style.css");
	.input-list{
		height: 120rpx;
	}
	.input-list input{
		height: 60rpx;
	}
/* select */
	.pay-wiew {
		height: 440rpx;
	}
	.view-all{
		display: flex;
		justify-content: center;
		/* margin-top: 120rpx; */
	}
	.select-view{
		/* background-color: #C8C7CC; */
		/* width: 50%; */
		/* border: 1rpx solid #ccc; */
		width: 350rpx;
		height: 60rpx;
	}
	.selected-width{
		width: 350rpx;
	}
	.select-border{
		margin-left: -3rpx;
		height: 168rpx;
		width: 350rpx;
		border: 1rpx solid #ccc;
	}
	.select-img{
		width: 60rpx;
		height: 60rpx;
		display: flex;
		right: 0;
		top: 1rpx;
	}
	.select-line{
		margin-right: 57rpx;
		top: 0;
		width: 1rpx;
		height: 60rpx;
		border-left: 1rpx solid #ccc ;
	}
	.z-indexselect{
		z-index: 999;
	}
	.textarea{
		margin-top: 120rpx;
	}
	.textarea-size{
		width: 350rpx;
		height: 200rpx;
	}
	
	/* 按钮 */
	.submit-btn{
		/* width: 350rpx; */
	}
	.submit-btn button{
		width: 350rpx;
	}
</style>
