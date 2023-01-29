"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boxes",{

/***/ "./pages/boxes.js":
/*!************************!*\
  !*** ./pages/boxes.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoxesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"../../node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Box */ \"./components/Box.js\");\n/* harmony import */ var _components_Plane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Plane */ \"./components/Plane.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"../../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BoxesPage() {\n    _s();\n    const boxes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>new Array(5).fill().map((_, index)=>{\n            // every index of the array is now an object with the boxes key and original positoin\n            return {\n                key: index,\n                position: [\n                    0,\n                    0,\n                    0\n                ]\n            };\n        }), []);\n    //let xPos = 2.5; \n    for(let i = 0; i < boxes.length; i++){\n        //console.log(boxes[i].position);\n        boxes[i].position[1] = 5 * i + 2.5;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Click on a floor for details\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        children: \"Back to Inputs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.Canvas, {\n                camera: {\n                    position: [\n                        10,\n                        7.5,\n                        35\n                    ]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                        intensity: 2\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                        position: [\n                            40,\n                            40,\n                            40\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                        fallback: null,\n                        children: formSubmitted && boxes.map((props)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                ...props,\n                                key: props.key,\n                                __source: {\n                                    fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }))\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Plane__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        position: [\n                            0,\n                            0,\n                            0\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.OrbitControls, {}, void 0, false, {\n                        fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jonathanlor/Desktop/code/tamuhack23/workspace-app/pages/boxes.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BoxesPage, \"B2aQ6cpA/sMBJTX67MshorIF8M4=\");\n_c = BoxesPage;\nvar _c;\n$RefreshReg$(_c, \"BoxesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib3hlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNtQjtBQUNiO0FBQ2Q7QUFDSTtBQUNYO0FBRWIsU0FBU1MsWUFBWTs7SUFFbEMsTUFBTUMsUUFBUVIsOENBQU9BLENBQUMsSUFBTSxJQUFJUyxNQUFNLEdBQUdDLElBQUksR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLFFBQVU7WUFDNUQscUZBQXFGO1lBQ3JGLE9BQU87Z0JBQ0xDLEtBQUtEO2dCQUNMRSxVQUFVO29CQUFDO29CQUFHO29CQUFHO2lCQUFFO1lBQ3JCO1FBQ0YsSUFDRixFQUFFO0lBRUosa0JBQWtCO0lBQ2xCLElBQUksSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixNQUFNUyxNQUFNLEVBQUVELElBQUs7UUFDcEMsaUNBQWlDO1FBQ2pDUixLQUFLLENBQUNRLEVBQUUsQ0FBQ0QsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJQyxJQUFJO0lBQ2pDO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDRTs7a0NBRUQsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNiLGtEQUFJQTt3QkFBQ2MsTUFBSztrQ0FBSTs7Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDdEIsc0RBQU1BO2dCQUFDdUIsUUFBUTtvQkFBRU4sVUFBVTt3QkFBQzt3QkFBSTt3QkFBSztxQkFBRztnQkFBQzs7a0NBQ3hDLDhEQUFDTzt3QkFBYUMsV0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ0M7d0JBQVdULFVBQVU7NEJBQUM7NEJBQUk7NEJBQUk7eUJBQUc7Ozs7OztrQ0FXbEMsOERBQUNoQiwyQ0FBUUE7d0JBQUMwQixVQUFVLElBQUk7a0NBQ3ZCQyxpQkFBaUJsQixNQUFNRyxHQUFHLENBQUMsQ0FBQ2dCLHNCQUMzQixxREFBQ3ZCLHVEQUFHQTtnQ0FBRSxHQUFHdUIsS0FBSztnQ0FBRWIsS0FBS2EsTUFBTWIsR0FBRzs7Ozs7Ozs7Ozs7OztrQ0FJaEMsOERBQUNULHlEQUFLQTt3QkFBQ1UsVUFBVTs0QkFBQzs0QkFBRzs0QkFBRzt5QkFBRTs7Ozs7O2tDQUMxQiw4REFBQ1osNERBQWFBOzs7Ozs7Ozs7Ozs7O0FBSXRCLENBQUM7R0FoRHVCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ib3hlcy5qcz9mYWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhcyB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcbmltcG9ydCB7IFN1c3BlbnNlLCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknXG5pbXBvcnQgQm94IGZyb20gJy4uL2NvbXBvbmVudHMvQm94J1xuaW1wb3J0IFBsYW5lIGZyb20gJy4uL2NvbXBvbmVudHMvUGxhbmUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJveGVzUGFnZSgpIHtcblxuICBjb25zdCBib3hlcyA9IHVzZU1lbW8oKCkgPT4gbmV3IEFycmF5KDUpLmZpbGwoKS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGV2ZXJ5IGluZGV4IG9mIHRoZSBhcnJheSBpcyBub3cgYW4gb2JqZWN0IHdpdGggdGhlIGJveGVzIGtleSBhbmQgb3JpZ2luYWwgcG9zaXRvaW5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIHBvc2l0aW9uOiBbMCwgMCwgMF1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgW11cbiAgKVxuICAvL2xldCB4UG9zID0gMi41OyBcbiAgZm9yKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9jb25zb2xlLmxvZyhib3hlc1tpXS5wb3NpdGlvbik7XG4gICAgYm94ZXNbaV0ucG9zaXRpb25bMV0gPSA1ICogaSArIDIuNTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG5cbiAgICAgIDxoMT5DbGljayBvbiBhIGZsb29yIGZvciBkZXRhaWxzPC9oMT5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nPkJhY2sgdG8gSW5wdXRzPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q2FudmFzIGNhbWVyYT17eyBwb3NpdGlvbjogWzEwLCA3LjUsIDM1XSB9fT5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezJ9IC8+XG4gICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXtbNDAsIDQwLCA0MF19IC8+XG4gICAgICAgIHsvKiA8Qm94IHBvc2l0aW9uPXtbMCwgMi41LCAwXX0gLz5cbiAgICAgICAgPEJveCBwb3NpdGlvbj17WzAsIDcuNSwgMF19IC8+XG4gICAgICAgIDxCb3ggcG9zaXRpb249e1swLCAxMi41LCAwXX0gLz4gKi99XG5cbiAgICAgICAgey8qIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBwYXNzIHVzZXIgaW5wdXQgYXMgYSBwcm9wIGludG8gYSBjb21wb25lbnQgdGhhdCBjYW4gZ2VuZXJhdGUgYXJyYXkgb2YgcG9zaXRpb24gYW5kIGtleSB2YWx1ZXNcbiAgICAgICAgaSBhbSBmYWlybHkgY2VydGFpbiB0aGF0IHRoZSBtdWx0aSByZW5kZXJpbmcgbXVzdCBiZSBkb25lIGluIHRoZSBtYWluIGJveGVzcGFnZSBmdW5jdGlvblxuICAgICAgICBib3hlc3BhZ2UgaXMgdGhlIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgd2UgbmVlZCB0byBoYXZlIGFuIGlucHV0IGJveCB0aGF0IHRha2VzIG51bWJlciBvZiBmbG9vcnMgKGZpcnN0IG9mIHZlcnkgbWFueSBwYXJhbWV0ZXJzKVxuICAgICAgICBhZnRlciB0aGF0LCB0aGUgaW5wdXQgY2FuIGJlIGZlZCBkICovfVxuXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgIHtmb3JtU3VibWl0dGVkICYmIGJveGVzLm1hcCgocHJvcHMpID0+IChcbiAgICAgICAgICA8Qm94IHsuLi5wcm9wc30ga2V5PXtwcm9wcy5rZXl9IC8+XG4gICAgICAgICkpfVxuICAgICAgICA8L1N1c3BlbnNlPlxuXG4gICAgICAgIDxQbGFuZSBwb3NpdGlvbj17WzAsIDAsIDBdfSAvPlxuICAgICAgICA8T3JiaXRDb250cm9scyAvPlxuICAgICAgPC9DYW52YXM+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJTdXNwZW5zZSIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9yYml0Q29udHJvbHMiLCJCb3giLCJQbGFuZSIsIkxpbmsiLCJCb3hlc1BhZ2UiLCJib3hlcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpbmRleCIsImtleSIsInBvc2l0aW9uIiwiaSIsImxlbmd0aCIsImRpdiIsImgxIiwiaHJlZiIsImNhbWVyYSIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsInBvaW50TGlnaHQiLCJmYWxsYmFjayIsImZvcm1TdWJtaXR0ZWQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/boxes.js\n"));

/***/ })

});