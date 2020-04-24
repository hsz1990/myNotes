<template>
<uni-shadow-root class="weui-miniprogram-checkbox-checkbox"><mp-cell :has-footer="(!multi)" :has-header="multi" @click.native="checkedChange" :footer-class="(!multi ? 'weui-check__ft_in-radio' : '')" :icon-class="multi ? 'weui-check__hd_in-checkbox' : ''" :ext-class="'weui-check__label '+(outerClass)+' '+(extClass)+' '+(!multi ? 'weui-cell_radio' : 'weui-cell_checkbox')">

  <view slot="icon" v-if="multi">
    <checkbox :value="value" :checked="checked" :disabled="disabled" :color="color" class="weui-check"></checkbox>
    
    <icon v-if="(!checked)" size="23" class="weui-icon-checkbox_circle" type="circle"></icon>
    <icon v-else size="23" class="weui-icon-checkbox_success" type="success"></icon>
  </view>
  <view>{{label}}</view>
  <view slot="footer" v-if="(!multi)">
    <radio :value="value" :checked="checked" :disabled="disabled" :color="color" class="weui-check"></radio>
    
    <icon size="16" v-if="checked" class="weui-icon-radio" type="success_no_circle"></icon>
  </view>
</mp-cell></uni-shadow-root>
</template>

<script>
import MpCell from '../cell/cell.vue'
import MpCheckboxGroup from '../checkbox-group/checkbox-group.vue'
global['__wxVueOptions'] = {components:{'mp-cell': MpCell,'mp-checkbox-group': MpCheckboxGroup}}

global['__wxRoute'] = 'weui-miniprogram/checkbox/checkbox'
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        multi: {
            type: Boolean,
            value: true
        },
        checked: {
            type: Boolean,
            value: false
        },
        value: {
            type: String,
            value: ''
        },
        label: {
            type: String,
            value: 'label'
        },
        extClass: {
            type: String,
            value: ''
        }
    },
    data: {},
    relations: {
        '../checkbox-group/checkbox-group': {
            type: 'ancestor',
            linked: function linked(target) {
                this.data.group = target;
            },
            unlinked: function unlinked() {
                this.data.group = null;
            }
        }
    },
    methods: {
        setMulti: function setMulti(multi) {
            this.setData({
                multi: multi
            });
        },
        setOuterClass: function setOuterClass(className) {
            this.setData({
                outerClass: className
            });
        },
        checkedChange: function checkedChange(e) {
            if (this.data.multi) {
                var checked = !this.data.checked;
                this.setData({
                    checked: checked
                });
                if (this.data.group) {
                    this.data.group.checkedChange(checked, this);
                }
            } else {
                var _checked = this.data.checked;
                if (_checked) return;
                this.setData({
                    checked: true
                });
                if (this.data.group) {
                    this.data.group.checkedChange(_checked, this);
                }
            }
            this.triggerEvent('change', { value: this.data.value, checked: this.data.checked });
        }
    }
});

/***/ })

/******/ });
export default global['__wxComponents']['weui-miniprogram/checkbox/checkbox']
</script>
<style platform="mp-weixin">
.weui-cells_checkbox .weui-check__label:before{left:55px}.weui-check__label:active{background-color:#ECECEC}.weui-check{position:absolute;left:-9999px}.weui-check__hd_in-checkbox{padding-right:16px}.weui-cell__ft_in-radio{padding-left:16px}
</style>