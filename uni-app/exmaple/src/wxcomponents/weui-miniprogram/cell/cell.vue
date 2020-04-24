<template>
<uni-shadow-root class="weui-miniprogram-cell-cell"><block v-if="link">
    <view @click="navigateTo" :class="'weui-cell weui-cell_access '+(extClass)+' '+(outerClass)+(inForm ? ' weui-cell-inform' : '')+(inline ? '' : ' .weui-cell_label-block')" :hover-class="hover ? 'weui-cell_active' : ''">
        <view v-if="hasHeader" :class="'weui-cell__hd '+(iconClass)">
            <block v-if="icon">
                <image :src="icon" class="weui-cell__icon" mode="aspectFit"></image>
            </block>
            <block v-else>
                <slot name="icon"></slot>
            </block>
            <block v-if="inForm">
                <block v-if="title"><view class="weui-label">{{title}}</view></block>
                <block v-else>
                    <slot name="title"></slot>
                </block>
            </block>
            <block v-else>
                <block v-if="title">{{title}}</block>
                <block v-else>
                    <slot name="title"></slot>
                </block>
            </block>
        </view>
        <view v-if="hasBody" class="weui-cell__bd">
            <block v-if="value">{{value}}</block>
            <block v-else>
                <slot></slot>
            </block>
        </view>
        <view v-if="hasFooter" :class="'weui-cell__ft weui-cell__ft_in-access '+(footerClass)">
            <block v-if="footer">{{footer}}</block>
            <block v-else>
                <slot name="footer"></slot>
            </block>
        </view>
    </view>
</block>
<block v-else>
    <view @click="navigateTo" :class="'weui-cell '+(showError && error ? 'weui-cell_warn' : '')+' '+(inForm ? 'weui-cell-inform' : '')+' '+(extClass)+' '+(outerClass)" :hover-class="hover ? 'weui-cell_active' : ''">
        <view v-if="hasHeader" :class="'weui-cell__hd '+(iconClass)">
            <block v-if="icon">
                <image :src="icon" class="weui-cell__icon" mode="aspectFit"></image>
            </block>
            <block v-else>
                <slot name="icon"></slot>
            </block>
            <block v-if="inForm">
                <block v-if="title"><view class="weui-label">{{title}}</view></block>
                <block v-else>
                    <slot name="title"></slot>
                </block>
            </block>
            <block v-else>
                <block v-if="title">{{title}}</block>
                <block v-else>
                    <slot name="title"></slot>
                </block>
            </block>
        </view>
        <view v-if="hasBody" :class="'weui-cell__bd '+(bodyClass)">
            <block v-if="value">{{value}}</block>
            <block v-else>
                <slot></slot>
            </block>
        </view>
        <view v-if="hasFooter" :class="'weui-cell__ft '+(footerClass)">
            <block v-if="footer">{{footer}}</block>
            <block v-else>
                <slot name="footer"></slot>
            </block>
            <icon v-if="showError && error" type="warn" size="23" color="#E64340"></icon>
        </view>
    </view>
</block></uni-shadow-root>
</template>

<script>
import MpCells from '../cells/cells.vue'
global['__wxVueOptions'] = {components:{'mp-cells': MpCells}}

global['__wxRoute'] = 'weui-miniprogram/cell/cell'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        hover: {
            type: Boolean,
            value: false
        },
        link: {
            type: Boolean,
            value: false
        },
        extClass: {
            type: String,
            value: ''
        },
        iconClass: {
            type: String,
            value: ''
        },
        bodyClass: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        value: {
            type: String,
            value: ''
        },
        showError: {
            type: Boolean,
            value: false
        },
        prop: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        },
        footerClass: {
            type: String,
            value: ''
        },
        footer: {
            type: String,
            value: ''
        },
        inline: {
            type: Boolean,
            value: true
        },
        hasHeader: {
            type: Boolean,
            value: true
        },
        hasFooter: {
            type: Boolean,
            value: true
        },
        hasBody: {
            type: Boolean,
            value: true
        }
    },
    relations: {
        '../form/form': {
            type: 'ancestor'
        },
        '../cells/cells': {
            type: 'ancestor'
        }
    },
    data: {
        inForm: false
    },
    methods: {
        setError: function setError(error) {
            this.setData({
                error: error || false
            });
        },
        setInForm: function setInForm() {
            this.setData({
                inForm: true
            });
        },
        setOuterClass: function setOuterClass(className) {
            this.setData({
                outerClass: className
            });
        },
        navigateTo: function navigateTo() {
            var _this = this;

            var data = this.data;
            if (data.url && data.link) {
                wx.navigateTo({
                    url: data.url,
                    success: function success(res) {
                        _this.triggerEvent('navigatesuccess', res, {});
                    },
                    fail: function fail(_fail) {
                        _this.triggerEvent('navigateerror', _fail, {});
                    }
                });
            }
        }
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/cell/cell']
</script>
<style platform="mp-weixin">
.weui-cells{position:relative;margin-top:8px;background-color:#FFFFFF;line-height:1.41176471;font-size:17px}.weui-cells:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1rpx solid rgba(0,0,0,0.1);color:rgba(0,0,0,0.1)}.weui-cells:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1rpx solid rgba(0,0,0,0.1);color:rgba(0,0,0,0.1)}.weui-cells__title{margin-top:16px;margin-bottom:3px;padding-left:16px;padding-right:16px;color:rgba(0,0,0,0.5);font-size:14px}.weui-cells_after-title{margin-top:0}.weui-cells__tips{margin-top:3px;color:rgba(0,0,0,0.5);padding-left:16px;padding-right:16px;font-size:14px}.weui-cell{padding:16px;position:relative;display:flex;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1rpx solid rgba(0,0,0,0.1);color:rgba(0,0,0,0.1);left:16px}.weui-cell:first-child:before{display:none}.weui-cell_active{background-color:#ECECEC}.weui-cell_primary{align-items:flex-start}.weui-cell__bd{flex:1}.weui-cell__ft{text-align:right;color:rgba(0,0,0,0.5)}.weui-cell_wxss.weui-cell_wxss:before{display:block}.weui-cell_label-block{display:block}.weui-cell_label-block .weui-label{width:auto;word-break:initial;-webkit-hyphens:auto;hyphens:auto}.weui-cell_vcode{padding-top:0;padding-right:0;padding-bottom:0}.weui-vcode-img{margin-left:5px;height:3.29411765em;vertical-align:middle}.weui-vcode-btn{display:inline-block;height:3.29411765em;margin-left:5px;padding:0 .6em 0 .7em;border-left:1rpx solid rgba(0,0,0,0.1);line-height:3.29411765em;vertical-align:middle;font-size:17px;color:#576B95;white-space:nowrap}button.weui-vcode-btn{min-height:0;background-color:transparent;border:0;outline:0}.weui-vcode-btn:active{color:#767676}
</style>