<template>
<uni-shadow-root class="weui-miniprogram-searchbar-searchbar"><view :class="'weui-search-bar '+(extClass)">
    <view class="weui-search-bar__form">
        <view class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="12"></icon>
            <input type="text" class="weui-search-bar__input" :placeholder="placeholder" :value="value" :focus="focus" @blur="inputBlur" @focus="inputFocus" @input="inputChange"></input>
            <view class="weui-icon-clear" v-if="value.length > 0" @click="clearInput">
                <icon type="clear" size="12"></icon>
            </view>
        </view>
        <label class="weui-search-bar__label" :hidden="searchState" @click="showInput">
            <icon class="weui-icon-search" type="search" size="12"></icon>
            <view class="weui-search-bar__text">搜索</view>
        </label>
    </view>
    <view v-if="cancel && searchState" class="weui-search-bar__cancel-btn" @click="hideInput">{{cancelText}}</view>
</view>
<mp-cells :class="'searchbar-result  '+(extClass)" v-if="searchState && result.length > 0">
    <mp-cell v-for="(item,index) in (result)" @click.native="selectResult" :data-index="index" hover>
        <view>{{item.text}}</view>
    </mp-cell>
</mp-cells></uni-shadow-root>
</template>

<script>
import MpCells from '../cells/cells.vue'
import MpCell from '../cell/cell.vue'
global['__wxVueOptions'] = {components:{'mp-cells': MpCells,'mp-cell': MpCell}}

global['__wxRoute'] = 'weui-miniprogram/searchbar/searchbar'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
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
        focus: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String,
            value: '搜索'
        },
        value: {
            type: String,
            value: ''
        },
        search: {
            type: Function,
            value: null
        },
        throttle: {
            type: Number,
            value: 500
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        cancel: {
            type: Boolean,
            value: true
        }
    },
    data: {
        result: []
    },
    lastSearch: Date.now(),
    lifetimes: {
        attached: function attached() {
            if (this.data.focus) {
                this.setData({
                    searchState: true
                });
            }
        }
    },
    methods: {
        clearInput: function clearInput() {
            this.setData({
                value: ''
            });
            this.triggerEvent('clear');
        },
        inputFocus: function inputFocus(e) {
            this.triggerEvent('focus', e.detail);
        },
        inputBlur: function inputBlur(e) {
            this.setData({
                focus: false
            });
            this.triggerEvent('blur', e.detail);
        },
        showInput: function showInput() {
            this.setData({
                focus: true,
                searchState: true
            });
        },
        hideInput: function hideInput() {
            this.setData({
                searchState: false
            });
        },
        inputChange: function inputChange(e) {
            var _this = this;

            this.setData({
                value: e.detail.value
            });
            this.triggerEvent('input', e.detail);
            if (Date.now() - this.lastSearch < this.data.throttle) {
                return;
            }
            if (typeof this.data.search !== 'function') {
                return;
            }
            this.lastSearch = Date.now();
            this.timerId = setTimeout(function () {
                _this.data.search(e.detail.value).then(function (json) {
                    _this.setData({
                        result: json
                    });
                }).catch(function (err) {
                    console.log('search error', err);
                });
            }, this.data.throttle);
        },
        selectResult: function selectResult(e) {
            var index = e.currentTarget.dataset.index;

            var item = this.data.result[index];
            this.triggerEvent('selectresult', { index: index, item: item });
        }
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/searchbar/searchbar']
</script>
<style platform="mp-weixin">
.weui-search-bar{position:relative;padding:8px;display:flex;box-sizing:border-box;background-color:#EDEDED;-webkit-text-size-adjust:100%;align-items:center}.weui-icon-search{margin-right:8px;font-size:14px;vertical-align:top;margin-top:.64em;height:1em;line-height:1em}.weui-icon-search_in-box{position:absolute;left:12px;top:50%;margin-top:-8px}.weui-search-bar__text{display:inline-block;font-size:14px;vertical-align:top}.weui-search-bar__form{position:relative;flex:auto;border-radius:4px;background:#FFFFFF}.weui-search-bar__box{position:relative;padding-left:32px;padding-right:32px;width:100%;box-sizing:border-box;z-index:1}.weui-search-bar__input{height:32px;line-height:32px;font-size:14px;caret-color:#07C160}.weui-icon-clear{position:absolute;top:0;right:0;bottom:0;padding:0 12px;font-size:0}.weui-icon-clear:after{content:"";height:100%;vertical-align:middle;display:inline-block;width:0;overflow:hidden}.weui-search-bar__label{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;border-radius:4px;text-align:center;color:rgba(0,0,0,0.5);background:#FFFFFF;line-height:32px}.weui-search-bar__cancel-btn{margin-left:8px;line-height:32px;color:#576B95;white-space:nowrap}
</style>