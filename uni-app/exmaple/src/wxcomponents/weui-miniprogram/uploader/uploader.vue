<template>
<uni-shadow-root class="weui-miniprogram-uploader-uploader"><view :class="'weui-uploader '+(extClass)">
    <view class="weui-uploader__hd">
      <div class="weui-uploader__overview">
          <view class="weui-uploader__title">{{title}}</view>
          <view class="weui-uploader__info" v-if="maxCount > 1">{{currentFiles.length}}/{{maxCount}}</view>

      </div>
        <view v-if="tips" class="weui-uploader__tips">{{tips}}</view>
        <view v-else><slot name="tips"></slot></view>
    </view>
    <view class="weui-uploader__bd">
        <view class="weui-uploader__files">
            <block v-for="(item,index) in (currentFiles)" :key="item">
                <view v-if="item.error" :data-index="index" @click="previewImage" class="weui-uploader__file weui-uploader__file_status">
                    <image class="weui-uploader__img" :src="item.url" mode="aspectFill"></image>
                    <view class="weui-uploader__file-content">
                        <icon type="warn" size="23" color="#F43530"></icon>
                    </view>
                </view>
                <view v-else-if="item.loading" :data-index="index" @click="previewImage" class="weui-uploader__file weui-uploader__file_status">
                    <image class="weui-uploader__img" :src="item.url" mode="aspectFill"></image>
                    <view class="weui-uploader__file-content">
                    <view class="weui-loading"></view>
                    </view>
                </view>
                <view v-else class="weui-uploader__file" :data-index="index" @click="previewImage">
                    <image class="weui-uploader__img" :src="item.url" mode="aspectFill"></image>
                </view>
            </block>
        </view>
        <view v-if="currentFiles.length < maxCount" class="weui-uploader__input-box">
            <view class="weui-uploader__input" @click="chooseImage"></view>
        </view>
    </view>
</view>
<mp-gallery :hide-on-click="true" :show-delete="showDelete" :show="showPreview" @delete="deletePic" :img-urls="previewImageUrls" :current="previewCurrent"></mp-gallery></uni-shadow-root>
</template>

<script>
import MpGallery from '../gallery/gallery.vue'
global['__wxVueOptions'] = {components:{'mp-gallery': MpGallery}}

global['__wxRoute'] = 'weui-miniprogram/uploader/uploader'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        title: {
            type: String,
            value: '图片上传'
        },
        sizeType: {
            type: Array,
            value: ['original', 'compressed']
        },
        sourceType: {
            type: Array,
            value: ['album', 'camera']
        },
        maxSize: {
            type: Number,
            value: 5 * 1024 * 1024
        },
        maxCount: {
            type: Number,
            value: 1
        },
        files: {
            type: Array,
            value: [],
            observer: function observer(newVal, oldVal, changedP) {
                this.setData({
                    currentFiles: newVal
                });
            }
        },
        select: {
            type: Function,
            value: function value() {}
        },
        upload: {
            type: Function,
            value: null
        },
        tips: {
            type: String,
            value: ''
        },
        extClass: {
            type: String,
            value: ''
        },
        showDelete: {
            type: Boolean,
            value: true
        }
    },
    data: {
        currentFiles: [],
        showPreview: false,
        previewImageUrls: []
    },
    ready: function ready() {},

    methods: {
        previewImage: function previewImage(e) {
            var index = e.currentTarget.dataset.index;

            var previewImageUrls = [];
            this.data.files.map(function (item) {
                previewImageUrls.push(item.url);
            });
            this.setData({
                previewImageUrls: previewImageUrls,
                previewCurrent: index,
                showPreview: true
            });
        },
        chooseImage: function chooseImage(e) {
            var _this = this;

            if (this.uploading) return;
            wx.chooseImage({
                count: this.data.maxCount - this.data.files.length,
                success: function success(res) {
                    var invalidIndex = -1;
                    res.tempFiles.forEach(function (item, index) {
                        if (item.size > _this.data.maxSize) {
                            invalidIndex = index;
                        }
                    });
                    if (typeof _this.data.select === 'function') {
                        var ret = _this.data.select(res);
                        if (ret === false) {
                            return;
                        }
                    }
                    if (invalidIndex >= 0) {
                        _this.triggerEvent('fail', { type: 1, errMsg: 'chooseImage:fail size exceed ' + _this.data.maxSize, total: res.tempFilePaths.length, index: invalidIndex }, {});
                        return;
                    }
                    var mgr = wx.getFileSystemManager();
                    var contents = res.tempFilePaths.map(function (item) {
                        var fileContent = mgr.readFileSync(item);
                        return fileContent;
                    });
                    var obj = { tempFilePaths: res.tempFilePaths, tempFiles: res.tempFiles, contents: contents };
                    _this.triggerEvent('select', obj, {});
                    var files = res.tempFilePaths.map(function (item, i) {
                        return { loading: true, url: 'data:image/jpg;base64,' + wx.arrayBufferToBase64(contents[i]) };
                    });
                    if (!files || !files.length) return;
                    if (typeof _this.data.upload === 'function') {
                        var len = _this.data.files.length;
                        var newFiles = _this.data.files.concat(files);
                        _this.setData({ files: newFiles, currentFiles: newFiles });
                        _this.loading = true;
                        _this.data.upload(obj).then(function (json) {
                            _this.loading = false;
                            if (json.urls) {
                                var oldFiles = _this.data.files;
                                json.urls.forEach(function (url, index) {
                                    oldFiles[len + index].url = url;
                                    oldFiles[len + index].loading = false;
                                });
                                _this.setData({ files: oldFiles, currentFiles: newFiles });
                                _this.triggerEvent('success', json, {});
                            } else {
                                _this.triggerEvent('fail', { type: 3, errMsg: 'upload file fail, urls not found' }, {});
                            }
                        }).catch(function (err) {
                            _this.loading = false;
                            var oldFiles = _this.data.files;
                            res.tempFilePaths.map(function (item, index) {
                                oldFiles[len + index].error = true;
                                oldFiles[len + index].loading = false;
                            });
                            _this.setData({ files: oldFiles, currentFiles: newFiles });
                            _this.triggerEvent('fail', { type: 3, errMsg: 'upload file fail', error: err }, {});
                        });
                    }
                },
                fail: function fail(_fail) {
                    if (_fail.errMsg.indexOf('chooseImage:fail cancel') >= 0) {
                        _this.triggerEvent('cancel', {}, {});
                        return;
                    }
                    _fail.type = 2;
                    _this.triggerEvent('fail', _fail, {});
                }
            });
        },
        deletePic: function deletePic(e) {
            var index = e.detail.index;
            var files = this.data.files;
            var file = files.splice(index, 1);
            this.setData({
                files: files,
                currentFiles: files
            });
            this.triggerEvent('delete', { index: index, item: file[0] });
        }
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/uploader/uploader']
</script>
<style platform="mp-weixin">
.weui-uploader{flex:1}.weui-uploader__hd{padding-bottom:16px}.weui-uploader__overview{display:flex;align-items:center}.weui-uploader__title{flex:1}.weui-uploader__tips{color:rgba(0,0,0,0.3);font-size:14px;line-height:1.4;padding-top:4px}.weui-uploader__info{color:rgba(0,0,0,0.3)}.weui-uploader__bd{margin-bottom:-8px;margin-right:-8px;overflow:hidden}.weui-uploader__file{float:left;margin-right:8px;margin-bottom:8px}.weui-uploader__img{display:block;width:96px;height:96px}.weui-uploader__file_status{position:relative}.weui-uploader__file_status:before{content:" ";position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.5)}.weui-uploader__file-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:#FFFFFF}.weui-uploader__input-box{float:left;position:relative;margin-right:8px;margin-bottom:8px;width:96px;height:96px;box-sizing:border-box;background-color:#EDEDED}.weui-uploader__input-box:before,.weui-uploader__input-box:after{content:" ";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#A3A3A3}.weui-uploader__input-box:before{width:2px;height:32px}.weui-uploader__input-box:after{width:32px;height:2px}.weui-uploader__input-box:active{border-color:#8b8b8b}.weui-uploader__input-box:active:before,.weui-uploader__input-box:active:after{background-color:#8b8b8b}.weui-uploader__input{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}.weui-loading{margin:0 5px;width:20px;height:20px;display:inline-block;vertical-align:middle;animation:weuiLoading 1s steps(12, end) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E")}@keyframes weuiLoading{0%{transform:rotate3d(0, 0, 1, 0deg)}100%{transform:rotate3d(0, 0, 1, 360deg)}}
</style>