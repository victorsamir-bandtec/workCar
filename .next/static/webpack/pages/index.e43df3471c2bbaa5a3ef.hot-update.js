/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Languages/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Languages/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var translate_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! translate/i18n */ \"./src/translate/i18n.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_brasil_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/brasil.png */ \"./src/assets/brasil.png\");\n/* harmony import */ var assets_franca_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/franca.png */ \"./src/assets/franca.png\");\n/* harmony import */ var assets_ingles_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/ingles.png */ \"./src/assets/ingles.png\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/samir/Documentos/git/workCar/src/components/Languages/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\nvar Languages = function Languages(_ref) {\n  var colorBg = _ref.colorBg,\n      _ref$fw = _ref.fw,\n      fw = _ref$fw === void 0 ? \"semibold\" : _ref$fw;\n\n  var handleLanguage = function handleLanguage(language) {\n    var local = localStorage.getItem(\"i18nextLng\");\n\n    if (local === language) {\n      return;\n    }\n\n    localStorage.setItem(\"i18nextLng\", language);\n    location.reload();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Menu, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.MenuButton, {\n      _hover: {\n        color: \"secundary\"\n      },\n      fontWeight: fw,\n      fontSize: \"xl\",\n      children: translate_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.t(\"menu.languages\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.MenuList, {\n      bg: colorBg,\n      fontSize: \"md\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {\n        onClick: function onClick() {\n          return handleLanguage(\"pt-BR\");\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          width: \"20px\",\n          height: \"20px\",\n          src: assets_brasil_png__WEBPACK_IMPORTED_MODULE_4__.default,\n          alt: \"brazil\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n          as: \"span\",\n          ml: \"2rem\",\n          children: \"Portugues\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {\n        my: \"1rem\",\n        onClick: function onClick() {\n          return handleLanguage(\"en-US\");\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          width: \"20px\",\n          height: \"20px\",\n          src: assets_ingles_png__WEBPACK_IMPORTED_MODULE_6__.default,\n          alt: \"english\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n          as: \"span\",\n          ml: \"2rem\",\n          children: \"Ingles\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {\n        onClick: function onClick() {\n          return handleLanguage(\"fr-\");\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          width: \"20px\",\n          height: \"20px\",\n          src: assets_franca_png__WEBPACK_IMPORTED_MODULE_5__.default,\n          alt: \"frace\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n          as: \"span\",\n          ml: \"2rem\",\n          children: \"Frances\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Languages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Languages);\n\nvar _c;\n\n$RefreshReg$(_c, \"Languages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VzL2luZGV4LnRzeD9jODU5Il0sIm5hbWVzIjpbIkxhbmd1YWdlcyIsImNvbG9yQmciLCJmdyIsImhhbmRsZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJsb2NhbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb2xvciIsImkxOG4iLCJpbWdCcmF6aWwiLCJpbWdFbmdsaXNoIiwiaW1nRnJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFPQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QztBQUFBLE1BQXRDQyxPQUFzQyxRQUF0Q0EsT0FBc0M7QUFBQSxxQkFBN0JDLEVBQTZCO0FBQUEsTUFBN0JBLEVBQTZCLHdCQUF4QixVQUF3Qjs7QUFDekQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQXNCO0FBQzNDLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLENBQWQ7O0FBRUEsUUFBSUYsS0FBSyxLQUFLRCxRQUFkLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBRURFLGdCQUFZLENBQUNFLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNKLFFBQW5DO0FBQ0FLLFlBQVEsQ0FBQ0MsTUFBVDtBQUNELEdBVEQ7O0FBV0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDRSw4REFBQyx3REFBRDtBQUFZLFlBQU0sRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFwQjtBQUE0QyxnQkFBVSxFQUFFVCxFQUF4RDtBQUE0RCxjQUFRLEVBQUMsSUFBckU7QUFBQSxnQkFDR1Usa0RBQUEsQ0FBTyxnQkFBUDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLDhEQUFDLHNEQUFEO0FBQVUsUUFBRSxFQUFFWCxPQUFkO0FBQXVCLGNBQVEsRUFBQyxJQUFoQztBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQVUsZUFBTyxFQUFFO0FBQUEsaUJBQU1FLGNBQWMsQ0FBQyxPQUFELENBQXBCO0FBQUEsU0FBbkI7QUFBQSxnQ0FDRSw4REFBQyxtREFBRDtBQUFPLGVBQUssRUFBQyxNQUFiO0FBQW9CLGdCQUFNLEVBQUMsTUFBM0I7QUFBa0MsYUFBRyxFQUFFVSxzREFBdkM7QUFBa0QsYUFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRSw4REFBQyxrREFBRDtBQUFNLFlBQUUsRUFBQyxNQUFUO0FBQWdCLFlBQUUsRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFLDhEQUFDLHNEQUFEO0FBQVUsVUFBRSxFQUFDLE1BQWI7QUFBb0IsZUFBTyxFQUFFO0FBQUEsaUJBQU1WLGNBQWMsQ0FBQyxPQUFELENBQXBCO0FBQUEsU0FBN0I7QUFBQSxnQ0FDRSw4REFBQyxtREFBRDtBQUFPLGVBQUssRUFBQyxNQUFiO0FBQW9CLGdCQUFNLEVBQUMsTUFBM0I7QUFBa0MsYUFBRyxFQUFFVyxzREFBdkM7QUFBbUQsYUFBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRSw4REFBQyxrREFBRDtBQUFNLFlBQUUsRUFBQyxNQUFUO0FBQWdCLFlBQUUsRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQWlCRSw4REFBQyxzREFBRDtBQUFVLGVBQU8sRUFBRTtBQUFBLGlCQUFNWCxjQUFjLENBQUMsS0FBRCxDQUFwQjtBQUFBLFNBQW5CO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFBTyxlQUFLLEVBQUMsTUFBYjtBQUFvQixnQkFBTSxFQUFDLE1BQTNCO0FBQWtDLGFBQUcsRUFBRVksc0RBQXZDO0FBQWtELGFBQUcsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFFLEVBQUMsTUFBVDtBQUFnQixZQUFFLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBN0NEOztLQUFNZixTO0FBK0NOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGkxOG4gfSBmcm9tIFwidHJhbnNsYXRlL2kxOG5cIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBpbWdCcmF6aWwgZnJvbSBcImFzc2V0cy9icmFzaWwucG5nXCI7XG5pbXBvcnQgaW1nRnJhbmNlIGZyb20gXCJhc3NldHMvZnJhbmNhLnBuZ1wiO1xuaW1wb3J0IGltZ0VuZ2xpc2ggZnJvbSBcImFzc2V0cy9pbmdsZXMucG5nXCI7XG5cbmltcG9ydCB7IE1lbnUsIE1lbnVCdXR0b24sIE1lbnVMaXN0LCBNZW51SXRlbSwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbG9yQmc/OiBzdHJpbmc7XG4gIGZ3Pzogc3RyaW5nO1xufVxuXG5jb25zdCBMYW5ndWFnZXMgPSAoeyBjb2xvckJnLCBmdyA9IFwic2VtaWJvbGRcIiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVMYW5ndWFnZSA9IChsYW5ndWFnZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImkxOG5leHRMbmdcIik7XG5cbiAgICBpZiAobG9jYWwgPT09IGxhbmd1YWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpMThuZXh0TG5nXCIsIGxhbmd1YWdlKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNZW51PlxuICAgICAgPE1lbnVCdXR0b24gX2hvdmVyPXt7IGNvbG9yOiBcInNlY3VuZGFyeVwiIH19IGZvbnRXZWlnaHQ9e2Z3fSBmb250U2l6ZT1cInhsXCI+XG4gICAgICAgIHtpMThuLnQoXCJtZW51Lmxhbmd1YWdlc1wiKX1cbiAgICAgIDwvTWVudUJ1dHRvbj5cblxuICAgICAgPE1lbnVMaXN0IGJnPXtjb2xvckJnfSBmb250U2l6ZT1cIm1kXCI+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYW5ndWFnZShcInB0LUJSXCIpfT5cbiAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiIHNyYz17aW1nQnJhemlsfSBhbHQ9XCJicmF6aWxcIiAvPlxuXG4gICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgbWw9XCIycmVtXCI+XG4gICAgICAgICAgICBQb3J0dWd1ZXNcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgPE1lbnVJdGVtIG15PVwiMXJlbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxhbmd1YWdlKFwiZW4tVVNcIil9PlxuICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgc3JjPXtpbWdFbmdsaXNofSBhbHQ9XCJlbmdsaXNoXCIgLz5cblxuICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiIG1sPVwiMnJlbVwiPlxuICAgICAgICAgICAgSW5nbGVzXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMYW5ndWFnZShcImZyLVwiKX0+XG4gICAgICAgICAgPEltYWdlIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiBzcmM9e2ltZ0ZyYW5jZX0gYWx0PVwiZnJhY2VcIiAvPlxuXG4gICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgbWw9XCIycmVtXCI+XG4gICAgICAgICAgICBGcmFuY2VzXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgPC9NZW51TGlzdD5cbiAgICA8L01lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Languages/index.tsx\n");

/***/ })

});