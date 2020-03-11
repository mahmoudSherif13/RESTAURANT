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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1 */ \"./src/tab1.js\");\n/* harmony import */ var _tab2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2 */ \"./src/tab2.js\");\n/* harmony import */ var _tab3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3 */ \"./src/tab3.js\");\n/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texts */ \"./src/texts.js\");\n\n\n\n\nlet body = document.querySelector(\"body\");\nlet logo = document.createElement(\"h1\");\nlet tab1 = document.createElement(\"button\");\nlet sectab = document.createElement(\"button\");\nlet thirdtab = document.createElement(\"button\");\nlet content = document.getElementById(\"content\");\n\nlogo.classList.add(\"logo\");\nlogo.innerText = \"yes food please\";\nbody.prepend(logo);\n\ntab1.textContent = \"Home\";\nsectab.textContent = \"Menu\";\nthirdtab.textContent = \"About Us\";\n\nfunction clear() {\n  content.innerHTML = \"\";\n  content.appendChild(tab1);\n  content.appendChild(sectab);\n  content.appendChild(thirdtab);\n}\n\ntab1.addEventListener(\"click\", () => {\n  clear();\n  content.append(Object(_tab1__WEBPACK_IMPORTED_MODULE_0__[\"firstTab\"])());\n});\n\nsectab.addEventListener(\"click\", () => {\n  clear();\n  content.append(Object(_tab2__WEBPACK_IMPORTED_MODULE_1__[\"tab2\"])());\n});\n\nthirdtab.addEventListener(\"click\", () => {\n  clear();\n  content.append(Object(_tab3__WEBPACK_IMPORTED_MODULE_2__[\"tab3\"])());\n});\n\ncontent.appendChild(tab1);\ncontent.appendChild(sectab);\ncontent.appendChild(thirdtab);\ncontent.append(Object(_tab1__WEBPACK_IMPORTED_MODULE_0__[\"firstTab\"])());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tab1.js":
/*!*********************!*\
  !*** ./src/tab1.js ***!
  \*********************/
/*! exports provided: firstTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstTab\", function() { return firstTab; });\nfunction firstTab() {\n  let div1 = document.createElement(\"div\");\n  let head1 = document.createElement(\"h1\");\n  head1.innerText = \"Heading 1\";\n  let para1 = document.createElement(\"p\");\n  para1.innerText =\n    \"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\";\n  let para2 = document.createElement(\"p\");\n  para2.innerText =\n    \"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\";\n  div1.appendChild(head1);\n  div1.appendChild(para1);\n  div1.appendChild(para2);\n  return div1;\n}\n\n\n//# sourceURL=webpack:///./src/tab1.js?");

/***/ }),

/***/ "./src/tab2.js":
/*!*********************!*\
  !*** ./src/tab2.js ***!
  \*********************/
/*! exports provided: tab2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tab2\", function() { return tab2; });\n/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texts */ \"./src/texts.js\");\n\nfunction tab2() {\n  let cont = document.createElement(\"div\");\n  let titleView = document.createElement(\"h1\");\n  let firstPView = document.createElement(\"p\");\n  let secondPView = document.createElement(\"p\");\n  let thirdPView = document.createElement(\"p\");\n\n  titleView.innerText = \"Heading 2\";\n  firstPView.innerText = _texts__WEBPACK_IMPORTED_MODULE_0__[\"firstPText\"];\n  secondPView.innerText = _texts__WEBPACK_IMPORTED_MODULE_0__[\"secondPText\"];\n  thirdPView.innerText = _texts__WEBPACK_IMPORTED_MODULE_0__[\"thirdPText\"];\n\n  cont.appendChild(titleView);\n  cont.appendChild(firstPView);\n  cont.appendChild(secondPView);\n  cont.appendChild(thirdPView);\n\n  return cont;\n}\n\n\n//# sourceURL=webpack:///./src/tab2.js?");

/***/ }),

/***/ "./src/tab3.js":
/*!*********************!*\
  !*** ./src/tab3.js ***!
  \*********************/
/*! exports provided: tab3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tab3\", function() { return tab3; });\n/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texts */ \"./src/texts.js\");\n\nfunction tab3() {\n  let cont = document.createElement(\"div\");\n  let titleView = document.createElement(\"h1\");\n  let firstPView = document.createElement(\"p\");\n  let secondPView = document.createElement(\"p\");\n\n  titleView.innerText = \"Heading 3\";\n  firstPView.innerText = _texts__WEBPACK_IMPORTED_MODULE_0__[\"firstPText2\"];\n  secondPView.innerText = _texts__WEBPACK_IMPORTED_MODULE_0__[\"secondPText2\"];\n\n  cont.appendChild(titleView);\n  cont.appendChild(firstPView);\n  cont.appendChild(secondPView);\n\n  return cont;\n}\n\n\n//# sourceURL=webpack:///./src/tab3.js?");

/***/ }),

/***/ "./src/texts.js":
/*!**********************!*\
  !*** ./src/texts.js ***!
  \**********************/
/*! exports provided: firstPText, secondPText, thirdPText, firstPText2, secondPText2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstPText\", function() { return firstPText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondPText\", function() { return secondPText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thirdPText\", function() { return thirdPText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstPText2\", function() { return firstPText2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondPText2\", function() { return secondPText2; });\n// tab 2\nlet firstPText =\n  \"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\";\nlet secondPText =\n  \"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\";\nlet thirdPText =\n  \"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\";\n// tab 3\nlet firstPText2 =\n  \"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\";\nlet secondPText2 =\n  \"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\";\n\n\n//# sourceURL=webpack:///./src/texts.js?");

/***/ })

/******/ });