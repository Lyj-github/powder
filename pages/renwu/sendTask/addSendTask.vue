<!-- @author 龙渊 -->
<template>
	<view class="w100 f-16 bg-white">
		<view class="d-cc input-list mr-20 bg-white">
			<view class="">任务标题：</view>
			<view class="">
				<input type="text" class="bd-gray" value="" placeholder="请输入姓名" />
			</view>
		</view>
		<view class="d-cc input-list bg-white mr-30">
			<view class="">任务主图：</view>
			<view class="bd-gray uploadImg d-cf" @click="upLoad">
				<image src="../../../static/img/add.png" mode="" class="icon40"></image>
			</view>
		</view>
		<view class="d-cc input-list textarea bg-white">
			<view class="d-cc">任务要求：</view>
			<view class="uni-textarea textarea-size bd-gray">
				<textarea placeholder-style="color:#ccc" class="textarea-size" placeholder="输入简介" width="300rpx" height="60rpx" />
				</view>
		</view>
		<!-- task1 -->
		<view class="d-cc input-list mr-40 bg-white">
			<view class="d-bf fw-b c-666">分段任务一：</view>
			<view class="d-bf">
				<input type="text" class="bd-gray bean f-14" value="" placeholder="上传账号信息" />
				<input type="text" class="bd-gray bean2 f-14 ml-30" value="" placeholder="金豆" />金豆
			</view>
		</view>
		<view class="d-cc input-list mr-20 bg-white">
			<view class="">任务时间：</view>
			<view class="bd-gray date">
				<view class="uni-list">
				            <view class="uni-list-cell">
				                <view class="uni-list-cell-db">
				                    <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				                        <view class="uni-input">{{date}}</view>
				                    </picker>
				                </view>
				            </view>
				        </view>
			</view>
		</view>
		<!-- task2 -->
		<view class="d-cc input-list mr-40 bg-white">
			<view class="d-bf fw-b c-666">分段任务二：</view>
			<view class="d-bf">
				<input type="text" class="bd-gray bean f-14" value="" placeholder="上传账号信息" />
				<input type="text" class="bd-gray bean2 f-14 ml-30" value="" placeholder="金豆" />金豆
			</view>
		</view>
		<view class="d-cc input-list mr-20 bg-white">
			<view class="">任务时间：</view>
			<view class="bd-gray date">
				<view class="uni-list">
				            <view class="uni-list-cell">
				                <view class="uni-list-cell-db">
				                    <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange2">
				                        <view class="uni-input">{{date2}}</view>
				                    </picker>
				                </view>
				            </view>
				        </view>
			</view>
		</view>
		<!-- task3 -->
		<view class="d-cc input-list mr-40 bg-white">
			<view class="d-bf fw-b c-666">分段任务三：</view>
			<view class="d-bf">
				<input type="text" class="bd-gray bean f-14" value="" placeholder="上传账号信息" />
				<input type="text" class="bd-gray bean2 f-14 ml-30" value="" placeholder="金豆" />金豆
			</view>
		</view>
		<view class="d-cc input-list mr-20 bg-white">
			<view class="">任务时间：</view>
			<view class="bd-gray date">
				<view class="uni-list">
				            <view class="uni-list-cell">
				                <view class="uni-list-cell-db">
				                    <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange3">
				                        <view class="uni-input">{{date3}}</view>
				                    </picker>
				                </view>
				            </view>
				        </view>
			</view>
		</view>
		<view class="">
			
		</view>
		<view class="d-cc submit-btn input-list textarea bg-white">
			<button type="button" @click="submit" class="bg-main c-white f-14">提交审核</button>
		</view>
		<!-- 任务详情 -->
		<view class="">
			
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
					url:"../../pay-pwd/pay-pwd"
				})
			},
			upLoad(){
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        const uploadTask = uni.uploadFile({
				            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                'user': 'test'
				            },
				            success: (uploadFileRes) => {
				                console.log(uploadFileRes.data);
				            }
				        });
				
				        uploadTask.onProgressUpdate((res) => {
				            console.log('上传进度' + res.progress);
				            console.log('已经上传的数据长度' + res.totalBytesSent);
				            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
				
				            // 测试条件，取消上传任务。
				            if (res.progress > 50) {
				                uploadTask.abort();
				            }
				        });
				    }
				});
			},
			// date
		}
	}
</script>

<script>
	// date
	export default {
	    data() {
	        const currentDate = this.getDate({
	            format: true
	        })
			const currentDate2 = this.getDate({
			    format: true
			})
			const currentDate3 = this.getDate({
			    format: true
			})
			
	        return {
	            title: 'picker',
	            array: ['中国', '美国', '巴西', '日本'],
	            index: 0,
	            date: currentDate,
				date2:currentDate2,
				date3:currentDate3,
	        }
	    },
	    computed: {
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        }
	    },
	    methods: {
	        bindDateChange: function(e) {
	            this.date = e.target.value
	        },bindDateChange2: function(e) {
	            this.date2 = e.target.value
	        },bindDateChange3: function(e) {
	            this.date3 = e.target.value
	        },
	        getDate(type) {
	            const date = new Date();
	            let year = date.getFullYear();
	            let month = date.getMonth() + 1;
	            let day = date.getDate();
	
	            if (type === 'start') {
	                year = year - 60;
	            } else if (type === 'end') {
	                year = year + 2;
	            }
	            month = month > 9 ? month : '0' + month;;
	            day = day > 9 ? day : '0' + day;
	            return `${year}-${month}-${day}`;
	        }
	    }
	}
</script>

<style>
	@import url("../../../static/css/style.css");
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
		margin:60rpx 25rpx 60rpx 0;
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
	
	/* 上传图片 */
	.uploadImg{
		padding: 30rpx;
		margin-right: 240rpx;
	}
	/* 金豆 */
	.bean{
		width: 200rpx;
	}
	.bean2{
		width: 70rpx;
	}
	.date{
		padding: 10rpx 15rpx 10rpx 15rpx;
		margin-right: 150rpx;
	}
</style>
