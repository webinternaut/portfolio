"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./components/ContactForm.tsx":
/*!************************************!*\
  !*** ./components/ContactForm.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-tailwind/react */ \"@material-tailwind/react\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ContactForm = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        try {\n            // Send the form data to the server-side route\n            const response = await fetch(\"/api/sendEmail\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name,\n                    email,\n                    message\n                })\n            });\n            if (response.ok) {\n                setIsSent(true);\n            } else {\n                console.error(response.statusText);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center \",\n        children: isSent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Thank you for your message!\"\n        }, void 0, false, {\n            fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-lg gap-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full px-3 mb-6 md:mb-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2\",\n                                for: \"grid-first-name\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white\",\n                                type: \"text\",\n                                id: \"name\",\n                                placeholder: \"Jane\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full  px-3 mb-6 md:mb-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2\",\n                                for: \"grid-first-name\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white\",\n                                type: \"text\",\n                                id: \"name\",\n                                placeholder: \"myemail@domain.com\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full  px-3 mb-6 md:mb-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2\",\n                                for: \"grid-first-name\",\n                                children: \"Message\"\n                            }, void 0, false, {\n                                fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                                className: \"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white\",\n                                id: \"name\",\n                                placeholder: \"Message\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800\",\n                        disabled: isLoading,\n                        children: isLoading ? \"Sending...\" : \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/paul/projects/portfolio/components/ContactForm.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNRO0FBRTNELE1BQU1HLGNBQWMsSUFBTTtJQUN4QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUUxQyxNQUFNYSxlQUFlLE9BQU9DLElBQXdDO1FBQ2xFQSxFQUFFQyxjQUFjO1FBRWhCTCxhQUFhLElBQUk7UUFFakIsSUFBSTtZQUNGLDhDQUE4QztZQUM5QyxNQUFNTSxXQUFXLE1BQU1DLE1BQU0sa0JBQWtCO2dCQUM3Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVuQjtvQkFBTUU7b0JBQU9FO2dCQUFRO1lBQzlDO1lBRUEsSUFBSVMsU0FBU08sRUFBRSxFQUFFO2dCQUNmWCxVQUFVLElBQUk7WUFDaEIsT0FBTztnQkFDTFksUUFBUUMsS0FBSyxDQUFDVCxTQUFTVSxVQUFVO1lBQ25DLENBQUM7UUFDSCxFQUFFLE9BQU9ELE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDQTtRQUNoQjtRQUVBZixhQUFhLEtBQUs7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7a0JBQ1pqQix1QkFDQyw4REFBQ2tCO3NCQUFFOzs7OztzQ0FFSCw4REFBQ0M7WUFBS0MsVUFBVWxCO3NCQUNkLDRFQUFDYztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQU1KLFdBQVU7Z0NBQXFFSyxLQUFJOzBDQUFrQjs7Ozs7OzBDQUc1Ryw4REFBQ0M7Z0NBQU1OLFdBQVU7Z0NBQXVJTyxNQUFLO2dDQUFPQyxJQUFHO2dDQUFPQyxhQUFZO2dDQUFPQyxPQUFPbkM7Z0NBQU1vQyxVQUFVLENBQUN6QixJQUFNVixRQUFRVSxFQUFFMEIsTUFBTSxDQUFDRixLQUFLO2dDQUFHRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBRWxRLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNSixXQUFVO2dDQUFxRUssS0FBSTswQ0FBa0I7Ozs7OzswQ0FHNUcsOERBQUNDO2dDQUFNTixXQUFVO2dDQUF1SU8sTUFBSztnQ0FBT0MsSUFBRztnQ0FBT0MsYUFBWTtnQ0FBcUJDLE9BQU9qQztnQ0FBT2tDLFVBQVUsQ0FBQ3pCLElBQU1SLFNBQVNRLEVBQUUwQixNQUFNLENBQUNGLEtBQUs7Z0NBQUdHLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFbFIsOERBQUNkO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQU1KLFdBQVU7Z0NBQXFFSyxLQUFJOzBDQUFrQjs7Ozs7OzBDQUc1Ryw4REFBQ2hDLDhEQUFRQTtnQ0FBQzJCLFdBQVU7Z0NBQXVJUSxJQUFHO2dDQUFPQyxhQUFZO2dDQUFVQyxPQUFPL0I7Z0NBQVNnQyxVQUFVLENBQUN6QixJQUFNTixXQUFXTSxFQUFFMEIsTUFBTSxDQUFDRixLQUFLO2dDQUFHRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBRWxRLDhEQUFDQzt3QkFBT1AsTUFBSzt3QkFBU1AsV0FBVTt3QkFBcUxlLFVBQVVsQztrQ0FDOU5BLFlBQVksZUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUl6Qzs7Ozs7O0FBR1A7QUFFQSxpRUFBZVAsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0udHN4P2Q1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0LCBUZXh0YXJlYSB9IGZyb20gXCJAbWF0ZXJpYWwtdGFpbHdpbmQvcmVhY3RcIjtcblxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU2VudCwgc2V0SXNTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIFNlbmQgdGhlIGZvcm0gZGF0YSB0byB0aGUgc2VydmVyLXNpZGUgcm91dGVcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZEVtYWlsJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSksXG4gICAgICB9KTtcbiAgXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgc2V0SXNTZW50KHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICBcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAge2lzU2VudCA/IChcbiAgICAgICAgPHA+VGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UhPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBnYXAtNCBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBtYi02IG1kOm1iLTBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCIgZm9yPVwiZ3JpZC1maXJzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkphbmVcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsICBweC0zIG1iLTYgbWQ6bWItMFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJncmlkLWZpcnN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm15ZW1haWxAZG9tYWluLmNvbVwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgcHgtMyBtYi02IG1kOm1iLTBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCIgZm9yPVwiZ3JpZC1maXJzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICBNZXNzYWdlXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8VGV4dGFyZWEgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHktMi41IHB4LTQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0yMDAgZGFyazpmb2N1czpyaW5nLWJsdWUtOTAwIGhvdmVyOmJnLWJsdWUtODAwXCIgZGlzYWJsZWQ9e2lzTG9hZGluZ30+XG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAnU2VuZGluZy4uLicgOiAnU2VuZCd9XG4gICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXh0YXJlYSIsIkNvbnRhY3RGb3JtIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactForm.tsx\n");

/***/ }),

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.tsx\");\n\n\nfunction Contact() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Contact Me\"\n            }, void 0, false, {\n                fileName: \"/home/paul/projects/portfolio/pages/contact.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContactForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/paul/projects/portfolio/pages/contact.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/paul/projects/portfolio/pages/contact.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNvRDtBQUVyQyxTQUFTQyxVQUFVO0lBQ2hDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNILCtEQUFXQTs7Ozs7Ozs7Ozs7QUFHbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby8uL3BhZ2VzL2NvbnRhY3QudHN4PzI0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Db250YWN0IE1lPC9oMT5cbiAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsIkNvbnRhY3QiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.tsx\n");

/***/ }),

/***/ "@material-tailwind/react":
/*!*******************************************!*\
  !*** external "@material-tailwind/react" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-tailwind/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/contact.tsx"));
module.exports = __webpack_exports__;

})();