<template>
<uni-shadow-root class="weui-miniprogram-actionsheet-actionsheet"><view v-if="mask" :class="'weui-mask '+(show ? '' : 'weui-mask_hidden')+' '+(maskClass)" @click="closeActionSheet"></view>
<view :class="'weui-actionsheet '+(show ? 'weui-actionsheet_toggle' : '')+' '+(extClass)">
    
    <block v-if="title"> 
        <view class="weui-actionsheet__title">
            <view class="weui-actionsheet__title-text">{{title}}</view>
        </view>
    </block>
    <slot name="title" v-else></slot>
    <view v-for="(actionItem,index) in (actions)" :key="actionItem.index" :class="(!showCancel && index === actions.length-1 ? 'weui-actionsheet__action' : 'weui-actionsheet__menu')">
        <block v-if="utils.isNotSlot(actionItem)">
            <view v-for="(item,actionIndex) in (actionItem)" :key="item.text" :class="'weui-actionsheet__cell '+(item.type === 'warn' ? 'weui-actionsheet__cell_warn' : '')" :data-groupindex="index" :data-index="actionIndex" :data-value="item.value" @click="buttonTap">
                {{item.text}}
            </view>  
        </block>
        <slot :name="actionItem" v-else></slot>
    </view>
    
    <view class="weui-actionsheet__action" v-if="showCancel">
        <view class="weui-actionsheet__cell" data-type="close" id="iosActionsheetCancel" @click="closeActionSheet">{{cancelText}}</view>
    </view>
</view></uni-shadow-root>
</template>
<wxs module="utils" src="./actionsheet-utils.wxs"></wxs>
<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'weui-miniprogram/actionsheet/actionsheet'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
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
        showCancel: {
            type: Boolean,
            value: true
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        maskClass: {
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
            value: false
        },
        actions: {
            type: Array,
            value: [],
            observer: '_groupChange'
        }
    },
    methods: {
        _groupChange: function _groupChange(e) {
            if (e.length > 0 && typeof e[0] !== 'string' && !(e[0] instanceof Array)) {
                this.setData({
                    actions: [this.data.actions]
                });
            }
        },
        buttonTap: function buttonTap(e) {
            var _e$currentTarget$data = e.currentTarget.dataset,
                value = _e$currentTarget$data.value,
                groupindex = _e$currentTarget$data.groupindex,
                index = _e$currentTarget$data.index;

            this.triggerEvent('actiontap', { value: value, groupindex: groupindex, index: index });
        },
        closeActionSheet: function closeActionSheet(e) {
            var type = e.currentTarget.dataset.type;

            if (this.data.maskClosable || type) {
                this.setData({
                    show: false
                });
                this.triggerEvent('close');
            }
        }
    }
});

/***/ })
/******/ ]);
export default global['__wxComponents']['weui-miniprogram/actionsheet/actionsheet']
</script>
<style platform="mp-weixin">
.weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-actionsheet{position:fixed;left:0;bottom:0;transform:translate(0, 100%);backface-visibility:hidden;z-index:5000;width:100%;background-color:#EAE7E8;transition:transform .3s;border-top-left-radius:12px;border-top-right-radius:12px;overflow:hidden}.weui-actionsheet__title{position:relative;height:56px;padding:0 24px;display:flex;justify-content:center;flex-direction:column;text-align:center;font-size:12px;color:rgba(0,0,0,0.5);line-height:1.4;background:#FFFFFF}.weui-actionsheet__title:before{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1rpx solid rgba(0,0,0,0.1);color:rgba(0,0,0,0.1)}.weui-actionsheet__title .weui-actionsheet__title-text{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.weui-actionsheet__menu{color:rgba(0,0,0,0.9);background-color:#FFFFFF}.weui-actionsheet__action{margin-top:8px;background-color:#FFFFFF;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.weui-actionsheet__cell{position:relative;padding:16px;text-align:center;font-size:17px;line-height:1.41176471}.weui-actionsheet__cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1rpx solid rgba(0,0,0,0.1);color:rgba(0,0,0,0.1)}.weui-actionsheet__cell:active{background-color:#ECECEC}.weui-actionsheet__cell:first-child:before{display:none}.weui-actionsheet__cell_warn{color:#FA5151}.weui-skin_android .weui-actionsheet{position:fixed;left:50%;top:50%;bottom:auto;transform:translate(-50%, -50%);width:274px;box-sizing:border-box;backface-visibility:hidden;background:transparent;transition:transform .3s;border-radius:2px}.weui-skin_android .weui-actionsheet__action{display:none}.weui-skin_android .weui-actionsheet__menu{border-radius:2px;box-shadow:0 6px 30px 0 rgba(0,0,0,0.1)}.weui-skin_android .weui-actionsheet__cell{padding:16px;font-size:17px;line-height:1.41176471;color:rgba(0,0,0,0.9);text-align:left}.weui-skin_android .weui-actionsheet__cell:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.weui-skin_android .weui-actionsheet__cell:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.weui-actionsheet_toggle{transform:translate(0, 0)}.weui-mask.weui-mask_hidden{opacity:0;transform:scale3d(1, 1, 0)}.weui-mask{opacity:1;transform:scale3d(1, 1, 1);transition:all .3s}
</style>