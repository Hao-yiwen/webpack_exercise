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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js!./src/iconfont.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js!./src/iconfont.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js */ \"../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/getUrl.js */ \"../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_5_0_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconfont_eot_t_1606648564915__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconfont.eot?t=1606648564915 */ \"./src/iconfont.eot?t=1606648564915\");\n/* harmony import */ var _iconfont_woff_t_1606648564915__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconfont.woff?t=1606648564915 */ \"./src/iconfont.woff?t=1606648564915\");\n/* harmony import */ var _iconfont_ttf_t_1606648564915__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iconfont.ttf?t=1606648564915 */ \"./src/iconfont.ttf?t=1606648564915\");\n/* harmony import */ var _iconfont_svg_t_1606648564915__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iconfont.svg?t=1606648564915 */ \"./src/iconfont.svg?t=1606648564915\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_eot_t_1606648564915__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_eot_t_1606648564915__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { hash: \"#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_woff_t_1606648564915__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_ttf_t_1606648564915__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_svg_t_1606648564915__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { hash: \"#iconfont\" });\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {font-family: \\\"iconfont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* IE9 */\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'), \\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVEAAsAAAAACrAAAAT1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqIDIZRATYCJAMUCwwABCAFhG0HgRIbHwkRVaQDkP08sG0l22TJ80pJ3/LLjEefkRnpPedD35lvFulmJruBjq7ATQVtWueuDktsauSrgL+OvxU2p/n/ZYFFYwmgLPjHP7yL2hmyrSzlZLmLl+FHqAAWwGLk2eNJ7JtUN6L44X6mq6CB5bNvA5xKVlG0zkYD3kCqLhLoQA4wUtRvEc/iQmZk5tNAAFCkqIK0adelDyQIAAWhFZPGjx0OyWGEEEEjkDSGgCsFkI0QIXFrufvYYYP2+aQCdRLAQeQBz+oxpu0otCiuV9yY1/5rBvEatPzsAG7XATyAKgABIBMCnaPAG/IqmpIG5QtoAJAEOwfklWxY3Pj/fwPXQNwWQaSSsn94HHgIADEAlCaqbsH1AvpMJCFAgOIGCHBAcUMEeKC4sXimKEW2mwJwAxkIkHVEm5XnUhE8WBWLKdEimGBNktuUYhcEk0UQXuV85fzTFHHXs/qs8Ih22EF9hyFoR5i5MEpEr05pUPdGGTv3JFnY/ngIPXg9gWy7kcsOXItH+KrH50DAyUJuEqTjfLrX3TcUch5wqio/nxpHH7/fddDlof6FFp/+vhRl1sIjELTDC6yiZb4lU4W1QOck6itAYFFVE0ZGTc67njAkuO1QdvaBoUMqqX/fFQcijkHhq3P6awFEfYgM7OPf7zqYUETy8P6DrtHZ0NwsoB9uapWc/6LMKwDtsE93EYX7KuSI5FjloCtYW34Wf41XAw6/f4rZY+rLQNUb34oHCfGGaiYPsIX8HkYo5+U2/J61Tjo9j48yl3z3ZFC2JlpjQdtcm0tSezR9MBZgkIPRS9n9byH2WVcqK0c+M/SRFfrHJdRY2bgxtlF5Li1oLteKj+hH2jzvwU3M71BUFInPjF/rfHtBh8KieWj8K09QrIrkq6u1KIB47R4x9XEhRxRVTk9MTw9E5YyEDFkpsiXYti9VbWRVuSt+9yNpZddOtVJuLloW1nfMFzs13diki8oz7xTevP18Spc6nVeOaNvmtziG/8aPNugP8S0Nzd0bPD+hfFJ5pxr+uXNT28Zyl8WAr5zHJ4dTU+kZ2aaUKzZ5ttLMQlXfYrYpzqg7rf7Cub21nf/LJdIL57ClX4YONc5cbL5o8NlTx1NblLfw7yrHGx6X17vp0AuNXqGaUZIbLdvMAhXyCiYaL9OJLvtEGuU+fUh+CzbRMT7gcZgHAPiPD/IuAOBfci+dzgDPvuiwiiy7Le2ad7k71Nzkq8TW18y7sn1ftOB/AtILNzwRWrSFipBDwlcCJlF4t0rCd6kILxiwxCtBQQFsmVnA5mM+aidaia1U7bR41F0JyRR4SMhCC/gqIIKhDhggoTlQnsqa6xk7cYHMAxT4IUBYnIGjuAE8i1+0gP8Dkcs/GFjigfJkvyOT0/istWCrOED3BdTz6kSLZnrlE/o0t2KXaPQ3lEgRqPLSnWlwRcnjRHz3taoDJ7zAiTwP55lhEx6x1zyobseicEEvlPe87DKtCdRSaAA6XwDpsZVTpqvM8/FPkJfMWhLR9sP5BomI5geVXIlAN8oV1bYu9dE7r6Ys7gB3K2cLcGJ2NAtJBrbgTSPUU7mQIr45Ktg4h1Xm5auXaSw6RTrCerHVbjpdCT2fY7qWO5IufQde/SetghuLXvrb+pD8mmlq+1aGeOWuC4m+Urt63jzTgkuHcut7dEp9Wh2uXRooqpAm1/E17HYAAA==') format('woff2'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('truetype'), \\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('svg'); /* iOS 4.1- */\\n}\\n\\n.iconfont {\\n  font-family: \\\"iconfont\\\" !important;\\n  font-size: 16px;\\n  font-style: normal;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.icon-icon_baobiaozhongxinreport:before {\\n  content: \\\"\\\\e636\\\";\\n}\\n\\n.icon-icon_chuzhikacards:before {\\n  content: \\\"\\\\e638\\\";\\n}\\n\\n.icon-icon_huiyuanguanlimember:before {\\n  content: \\\"\\\\e639\\\";\\n}\\n\\n.icon-icon_kucunfenbudistribution:before {\\n  content: \\\"\\\\e63b\\\";\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/iconfont.css?../node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js":
/*!************************************************************************!*\
  !*** ../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/getUrl.js":
/*!***************************************************************************!*\
  !*** ../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/getUrl.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/_style-loader@2.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/_style-loader@2.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/_style-loader@2.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/iconfont.css":
/*!**************************!*\
  !*** ./src/iconfont.css ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_2_0_0_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/_style-loader@2.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/_style-loader@2.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_2_0_0_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_2_0_0_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js!./iconfont.css */ \"../node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js!./src/iconfont.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_2_0_0_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_5_0_1_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_5_0_1_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/iconfont.css?");

/***/ }),

/***/ "./src/iconfont.eot?t=1606648564915":
/*!******************************************!*\
  !*** ./src/iconfont.eot?t=1606648564915 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dc9d7efd0a13e5d6f9d9c1d9d47d8fd0.eot\");\n\n//# sourceURL=webpack:///./src/iconfont.eot?");

/***/ }),

/***/ "./src/iconfont.svg?t=1606648564915":
/*!******************************************!*\
  !*** ./src/iconfont.svg?t=1606648564915 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fe26d2733683c9441c2c610b6d8d6abb.svg\");\n\n//# sourceURL=webpack:///./src/iconfont.svg?");

/***/ }),

/***/ "./src/iconfont.ttf?t=1606648564915":
/*!******************************************!*\
  !*** ./src/iconfont.ttf?t=1606648564915 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a3be3555610dd4490a1acded55d581c6.ttf\");\n\n//# sourceURL=webpack:///./src/iconfont.ttf?");

/***/ }),

/***/ "./src/iconfont.woff?t=1606648564915":
/*!*******************************************!*\
  !*** ./src/iconfont.woff?t=1606648564915 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5d87c5ab9029da66c9358bdaa700be5b.woff\");\n\n//# sourceURL=webpack:///./src/iconfont.woff?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconfont.css */ \"./src/iconfont.css\");\n//引入样式文件\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });