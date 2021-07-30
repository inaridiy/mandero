"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pkg_index_js"],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"check_divergence\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.check_divergence)\n/* harmony export */ });\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_js__WEBPACK_IMPORTED_MODULE_0__]);\n_index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wa2cvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BrZy9pbmRleC5qcz9lYjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4vaW5kZXhfYmcud2FzbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXhfYmcuanNcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pkg/index.js\n");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"check_divergence\": () => (/* binding */ check_divergence)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n/**\n* @param {number} re\n* @param {number} im\n* @param {number} k\n* @returns {number}\n*/\nfunction check_divergence(re, im, k) {\n    _assertNum(k);\n    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.check_divergence(re, im, k);\n    return ret;\n}\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wa2cvaW5kZXhfYmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGtnL2luZGV4X2JnLmpzPzYxMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL2luZGV4X2JnLndhc20nO1xuXG5mdW5jdGlvbiBfYXNzZXJ0TnVtKG4pIHtcbiAgICBpZiAodHlwZW9mKG4pICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIG51bWJlciBhcmd1bWVudCcpO1xufVxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSByZVxuKiBAcGFyYW0ge251bWJlcn0gaW1cbiogQHBhcmFtIHtudW1iZXJ9IGtcbiogQHJldHVybnMge251bWJlcn1cbiovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfZGl2ZXJnZW5jZShyZSwgaW0sIGspIHtcbiAgICBfYXNzZXJ0TnVtKGspO1xuICAgIHZhciByZXQgPSB3YXNtLmNoZWNrX2RpdmVyZ2VuY2UocmUsIGltLCBrKTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pkg/index_bg.js\n");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "5c9c8d98bb198ef33ada");

/***/ })

}]);