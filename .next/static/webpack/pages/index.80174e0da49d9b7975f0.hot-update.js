/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/animation.ts":
/*!*********************************!*\
  !*** ./src/styles/animation.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationMotion\": function() { return /* binding */ animationMotion; },\n/* harmony export */   \"itenXL\": function() { return /* binding */ itenXL; },\n/* harmony export */   \"itenXR\": function() { return /* binding */ itenXR; },\n/* harmony export */   \"FlexMotion\": function() { return /* binding */ FlexMotion; },\n/* harmony export */   \"BoxMotion\": function() { return /* binding */ BoxMotion; },\n/* harmony export */   \"VStackMotion\": function() { return /* binding */ VStackMotion; },\n/* harmony export */   \"HeadingMotion\": function() { return /* binding */ HeadingMotion; },\n/* harmony export */   \"TextMotion\": function() { return /* binding */ TextMotion; }\n/* harmony export */ });\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar animationMotion = {\n  hidden: {\n    opacity: 0\n  },\n  visible: {\n    opacity: 1,\n    transition: {\n      delayChildren: 0.4,\n      staggerChildren: 0.2\n    }\n  }\n};\nvar itenXL = {\n  hidden: {\n    x: -300,\n    opcity: 0\n  },\n  visible: {\n    x: 0,\n    opacity: 1\n  }\n};\nvar itenXR = {\n  hidden: {\n    opcity: 0,\n    x: 300\n  },\n  visible: {\n    x: 0,\n    opacity: 1\n  }\n};\nvar FlexMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex);\n_c = FlexMotion;\nvar BoxMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box);\n_c2 = BoxMotion;\nvar VStackMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack);\n_c3 = VStackMotion;\nvar HeadingMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading);\n_c4 = HeadingMotion;\nvar TextMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text);\n_c5 = TextMotion;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"FlexMotion\");\n$RefreshReg$(_c2, \"BoxMotion\");\n$RefreshReg$(_c3, \"VStackMotion\");\n$RefreshReg$(_c4, \"HeadingMotion\");\n$RefreshReg$(_c5, \"TextMotion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9hbmltYXRpb24udHM/YjMyYyJdLCJuYW1lcyI6WyJhbmltYXRpb25Nb3Rpb24iLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwiaXRlblhMIiwieCIsIm9wY2l0eSIsIml0ZW5YUiIsIkZsZXhNb3Rpb24iLCJtb3Rpb24iLCJGbGV4IiwiQm94TW90aW9uIiwiQm94IiwiVlN0YWNrTW90aW9uIiwiVlN0YWNrIiwiSGVhZGluZ01vdGlvbiIsIkhlYWRpbmciLCJUZXh0TW90aW9uIiwiVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYU8sSUFBTUEsZUFBZSxHQUFHO0FBQzdCQyxRQUFNLEVBQUU7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FEcUI7QUFFN0JDLFNBQU8sRUFBRTtBQUNQRCxXQUFPLEVBQUUsQ0FERjtBQUdQRSxjQUFVLEVBQUU7QUFDVkMsbUJBQWEsRUFBRSxHQURMO0FBRVZDLHFCQUFlLEVBQUU7QUFGUDtBQUhMO0FBRm9CLENBQXhCO0FBWUEsSUFBTUMsTUFBTSxHQUFHO0FBQ3BCTixRQUFNLEVBQUU7QUFBRU8sS0FBQyxFQUFFLENBQUMsR0FBTjtBQUFXQyxVQUFNLEVBQUU7QUFBbkIsR0FEWTtBQUVwQk4sU0FBTyxFQUFFO0FBQ1BLLEtBQUMsRUFBRSxDQURJO0FBRVBOLFdBQU8sRUFBRTtBQUZGO0FBRlcsQ0FBZjtBQVFBLElBQU1RLE1BQU0sR0FBRztBQUNwQlQsUUFBTSxFQUFFO0FBQUVRLFVBQU0sRUFBRSxDQUFWO0FBQWFELEtBQUMsRUFBRTtBQUFoQixHQURZO0FBRXBCTCxTQUFPLEVBQUU7QUFDUEssS0FBQyxFQUFFLENBREk7QUFFUE4sV0FBTyxFQUFFO0FBRkY7QUFGVyxDQUFmO0FBUUEsSUFBTVMsVUFBVSxHQUFHQyxxREFBTSxDQUFZQyxrREFBWixDQUF6QjtLQUFNRixVO0FBQ04sSUFBTUcsU0FBUyxHQUFHRixxREFBTSxDQUFXRyxpREFBWCxDQUF4QjtNQUFNRCxTO0FBQ04sSUFBTUUsWUFBWSxHQUFHSixxREFBTSxDQUFhSyxvREFBYixDQUEzQjtNQUFNRCxZO0FBQ04sSUFBTUUsYUFBYSxHQUFHTixxREFBTSxDQUFlTyxxREFBZixDQUE1QjtNQUFNRCxhO0FBQ04sSUFBTUUsVUFBVSxHQUFHUixxREFBTSxDQUFZUyxrREFBWixDQUF6QjtNQUFNRCxVIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9hbmltYXRpb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHtcbiAgRmxleCxcbiAgQm94LFxuICBGbGV4UHJvcHMsXG4gIEJveFByb3BzLFxuICBWU3RhY2ssXG4gIFN0YWNrUHJvcHMsXG4gIEhlYWRpbmcsXG4gIEhlYWRpbmdQcm9wcyxcbiAgVGV4dCxcbiAgVGV4dFByb3BzLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uTW90aW9uID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICB2aXNpYmxlOiB7XG4gICAgb3BhY2l0eTogMSxcblxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5Q2hpbGRyZW46IDAuNCxcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4yLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgaXRlblhMID0ge1xuICBoaWRkZW46IHsgeDogLTMwMCwgb3BjaXR5OiAwIH0sXG4gIHZpc2libGU6IHtcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgaXRlblhSID0ge1xuICBoaWRkZW46IHsgb3BjaXR5OiAwLCB4OiAzMDAgfSxcbiAgdmlzaWJsZToge1xuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBGbGV4TW90aW9uID0gbW90aW9uPEZsZXhQcm9wcz4oRmxleCk7XG5leHBvcnQgY29uc3QgQm94TW90aW9uID0gbW90aW9uPEJveFByb3BzPihCb3gpO1xuZXhwb3J0IGNvbnN0IFZTdGFja01vdGlvbiA9IG1vdGlvbjxTdGFja1Byb3BzPihWU3RhY2spO1xuZXhwb3J0IGNvbnN0IEhlYWRpbmdNb3Rpb24gPSBtb3Rpb248SGVhZGluZ1Byb3BzPihIZWFkaW5nKTtcbmV4cG9ydCBjb25zdCBUZXh0TW90aW9uID0gbW90aW9uPFRleHRQcm9wcz4oVGV4dCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/animation.ts\n");

/***/ })

});