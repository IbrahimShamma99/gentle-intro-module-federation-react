"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["src_bootstrap_tsx"],{

/***/ "../../node_modules/react-dom/client.js":
/*!**********************************************!*\
  !*** ../../node_modules/react-dom/client.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://app1/../../node_modules/react-dom/client.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n\nfunction App() {\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", Object.assign({ className: \"App\" }, { children: \"app1\" }));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack://app1/./src/App.tsx?");

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"../../node_modules/react-dom/client.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./src/store.ts\");\n\n\n\n\n\nconst root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById(\"root\"));\nroot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, Object.assign({ store: _store__WEBPACK_IMPORTED_MODULE_4__.Store }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}) })));\n\n\n//# sourceURL=webpack://app1/./src/bootstrap.tsx?");

/***/ }),

/***/ "./src/reducer.ts":
/*!************************!*\
  !*** ./src/reducer.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   layoutSlice: function() { return /* binding */ layoutSlice; },\n/* harmony export */   toggleTheme: function() { return /* binding */ toggleTheme; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    theme: \"light\",\n};\nconst layoutSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"layout\",\n    initialState,\n    reducers: {\n        toggleTheme: (state, action) => {\n            state.theme = action.payload;\n        },\n    },\n});\nconst { toggleTheme } = layoutSlice.actions;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (layoutSlice);\n\n\n//# sourceURL=webpack://app1/./src/reducer.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: function() { return /* binding */ Store; },\n/* harmony export */   useAppDispatch: function() { return /* binding */ useAppDispatch; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"../../node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/reducer.ts\");\n\n\n\n\nconst Store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({\n        layout: _reducer__WEBPACK_IMPORTED_MODULE_2__.layoutSlice.reducer,\n    }),\n});\n\nconst useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\n\n//# sourceURL=webpack://app1/./src/store.ts?");

/***/ })

}]);