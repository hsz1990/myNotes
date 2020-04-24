<template>
<uni-shadow-root class="weui-miniprogram-msg-msg"><view :class="'weui-msg '+(extClass)">
  <view class="weui-msg__icon-area">
    <icon :type="type" :size="size" v-if="type"></icon>
    <image :src="icon" mode="aspectFit" v-else-if="icon"></image>
  </view>
  <view class="weui-msg__text-area">
    <view class="weui-msg__title">{{title}}</view>
    <view class="weui-msg__desc">
      {{desc}}
      <slot name="desc" v-if="(!desc)"></slot>
    </view>
    <slot name="extend"></slot>
  </view>
  <view class="weui-msg__opr-area">
    <view class="weui-btn-area">
      <slot name="handle"></slot>
    </view>
  </view>
  <view class="weui-msg__extra-area">
    <view class="weui-footer">
      <slot name="footer"></slot>
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'weui-miniprogram/msg/msg'
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        title: {
            type: String,
            value: ''
        },
        type: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        },
        desc: {
            type: String,
            value: ''
        },
        extClass: {
            type: String,
            value: ''
        },
        size: {
            type: Number,
            value: 64
        }
    },
    data: {}
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/msg/msg']
</script>
<style platform="mp-weixin">
.weui-msg{padding-top:36px;padding:calc(36px + constant(safe-area-inset-top)) constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);padding:calc(36px + env(safe-area-inset-top)) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);text-align:center;line-height:1.4;min-height:100%;box-sizing:border-box;display:flex;flex-direction:column;background-color:#FFFFFF}.weui-msg__link{color:#576B95;display:inline-block;vertical-align:baseline}.weui-msg__icon-area{margin-bottom:32px}.weui-msg__text-area{margin-bottom:32px;padding:0 32px;flex:1;line-height:1.6}.weui-msg__text-area:first-child{padding-top:96px}.weui-msg__title{margin-bottom:5px;font-weight:700;font-size:22px;word-wrap:break-word;word-break:break-all}.weui-msg__desc{font-size:17px;color:rgba(0,0,0,0.9);word-wrap:break-word;word-break:break-all;margin-bottom:16px}.weui-msg__desc-primary{font-size:14px;color:rgba(0,0,0,0.5);word-wrap:break-word;word-break:break-all;margin-bottom:16px}.weui-msg__opr-area{margin-bottom:16px}.weui-msg__opr-area .weui-btn-area{margin:0 16px}.weui-msg__opr-area .weui-btn+.weui-btn{margin-bottom:16px}.weui-msg__opr-area:last-child{margin-bottom:96px}.weui-msg__opr-area+.weui-msg__extra-area{margin-top:48px}.weui-msg__tips-area{margin-bottom:16px;padding:0 40px}.weui-msg__opr-area+.weui-msg__tips-area{margin-bottom:48px}.weui-msg__tips-area:last-child{margin-bottom:64px}.weui-msg__tips{font-size:12px;color:rgba(0,0,0,0.5)}.weui-msg__extra-area{position:static;margin-bottom:24px;font-size:12px;color:rgba(0,0,0,0.5)}.weui-msg__icon-area image{width:190rpx;height:190rpx}
</style>