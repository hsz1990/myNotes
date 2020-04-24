<template>
<uni-shadow-root class="weui-miniprogram-gallery-gallery"><view :class="'weui-gallery '+(show ? 'weui-gallery_show' : '')+' '+(extClass)">
  <view class="weui-gallery__info">{{current+1}}/{{currentImgs.length}}</view>
  <swiper class="weui-gallery__img__wrp" @click="hideGallery" :indicator-dots="false" @change="change" :current="current" :autoplay="false" :duration="500">
    <block v-for="(item,index) in (currentImgs)" :key="item.item + '-' +index">
      <swiper-item>
        <image mode="aspectFit" class="weui-gallery__img" :src="item"></image>
      </swiper-item>
    </block>
  </swiper>
  <view class="weui-gallery__opr" v-if="showDelete">
    <navigator href="javascript:" @click="deleteImg" class="weui-gallery__del">删除</navigator>
  </view>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'weui-miniprogram/gallery/gallery'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        imgUrls: {
            type: Array,
            value: [],
            observer: function observer(newVal, oldVal, changedPath) {
                this.setData({ currentImgs: newVal });
            }
        },
        showDelete: {
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: true
        },
        current: {
            type: Number,
            value: 0
        },
        hideOnClick: {
            type: Boolean,
            value: true
        },
        extClass: {
            type: Boolean,
            value: ''
        }
    },
    data: {
        currentImgs: []
    },
    ready: function ready() {
        var data = this.data;
        this.setData({ currentImgs: data.imgUrls });
    },

    methods: {
        change: function change(e) {
            this.setData({
                current: e.detail.current
            });
            this.triggerEvent('change', { current: e.detail.current }, {});
        },
        deleteImg: function deleteImg() {
            var data = this.data;
            var imgs = data.currentImgs;
            var url = imgs.splice(data.current, 1);
            this.triggerEvent('delete', { url: url[0], index: data.current }, {});
            if (imgs.length === 0) {
                this.hideGallery();
                return;
            }
            this.setData({
                current: 0,
                currentImgs: imgs
            });
        },
        hideGallery: function hideGallery() {
            var data = this.data;
            if (data.hideOnClick) {
                this.setData({
                    show: false
                });
                this.triggerEvent('hide', {}, {});
            }
        }
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/gallery/gallery']
</script>
<style platform="mp-weixin">
.weui-gallery{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000000;z-index:1000;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;opacity:0;visibility:hidden;transition:opacity .3s}.weui-gallery_show{display:-webkit-box;display:-webkit-flex;display:flex;visibility:visible;opacity:1}.weui-gallery__img__wrp{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;font-size:0}.weui-gallery__img{background:center center no-repeat;background-size:contain;position:absoulte;width:100%;height:100%}.weui-gallery__opr{background-color:#0D0D0D;color:#FFFFFF;line-height:60px;min-height:60px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);text-align:center}.weui-gallery__opr navigator{color:#FFFFFF}.weui-gallery__del{display:block}.weui-gallery__info{color:#FFFFFF;font-size:17px;line-height:60px;min-height:60px;text-align:center}
</style>