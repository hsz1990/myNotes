<template>
<uni-shadow-root class="weui-miniprogram-tabbar-tabbar"><view :class="'weui-tabbar '+(extClass)">
  
  <view v-for="(item,index) in (list)" :data-index="index" @click="tabChange" :class="'weui-tabbar__item '+(index === current ? 'weui-bar__item_on' : '')">
    <view style="position: relative;display:inline-block;">
      <image :src="current === index ? item.selectedIconPath : item.iconPath" class="weui-tabbar__icon"></image>
      <mp-badge v-if="item.badge" :content="item.badge" style="position: absolute;top:-2px;left:calc(100% - 3px)"></mp-badge>
    </view>
    <view class="weui-tabbar__label">{{item.text}}</view>
  </view>
</view></uni-shadow-root>
</template>

<script>
import MpBadge from '../badge/badge.vue'
global['__wxVueOptions'] = {components:{'mp-badge': MpBadge}}

global['__wxRoute'] = 'weui-miniprogram/tabbar/tabbar'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        list: {
            type: Array,
            value: []
        },
        current: {
            type: Number,
            value: 0
        }
    },
    methods: {
        tabChange: function tabChange(e) {
            var index = e.currentTarget.dataset.index;

            if (index === this.data.current) {
                return;
            }
            this.setData({
                current: index
            });
            this.triggerEvent('change', { index: index, item: this.data.list[index] });
        }
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/tabbar/tabbar']
</script>
<style platform="mp-weixin">
.weui-tabbar{display:flex;position:relative;z-index:500;background-color:#F7F7F7}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1rpx solid rgba(0,0,0,0.1);color:rgba(0,0,0,0.1)}.weui-tabbar__item{display:block;flex:1;padding:8px 0 4px;padding-bottom:calc(8px + constant(safe-area-inset-bottom));padding-bottom:calc(8px + env(safe-area-inset-bottom));font-size:0;color:rgba(0,0,0,0.5);text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item:first-child{padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}.weui-tabbar__item:last-child{padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#07C160}.weui-tabbar__icon{display:inline-block;width:28px;height:28px;margin-bottom:2px}i.weui-tabbar__icon,.weui-tabbar__icon>i{font-size:24px;color:rgba(0,0,0,0.5)}.weui-tabbar__icon image{width:100%;height:100%}.weui-tabbar__label{color:rgba(0,0,0,0.9);font-size:10px;line-height:1.4}
</style>