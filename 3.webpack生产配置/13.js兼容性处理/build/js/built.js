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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js):\\nError: [BABEL] D:\\\\红宝书\\\\Webpack\\\\13.js兼容性处理\\\\src\\\\js\\\\index.js: Unknown option: .useBuiltIns. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.\\n- Maybe you meant to use\\n\\\"preset\\\": [\\n  [\\\"@babel/preset-env\\\", {\\n  \\\"useBuiltIns\\\": \\\"usage\\\",\\n  \\\"corejs\\\": {\\n    \\\"version\\\": 3\\n  },\\n  \\\"targets\\\": {\\n    \\\"chrome\\\": \\\"60\\\",\\n    \\\"firefox\\\": \\\"60\\\",\\n    \\\"ie\\\": \\\"9\\\"\\n  }\\n}]\\n]\\nTo be a valid preset, its name and options should be wrapped in a pair of brackets\\n    at throwUnknownError (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\validation\\\\options.js:124:27)\\n    at D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\validation\\\\options.js:109:5\\n    at Array.forEach (<anonymous>)\\n    at validateNested (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\validation\\\\options.js:85:21)\\n    at validate (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\validation\\\\options.js:76:10)\\n    at D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\full.js:315:36\\n    at cachedFunction (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\caching.js:62:27)\\n    at cachedFunction.next (<anonymous>)\\n    at evaluateSync (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_gensync@1.0.0-beta.2@gensync\\\\index.js:251:28)\\n    at sync (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_gensync@1.0.0-beta.2@gensync\\\\index.js:89:14)\\n    at loadPresetDescriptor (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\full.js:304:18)\\n    at loadPresetDescriptor.next (<anonymous>)\\n    at recursePresetDescriptors (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\full.js:112:30)\\n    at recursePresetDescriptors.next (<anonymous>)\\n    at D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\full.js:186:21\\n    at Generator.next (<anonymous>)\\n    at loadFullConfig (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\config\\\\full.js:142:5)\\n    at loadFullConfig.next (<anonymous>)\\n    at Function.transform (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_@babel_core@7.12.9@@babel\\\\core\\\\lib\\\\transform.js:25:45)\\n    at transform.next (<anonymous>)\\n    at step (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_gensync@1.0.0-beta.2@gensync\\\\index.js:261:32)\\n    at D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_gensync@1.0.0-beta.2@gensync\\\\index.js:273:13\\n    at async.call.result.err.err (D:\\\\红宝书\\\\Webpack\\\\node_modules\\\\_gensync@1.0.0-beta.2@gensync\\\\index.js:223:11)\");\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });