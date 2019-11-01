<!-- @author 龙渊 -->
<template>
    <view class="w100 f-14">
		<!-- 轮播 -->
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper banner-size" indicator-dots="true" autoplay="autoplay" interval="5000" duration="800" circular="true" indicator-color="#999" indicator-active-color="#fff">
                        <swiper-item>
                            <view class="swiper-item uni-bg-red">
								<img src="../../../static/img/banner.png" alt="" class="w100 banner-size"/>
							</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item uni-bg-green">
								<img src="../../../static/img/banner.png" alt="" class="w100 banner-size"/>
							</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>			
        </view>
		<view class="user-div bg-white bd-bottom pd-10">
			<view class="suer-top-r f-l line-h pos-r">
				<view class="user-text f-14 pl-5">
					<view class="f-all fw-b"><text>{{tableList.taskName}}</text></view>
					<view class="f-all f-12 mt-10">佣金：{{tableList.commissionMoney}}金豆</view>
				</view>		
				<view class="pos-r ">
					<view class="text-right pos-a">{{statuss[tableList.status]}}</view>
				</view>
			</view>
		</view>
		<view class="f-l pl-15">
			<view class="pt-5">任务要求：</view>
			<view class="pt-5">1.等级需要30级以上</view>
			<view class="pt-5">2.好友数100个</view>
			<view class="pt-5 mb-10">3.需要互加</view>
			<!-- <view class="pt-5">{{tableList.taskContent}}</view> -->
		</view>
		<!-- 图片详情 -->
		<view class="bg-white w100 img-details">
			<view class="pt-10 pl-15">
				详情介绍:
			</view>
			<view class="p20">
				<image src="../../../static/img/banner.png" mode="" class="w100 img-sty"></image>
			</view>
			<view class="pl-20 pr-20">
				<image src="../../../static/img/banner.png" mode="" class="w100 img-sty"></image>
			</view>
		</view>
		<view class="btn-get">
			<button type="button" class="bg-main c-white" @click="getTask()">领取任务</button>
		</view>
    </view>
</template>

<script>
	
		
    import {
        mapState
    } from 'vuex'
// 轮播
    export default {
        data() {
            return {
                background: ['color1', 'color2', 'color3'],
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 500,
				tableList:[],
				statuss: ['待接单', '待完成', '待审核', '已完成', '已过期', '已取消'],
            }
        },
		methods:{
			search(){
				uni.navigateTo({
					url: '../../search/search'
				})
			},
			find(){
				var that = this;
				const json = {
					id:that.$route.query.id
				};
				that.post("api/open/task/findById",json,true)
				.then( data=> {
					console.log(data);
					this.tableList = data;
					console.log(this.tableList)
				})
			},
			getTask(){
				let that = this;
				const json = {
					id:that.$route.query.id
				};
				this.showError("提示", "确认领取任务", data => {
					this.post("api/app/task/meet",json,true)
					.then( data => {
						console.log('成功');
						uni.navigateTo({
							url:"../renwu"
						})
					})
				});
			},
			getTask(){
				uni.navigateTo({
					url:"../../index/index"
				})
			}
		},
		
		mounted() {
			this.find();
		}
		
        
    }
</script>
<!-- 导入公共样式 -->
<style>
    
    @import "../../../static/css/public.css";
	.banner-size{
		width: 750rpx;
		height: 350rpx;
	}
    .uni-card {
        box-shadow: none;
    }
	.list-btn{
		top: 35rpx;
		right: 0;
	}
	.search-opacity{
		/* opacity: 0.5; */
	}
	.input-search{
		border: 1px solid #fff;
	}
	.text-right{
		position: absolute;
		right: -150rpx;
		top: -70rpx;
	}
	.user-div{
	    height: 50px;
	}
	.img-sty{
		height: 250rpx;
	}
	.img-details{
		margin-top: 220rpx;
		height: 720rpx;
	}
	.btn-get button{
		border-radius: 0;
	}
</style>

