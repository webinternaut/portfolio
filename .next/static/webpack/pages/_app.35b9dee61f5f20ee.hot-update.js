"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ThemeChanger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ThemeChanger */ \"./components/ThemeChanger.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Paul Eschli Design & Innovation Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Paul Eschli Design & Innovation Portfolio\",\n                        content: \"Paul Eschli Design & Innovation Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"w-full bg-black-500 border-b-2 border-black:500 mb-15\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between py-3 md:py-20 md:block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-4xl font-bold font-sans hover:text-black text-gray-500 dark:text-white hover:animate-pulse\",\n                                            children: \"Paul Eschli\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"md:hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border\",\n                                            onClick: ()=>setNavbar(!navbar),\n                                            children: navbar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                className: \"w-6 h-6 text-white\",\n                                                viewBox: \"0 0 20 20\",\n                                                fill: \"currentColor\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    fillRule: \"evenodd\",\n                                                    d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                                    clipRule: \"evenodd\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 21\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                className: \"w-6 h-6 text-black dark:text-white\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 24 24\",\n                                                stroke: \"currentColor\",\n                                                strokeWidth: 2,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    d: \"M4 6h16M4 12h16M4 18h16\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 \".concat(navbar ? \"block\" : \"hidden\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"md:flex md:space-x-6 md:space-y-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-500 dark:text-white text-l font-semibold \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/\",\n                                                passHref: true,\n                                                legacyBehavior: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: router.pathname == \"/\" ? \"active\" : \"\",\n                                                    children: \"Projects\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-500 dark:text-white text-l font-semibold\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/about\",\n                                                passHref: true,\n                                                legacyBehavior: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: router.pathname == \"/about\" ? \"active\" : \"\",\n                                                    children: \"About\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-500 dark:text-white text-l font-semibold\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/resume\",\n                                                passHref: true,\n                                                legacyBehavior: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: router.pathname == \"/resume\" ? \"active\" : \"\",\n                                                    children: \"Resume\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-500 dark:text-white text-l font-semibold\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/contact\",\n                                                passHref: true,\n                                                legacyBehavior: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: router.pathname == \"/contact\" ? \"active\" : \"\",\n                                                    children: \"Contact\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ThemeChanger__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/paul/projects/portfolio/components/Header.tsx\",\n        lineNumber: 16,\n        columnNumber: 1\n    }, undefined);\n};\n_s(Header, \"+KUSZFurRXv0TnKPqvzzpOazaTg=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQVU3QjtHQTdHTUM7O1FBQ3dCTixpREFBUUE7UUFDckJHLGtEQUFTQTs7O0tBRnBCRztBQStHTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcyc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vdG9nZ2xlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgVGhlbWVDaGFuZ2VyIGZyb20gJy4uL2NvbXBvbmVudHMvVGhlbWVDaGFuZ2VyJztcblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG48ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgXG4gICAgICAgIDx0aXRsZT5QYXVsIEVzY2hsaSBEZXNpZ24gJiBJbm5vdmF0aW9uIFBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIlBhdWwgRXNjaGxpIERlc2lnbiAmIElubm92YXRpb24gUG9ydGZvbGlvXCJcbiAgICAgICAgICBjb250ZW50PVwiUGF1bCBFc2NobGkgRGVzaWduICYgSW5ub3ZhdGlvbiBQb3J0Zm9saW9cIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay01MDAgYm9yZGVyLWItMiBib3JkZXItYmxhY2s6NTAwIG1iLTE1XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktYmV0d2VlbiBweC00IG14LWF1dG8gbGc6bWF4LXctN3hsIG1kOml0ZW1zLWNlbnRlciBtZDpmbGV4IFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMyBtZDpweS0yMCBtZDpibG9ja1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIGZvbnQtc2FucyBob3Zlcjp0ZXh0LWJsYWNrIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOmFuaW1hdGUtcHVsc2VcIj5QYXVsIEVzY2hsaTwvaDI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1ncmF5LTcwMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS00MDAgZm9jdXM6Ym9yZGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhcighbmF2YmFyKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bmF2YmFyID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEganVzdGlmeS1zZWxmLWNlbnRlciBwYi0zIG10LTggbWQ6YmxvY2sgbWQ6cGItMCBtZDptdC0wICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2YmFyID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1kOmZsZXggbWQ6c3BhY2UteC02IG1kOnNwYWNlLXktMFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtd2hpdGUgdGV4dC1sIGZvbnQtc2VtaWJvbGQgXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC13aGl0ZSB0ZXh0LWwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2Fib3V0XCIgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgZGFyazp0ZXh0LXdoaXRlIHRleHQtbCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL3Jlc3VtZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtd2hpdGUgdGV4dC1sIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09IFwiL2NvbnRhY3RcIiA/IFwiYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8VGhlbWVDaGFuZ2VyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwibmFtZXMiOlsiTGluayIsInVzZVRoZW1lIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWQiLCJUaGVtZUNoYW5nZXIiLCJIZWFkZXIiLCJ0aGVtZSIsInNldFRoZW1lIiwicm91dGVyIiwibmF2YmFyIiwic2V0TmF2YmFyIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm5hdiIsImNsYXNzTmFtZSIsImEiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJ1bCIsImxpIiwicGFzc0hyZWYiLCJsZWdhY3lCZWhhdmlvciIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});