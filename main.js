import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()


const domainName = 'http://192.168.3.75:8686/';

Vue.prototype.domainName = domainName;

//从本地获取token
function token() {
	return uni.getStorageSync('token')
}


//get请求	url		路径
//			params	json
//			isLoading	如果需要加载中动画就传true，否则默认false
Vue.prototype.get = function(url, params = {}, isLoading = false) {
	return requestPromise(url, 'GET', params, isLoading)
};
//post请求	url		路径
Vue.prototype.post = function(url, params = {}, isLoading = false) {
	return requestPromise(url, 'POST', params, isLoading)
};
Vue.prototype.postToken = function(url, params = {}, isLoading = false) {
	if (postToken.token = null) {
		console.log("token is null");
		// uni.navigateTo({
		// 	url: '../login/login',
		// })
	}
	params["token"] = uni.getStorageSync('token');
	return requestPromise(url, 'POST', params, isLoading)
};
const that = Vue.prototype;

//method	对应POST或GET请求
const requestPromise = function(url, method, params, isLoading) {
	//isLoading	如果需要加载中动画就传true，否则默认false
	if (isLoading) {
		that.loading("加载中")
	}
	//是否存在token，有就默认传token
	if (token()) {
			params.token = token()
		}
	//创建promise函数	并return给requestPromise函数
	//resolve,结果回调函数
	return new Promise(function(resolve, reject) {
		uni.request({
			url: domainName + url,
			method: method,
			data: params,
			dataType: 'json',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				let code = res.data.code;
				let data = res.data.data;
				if (code === "0010") {
					that.showSuccess(res.data.message)
				}
				//请求成功
				if (code === '1001') {
					//回调成功
					resolve(data);
					uni.hideLoading();

				} else if (code === '0000') {
					uni.removeStorageSync('token');
					that.showSuccess("登录过时");
					uni.hideLoading();
				} else {
					that.showSuccess(res.data.message);
					uni.hideLoading();
				};
			},
			fail: (err) => {
				uni.hideLoading();
				that.showSuccess("获取失败");
			}
		})
	})
}

//上传图片
Vue.prototype.upImg = function(img, success) {
	uni.uploadFile({
		url: domainName + "api/open/common/uploadImageTemp",
		filePath: img,
		method: 'post',
		name: 'imgFile',
		success: (res) => {
			var data = res.data;
			var json = JSON.parse(data);
			success(json.data);
		}
	})
}

//格式化时间
Vue.prototype.formatDateTime = function(inputTime, num) {
	if (inputTime == null) {
		return "";
	}
	var date = new Date(inputTime);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	var t = "";
	switch (num) {
		case 1:
			t = y;
			break;
		case 2:
			t = y + '-' + m;
			break;
		case 3:
			t = y + '-' + m + '-' + d;
			break;
		case 4:
			t = y + '-' + m + '-' + d + ' ' + h;
			break;
		case 5:
			t = y + '-' + m + '-' + d + ' ' + h + ':' + minute;
			break;
		case 6:
			t = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
			break;
		default:
			t = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
			break;
	}
	return t;
};

//仅提示成功
Vue.prototype.showToast = (msg) => {
	uni.showToast({
		title: msg,
		icon: "success",
		duration: 2000,
		mask: true
	});
}

//仅提示无图标
Vue.prototype.noneToast = (msg) => {
	uni.showToast({
		title: msg,
		icon: "none",
		duration: 2000,
		mask: true
	});
}

//加载中
Vue.prototype.loading = (msg) => {
	uni.showLoading({
		title: msg
	});
}

//提示成功
Vue.prototype.showSuccess = (context) => {
	uni.showModal({
		title: '提示',
		content: context,
		showCancel: false
	});
}

//是否确认 有确认回调
Vue.prototype.showError = (title, context, callback) => {
	uni.showModal({
		title: title,
		content: context,
		success: function(res) {
			if (res.confirm) {
				callback()
			}
		}
	});
}

//是否确认 有取消和确认回调
Vue.prototype.confirm = (context, callback, cancel) => {
	uni.showModal({
		title: '提示',
		content: context,
		success: function(res) {
			if (res.confirm) {
				callback()
			} else if (res.cancel) {
				cancel()
			}
		}
	});
}

Vue.prototype.showSelect = (list, callback) => {
	uni.showActionSheet({
		itemList: lsit,
		success: function(res) {
			callback(res)
		}
	});
}


Vue.prototype.merge = (curList, list) => {
	if (!curList) {
		curList = [];
	}
	for (var i = 0; i < list.length; i++) {
		curList.push(list[i]);
	}
	return curList;
}
