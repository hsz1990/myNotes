<template>
<uni-shadow-root class="weui-miniprogram-navigation-bar-navigation-bar"><view :class="'weui-navigation-bar '+(extClass)">
  <view :class="'weui-navigation-bar__placeholder '+(ios ? 'ios' : 'android')" :style="'padding-top: '+(statusBarHeight)+'px;visibility: hidden;'"></view>
  <view :class="'weui-navigation-bar__inner '+(ios ? 'ios' : 'android')" :style="'padding-top: '+(statusBarHeight)+'px; color: '+(color)+';background: '+(background)+';'+(displayStyle)+';'+(innerPaddingRight)+';'+(innerWidth)+';'">

    <view class="weui-navigation-bar__left" :style="leftWidth">
      <block v-if="back">
        <view class="weui-navigation-bar__buttons">
          <view @click="back" class="weui-navigation-bar__button weui-navigation-bar__btn_goback"></view>
        </view>
      </block>
      <block v-else>
        <slot name="left"></slot>
      </block>
    </view>

    <view class="weui-navigation-bar__center">
      <view v-if="loading" class="weui-navigation-bar__loading">
        <view class="weui-loading" :style="'width:'+(size.width)+'rpx;height:'+(size.height)+'rpx;'"></view>
      </view>
      <block v-if="title">
        <text>{{title}}</text>
      </block>
      <block v-else>
        <slot name="center"></slot>
      </block>
    </view>

    <view class="weui-navigation-bar__right">
      <slot name="right"></slot>
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'weui-miniprogram/navigation-bar/navigation-bar'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        multipleSlots: true,
        addGlobalClass: true
    },
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        background: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: ''
        },
        back: {
            type: Boolean,
            value: true
        },
        loading: {
            type: Boolean,
            value: false
        },
        animated: {
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: true,
            observer: '_showChange'
        },
        delta: {
            type: Number,
            value: 1
        }
    },
    data: {
        displayStyle: ''
    },
    attached: function attached() {
        var _this = this;

        var isSupport = !!wx.getMenuButtonBoundingClientRect;
        var rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
        wx.getSystemInfo({
            success: function success(res) {
                var ios = !!(res.system.toLowerCase().search('ios') + 1);
                _this.setData({
                    ios: ios,
                    statusBarHeight: res.statusBarHeight,
                    innerWidth: isSupport ? 'width:' + rect.left + 'px' : '',
                    innerPaddingRight: isSupport ? 'padding-right:' + (res.windowWidth - rect.left) + 'px' : '',
                    leftWidth: isSupport ? 'width:' + (res.windowWidth - rect.left) + 'px' : ''
                });
            }
        });
    },

    methods: {
        _showChange: function _showChange(show) {
            var animated = this.data.animated;
            var displayStyle = '';
            if (animated) {
                displayStyle = 'opacity: ' + (show ? '1' : '0') + ';-webkit-transition:opacity 0.5s;transition:opacity 0.5s;';
            } else {
                displayStyle = 'display: ' + (show ? '' : 'none');
            }
            this.setData({
                displayStyle: displayStyle
            });
        },
        back: function back() {
            var data = this.data;
            wx.navigateBack({
                delta: data.delta
            });
            this.triggerEvent('back', { delta: data.delta }, {});
        }
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/navigation-bar/navigation-bar']
</script>
<style platform="mp-weixin">
page{--height:44px;--right:190rpx}.weui-navigation-bar{overflow:hidden}.weui-navigation-bar .android{--height:48px;--right:222rpx}.weui-navigation-bar__inner{position:fixed;top:0;left:0;z-index:5001;height:var(--height);display:flex;align-items:center;padding-right:var(--right);width:calc(100% - var(--right))}.weui-navigation-bar__inner .weui-navigation-bar__left{position:relative;width:var(--right);padding-left:16px;display:-webkit-box;display:-webkit-flex;display:flex;align-items:center;-webkit-box-pack:center}.weui-navigation-bar__inner .weui-navigation-bar__left .weui-navigation-bar__btn{display:inline-block;vertical-align:middle;background-repeat:no-repeat}.weui-navigation-bar__inner .weui-navigation-bar__left .weui-navigation-bar__btn_goback{font-size:12px;width:1em;height:2em;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='24' viewBox='0 0 12 24'%3E  %3Cpath fill-opacity='.9' fill-rule='evenodd' d='M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z'/%3E%3C/svg%3E");background-position:50% 50%;background-size:cover}.weui-navigation-bar__inner .weui-navigation-bar__left .weui-navigation-bar__btn_goback:active{opacity:.5}.weui-navigation-bar__inner .weui-navigation-bar__center{font-size:17px;text-align:center;position:relative;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.weui-navigation-bar__inner .weui-navigation-bar__loading{font-size:0}.weui-navigation-bar__inner .weui-navigation-bar__loading .weui-loading{margin-left:0}.weui-navigation-bar__inner .weui-navigation-bar__right{margin-right:16px}.weui-navigation-bar__placeholder{height:var(--height);background:#F8F8F8;position:relative;z-index:50}
</style>