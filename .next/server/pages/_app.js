/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/theme/theme.tsx":
/*!**************************************!*\
  !*** ./src/contexts/theme/theme.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/theme */ \"./src/styles/theme.ts\");\n\n\nvar _jsxFileName = \"/home/samir/Documentos/git/workCar/src/contexts/theme/theme.tsx\";\n\n\n\n\n\nconst GlobalStyle = () => {\n  // const color = {\n  //   primary: useColorModeValue('secundary', 'primary'),\n  // };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        content: \"width=device-width, initial-scale=1\",\n        name: \"viewport\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {\n      styles: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`\n          html {\n            font-size: 62.5%;\n            scroll-behavior: smooth;\n\n            @media (max-width: 1170px) {\n              font-size: 59%;\n            }\n\n            @media (max-width: 1085px) {\n              font-size: 55%;\n            }\n\n            @media (max-width: 768px) {\n              font-size: 48%;\n            }\n          }\n\n          body {\n            text-rendering: optimizeLegibility;\n            -webkit-font-smoothing: antialiased;\n\n            &::-webkit-scrollbar {\n              width: 8px;\n            }\n\n            &::-webkit-scrollbar-track {\n              background: rgb(26, 26, 26);\n            }\n\n            &::-webkit-scrollbar-thumb {\n              background-color: #dddddd;\n              border-radius: 20px;\n            }\n          }\n\n          a {\n            text-decoration: none !important;\n            &:focus {\n              box-shadow: none !important;\n            }\n          }\n\n          h2 {\n            font-family: \"Inter\", sans-serif !important;\n          }\n\n          button {\n            &:focus {\n              box-shadow: none !important;\n            }\n\n            &:active {\n              transform: scale(0.9);\n            }\n          }\n\n          #imgWorks {\n            border-radius: 5px;\n          }\n\n          .work {\n            &:hover {\n              .workContent {\n                opacity: 1;\n                visibility: visible;\n                transition: all 200ms ease-in-out;\n              }\n            }\n\n            &::before {\n              content: \"\";\n              position: absolute;\n              display: block;\n              top: -10px;\n              right: 20px;\n\n              width: 30rem;\n              height: 1rem;\n\n              border-radius: 1rem 1rem 0 0;\n            }\n          }\n\n          .active::after {\n            content: \"\";\n            position: absolute;\n            display: block;\n\n            width: 3.5rem;\n            height: 0.15rem;\n\n            border-radius: 1rem;\n          }\n        `\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst ThemeContainer = ({\n  children\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n    theme: styles_theme__WEBPACK_IMPORTED_MODULE_4__.default,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, undefined), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 120,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2NvbnRleHRzL3RoZW1lL3RoZW1lLnRzeD9mYjY2Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3NzIiwiVGhlbWVDb250YWluZXIiLCJjaGlsZHJlbiIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFDeEI7QUFDQTtBQUNBO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQU0sZUFBTyxFQUFDLHFDQUFkO0FBQW9ELFlBQUksRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRSw4REFBQyxrREFBRDtBQUNFLFlBQU0sRUFBRUMsK0NBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvRk07QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLGtCQURGO0FBeUdELENBOUdEOztBQWdIQSxNQUFNQyxjQUF3QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ2pELHNCQUNFLDhEQUFDLDREQUFEO0FBQWdCLFNBQUssRUFBRUMsaURBQXZCO0FBQUEsNEJBQ0UsOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdELFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQVBEOztBQVNBLCtEQUFlRCxjQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL3RoZW1lL3RoZW1lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBDU1NSZXNldCwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwic3R5bGVzL3RoZW1lXCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gKCkgPT4ge1xuICAvLyBjb25zdCBjb2xvciA9IHtcbiAgLy8gICBwcmltYXJ5OiB1c2VDb2xvck1vZGVWYWx1ZSgnc2VjdW5kYXJ5JywgJ3ByaW1hcnknKSxcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgbmFtZT1cInZpZXdwb3J0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDU1NSZXNldCAvPlxuICAgICAgPEdsb2JhbFxuICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDU5JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODVweCkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDU1JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDglO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI2LCAyNiwgMjYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjaW1nV29ya3Mge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53b3JrIHtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAud29ya0NvbnRlbnQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG5cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWN0aXZlOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuMTVyZW07XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFRoZW1lQ29udGFpbmVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUNvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/theme/theme.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contexts_theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/theme/theme */ \"./src/contexts/theme/theme.tsx\");\n\nvar _jsxFileName = \"/home/samir/Documentos/git/workCar/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(contexts_theme_theme__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMseURBQUQ7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCwrREFBZUYsS0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZUNvbnRhaW5lciBmcm9tICdjb250ZXh0cy90aGVtZS90aGVtZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRhaW5lcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.createBreakpoints)({\n  sm: \"580px\",\n  md: \"770px\",\n  lg: \"960px\",\n  xl: \"1200px\",\n  \"2xl\": \"1536px\"\n});\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n  colors: {\n    primary: \"#ffd100\",\n    secundary: \"#ffc600\",\n    gray: {\n      800: \"#000814\"\n    }\n  },\n  fonts: {\n    body: \"Quicksand,system-ui, sans-serif\",\n    heading: \"Quicksand, system-ui, Georgia, serif\",\n    mono: \"Menlo, monospace\"\n  },\n  fontSizes: {\n    xs: \"1.2rem\",\n    sm: \"1.4rem\",\n    md: \"1.6rem\",\n    lg: \"1.8rem\",\n    xl: \"2rem\",\n    \"2xl\": \"2.4rem\",\n    \"3xl\": \"3rem\",\n    \"4xl\": \"3.6rem\",\n    \"5xl\": \"4rem\",\n    \"6xl\": \"4.2rem\",\n    \"7xl\": \"4.8rem\"\n  },\n  breakpoints\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL3N0eWxlcy90aGVtZS50cz85NGNlIl0sIm5hbWVzIjpbImJyZWFrcG9pbnRzIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInRoZW1lIiwiZXh0ZW5kVGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2VjdW5kYXJ5IiwiZ3JheSIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJtb25vIiwiZm9udFNpemVzIiwieHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MseUVBQWlCLENBQUM7QUFDcENDLElBQUUsRUFBRSxPQURnQztBQUVwQ0MsSUFBRSxFQUFFLE9BRmdDO0FBR3BDQyxJQUFFLEVBQUUsT0FIZ0M7QUFJcENDLElBQUUsRUFBRSxRQUpnQztBQUtwQyxTQUFPO0FBTDZCLENBQUQsQ0FBckM7QUFRQSxNQUFNQyxLQUFLLEdBQUdDLDZEQUFXLENBQUM7QUFDeEJDLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsU0FESDtBQUVOQyxhQUFTLEVBQUUsU0FGTDtBQUlOQyxRQUFJLEVBQUU7QUFDSixXQUFLO0FBREQ7QUFKQSxHQURnQjtBQVV4QkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxpQ0FERDtBQUVMQyxXQUFPLEVBQUUsc0NBRko7QUFHTEMsUUFBSSxFQUFFO0FBSEQsR0FWaUI7QUFnQnhCQyxXQUFTLEVBQUU7QUFDVEMsTUFBRSxFQUFFLFFBREs7QUFFVGYsTUFBRSxFQUFFLFFBRks7QUFHVEMsTUFBRSxFQUFFLFFBSEs7QUFJVEMsTUFBRSxFQUFFLFFBSks7QUFLVEMsTUFBRSxFQUFFLE1BTEs7QUFNVCxXQUFPLFFBTkU7QUFPVCxXQUFPLE1BUEU7QUFRVCxXQUFPLFFBUkU7QUFTVCxXQUFPLE1BVEU7QUFVVCxXQUFPLFFBVkU7QUFXVCxXQUFPO0FBWEUsR0FoQmE7QUE4QnhCTDtBQTlCd0IsQ0FBRCxDQUF6QjtBQWlDQSwrREFBZU0sS0FBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVCcmVha3BvaW50cyB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCI7XG5cbmNvbnN0IGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoe1xuICBzbTogXCI1ODBweFwiLFxuICBtZDogXCI3NzBweFwiLFxuICBsZzogXCI5NjBweFwiLFxuICB4bDogXCIxMjAwcHhcIixcbiAgXCIyeGxcIjogXCIxNTM2cHhcIixcbn0pO1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogXCIjZmZkMTAwXCIsXG4gICAgc2VjdW5kYXJ5OiBcIiNmZmM2MDBcIixcblxuICAgIGdyYXk6IHtcbiAgICAgIDgwMDogXCIjMDAwODE0XCIsXG4gICAgfSxcbiAgfSxcblxuICBmb250czoge1xuICAgIGJvZHk6IFwiUXVpY2tzYW5kLHN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLFxuICAgIGhlYWRpbmc6IFwiUXVpY2tzYW5kLCBzeXN0ZW0tdWksIEdlb3JnaWEsIHNlcmlmXCIsXG4gICAgbW9ubzogXCJNZW5sbywgbW9ub3NwYWNlXCIsXG4gIH0sXG5cbiAgZm9udFNpemVzOiB7XG4gICAgeHM6IFwiMS4ycmVtXCIsXG4gICAgc206IFwiMS40cmVtXCIsXG4gICAgbWQ6IFwiMS42cmVtXCIsXG4gICAgbGc6IFwiMS44cmVtXCIsXG4gICAgeGw6IFwiMnJlbVwiLFxuICAgIFwiMnhsXCI6IFwiMi40cmVtXCIsXG4gICAgXCIzeGxcIjogXCIzcmVtXCIsXG4gICAgXCI0eGxcIjogXCIzLjZyZW1cIixcbiAgICBcIjV4bFwiOiBcIjRyZW1cIixcbiAgICBcIjZ4bFwiOiBcIjQuMnJlbVwiLFxuICAgIFwiN3hsXCI6IFwiNC44cmVtXCIsXG4gIH0sXG5cbiAgYnJlYWtwb2ludHMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();