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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/theme */ \"./src/styles/theme.ts\");\n\n\nvar _jsxFileName = \"/home/samir/Documentos/git/workCar/src/contexts/theme/theme.tsx\";\n\n\n\n\n\nconst GlobalStyle = () => {\n  // const color = {\n  //   primary: useColorModeValue('secundary', 'primary'),\n  // };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        content: \"width=device-width, initial-scale=1\",\n        name: \"viewport\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {\n      styles: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`\n          html {\n            font-size: 62.5%;\n            scroll-behavior: smooth;\n\n            @media (max-width: 1170px) {\n              font-size: 59%;\n            }\n\n            @media (max-width: 1085px) {\n              font-size: 55%;\n            }\n\n            @media (max-width: 768px) {\n              font-size: 48%;\n            }\n          }\n\n          body {\n            text-rendering: optimizeLegibility;\n            -webkit-font-smoothing: antialiased;\n\n            &::-webkit-scrollbar {\n              width: 8px;\n            }\n\n            &::-webkit-scrollbar-track {\n              background: rgb(26, 26, 26);\n            }\n\n            &::-webkit-scrollbar-thumb {\n              background-color: #b1843f;\n              border-radius: 20px;\n            }\n\n            overflow-x: hidden;\n          }\n\n          a {\n            text-decoration: none !important;\n            &:focus {\n              box-shadow: none !important;\n            }\n          }\n\n          h2 {\n            font-family: \"Rubik\", sans-serif !important;\n          }\n\n          button {\n            &:hover {\n              background: none !important;\n            }\n\n            &:focus {\n              box-shadow: none !important;\n            }\n\n            &:active {\n              transform: scale(0.9);\n            }\n          }\n\n          .btn {\n            transition: all 300ms ease-in-out;\n\n            &::before {\n              content: \"\";\n              position: absolute;\n              width: 0;\n              height: 100%;\n\n              top: 0;\n              left: 0;\n\n              border-radius: 5px;\n              transition: all 300ms ease-in-out;\n\n              z-index: -1;\n              background-color: #ffd100;\n            }\n\n            &:hover::before {\n              width: 100%;\n            }\n          }\n\n          #imgCar {\n            border-radius: 15px;\n          }\n\n          .active::after {\n            content: \"\";\n            position: absolute;\n            display: block;\n\n            width: 3.5rem;\n            height: 0.15rem;\n\n            border-radius: 1rem;\n          }\n        `\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst ThemeContainer = ({\n  children\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n    theme: styles_theme__WEBPACK_IMPORTED_MODULE_4__.default,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, undefined), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 127,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2NvbnRleHRzL3RoZW1lL3RoZW1lLnRzeD9mYjY2Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3NzIiwiVGhlbWVDb250YWluZXIiLCJjaGlsZHJlbiIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFDeEI7QUFDQTtBQUNBO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQU0sZUFBTyxFQUFDLHFDQUFkO0FBQW9ELFlBQUksRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRSw4REFBQyxrREFBRDtBQUNFLFlBQU0sRUFBRUMsK0NBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRHTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUEsa0JBREY7QUFnSEQsQ0FySEQ7O0FBdUhBLE1BQU1DLGNBQXdCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDakQsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZ0IsU0FBSyxFQUFFQyxpREFBdkI7QUFBQSw0QkFDRSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR0QsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBUEQ7O0FBU0EsK0RBQWVELGNBQWYiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdGhlbWUvdGhlbWUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENTU1Jlc2V0LCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJzdHlsZXMvdGhlbWVcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGNvbG9yID0ge1xuICAvLyAgIHByaW1hcnk6IHVzZUNvbG9yTW9kZVZhbHVlKCdzZWN1bmRhcnknLCAncHJpbWFyeScpLFxuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiBuYW1lPVwidmlld3BvcnRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENTU1Jlc2V0IC8+XG4gICAgICA8R2xvYmFsXG4gICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTklO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTA4NXB4KSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTUlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0OCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjYsIDI2LCAyNik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IxODQzZjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICNpbWdDYXIge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWN0aXZlOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuMTVyZW07XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFRoZW1lQ29udGFpbmVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUNvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/theme/theme.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contexts_theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/theme/theme */ \"./src/contexts/theme/theme.tsx\");\n\nvar _jsxFileName = \"/home/samir/Documentos/git/workCar/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(contexts_theme_theme__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMseURBQUQ7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCwrREFBZUYsS0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZUNvbnRhaW5lciBmcm9tIFwiY29udGV4dHMvdGhlbWUvdGhlbWVcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGFpbmVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.createBreakpoints)({\n  sm: \"580px\",\n  md: \"770px\",\n  lg: \"960px\",\n  xl: \"1200px\",\n  \"2xl\": \"1536px\"\n});\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n  colors: {\n    primary: \"#b28937\",\n    secundary: \"#ffd100\",\n    // primary: \"#ffd100\",\n    // secundary: \"#FFC804\",\n    gray: {\n      800: \"#0E0D10\"\n    },\n    white: \"#fafafa\"\n  },\n  fonts: {\n    body: \"Quicksand,system-ui, sans-serif\",\n    heading: \"Quicksand, system-ui, Georgia, serif\",\n    mono: \"Menlo, monospace\"\n  },\n  fontSizes: {\n    xs: \"1.2rem\",\n    sm: \"1.4rem\",\n    md: \"1.6rem\",\n    lg: \"1.8rem\",\n    xl: \"2rem\",\n    \"2xl\": \"2.4rem\",\n    \"3xl\": \"3rem\",\n    \"4xl\": \"3.6rem\",\n    \"5xl\": \"4rem\",\n    \"6xl\": \"4.2rem\",\n    \"7xl\": \"4.8rem\"\n  },\n  breakpoints\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL3N0eWxlcy90aGVtZS50cz85NGNlIl0sIm5hbWVzIjpbImJyZWFrcG9pbnRzIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInRoZW1lIiwiZXh0ZW5kVGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2VjdW5kYXJ5IiwiZ3JheSIsIndoaXRlIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsIm1vbm8iLCJmb250U2l6ZXMiLCJ4cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyx5RUFBaUIsQ0FBQztBQUNwQ0MsSUFBRSxFQUFFLE9BRGdDO0FBRXBDQyxJQUFFLEVBQUUsT0FGZ0M7QUFHcENDLElBQUUsRUFBRSxPQUhnQztBQUlwQ0MsSUFBRSxFQUFFLFFBSmdDO0FBS3BDLFNBQU87QUFMNkIsQ0FBRCxDQUFyQztBQVFBLE1BQU1DLEtBQUssR0FBR0MsNkRBQVcsQ0FBQztBQUN4QkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxTQURIO0FBRU5DLGFBQVMsRUFBRSxTQUZMO0FBSU47QUFDQTtBQUVBQyxRQUFJLEVBQUU7QUFDSixXQUFLO0FBREQsS0FQQTtBQVdOQyxTQUFLLEVBQUU7QUFYRCxHQURnQjtBQWV4QkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxpQ0FERDtBQUVMQyxXQUFPLEVBQUUsc0NBRko7QUFHTEMsUUFBSSxFQUFFO0FBSEQsR0FmaUI7QUFxQnhCQyxXQUFTLEVBQUU7QUFDVEMsTUFBRSxFQUFFLFFBREs7QUFFVGhCLE1BQUUsRUFBRSxRQUZLO0FBR1RDLE1BQUUsRUFBRSxRQUhLO0FBSVRDLE1BQUUsRUFBRSxRQUpLO0FBS1RDLE1BQUUsRUFBRSxNQUxLO0FBTVQsV0FBTyxRQU5FO0FBT1QsV0FBTyxNQVBFO0FBUVQsV0FBTyxRQVJFO0FBU1QsV0FBTyxNQVRFO0FBVVQsV0FBTyxRQVZFO0FBV1QsV0FBTztBQVhFLEdBckJhO0FBbUN4Qkw7QUFuQ3dCLENBQUQsQ0FBekI7QUFzQ0EsK0RBQWVNLEtBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQnJlYWtwb2ludHMgfSBmcm9tIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiO1xuXG5jb25zdCBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKHtcbiAgc206IFwiNTgwcHhcIixcbiAgbWQ6IFwiNzcwcHhcIixcbiAgbGc6IFwiOTYwcHhcIixcbiAgeGw6IFwiMTIwMHB4XCIsXG4gIFwiMnhsXCI6IFwiMTUzNnB4XCIsXG59KTtcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbG9yczoge1xuICAgIHByaW1hcnk6IFwiI2IyODkzN1wiLFxuICAgIHNlY3VuZGFyeTogXCIjZmZkMTAwXCIsXG5cbiAgICAvLyBwcmltYXJ5OiBcIiNmZmQxMDBcIixcbiAgICAvLyBzZWN1bmRhcnk6IFwiI0ZGQzgwNFwiLFxuXG4gICAgZ3JheToge1xuICAgICAgODAwOiBcIiMwRTBEMTBcIixcbiAgICB9LFxuXG4gICAgd2hpdGU6IFwiI2ZhZmFmYVwiLFxuICB9LFxuXG4gIGZvbnRzOiB7XG4gICAgYm9keTogXCJRdWlja3NhbmQsc3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsXG4gICAgaGVhZGluZzogXCJRdWlja3NhbmQsIHN5c3RlbS11aSwgR2VvcmdpYSwgc2VyaWZcIixcbiAgICBtb25vOiBcIk1lbmxvLCBtb25vc3BhY2VcIixcbiAgfSxcblxuICBmb250U2l6ZXM6IHtcbiAgICB4czogXCIxLjJyZW1cIixcbiAgICBzbTogXCIxLjRyZW1cIixcbiAgICBtZDogXCIxLjZyZW1cIixcbiAgICBsZzogXCIxLjhyZW1cIixcbiAgICB4bDogXCIycmVtXCIsXG4gICAgXCIyeGxcIjogXCIyLjRyZW1cIixcbiAgICBcIjN4bFwiOiBcIjNyZW1cIixcbiAgICBcIjR4bFwiOiBcIjMuNnJlbVwiLFxuICAgIFwiNXhsXCI6IFwiNHJlbVwiLFxuICAgIFwiNnhsXCI6IFwiNC4ycmVtXCIsXG4gICAgXCI3eGxcIjogXCI0LjhyZW1cIixcbiAgfSxcblxuICBicmVha3BvaW50cyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

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