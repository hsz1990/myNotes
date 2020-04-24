<template>
<uni-shadow-root class="weui-miniprogram-half-screen-dialog-half-screen-dialog"><view :class="show ? 'weui-show' :'weui-hidden'"> 
  <view class="weui-mask init" v-if="mask" @click="close" data-type="tap"></view>
  <view :class="'weui-half-screen-dialog '+(extClass)">
    <view class="weui-half-screen-dialog__hd">
      <view v-if="closabled" class="weui-half-screen-dialog__hd__side" @click="close" data-type="close">
        <view class="weui-icon-btn weui-icon-btn_close">关闭</view>
      </view>
      <view class="weui-half-screen-dialog__hd__main">
        <block v-if="title">
          <text class="weui-half-screen-dialog__title">{{title}}</text>
          <text class="weui-half-screen-dialog__subtitle">{{subTitle}}</text>
        </block>
        <block v-else>
          <view class="weui-half-screen-dialog__title"><slot name="title"></slot></view>
        </block>
      </view>
      <view class="weui-half-screen-dialog__hd__side">
        <view class="weui-icon-btn weui-icon-btn_more">更多</view>
      </view>
    </view>
    <view class="weui-half-screen-dialog__bd">
      <block v-if="title">
        <view class="weui-half-screen-dialog__desc">{{desc}}</view>
        <view class="weui-half-screen-dialog__tips">{{tips}}</view>
      </block>
      <slot name="desc" v-else></slot>
    </view>
    <view class="weui-half-screen-dialog__ft">
      <block v-if="buttons && buttons.length">
        <button v-for="(item,index) in (buttons)" :key="item.text + item.index" :type="item.type" :class="'weui-btn '+(item.className)" :data-index="index" @click="buttonTap">{{item.text}}</button>
        
      </block>
      <slot name="footer" v-else></slot>
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'weui-miniprogram/half-screen-dialog/half-screen-dialog'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        multipleSlots: true,
        addGlobalClass: true
    },
    properties: {
        closabled: {
            type: Boolean,
            value: true
        },
        title: {
            type: String,
            value: ''
        },
        subTitle: {
            type: String,
            value: ''
        },
        extClass: {
            type: String,
            value: ''
        },
        desc: {
            type: String,
            value: ''
        },
        tips: {
            type: String,
            value: ''
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        mask: {
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: false,
            observer: '_showChange'
        },
        buttons: {
            type: Array,
            value: []
        }
    },
    methods: {
        close: function close(e) {
            var type = e.currentTarget.dataset.type;

            if (this.data.maskClosable || type === 'close') {
                this.setData({
                    show: false
                });
                this.triggerEvent('close');
            }
        },
        buttonTap: function buttonTap(e) {
            var index = e.currentTarget.dataset.index;

            this.triggerEvent('buttontap', { index: index, item: this.data.buttons[index] }, {});
        }
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/half-screen-dialog/half-screen-dialog']
</script>
<style platform="mp-weixin">
.weui-half-screen-dialog{position:fixed;left:0;right:0;bottom:0;max-height:75%;z-index:5000;line-height:1.4;background-color:#FFFFFF;border-top-left-radius:12px;border-top-right-radius:12px;overflow:hidden;padding:0 24px;padding:0 calc(24px + constant(safe-area-inset-right)) constant(safe-area-inset-bottom) calc(24px + constant(safe-area-inset-left));padding:0 calc(24px + env(safe-area-inset-right)) env(safe-area-inset-bottom) calc(24px + env(safe-area-inset-left))}.weui-half-screen-dialog__hd{font-size:8px;height:8em;display:flex;align-items:center}.weui-half-screen-dialog__hd .weui-icon-btn{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.weui-half-screen-dialog__hd__side{position:relative;left:-8px}.weui-half-screen-dialog__hd__main{flex:1}.weui-half-screen-dialog__hd__side+.weui-half-screen-dialog__hd__main{text-align:center;padding:0 40px}.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side{right:-8px;left:auto}.weui-half-screen-dialog__hd__main+.weui-half-screen-dialog__hd__side .weui-icon-btn{right:0}.weui-half-screen-dialog__title{display:block;color:rgba(0,0,0,0.9);font-weight:700;font-size:15px}.weui-half-screen-dialog__subtitle{display:block;color:rgba(0,0,0,0.5);font-size:10px}.weui-half-screen-dialog__bd{word-wrap:break-word;-webkit-hyphens:auto;hyphens:auto;overflow-y:auto}.weui-half-screen-dialog__desc{padding-top:4px;font-size:17px;font-weight:700;color:rgba(0,0,0,0.9);line-height:1.4}.weui-half-screen-dialog__tips{padding-top:16px;font-size:14px;color:rgba(0,0,0,0.3);line-height:1.4}.weui-half-screen-dialog__ft{padding:40px 24px 32px;text-align:center}.weui-half-screen-dialog__ft .weui-btn:nth-last-child(n+2),.weui-half-screen-dialog__ft .weui-btn:nth-last-child(n+2)+.weui-btn{display:inline-block;vertical-align:top;margin:0 8px;width:120px}.weui-icon-btn{background-color:transparent;background-repeat:no-repeat;background-position:50% 50%;background-size:100%;border:0;outline:0;font-size:0}.weui-icon-btn_goback{width:12px;height:24px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='24' viewBox='0 0 12 24'%3E  %3Cg fill='none' fill-rule='evenodd' transform='translate(-16 -20)'%3E    %3Cpath fill='%23FFF' d='M0 12C0 5.373 5.367 0 12 0h390c6.628 0 12 5.374 12 12v52H0V12z'/%3E    %3Cpath fill='%23000' fill-opacity='.9' d='M26 39.438L24.955 40.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42l7.666-7.79L26 24.563 18.682 32 26 39.438z'/%3E  %3C/g%3E%3C/svg%3E")}.weui-icon-btn_close{width:24px;height:24px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cdefs%3E    %3Cpath id='33cf2e7b-22e9-42d7-9c56-a9f4a4e03565-a' d='M8 6.943L1.807.75.75 1.807 6.943 8 .75 14.193l1.057 1.057L8 9.057l6.193 6.193 1.057-1.057L9.057 8l6.193-6.193L14.193.75z'/%3E  %3C/defs%3E  %3Cg fill='none' fill-rule='evenodd' transform='translate(-16 -20)'%3E    %3Cpath fill='%23FFF' d='M0 12C0 5.373 5.367 0 12 0h390c6.628 0 12 5.374 12 12v52H0V12z'/%3E    %3Cuse fill='%23000' fill-opacity='.9' transform='translate(20 24)' xlink:href='%2333cf2e7b-22e9-42d7-9c56-a9f4a4e03565-a'/%3E  %3C/g%3E%3C/svg%3E")}.weui-icon-btn_more{width:24px;height:24px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cg fill='none' fill-rule='evenodd' transform='translate(-374 -20)'%3E    %3Cpath fill='%23FFF' d='M0 12C0 5.373 5.367 0 12 0h390c6.628 0 12 5.374 12 12v52H0V12z'/%3E    %3Cpath fill='%23000' fill-opacity='.9' d='M380.75 32a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zm5.25-1.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm7 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5z'/%3E  %3C/g%3E%3C/svg%3E")}.weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-mask,.weui-half-screen-dialog{transition:all .3s}.weui-hidden .weui-mask{visibility:hidden;opacity:0}.weui-hidden .weui-half-screen-dialog{transform:translateY(100%)}.weui-show .weui-mask{opacity:1;visibility:visible}.weui-show .weui-half-screen-dialog{transform:translateY(0%)}
</style>