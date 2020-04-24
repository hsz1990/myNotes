<template>
<uni-shadow-root class="weui-miniprogram-dialog-dialog"><view @click="close" :class="'weui-mask '+(!show ? 'weui-mask_hidden' : '')" v-if="mask"></view>
<view v-if="show" @click="close" :class="'weui-dialog__wrp '+(extClass)">
    <view class="weui-dialog" @click.stop.prevent="stopEvent">
      <view class="weui-dialog__hd">
        <view class="weui-dialog__title">{{title}}
          <slot name="title"></slot>
        </view>
      </view>
      <view class="weui-dialog__bd">
        <slot></slot>
      </view>
      <view class="weui-dialog__ft">
        <block v-if="buttons && buttons.length">
          <view v-for="(item,index) in (buttons)" :class="'weui-dialog__btn '+(item.className)+' '+(item.extClass)" :data-index="index" @click="buttonTap">{{item.text}}</view>
          
        </block>
        <slot name="footer" v-else></slot>
      </view>
    </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'weui-miniprogram/dialog/dialog'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        multipleSlots: true,
        addGlobalClass: true
    },
    properties: {
        title: {
            type: String,
            value: ''
        },
        extClass: {
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
    data: {
        innerShow: false
    },
    ready: function ready() {
        var buttons = this.data.buttons;
        var len = buttons.length;
        buttons.forEach(function (btn, index) {
            if (len === 1) {
                btn.className = 'weui-dialog__btn_primary';
            } else if (index === 0) {
                btn.className = 'weui-dialog__btn_default';
            } else {
                btn.className = 'weui-dialog__btn_primary';
            }
        });
        this.setData({
            buttons: buttons
        });
    },

    methods: {
        buttonTap: function buttonTap(e) {
            var index = e.currentTarget.dataset.index;

            this.triggerEvent('buttontap', { index: index, item: this.data.buttons[index] }, {});
        },
        close: function close() {
            var data = this.data;
            if (!data.maskClosable) return;
            this.setData({
                show: false
            });
            this.triggerEvent('close', {}, {});
        },
        stopEvent: function stopEvent() {}
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/dialog/dialog']
</script>
<style platform="mp-weixin">
.weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-dialog__wrp{position:fixed;z-index:5000;top:16px;bottom:16px;left:16px;right:16px;text-align:center;font-size:0;display:-webkit-box;display:-webkit-flex;display:flex;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.weui-dialog__wrp .weui-dialog{max-height:100%}.weui-dialog{background-color:#FFFFFF;text-align:center;border-radius:12px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;max-height:90%}.weui-dialog__hd{padding:32px 24px 16px}.weui-dialog__title{font-weight:700;font-size:17px;line-height:1.4}.weui-dialog__bd{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0 24px;margin-bottom:32px;min-height:40px;font-size:17px;line-height:1.4;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto;color:rgba(0,0,0,0.5)}.weui-dialog__bd:first-child{padding:32px 24px 0;font-weight:700;color:rgba(0,0,0,0.9);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.weui-dialog__ft{position:relative;line-height:64px;min-height:64px;font-size:17px;display:flex}.weui-dialog__ft:after{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1rpx solid rgba(0,0,0,0.1);color:rgba(0,0,0,0.1)}.weui-dialog__btn{display:block;flex:1;color:#576B95;font-weight:700;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#ECECEC}.weui-dialog__btn:after{content:" ";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1rpx solid rgba(0,0,0,0.1);color:rgba(0,0,0,0.1)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:rgba(0,0,0,0.9)}@media screen and (min-width:352px){.weui-dialog{width:320px;margin:0 auto}}.weui-dialog.weui-dialog_hidden{opacity:0;transform:scale3d(1, 1, 0)}.weui-dialog{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1);transition:all .3s ease-in}.weui-mask.weui-mask_hidden{opacity:0;transform:scale3d(1, 1, 0)}.weui-mask{opacity:1;transform:scale3d(1, 1, 1);transition:all .3s ease-in}
</style>