(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("element-ui"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["element-ui", ], factory);
	else if(typeof exports === 'object')
		exports["form-designer"] = factory(require("element-ui"), require("vue"));
	else
		root["form-designer"] = factory(root["element-ui"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__5f72__, __WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0e1b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1b28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragContainer_vue_vue_type_style_index_0_id_9aa088c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("31e2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragContainer_vue_vue_type_style_index_0_id_9aa088c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragContainer_vue_vue_type_style_index_0_id_9aa088c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragContainer_vue_vue_type_style_index_0_id_9aa088c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "243e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2e99":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "31e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "409c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "48ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoForm_vue_vue_type_style_index_0_id_bd001800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("409c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoForm_vue_vue_type_style_index_0_id_bd001800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoForm_vue_vue_type_style_index_0_id_bd001800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoForm_vue_vue_type_style_index_0_id_bd001800_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5f72":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5f72__;

/***/ }),

/***/ "77e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolItem_vue_vue_type_style_index_0_id_8c4c0518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("243e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolItem_vue_vue_type_style_index_0_id_8c4c0518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolItem_vue_vue_type_style_index_0_id_8c4c0518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolItem_vue_vue_type_style_index_0_id_8c4c0518_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8782":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropGrid_vue_vue_type_style_index_0_id_3bb2dada_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("958b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropGrid_vue_vue_type_style_index_0_id_3bb2dada_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropGrid_vue_vue_type_style_index_0_id_3bb2dada_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropGrid_vue_vue_type_style_index_0_id_3bb2dada_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Designer_vue_vue_type_style_index_0_id_9fe73304_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0e1b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Designer_vue_vue_type_style_index_0_id_9fe73304_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Designer_vue_vue_type_style_index_0_id_9fe73304_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Designer_vue_vue_type_style_index_0_id_9fe73304_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "958b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ebc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignFormItem_vue_vue_type_style_index_0_id_0cf9e5f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2e99");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignFormItem_vue_vue_type_style_index_0_id_0cf9e5f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignFormItem_vue_vue_type_style_index_0_id_0cf9e5f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesignFormItem_vue_vue_type_style_index_0_id_0cf9e5f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a51e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolBox_vue_vue_type_style_index_0_id_595dd045_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d9b3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolBox_vue_vue_type_style_index_0_id_595dd045_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolBox_vue_vue_type_style_index_0_id_595dd045_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolBox_vue_vue_type_style_index_0_id_595dd045_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d9b3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Designer/src/Designer.vue?vue&type=template&id=9fe73304&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-row',[_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"toolbox"},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"header"},[_vm._v("工具箱")])])],1),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('ToolBox')],1)],1)],1)]),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"workspace"},[_c('el-row',{staticClass:"workspace-header"},[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"toolbar"},[_c('el-button-group',[_c('el-button',{attrs:{"size":"mini","title":"新建"},on:{"click":_vm.newHandler}},[_c('i',{staticClass:"fa fa-plus-square"})]),_c('el-button',{attrs:{"size":"mini","title":"保存"},on:{"click":function($event){return _vm.saveHandler('save')}}},[_c('i',{staticClass:"fa fa-save"})]),_c('el-button',{attrs:{"size":"mini","title":"另存为"},on:{"click":function($event){return _vm.saveHandler('saveAs')}}},[_c('i',{staticClass:"fa fa-share-square"})]),_c('el-button',{attrs:{"icon":"el-icon-delete","size":"mini","title":"清空工作区"},on:{"click":_vm.clearHandler}}),_c('el-button',{attrs:{"size":"mini","title":"预览"},on:{"click":_vm.preViewhandler}},[_c('i',{staticClass:"fa fa-stethoscope"})])],1)],1)]),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"toolbar right-align"},[_c('el-radio-group',{attrs:{"size":"mini"},model:{value:(_vm.direction),callback:function ($$v) {_vm.direction=$$v},expression:"direction"}},[_c('el-radio-button',{attrs:{"title":"字段名称和输入框竖向排列","label":"vertical"}},[_c('i',{staticClass:"fa fa-hand-o-down"})]),_c('el-radio-button',{attrs:{"title":"字段名称和输入框横向排列","label":"horizontal"}},[_c('i',{staticClass:"fa fa-hand-o-right"})])],1),_c('span',{staticClass:"clearance"}),_c('el-radio-group',{attrs:{"size":"mini"},model:{value:(_vm.columnWidth),callback:function ($$v) {_vm.columnWidth=$$v},expression:"columnWidth"}},[_c('el-radio-button',{attrs:{"title":"一列布局","label":24}},[_c('i',{staticClass:"fa fa-align-justify"})]),_c('el-radio-button',{attrs:{"title":"两列布局","label":12}},[_c('i',{staticClass:"fa fa-columns"})])],1),_c('span',{staticClass:"clearance"}),_c('el-button',{attrs:{"size":"mini","title":"添加行"},on:{"click":_vm.addNewItemHandler}},[_c('i',{staticClass:"fa fa-indent"})])],1)])],1),_c('el-row',[_c('el-col',{staticClass:"workspace-body",attrs:{"span":24}},[_c('el-form',{attrs:{"label-width":"80"}},[_c('el-row',_vm._l((_vm.formItems),function(item){return _c('el-col',{key:item.id,attrs:{"span":_vm.columnWidth}},[_c('drag-container',{ref:("fi_" + (item.id)),refInFor:true,attrs:{"id":item.id,"direction":_vm.direction},on:{"delete":_vm.deleteHandler,"choosed":_vm.choosedHandler,"up":_vm.upHandler,"down":_vm.downHandler}})],1)}),1)],1)],1)],1)],1)]),_c('el-col',{attrs:{"span":6}},[_c('prop-grid',{attrs:{"configItems":_vm.currentConfigItems}})],1)],1),_c('el-dialog',{attrs:{"title":"预览表单","visible":_vm.preViewDialogVisible,"width":'80%'},on:{"update:visible":function($event){_vm.preViewDialogVisible=$event}}},[_c('auto-form',{attrs:{"formConfig":_vm.formData,"submitName":"保存"},on:{"save":_vm.saveAutoForm}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Designer/src/Designer.vue?vue&type=template&id=9fe73304&scoped=true&

// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__("5f72");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Designer/src/Designer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Designervue_type_script_lang_js_ = ({
  name: "Designer",
  data: () => {
    return {
      direction: "horizontal", //vertical,
      columnWidth: 24,
      formItems: [],
      formItemCount: 0,
      currentConfigItems: [], //设计器对应需要配置的属性清单,
      currentDragContainer: null,
      isSaved: true,
      preViewDialogVisible: false,
      formData: {}
    };
  },
  methods: {
    deleteHandler(id) {
      //删除指定id的表单容器
      let newArray = [];
      for (let i = 0; i < this.formItems.length; i++) {
        let item = this.formItems[i];
        if (item.id === id) continue;
        newArray.push(item);
      }
      this.formItems = newArray;
    },
    //指定的表单容器被选中
    choosedHandler(dragContainer) {
      if (dragContainer === null) {
        this.currentDragContainer = null;
        this.currentConfigItems = [];
      } else {
        this.currentDragContainer = dragContainer;
        this.currentConfigItems = dragContainer.configItems || []; //获取当前选中容器对应的配置项目
      }
    },
    findId(id) {
      for (var i = 0; i < this.formItems.length; i++) {
        if (this.formItems[i].id === id) return i;
      }
      return -1;
    },
    upHandler(dragContainer) {
      var currentIndex = this.findId(dragContainer.id);
      if (currentIndex <= 0) return;
      this.formItems.splice(currentIndex - 1, 0, this.formItems[currentIndex]);
      this.formItems.splice(currentIndex + 1, 1);
    },
    downHandler(dragContainer) {
      var currentIndex = this.findId(dragContainer.id);
      if (currentIndex >= this.formItems.length) return;
      this.formItems.splice(currentIndex + 2, 0, this.formItems[currentIndex]);
      this.formItems.splice(currentIndex, 1);
    },
    //添加新行
    addNewItemHandler() {
      this.isSaved = false;
      this.formItems.push({ id: `_${this.formItemCount}` });
      this.formItemCount += 1;
    },
    reset() {
      this.formItems = [];
      this.formItemCount = 0;
      this.currentConfigItems = [];
      this.currentDragContainer = null;
    },
    newHandler() {
      if (this.isSaved) {
        this.reset();
      } else {
        external_element_ui_["MessageBox"].confirm("当前操作尚未保存，确定要新建表单么？", "温馨提示", {
          type: "warning"
        }).then(this.reset);
      }
    },
    buildForm() {
      this.formData = {
        columns: this.columnWidth === 12 ? 2 : 1,
        labelStyle: this.direction,
        labelWidth: 80,
        formItems: []
      };
      let dbNameCheck = {};
      for (var i = 0; i < this.formItems.length; i++) {
        let comp = this.$refs[`fi_${this.formItems[i].id}`][0];
        var cfg = comp.getConfigData();
        if (!cfg) {
          return false;
        }
        if (cfg === "empty") continue;
        if (dbNameCheck[cfg.dbName]) {
          this.$message({
            showClose: true,
            type: "warning",
            message: `${cfg.dbName}字段出现了多次！请解决后在执行该操作！`
          });
          comp.setError();
          return false;
        } else {
          dbNameCheck[cfg.dbName] = "1";
        }
        this.formData.formItems.push(cfg);
      }
      return true;
    },
    saveHandler(saveType) {
      if (!this.buildForm()) return;
      this.$emit(saveType, this.formData);
    },
    clearHandler() {
      if (this.formItems.length === 0) {
        this.reset();
      }
      external_element_ui_["MessageBox"].confirm("确定要清空工作区么？", "温馨提示", {
        type: "warning"
      }).then(this.reset);
    },
    preViewhandler() {
      if (!this.buildForm()) return;
      this.preViewDialogVisible = true;
    },
    saveAutoForm(data) {
      let json = JSON.stringify(data);
      external_element_ui_["MessageBox"].alert(json, "表单数据", { type: "info" });
    }
  },
  mounted() {
    document.addEventListener("click", () => this.choosedHandler(null));
  }
});

// CONCATENATED MODULE: ./packages/Designer/src/Designer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Designervue_type_script_lang_js_ = (Designervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Designer/src/Designer.vue?vue&type=style&index=0&id=9fe73304&scoped=true&lang=css&
var Designervue_type_style_index_0_id_9fe73304_scoped_true_lang_css_ = __webpack_require__("90c7");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/Designer/src/Designer.vue






/* normalize component */

var component = normalizeComponent(
  src_Designervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9fe73304",
  null
  
)

/* harmony default export */ var Designer = (component.exports);
// CONCATENATED MODULE: ./packages/Designer/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
Designer.install = function (Vue) {
    Vue.component(Designer.name, Designer)
}
// 默认导出组件
/* harmony default export */ var packages_Designer = (Designer);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ToolBox/src/ToolBox.vue?vue&type=template&id=595dd045&scoped=true&
var ToolBoxvue_type_template_id_595dd045_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toolbox-contaner"},[_c('el-row',_vm._l((_vm.tools),function(tool){return _c('el-col',{key:tool.componetName,attrs:{"span":12}},[_c('drag-warper',{attrs:{"componetName":tool.componetName,"configItem":tool.config}},[_c('tool-item',{attrs:{"header":tool.name}},[_c(tool.componetName,{tag:"component",attrs:{"disabled":true}})],1)],1)],1)}),1)],1)}
var ToolBoxvue_type_template_id_595dd045_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/ToolBox/src/ToolBox.vue?vue&type=template&id=595dd045&scoped=true&

// CONCATENATED MODULE: ./packages/toollist.js
//该文件用于注册所有的工具
const tools = [
    {
        name: "普通输入框",
        componetName: "ElInput",
        config: []
    },
    {
        name: "数字输入框",
        componetName: "ElInputNumber",
        config: [{
            field: "max",
            label: "最大值",
            valueType: "number",
            required: true,
            value: "999"
        },
        {
            field: "min",
            label: "最小值",
            valueType: "number",
            required: true,
            value: "0"
        }]
    },
    {
        name: "评分组件",
        componetName: "ElRate",
        config: []
    },
    {
        name: "多选组件",
        componetName: "CtCheckboxGroup",
        config: [{
            field: "items",
            label: "选项列表",
            valueType: "array",
            required: true,
            value: ""
        }]
    },
    {
        name: "单选组件",
        componetName: "CtRadioGroup",
        config: [{
            field: "items",
            label: "选项列表",
            valueType: "array",
            required: true,
            value: ""
        }]
    },
    {
        name: "开关组件",
        componetName: "ElSwitch",
        config: []
    }
];
/* harmony default export */ var toollist = (tools);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ToolBox/src/ToolBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ToolBoxvue_type_script_lang_js_ = ({
  name: "ToolBox",
  data: () => {
    return {
      tools: toollist
    };
  }
});

// CONCATENATED MODULE: ./packages/ToolBox/src/ToolBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ToolBoxvue_type_script_lang_js_ = (ToolBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/ToolBox/src/ToolBox.vue?vue&type=style&index=0&id=595dd045&scoped=true&lang=css&
var ToolBoxvue_type_style_index_0_id_595dd045_scoped_true_lang_css_ = __webpack_require__("a51e");

// CONCATENATED MODULE: ./packages/ToolBox/src/ToolBox.vue






/* normalize component */

var ToolBox_component = normalizeComponent(
  src_ToolBoxvue_type_script_lang_js_,
  ToolBoxvue_type_template_id_595dd045_scoped_true_render,
  ToolBoxvue_type_template_id_595dd045_scoped_true_staticRenderFns,
  false,
  null,
  "595dd045",
  null
  
)

/* harmony default export */ var ToolBox = (ToolBox_component.exports);
// CONCATENATED MODULE: ./packages/ToolBox/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
ToolBox.install = function (Vue) {
    Vue.component(ToolBox.name, ToolBox)
}
// 默认导出组件
/* harmony default export */ var packages_ToolBox = (ToolBox);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/DragWarper/src/DragWarper.vue?vue&type=template&id=fa1b99ba&
var DragWarpervue_type_template_id_fa1b99ba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"draggable":"true"},on:{"dragstart":_vm.dragstartHandler}},[_vm._t("default")],2)}
var DragWarpervue_type_template_id_fa1b99ba_staticRenderFns = []


// CONCATENATED MODULE: ./packages/DragWarper/src/DragWarper.vue?vue&type=template&id=fa1b99ba&

// CONCATENATED MODULE: ./packages/DragHelper.js
function DragHelper() {
    var store = {};
    this.set = function (name, dragWarper) {
        store[name] = dragWarper;
    };

    this.get = function (name) {
        return store[name];
    };

    this.remove = function (name) {
        delete store[name];
    }
}

const dragHelper = new DragHelper();
/* harmony default export */ var packages_DragHelper = (dragHelper);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/DragWarper/src/DragWarper.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var DragWarpervue_type_script_lang_js_ = ({
  name: "DragWarper",
  props: {
    componetName: { type: String, required: true }, //当前包裹对象的componet name
    configItem: { type: Array, required: true } //当前可拖拽控件绑定的可配置的项目
  },
  methods: {
    dragstartHandler(e) {
      let name = `_${Math.random()}`; //生成随机的拖拽控件编号
      packages_DragHelper.set(name, this); //缓存当前被拖拽的包裹对象
      e.dataTransfer.setData("CurrentDragWarper", name); //专递给拖拽接收方，当前被拖拽的对象编号
    },
    getConfigItems() {
      //获取当前可拖拽组件支持的配置项目
      return this.configItem;
    }
  }
});

// CONCATENATED MODULE: ./packages/DragWarper/src/DragWarper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DragWarpervue_type_script_lang_js_ = (DragWarpervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/DragWarper/src/DragWarper.vue





/* normalize component */

var DragWarper_component = normalizeComponent(
  src_DragWarpervue_type_script_lang_js_,
  DragWarpervue_type_template_id_fa1b99ba_render,
  DragWarpervue_type_template_id_fa1b99ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DragWarper = (DragWarper_component.exports);
// CONCATENATED MODULE: ./packages/DragWarper/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
DragWarper.install = function (Vue) {
    Vue.component(DragWarper.name, DragWarper)
}
// 默认导出组件
/* harmony default export */ var packages_DragWarper = (DragWarper);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/DragContainer/src/DragContainer.vue?vue&type=template&id=9aa088c0&scoped=true&
var DragContainervue_type_template_id_9aa088c0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dragable",on:{"mouseenter":_vm.mouseenterHandler,"mouseleave":_vm.mouseleaveHandler}},[_c('div',{class:("dragable-border " + _vm.errorCss),on:{"drop":_vm.dropHandler,"dragover":_vm.dragoverHandler,"click":function($event){$event.stopPropagation();return _vm.choosed($event)}}},[_c('design-form-item',{attrs:{"label":_vm.label,"direction":_vm.direction}},[_c(_vm.componetName,{ref:"instance",tag:"component"})],1)],1),_c('div',{class:("right-btn-group " + _vm.removeBtnCss)},[_c('span',{on:{"click":_vm.upHandler}},[_c('i',{staticClass:"fa fa-arrow-up i-btn-icon",attrs:{"title":"向上"}})]),_c('span',{staticClass:"remove-btn",on:{"click":_vm.deleteHandler}},[_c('i',{staticClass:"fa fa-trash i-btn-icon",attrs:{"title":"移除"}})]),_c('span',{on:{"click":_vm.downHandler}},[_c('i',{staticClass:"fa fa-arrow-down i-btn-icon",attrs:{"title":"向下"}})])])])}
var DragContainervue_type_template_id_9aa088c0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/DragContainer/src/DragContainer.vue?vue&type=template&id=9aa088c0&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/DragContainer/src/DragContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var DragContainervue_type_script_lang_js_ = ({
  name: "DragContainer",
  data: () => {
    return {
      errorCss: "",
      removeBtnCss: "hide",
      componetName: "",
      configItems: []
      //componetInstance: null //当前被包裹对象的实例
    };
  },
  computed: {
    label() {
      for (var i = 0; i < this.configItems.length; i++) {
        var item = this.configItems[i];
        if (item.field === "_label") return item.value;
      }
      return "表单名称";
    }
  },
  props: {
    id: { type: String, required: true },
    direction: { type: String, required: true, default: "horizontal" }
  },
  methods: {
    dropHandler(e) {
      //if (this.componetInstance !== null) {
      if (this.componetName.length !== 0) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "当前空间已经有另外一个组件，不能在添加其他组件！"
        });
        return;
      }
      let dragWarperId = e.dataTransfer.getData("CurrentDragWarper"); //获取当前拖拽的包裹对象编号
      let dragWarper = packages_DragHelper.get(dragWarperId); //从中转中获取当前对应的拖拽对象
      packages_DragHelper.remove(dragWarperId); //移除临时数据
      if (!dragWarper) {
        console.warn("无法获取当前被拖拽对象的信息！");
        return;
      }
      this.componetName = dragWarper.componetName; //获取当前被拖拽对象包裹的componet name
      let custConfigItems = dragWarper.getConfigItems();
      this.configItems = [
        {
          field: "_label",
          label: "表单名称",
          valueType: "string",
          required: true,
          value: "表单名称"
        },
        {
          field: "_dbName",
          label: "字段名称",
          valueType: "string",
          required: true,
          value: ""
        },
        {
          field: "_isRequired",
          label: "是否必填",
          valueType: "bool",
          required: true,
          value: false
        },
        {
          field: "_checkRegex",
          label: "正则验证",
          valueType: "string",
          required: false,
          value: ""
        }
      ].concat(custConfigItems); //获取当前被拖拽对象包裹的componet支持的配置项
      // let componetConstructor = Vue.component(this.componetName); //获取指定componet name的构造函数
      // this.componetInstance = new componetConstructor(); //创建被包裹对象的实例
      // this.componetInstance.$mount(this.$refs.containerBody); //挂载到当前拖拽容器的body中
      e.preventDefault();
    },
    dragoverHandler(e) {
      e.preventDefault();
    },
    mouseenterHandler(e) {
      this.removeBtnCss = "";
    },
    mouseleaveHandler(e) {
      this.removeBtnCss = "hide";
    },
    deleteHandler() {
      this.$emit("delete", this.id);
    },
    choosed(event) {
      this.errorCss = "";
      this.$emit("choosed", this);
    },
    setError() {
      this.errorCss = "highlight";
    },
    upHandler() {
      this.$emit("up", this);
      this.removeBtnCss = "hide";
    },
    downHandler() {
      this.$emit("down", this);
      this.removeBtnCss = "hide";
    },
    getConfigData() {
      if (this.configItems.length === 0) return "empty";
      let data = {
        label: "",
        dbName: "",
        component: this.componetName,
        extra: {}
      };
      for (var i = 0; i < this.configItems.length; i++) {
        let item = this.configItems[i];

        if (item.required) {
          if (item.valueType === "number" && !item.value) {
            if (item.value === 0 || item.value === "0") {
            } else {
              this.errorCss = "highlight";
              this.$message({
                showClose: true,
                type: "warning",
                message: `[${item.label}]值不能为空，当前值为：${item.value}`
              });
              return; //数字验证不通过
            }
          } else if (item.valueType === "string" && !item.value) {
            this.errorCss = "highlight";
            this.$message({
              showClose: true,
              type: "warning",
              message: `[${item.label}]值不能为空，当前值为：${item.value}`
            });
            return; //字符串验证不生效
          }
        }
        switch (item.field) {
          case "_label":
            data.label = item.value;
            break;
          case "_dbName":
            data.dbName = item.value;
            break;
          case "_checkRegex":
            data.regex = item.value;
            break;
          case "_isRequired":
            data.required = item.value;
            break;
          default:
            data.extra[item.field] = item.value;
            break;
        }
      }
      return data;
    }
  },
  watch: {
    configItems: {
      handler(val, oldVal) {
        if (!val instanceof Array) return;
        var componetInstance = this.$refs.instance;
        if (!componetInstance) return;
        val.forEach(ele => {
          componetInstance[ele.field] = ele.value;
          /** TODO: 此处可能会报错
          Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "items"
          的错误，但不影响使用，暂时不解决
          */
        });
      },
      immediate: true,
      deep: true
    }
  }
});

// CONCATENATED MODULE: ./packages/DragContainer/src/DragContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DragContainervue_type_script_lang_js_ = (DragContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/DragContainer/src/DragContainer.vue?vue&type=style&index=0&id=9aa088c0&scoped=true&lang=css&
var DragContainervue_type_style_index_0_id_9aa088c0_scoped_true_lang_css_ = __webpack_require__("1b28");

// CONCATENATED MODULE: ./packages/DragContainer/src/DragContainer.vue






/* normalize component */

var DragContainer_component = normalizeComponent(
  src_DragContainervue_type_script_lang_js_,
  DragContainervue_type_template_id_9aa088c0_scoped_true_render,
  DragContainervue_type_template_id_9aa088c0_scoped_true_staticRenderFns,
  false,
  null,
  "9aa088c0",
  null
  
)

/* harmony default export */ var DragContainer = (DragContainer_component.exports);
// CONCATENATED MODULE: ./packages/DragContainer/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
DragContainer.install = function (Vue) {
    Vue.component(DragContainer.name, DragContainer)
}
// 默认导出组件
/* harmony default export */ var packages_DragContainer = (DragContainer);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/PropGrid/src/PropGrid.vue?vue&type=template&id=3bb2dada&scoped=true&
var PropGridvue_type_template_id_3bb2dada_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",on:{"click":function($event){$event.stopPropagation();return _vm.nothing($event)}}},[_c('el-row',{staticClass:"header"},[_c('el-col',{attrs:{"span":24}},[_vm._v("属性编辑器")])],1),_c('el-row',{staticClass:"body"},[_c('el-col',{attrs:{"span":24}},[_c('el-form',{attrs:{"label-width":"80"}},_vm._l((_vm.configItems),function(item){return _c('el-form-item',{key:item.field},[_c('el-row',[_c('el-col',{attrs:{"span":6}},[_vm._v(_vm._s(item.label))]),_c('el-col',{staticClass:"input-control",attrs:{"span":18}},[(item.valueType==='string')?_c('el-input',{attrs:{"type":"text"},model:{value:(item.value),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"item.value"}}):_vm._e(),(item.valueType==='number')?_c('el-input-number',{attrs:{"type":"text"},model:{value:(item.value),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"item.value"}}):_vm._e(),(item.valueType==='bool')?_c('el-switch',{model:{value:(item.value),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"item.value"}}):_vm._e(),(item.valueType==='array')?[_c('el-row',[_c('el-input',{attrs:{"type":"textarea"},model:{value:(item.value),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"item.value"}})],1),_c('el-row',{staticClass:"notice"},[_vm._v("请采用英文逗号(\",\")分隔不同的选项")])]:_vm._e()],2)],1)],1)}),1)],1)],1)],1)}
var PropGridvue_type_template_id_3bb2dada_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/PropGrid/src/PropGrid.vue?vue&type=template&id=3bb2dada&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/PropGrid/src/PropGrid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
configItems 元素类型 

{
          field: "btnName",
          label: "按钮名称",
          valueType: "string",
          required: true,
          value:""
        }

 */
/* harmony default export */ var PropGridvue_type_script_lang_js_ = ({
  name: "PropGrid",
  props: {
    configItems: { type: Array, required: true }
  },
  methods: {
    nothing() {}
  }
});

// CONCATENATED MODULE: ./packages/PropGrid/src/PropGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_PropGridvue_type_script_lang_js_ = (PropGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/PropGrid/src/PropGrid.vue?vue&type=style&index=0&id=3bb2dada&scoped=true&lang=css&
var PropGridvue_type_style_index_0_id_3bb2dada_scoped_true_lang_css_ = __webpack_require__("8782");

// CONCATENATED MODULE: ./packages/PropGrid/src/PropGrid.vue






/* normalize component */

var PropGrid_component = normalizeComponent(
  src_PropGridvue_type_script_lang_js_,
  PropGridvue_type_template_id_3bb2dada_scoped_true_render,
  PropGridvue_type_template_id_3bb2dada_scoped_true_staticRenderFns,
  false,
  null,
  "3bb2dada",
  null
  
)

/* harmony default export */ var PropGrid = (PropGrid_component.exports);
// CONCATENATED MODULE: ./packages/PropGrid/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
PropGrid.install = function (Vue) {
    Vue.component(PropGrid.name, PropGrid)
}
// 默认导出组件
/* harmony default export */ var packages_PropGrid = (PropGrid);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ToolItem/src/ToolItem.vue?vue&type=template&id=8c4c0518&scoped=true&
var ToolItemvue_type_template_id_8c4c0518_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"header"},[_vm._v(_vm._s(_vm.header))]),_c('div',{staticClass:"body"},[_vm._t("default")],2)])}
var ToolItemvue_type_template_id_8c4c0518_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/ToolItem/src/ToolItem.vue?vue&type=template&id=8c4c0518&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ToolItem/src/ToolItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ToolItemvue_type_script_lang_js_ = ({
  name: "ToolItem",
  props: {
    header: { type: String, required: true, default: "工具名称" }
  }
});

// CONCATENATED MODULE: ./packages/ToolItem/src/ToolItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ToolItemvue_type_script_lang_js_ = (ToolItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/ToolItem/src/ToolItem.vue?vue&type=style&index=0&id=8c4c0518&scoped=true&lang=css&
var ToolItemvue_type_style_index_0_id_8c4c0518_scoped_true_lang_css_ = __webpack_require__("77e3");

// CONCATENATED MODULE: ./packages/ToolItem/src/ToolItem.vue






/* normalize component */

var ToolItem_component = normalizeComponent(
  src_ToolItemvue_type_script_lang_js_,
  ToolItemvue_type_template_id_8c4c0518_scoped_true_render,
  ToolItemvue_type_template_id_8c4c0518_scoped_true_staticRenderFns,
  false,
  null,
  "8c4c0518",
  null
  
)

/* harmony default export */ var ToolItem = (ToolItem_component.exports);
// CONCATENATED MODULE: ./packages/ToolItem/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
ToolItem.install = function (Vue) {
    Vue.component(ToolItem.name, ToolItem)
}
// 默认导出组件
/* harmony default export */ var packages_ToolItem = (ToolItem);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/DesignFormItem/src/DesignFormItem.vue?vue&type=template&id=0cf9e5f8&scoped=true&
var DesignFormItemvue_type_template_id_0cf9e5f8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-item"},[(_vm.direction==='vertical')?_c('el-row',[_c('el-col',{staticClass:"label-vertical",attrs:{"span":24}},[_vm._v(_vm._s(_vm.label))])],1):_vm._e(),_c('el-row',[(_vm.direction==='horizontal')?_c('el-col',{staticClass:"label-horizontal",attrs:{"span":6}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('el-col',{staticClass:"control",attrs:{"span":_vm.direction==='horizontal'?18:24}},[_vm._t("default")],2)],1)],1)}
var DesignFormItemvue_type_template_id_0cf9e5f8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/DesignFormItem/src/DesignFormItem.vue?vue&type=template&id=0cf9e5f8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/DesignFormItem/src/DesignFormItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DesignFormItemvue_type_script_lang_js_ = ({
  name: "DesignFormItem",
  props: {
    direction: { type: String, required: true, default: "horizontal" },
    label: { type: String, required: true }
  }
});

// CONCATENATED MODULE: ./packages/DesignFormItem/src/DesignFormItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DesignFormItemvue_type_script_lang_js_ = (DesignFormItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/DesignFormItem/src/DesignFormItem.vue?vue&type=style&index=0&id=0cf9e5f8&scoped=true&lang=css&
var DesignFormItemvue_type_style_index_0_id_0cf9e5f8_scoped_true_lang_css_ = __webpack_require__("9ebc");

// CONCATENATED MODULE: ./packages/DesignFormItem/src/DesignFormItem.vue






/* normalize component */

var DesignFormItem_component = normalizeComponent(
  src_DesignFormItemvue_type_script_lang_js_,
  DesignFormItemvue_type_template_id_0cf9e5f8_scoped_true_render,
  DesignFormItemvue_type_template_id_0cf9e5f8_scoped_true_staticRenderFns,
  false,
  null,
  "0cf9e5f8",
  null
  
)

/* harmony default export */ var DesignFormItem = (DesignFormItem_component.exports);
// CONCATENATED MODULE: ./packages/DesignFormItem/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
DesignFormItem.install = function (Vue) {
    Vue.component(DesignFormItem.name, DesignFormItem)
}
// 默认导出组件
/* harmony default export */ var packages_DesignFormItem = (DesignFormItem);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/AutoForm/src/AutoForm.vue?vue&type=template&id=bd001800&scoped=true&
var AutoFormvue_type_template_id_bd001800_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{attrs:{"label-width":("" + (_vm.formConfig.labelWidth))}},[_c('el-row',_vm._l((_vm.formItems),function(item){return _c('el-col',{key:item.field,attrs:{"span":_vm.formConfig.columns===1?24:12}},[_c('el-row',{class:((_vm.formConfig.labelStyle) + " " + (item.hasError))},[_c('el-col',{attrs:{"span":_vm.formConfig.labelStyle==='horizontal'?6:24}},[_c('div',{staticClass:"label"},[(item.required)?_c('span',{staticClass:"required"},[_vm._v("*")]):_vm._e(),_vm._v("\n            "+_vm._s(item.label)+"\n          ")])]),_c('el-col',{staticClass:"af-control",attrs:{"span":_vm.formConfig.labelStyle==='horizontal'?18:24}},[_c('componet-loader',{ref:item.field,refInFor:true,attrs:{"component":item.component,"extra":item.extra,"regex":item.regex,"required":item.required},model:{value:(item.value),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"item.value"}})],1),_c('el-col',{staticClass:"af-message-label",attrs:{"span":_vm.formConfig.labelStyle==='horizontal'?6:24}},[_c('div',[_vm._v(" ")])]),_c('el-col',{staticClass:"af-message",attrs:{"span":_vm.formConfig.labelStyle==='horizontal'?18:24}},[_vm._v(_vm._s(item.errorMsg))])],1)],1)}),1),_c('el-row',[_c('el-col',{staticClass:"submit-row",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitHandler}},[_vm._v(_vm._s(_vm.submitName))])],1)],1)],1)}
var AutoFormvue_type_template_id_bd001800_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/AutoForm/src/AutoForm.vue?vue&type=template&id=bd001800&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/AutoForm/src/AutoForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AutoFormvue_type_script_lang_js_ = ({
  name: "AutoForm",
  data: () => {
    return {
      formItems: []
    };
  },
  props: {
    formConfig: { type: Object, required: true },
    submitName: { type: String, required: false, default: "提交" }
  },
  methods: {
    submitHandler() {
      let data = {};
      let hasError = false;
      let $this = this;
      this.formItems.forEach(element => {
        var cls = $this.$refs[element.field];
        if (cls.length === 0) {
          console.warn(`无法找到名为[${element.field}]的控件！`);
          return;
        }
        let checkResult = cls[0].check();
        if (!checkResult.pass) {
          hasError = true;
          element.hasError = "has-error";
          element.errorMsg = checkResult.message.replace("{0}", element.label);
        } else {
          element.hasError = "";
          element.errorMsg = "";
        }
        data[element.field] = element.value;
      });
      if (hasError) {
        this.$alert("当前表单有错误，请解决之后在提交！", {
          title: "温馨提示",
          type: "warning"
        });
        return;
      }
      this.$emit("save", data);
    }
  },
  watch: {
    $props: {
      handler(val, oldVal) {
        this.formItems = [];
        for (var i = 0; i < val.formConfig.formItems.length; i++) {
          var item = val.formConfig.formItems[i];
          this.formItems.push({
            field: item.dbName,
            component: item.component,
            label: item.label,
            value: null,
            extra: item.extra,
            regex: item.regex,
            required: item.required,
            hasError: "",
            errorMsg: ""
          });
        }
      },
      deep: true,
      immediate: true
    }
  }
});

// CONCATENATED MODULE: ./packages/AutoForm/src/AutoForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_AutoFormvue_type_script_lang_js_ = (AutoFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/AutoForm/src/AutoForm.vue?vue&type=style&index=0&id=bd001800&scoped=true&lang=css&
var AutoFormvue_type_style_index_0_id_bd001800_scoped_true_lang_css_ = __webpack_require__("48ac");

// CONCATENATED MODULE: ./packages/AutoForm/src/AutoForm.vue






/* normalize component */

var AutoForm_component = normalizeComponent(
  src_AutoFormvue_type_script_lang_js_,
  AutoFormvue_type_template_id_bd001800_scoped_true_render,
  AutoFormvue_type_template_id_bd001800_scoped_true_staticRenderFns,
  false,
  null,
  "bd001800",
  null
  
)

/* harmony default export */ var AutoForm = (AutoForm_component.exports);
// CONCATENATED MODULE: ./packages/AutoForm/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
AutoForm.install = function (Vue) {
    Vue.component(AutoForm.name, AutoForm)
}
// 默认导出组件
/* harmony default export */ var packages_AutoForm = (AutoForm);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ComponetLoader/src/ComponetLoader.vue?vue&type=template&id=63acc51c&
var ComponetLoadervue_type_template_id_63acc51c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,_vm._b({ref:"instance",tag:"component",model:{value:(_vm.innerValue),callback:function ($$v) {_vm.innerValue=$$v},expression:"innerValue"}},'component',_vm.extra,false))}
var ComponetLoadervue_type_template_id_63acc51c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/ComponetLoader/src/ComponetLoader.vue?vue&type=template&id=63acc51c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ComponetLoader/src/ComponetLoader.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var ComponetLoadervue_type_script_lang_js_ = ({
  name: "ComponetLoader",
  data: () => {
    return {
      innerValue: ""
    };
  },
  props: {
    component: { type: String, required: true }, //组件名称
    value: { required: true },
    extra: { type: Object, required: false }, //当前控件的扩展属性
    regex: { type: String, required: false }, //值的验证表达式
    required: { type: Boolean, required: false } //是否必填
  },
  watch: {
    $props: {
      handler(val, oldVal) {
        this.innerValue = val.value;
      },
      deep: true,
      immediate: true
    },
    innerValue(val, oldVal) {
      this.$emit("input", val);
    }
  },
  methods: {
    check() {
      let returnValue = {
        pass: true,
        message: ""
      };
      if (this.regex) {
        let regex = new RegExp(this.regex, "ig");
        returnValue.pass = regex.test(this.innerValue);
        returnValue.message = "{0}的值不符合规则";
        return returnValue;
      }
      if (!this.required) return returnValue;
      returnValue.pass = false;
      returnValue.message = "{0}的值必填";
      if (this.innerValue === null) return returnValue;
      returnValue.pass = `${this.innerValue}`.length !== 0;
      return returnValue;
    }
  }
});

// CONCATENATED MODULE: ./packages/ComponetLoader/src/ComponetLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ComponetLoadervue_type_script_lang_js_ = (ComponetLoadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/ComponetLoader/src/ComponetLoader.vue





/* normalize component */

var ComponetLoader_component = normalizeComponent(
  src_ComponetLoadervue_type_script_lang_js_,
  ComponetLoadervue_type_template_id_63acc51c_render,
  ComponetLoadervue_type_template_id_63acc51c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ComponetLoader = (ComponetLoader_component.exports);
// CONCATENATED MODULE: ./packages/ComponetLoader/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
ComponetLoader.install = function (Vue) {
    Vue.component(ComponetLoader.name, ComponetLoader)
}
// 默认导出组件
/* harmony default export */ var packages_ComponetLoader = (ComponetLoader);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CtCheckboxGroup/src/CtCheckboxGroup.vue?vue&type=template&id=1515edba&
var CtCheckboxGroupvue_type_template_id_1515edba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cbGroup"},[_c('el-checkbox-group',{attrs:{"min":0,"max":99999},model:{value:(_vm.innerChoosed),callback:function ($$v) {_vm.innerChoosed=$$v},expression:"innerChoosed"}},_vm._l((_vm.innerItems),function(item){return _c('el-checkbox',{key:item,attrs:{"label":item,"disabled":_vm.disabled}},[_vm._v(_vm._s(item))])}),1)],1)}
var CtCheckboxGroupvue_type_template_id_1515edba_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CtCheckboxGroup/src/CtCheckboxGroup.vue?vue&type=template&id=1515edba&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CtCheckboxGroup/src/CtCheckboxGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CtCheckboxGroupvue_type_script_lang_js_ = ({
  name: "CtCheckboxGroup",
  data: () => {
    return {
      innerItems: ["选项一"],
      innerDisabled: false,
      innerChoosed: []
    };
  },
  props: {
    items: { type: String, required: false }, //可选的选项列表, 采用","分隔
    value: { type: String, required: false }, //当前选中的选项，采用","分隔
    disabled: { type: Boolean, required: false, default: false }
  },
  watch: {
    $props: {
      handler(val, oldVal) {
        if (val.items) {
          let items = val.items.split(",");
          this.innerItems = [];
          items.forEach(element => {
            this.innerItems.push(element);
          });
        }
      },
      immediate: true,
      deep: true
    },
    innerChoosed: {
      handler(val, oldVal) {
        this.$emit("input", val.join(","));
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/CtCheckboxGroup/src/CtCheckboxGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_CtCheckboxGroupvue_type_script_lang_js_ = (CtCheckboxGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/CtCheckboxGroup/src/CtCheckboxGroup.vue





/* normalize component */

var CtCheckboxGroup_component = normalizeComponent(
  src_CtCheckboxGroupvue_type_script_lang_js_,
  CtCheckboxGroupvue_type_template_id_1515edba_render,
  CtCheckboxGroupvue_type_template_id_1515edba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CtCheckboxGroup = (CtCheckboxGroup_component.exports);
// CONCATENATED MODULE: ./packages/CtCheckboxGroup/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
CtCheckboxGroup.install = function (Vue) {
    Vue.component(CtCheckboxGroup.name, CtCheckboxGroup)
}
// 默认导出组件
/* harmony default export */ var packages_CtCheckboxGroup = (CtCheckboxGroup);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"843bc406-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CtRadioGroup/src/CtRadioGroup.vue?vue&type=template&id=3fabf132&
var CtRadioGroupvue_type_template_id_3fabf132_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rbGroup"},[_c('el-radio-group',{model:{value:(_vm.innerChoosed),callback:function ($$v) {_vm.innerChoosed=$$v},expression:"innerChoosed"}},_vm._l((_vm.innerItems),function(item){return _c('el-radio',{key:item,attrs:{"label":item,"disabled":_vm.disabled}},[_vm._v(_vm._s(item))])}),1)],1)}
var CtRadioGroupvue_type_template_id_3fabf132_staticRenderFns = []


// CONCATENATED MODULE: ./packages/CtRadioGroup/src/CtRadioGroup.vue?vue&type=template&id=3fabf132&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/CtRadioGroup/src/CtRadioGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var CtRadioGroupvue_type_script_lang_js_ = ({
  name: "CtRadioGroup",
  data: () => {
    return {
      innerItems: ["选项一"],
      innerDisabled: false,
      innerChoosed: []
    };
  },
  props: {
    items: { type: String, required: false }, //可选的选项列表, 采用","分隔
    value: { type: String, required: false }, //当前选中的选项，采用","分隔
    disabled: { type: Boolean, required: false, default: false }
  },
  watch: {
    $props: {
      handler(val, oldVal) {
        if (val.items) {
          let items = val.items.split(",");
          this.innerItems = [];
          items.forEach(element => {
            this.innerItems.push(element);
          });
        }
      },
      immediate: true,
      deep: true
    },
    innerChoosed: {
      handler(val, oldVal) {
        this.$emit("input", val);
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/CtRadioGroup/src/CtRadioGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_CtRadioGroupvue_type_script_lang_js_ = (CtRadioGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/CtRadioGroup/src/CtRadioGroup.vue





/* normalize component */

var CtRadioGroup_component = normalizeComponent(
  src_CtRadioGroupvue_type_script_lang_js_,
  CtRadioGroupvue_type_template_id_3fabf132_render,
  CtRadioGroupvue_type_template_id_3fabf132_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CtRadioGroup = (CtRadioGroup_component.exports);
// CONCATENATED MODULE: ./packages/CtRadioGroup/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
CtRadioGroup.install = function (Vue) {
    Vue.component(CtRadioGroup.name, CtRadioGroup)
}
// 默认导出组件
/* harmony default export */ var packages_CtRadioGroup = (CtRadioGroup);
// CONCATENATED MODULE: ./packages/index.js
// 导入组件












// 存储组件列表
const components = [
    packages_Designer,
    packages_ToolBox,
    packages_DragContainer,
    packages_PropGrid,
    packages_ToolItem,
    packages_DesignFormItem,
    packages_AutoForm,
    packages_ComponetLoader,
    packages_CtCheckboxGroup,
    packages_CtRadioGroup,
    packages_DragWarper
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
    version: "1.0",
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    Designer: packages_Designer,
    ToolBox: packages_ToolBox,
    DragContainer: packages_DragContainer,
    PropGrid: packages_PropGrid,
    ToolItem: packages_ToolItem,
    DesignFormItem: packages_DesignFormItem,
    AutoForm: packages_AutoForm,
    ComponetLoader: packages_ComponetLoader,
    CtCheckboxGroup: packages_CtCheckboxGroup,
    CtRadioGroup: packages_CtRadioGroup,
    DragWarper: packages_DragWarper
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=form-designer.umd.js.map